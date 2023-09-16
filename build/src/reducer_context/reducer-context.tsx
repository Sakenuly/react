import React, {
	createContext,
	useContext,
	useReducer,
	ReactNode,
	useMemo,
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { todoStatuses } from '../constants/todo-statuses';
import { TaskAction, ActionType } from '../types/actions';

interface TaskState {
	task: string;
	id: string;
	status: string;
}

interface TasksContextValue {
	tasks: TaskState[];
	dispatch: React.Dispatch<TaskAction>;
}

const tasksContext = createContext<TasksContextValue | null>(null);

const statusChange: { [type: string]: string } = {
	TODO: todoStatuses.inProgress,
	inProgress: todoStatuses.done,
	done: todoStatuses.todo,
};

function tasksReducer(task: TaskState[], action: TaskAction): TaskState[] {
	switch (action.type) {
		case ActionType.AddTask: {
			return [
				...task,
				{ task: action.task, id: uuidv4(), status: todoStatuses.todo },
			];
		}
		case ActionType.ChangeStatus: {
			return task.map((item) => {
				if (item.id === action.clickedId) {
					return { ...item, status: statusChange[item.status] };
				}
				return item;
			});
		}
		case ActionType.EditTask: {
			return task;
		}
		case ActionType.DeleteTask: {
			return task.filter((item) => item.id !== action.clickedId);
		}
		case ActionType.SaveTask: {
			return task.map((item) => {
				if (item.id === action.clickedId) {
					return { ...item, task: action.task };
				}
				return item;
			});
		}
		default: {
			console.log('Unknown action type');
			return task;
		}
	}
}

interface ProviderProps {
	children: ReactNode;
}

function Provider({ children }: ProviderProps) {
	const [tasks, dispatch] = useReducer(tasksReducer, []);

	const reducer: TasksContextValue = useMemo(
		() => ({
			tasks,
			dispatch,
		}),
		[tasks, dispatch]
	);

	return (
		<tasksContext.Provider value={reducer}>{children}</tasksContext.Provider>
	);
}

function useTasks(): TasksContextValue {
	const context = useContext(tasksContext);
	if (context === null) {
		throw new Error('Error');
	}
	return context;
}

export { useTasks, Provider };
