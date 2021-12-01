import React, { useEffect, useState } from 'react';
import Pusher from 'pusher-js';
import './App.css';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';

function App() {
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		const pusher = new Pusher('2bda85460a9ec3e2b216', {
			cluster: 'mt1',
		});

		const channel = pusher.subscribe('messages');
		channel.bind('inserted', data => {
			setMessages([...messages, data]);
		});
		return () => {
			channel.unbind_all();
			channel.unsubscribe();
		};
	}, [messages]);
	return (
		<div className="app">
			<div className="app__body">
				<Sidebar />
				<Chat />
			</div>
		</div>
	);
}

export default App;
