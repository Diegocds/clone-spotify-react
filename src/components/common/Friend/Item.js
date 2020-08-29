import React from 'react'
import {
	ContainerItem,
	FigureItem,
	Content,
	HearderContent,
	DescContent,
} from './style'

const Item = () => {
	return (
		<ContainerItem>
			<FigureItem>
				<img src="https://lh3.googleusercontent.com/proxy/93GhLiI-SrVZasVMe1AyX_VSJPT8Ugz10p1vXoD1awh2U5bW-o4pRq9f3fJPL2cWUNU_nictQAD_bKjJvfdEfHzJfZ1NZzSW7d8ixXplBmeluOyhLzyveHApc2XuNA4mLmkHIPk47olO6D8"></img>
			</FigureItem>
			<Content>
				<HearderContent>
					<strong>Amanda</strong>
					<span>10h</span>
				</HearderContent>
				<DescContent>
					<span>Asma</span>
					<span>Lucas Silveira</span>
				</DescContent>
			</Content>
		</ContainerItem>
	)
}

export default Item
