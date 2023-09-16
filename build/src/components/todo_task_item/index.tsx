import {
	Checkbox,
	FormControlLabel,
	IconButton,
	TextField,
} from '@mui/material';
import { Delete, Edit, Check, Cancel } from '@mui/icons-material';
import { useState } from 'react';
import { useTasks } from '../../reducer_context/reducer-context';
import { todoStatuses } from '../../constants/todo-statuses';
import { ITaskItemProps } from '../../types/task-item-props';
import { ActionType } from '../../types/actions';

function TaskItem({ status, label, id }: ITaskItemProps) {
	const defaultEditValue = false;
	const [isEdit, setIsEdit] = useState(defaultEditValue);
	const [inputValue, setInputValue] = useState(label);
	const reducer = useTasks();

	function toggleIsEdit() {
		setIsEdit(!isEdit);
	}
	function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
		setInputValue(e.target.value);
	}
	function handleDeleteClick(
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) {
		reducer.dispatch({
			type: ActionType.DeleteTask,
			clickedId: e.currentTarget.id,
		});
	}
	function handleSaveClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		reducer.dispatch({
			type: ActionType.SaveTask,
			clickedId: e.currentTarget.id,
			task: inputValue,
		});
		setIsEdit(false);
	}

	function handleFormChange(e: React.SyntheticEvent<Element, Event>) {
		reducer.dispatch({
			type: ActionType.ChangeStatus,
			clickedId: e.currentTarget.id,
		});
	}

	return (
		<>
			{!isEdit && (
				<FormControlLabel
					onChange={handleFormChange}
					checked={status === todoStatuses.done}
					sx={{ flex: '1 1 auto' }}
					control={<Checkbox id={id} />}
					label={label}
				/>
			)}
			{isEdit && (
				<TextField
					variant='filled'
					sx={{ flex: '1 1 auto' }}
					value={inputValue}
					onChange={handleInputChange}
				/>
			)}

			{!isEdit && (
				<IconButton
					onClick={toggleIsEdit}
					sx={{ color: '#2196F3', flex: '0 0' }}
				>
					<Edit />
				</IconButton>
			)}
			{isEdit && (
				<IconButton sx={{ color: '#2196F3' }} id={id} onClick={handleSaveClick}>
					<Check />
				</IconButton>
			)}
			{!isEdit && (
				<IconButton
					onClick={handleDeleteClick}
					id={id}
					sx={{ flex: '0 0', color: 'darkorange' }}
				>
					<Delete />
				</IconButton>
			)}
			{isEdit && (
				<IconButton
					onClick={toggleIsEdit}
					id={id}
					sx={{ flex: '0 0', color: 'red' }}
				>
					<Cancel />
				</IconButton>
			)}
		</>
	);
}

export { TaskItem };
