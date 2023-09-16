import { ITasksItem } from './tasks-item';

interface IListRenderProps {
	title: string;
	tasks: ITasksItem[];
	status: string;
}

export type { IListRenderProps };
