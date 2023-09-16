enum ActionType {
	AddTask = 'addTask',
	ChangeStatus = 'changeStatus',
	EditTask = 'editTask',
	DeleteTask = 'deleteTask',
	SaveTask = 'saveTask',
}

interface AddTaskAction {
	type: ActionType.AddTask;
	task: string;
}

interface ChangeStatusAction {
	type: ActionType.ChangeStatus;
	clickedId: string;
}

interface EditTaskAction {
	type: ActionType.EditTask;
}

interface DeleteTaskAction {
	type: ActionType.DeleteTask;
	clickedId: string;
}

interface SaveTaskAction {
	type: ActionType.SaveTask;
	clickedId: string;
	task: string;
}

type TaskAction =
	| AddTaskAction
	| ChangeStatusAction
	| EditTaskAction
	| DeleteTaskAction
	| SaveTaskAction;

export type { TaskAction };
export { ActionType };
