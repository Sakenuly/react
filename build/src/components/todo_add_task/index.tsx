import { FormControl, IconButton, TextField } from '@mui/material';
import { Add } from '@mui/icons-material';
import { useState } from 'react';
import { useTasks } from '../../reducer_context/reducer-context';
import { ActionType } from '../../types/actions';

function AddTask() {
	const reducer = useTasks();
	const [inputValue, setInputValue] = useState('');
	function handleInputChange(
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) {
		setInputValue(e.target.value);
	}
	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		reducer.dispatch({
			type: ActionType.AddTask,
			task: inputValue,
		});
	}
	return (
		<FormControl
			component='form'
			onSubmit={handleSubmit}
			sx={{
				position: 'relative',
				marginBottom: '25px',
				width: '100%',
			}}
		>
			<TextField
				label='Имя новой задачи'
				variant='standard'
				onChange={handleInputChange}
				sx={{ width: '100%' }}
			/>
			<IconButton
				className='add-button'
				type='submit'
				sx={{
					color: '#2196F3',
					width: '24px',
					height: '24px',
					position: 'absolute',
					top: '40%',
					right: '0%',
				}}
			>
				<Add />
			</IconButton>
		</FormControl>
	);
}
export { AddTask };
