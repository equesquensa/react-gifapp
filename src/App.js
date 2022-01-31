import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifsList } from './components/GifsList';

const App = () => {
	const [categories, setCategories] = useState(['Goal']);

	return (
		<>
			<AddCategory setCategories={setCategories} />
			<hr />
			{categories.map((category) => {
				return <GifsList category={category} key={category} />;
			})}
		</>
	);
};

export default App;
