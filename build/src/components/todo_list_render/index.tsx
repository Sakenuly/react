import { ListItem, List, Typography } from '@mui/material';
import { TaskItem } from '../todo_task_item';
import { ITasksItem } from '../../types/tasks-item';
import { IListRenderProps } from '../../types/list-render-props';

function ListRender({ title, tasks, status }: IListRenderProps) {
	const filteredTasks = tasks.filter((item) => item.status === status);
	const tasksLength = filteredTasks.length;
	return (
		tasksLength > 0 && (
			<>
				<Typography
					sx={{
						textAlign: 'center',
						color: 'gray',
					}}
					component='h2'
				>
					{`${title}(${tasksLength})`}
				</Typography>
				<List>
					{filteredTasks.map(({ id, task, status }: ITasksItem) => (
						<ListItem
							key={id}
							sx={{
								display: 'flex',
							}}
						>
							<TaskItem status={status} label={task} id={id} />
						</ListItem>
					))}
				</List>
			</>
		)
	);
}

export { ListRender };
