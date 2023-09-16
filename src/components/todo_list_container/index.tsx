import { todoStatuses } from '../../constants/todo-statuses';
import { useTasks } from '../../reducer_context/reducer-context';
import { ListRender } from '../todo_list_render';
import { memo } from 'react';

function ListContainer() {
	const reducer = useTasks();

	return (
		<>
			<ListRender
				title='Планируется'
				status={todoStatuses.todo}
				tasks={reducer.tasks}
			/>
			<ListRender
				title='В процессе'
				status={todoStatuses.inProgress}
				tasks={reducer.tasks}
			/>
			<ListRender
				title='Готово'
				status={todoStatuses.done}
				tasks={reducer.tasks}
			/>
		</>
	);
}

export { ListContainer };
