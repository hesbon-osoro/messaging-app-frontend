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

const Chat = () => {
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
				<p className="chat__message">
					<span className="chat__name">Wazimu</span>
					Hello there, Welcome to my chat app.
					<span className="chat__timestamp">
						{new Date('2021-12-01T08:30:42.989Z').toUTCString()}
					</span>
				</p>
				<p className="chat__message chat__receiver">
					<span className="chat__name">Maleo</span>
					Hello there Wazimu, am glad to use your app!
					<span className="chat__timestamp">
						{new Date('2021-12-01T08:31:05.989Z').toUTCString()}
					</span>
				</p>
				<p className="chat__message">
					<span className="chat__name"></span>Wazimu Thank you for subscribing
					to my App. Share to your friends to support my work.
					<span className="chat__timestamp">
						{new Date('2021-12-01T08:35:50.989Z').toUTCString()}
					</span>
				</p>
				<p className="chat__message chat__receiver">
					<span className="chat__name">Maleo</span>
					Cool! I'll sure do.
					<span className="chat__timestamp">
						{new Date('2021-12-01T08:42:42.989Z').toUTCString()}
					</span>
				</p>
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
