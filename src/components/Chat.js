import React, { useEffect, useState } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import {
	AttachFile,
	MoreVert,
	SearchOutlined,
	InsertEmoticon,
	Mic,
} from '@material-ui/icons';
import './Chat.css';

const Chat = ({ messages }) => {
	const [seed, setSeed] = useState('');
	useEffect(() => {
		setSeed(Math.floor(Math.random() * 5000));
	}, []);
	return (
		<div className="chat">
			<div className="chat__header">
				<Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
				<div className="chat__headerInfo">
					<h3>Wazimu Dev</h3>
					<p>Last seen at...</p>
				</div>
				<div className="chat__headerRight">
					<IconButton>
						<SearchOutlined />
					</IconButton>
					<IconButton>
						<AttachFile />
					</IconButton>
					<IconButton>
						<MoreVert />
					</IconButton>
				</div>
			</div>
			<div className="chat__body">
				{messages &&
					messages.map(message => (
						<p
							className={`chat__message ${
								message.received && 'chat__receiver'
							}`}
						>
							<span className="chat__name">{message.name}</span>
							{message.message}
							<span className="chat__timestamp">{message.timestamp}</span>
						</p>
					))}
			</div>
			<div className="chat__footer">
				<InsertEmoticon />
				<form>
					<input placeholder="Type a message" type="text" />
					<button type="submit">Send a message</button>
					<Mic />
				</form>
			</div>
		</div>
	);
};

export default Chat;
