import React, { useState } from 'react';

function Form() {
	const [name, setName] = useState('');
	const [greeting, setGreeting] = useState(`Hello!`);
	const [chars, setChars] = useState(0);
	const [message, setMessage] = useState('');

	interface InputChangeInterface {
		target: HTMLInputElement;
	}

	const handleChange = (event: InputChangeInterface) => {
		setName(event.target.value);
	};

	const showGreeting = () => {
		setGreeting(`Hello ${name}!`);
		let charCount = countChars(name);
		setChars(charCount)
		setName('');
		let msg = ''
		if (chars % 2 === 0) msg = "Have a great day, ";
		else msg = "Come back soon, ";
		let message = addMessage(msg);
		setMessage(message);
	};

	//added these to show some different return value types
	const countChars = function(name: string): number {
		return name.length;
	}

	const addMessage = function (message: string): string {
		return message + name + '!';
	}

	return (
		<div className="App">
			<input
				type='text'
				placeholder='Enter your name'
				id="name"
				onChange={handleChange}
				value={name}
			/>
			<button className="btn" onClick={showGreeting}>Click Me</button>
			<h5 >{greeting}</h5>
			<div>Number of characters in your name: {chars}</div>
			<h3>{message}</h3>
		</div>
	);
}

export default Form;
