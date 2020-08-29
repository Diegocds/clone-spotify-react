import React from 'react'
import { MenuList, MenuItem } from './style'
import { Icon } from '../'

const Menu = () => {
	return (
		<MenuList>
			<MenuItem active>
				<Icon name="home"></Icon>
				Home
			</MenuItem>
			<MenuItem>
				<Icon name="browse"></Icon>
				Browse
			</MenuItem>
			<MenuItem>
				<Icon name="radio"></Icon>Radio
			</MenuItem>
		</MenuList>
	)
}

export default Menu
