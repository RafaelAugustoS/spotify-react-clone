import React from 'react'
import {
	ContainerItem,
	FigureItem,
	Content,
	HeaderContent,
	DescContent,
} from './style'

const Item = () => {
	return (
		<ContainerItem>
			<FigureItem>
				<img src="https://pbs.twimg.com/profile_images/993610242062598144/u8JD-hqw_400x400.jpg" />
			</FigureItem>
			<Content>
				<HeaderContent>
					<strong>Amanda M.Silva</strong>
					<span>6h</span>
				</HeaderContent>
				<DescContent>
					<span>Come on Eileen</span>
					<span>Dexys Midnight Runners</span>
				</DescContent>
			</Content>
		</ContainerItem>
	)
}

export default Item
