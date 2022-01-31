import React from 'react';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifsList = ({ category }) => {
	const { data: images, loading } = useFetchGifs(category);

	return (
		<>
			<h3>{category}</h3>
			{loading ? 'Cargando...' : 'Data cargada'}
			<div className='card-grid'>
				{images.map((img) => {
					return <GifItem {...img} key={img.id} />;
				})}
			</div>
		</>
	);
};
