import React, { useState } from 'react';

export const AddCategory = ({ setCategories }) => {
	const [inputValue, setInputValue] = useState('');

	const inputValueChangeHandler = (e) => {
		setInputValue(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		if (inputValue.trim().length > 2) {
			setCategories((cats) => [inputValue, ...cats]);
			setInputValue('');
		}
	};

	return (
		<form onSubmit={submitHandler}>
			<input
				type='text'
				value={inputValue}
				onChange={inputValueChangeHandler}
			/>
		</form>
	);
};
