import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './SidebarChat.css';

const SidebarChat = () => {
	const [seed, setSeed] = useState('');
	useEffect(() => {
		setSeed(Math.floor(Math.random() * 5000));
	}, []);
	return (
		<div className="sidebarChat">
			<Avatar src={`https://avatars.dicebear.com/api/human/b${seed}.svg`} />
			<div className="sidebarChat__info">
				<h2>Room name</h2>
				<h2>Last message...</h2>
			</div>
		</div>
	);
};

export default SidebarChat;
