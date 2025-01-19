import { Task } from "../entities/Task";


export class TaskFactory {
	

	// fromDictionary
	// creates a Task from a dictionary
	public static fromDictionary( dictionary ) : Task {
		let task = new Task( dictionary._name, dictionary._goal );

		task.setProgress = dictionary._progress;

		return task;
	}

}