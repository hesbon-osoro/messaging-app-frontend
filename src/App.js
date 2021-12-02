import React, { useEffect, useState } from 'react';
import Pusher from 'pusher-js';
import './App.css';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';
import axios from './components/axios';
import Login from './components/Login';
import { useStateValue } from './components/StateProvider';

function App() {
	const [messages, setMessages] = useState([]);
	const [{ user }, dispatch] = useStateValue();
	// const [user, setUser] = useState(null);

	useEffect(() => {
		axios.get('/messages/sync').then(res => {
			setMessages(res.data);
		});
	}, []);

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
			{!user ? (
				<Login />
			) : (
				<div className="app__body">
					<Sidebar messages={messages} />
					<Chat messages={messages} />
				</div>
			)}
		</div>
	);
}

export default App;
