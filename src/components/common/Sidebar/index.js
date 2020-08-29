import React from 'react'
import { Container, WrapperList } from './style'
import List from './List'
import Menu from './Menu'

const Sidebar = () => {
	return (
		<Container>
			<Menu></Menu>
			<WrapperList>
				<List title="Your library"></List>
				<List title="Playlists"></List>
			</WrapperList>
		</Container>
	)
}

export { Sidebar }
