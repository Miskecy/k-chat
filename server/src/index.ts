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

socket.on('connection', (socket) => {
	const id = socket.handshake.query.id;

	if (!id) {
		console.log('User not found');
		return;
	}

	socket.join(id);

	console.log(`User ${id} connected!`)

	socket.on('sendMessage', ({ recipients, text }: any) => {
		if (!recipients || !text) {
			console.log('Invalid data');
			return;
		}


		//console.log(`User ${id} sent a message to ${recipients}!`)
		recipients.forEach((recipient: any) => {

			const newRecipients = recipients.filter((r: any) => r !== recipient);

			newRecipients.push(id);

			socket.broadcast.to(recipient).emit('receiveMessage', {
				recipients: newRecipients,
				sender: id,
				text,
			});
		});
	});
});