import { fireEvent, render } from '@testing-library/react';
import { Provider } from '../reducer_context/reducer-context';
import { AddTask } from '../components/todo_add_task';
import '@testing-library/jest-dom';

describe('Add button test', () => {
	test('Add button in the document', () => {
		render(
			<Provider>
				<AddTask />
			</Provider>
		);
		const addButton = document.querySelector('.add-button');

		expect(addButton).toBeInTheDocument();
	});
	test('Add button click test', () => {
		render(
			<Provider>
				<AddTask />
			</Provider>
		);
		const addButton = document.querySelector('.add-button');
		if (addButton) {
			const handleClick = jest.fn();
			addButton.addEventListener('click', handleClick);
			fireEvent.click(addButton);
			fireEvent.click(addButton);
			expect(handleClick).toHaveBeenCalledTimes(2);
		}
	});
});
