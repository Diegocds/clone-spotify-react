import React from 'react'
import { ContainerList, TitleList, ItemList } from './style'
import { Title } from '../List/style'

const List = ({ title }) => {
	return (
		<ContainerList>
			<TitleList>{title}</TitleList>
			<ItemList>Made for Your</ItemList>
			<ItemList>Recenty Played</ItemList>
			<ItemList>Liked Songs</ItemList>
			<ItemList>Albuns</ItemList>
			<ItemList>Artistas</ItemList>
			<ItemList>Podcasts</ItemList>
		</ContainerList>
	)
}

export default List
