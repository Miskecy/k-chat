import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		-webkit-font-smoothing: antialiased;
	}

	html {
		font-size: 62.5%;
	}

	body {
		background: #1E1E1E;		
	}

	body, input, button {
		font-family: 'Poppins', sans-serif;
		font-size: 1.6rem;
	}

	:root {
		--primary: #E1E1E6;
		--secondary: #1A1924;
		--tertiary: #282843;
		--quaternary: #633BBC;
		--quinary: #07847E;
	}
`;