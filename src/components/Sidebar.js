import React from 'react';
import './Sidebar.css';
import { DonutLarge, MoreVert, Chat, SearchOutlined } from '@material-ui/icons';
import { IconButton, Avatar } from '@material-ui/core';
import SidebarChat from './SidebarChat';

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="sidebar__header">
				<Avatar src="https://i.postimg.cc/SRRNxqs3/michael-dam-m-EZ3-Po-FGs-k-unsplash.jpg" />
				<div className="sidebar__headerRight">
					<IconButton>
						<DonutLarge />
					</IconButton>
					<IconButton>
						<Chat />
					</IconButton>
					<IconButton>
						<MoreVert />
					</IconButton>
				</div>
			</div>
			<div className="sidebar__search">
				<div className="sidebar__searchContainer">
					<SearchOutlined />
					<input placeholder="Search or start new chat" type="text" />
				</div>
			</div>
			<div className="sidebar__chats">
				<SidebarChat />
				<SidebarChat />
				<SidebarChat />
			</div>
		</div>
	);
};

export default Sidebar;
