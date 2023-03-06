import { Account } from '@prisma/client';
import { config } from 'dotenv';
import io from 'socket.io';
import prisma from './services/prisma';

config();

const socket = new io.Server(5000, {
	cors: {
		origin: 'http://localhost:5173',
		methods: ['GET', 'POST', 'PUT', 'DELETE'],
	}
});

socket.on('connection', async (socket) => {
	const id = socket.handshake.query.id;

	if (!id) return;

	// verify if account exists and create if not and join room
	const account = await prisma.account.findFirst({
		where: {
			id: String(id)
		}
	});

	if (!account) {
		await prisma.account.create({
			data: {
				id: String(id)
			}
		});
	}

	socket.join(id);

	// add contact
	socket.on('addContact', async ({ id, name }) => {
		if (!id || !name) {
			console.log('Invalid data');
			return;
		}

		console.log({ id, name })

		const accountExists = await prisma.account.findUnique({
			where: {
				id
			}
		});

		if (!accountExists) {
			console.log('Account does not exists');
			return;
		}

		const contact = await prisma.contact.create({
			data: {
				name,
				ownerId: socket.handshake.query.id as string,
				accountId: id as string
			}
		});

		socket.emit('getContact', { id: contact.accountId, name: contact.name });
	});

	// get user all contacts
	const databaseContacts = await prisma.contact.findMany({
		where: {
			ownerId: id as string
		}
	});

	socket.emit('getContacts', databaseContacts);

	// get all messages amd broadcast to user
	const databaseMessages = {
		messages: [
			...await prisma.message.findMany({
				where: {
					receivers: {
						equals: id as string
					}
				}
			}),
			...await prisma.message.findMany({
				where: {
					sender: id as string
				}
			}
			)
		]
	}

	socket.emit('getMessages', databaseMessages);

	socket.on('sendMessage', async ({ receivers, text, datetime }) => {
		if (!receivers || !text) {
			console.log('Invalid data');
			return;
		}

		// const validRecipients = await prisma.account.findMany({
		// 	where: {
		// 		id: {
		// 			in: recipients.map((r: any) => r.id)
		// 		}
		// 	}
		// });

		// console.log(validRecipients)

		//console.log({ receivers, text, datetime })

		//console.log(`User ${id} sent a message to ${recipients}!`)
		receivers.forEach(async (receiver: any) => {
			const newRecipients = receivers.filter((r: any) => r.id !== receiver.id);
			newRecipients.push(id as string);

			// save message to database
			await prisma.message.create({
				data: {
					sender: id as string,
					receivers,
					text,
					datetime
				}
			});

			socket.broadcast.to(receiver).emit('receiveMessage', {
				sender: id,
				receivers: newRecipients,
				text,
				datetime
			});
		});
	});
});