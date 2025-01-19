import { Controller } from "../Controller";
import { Command } from "./Command";

export class ListTasksCommand extends Command {

	constructor() {
		super();
		this._name = "t-list";
		this._description =  "Lists al the uncompleted tasks";
		this._category = "tasks";
	}

	// execute
	// lists all tasks
	public execute(ctrl: Controller, args : string[]): void {
		let storage = ctrl.storage;

		let tasks = storage.getTasks();
		for( let i = 0; i < tasks.length; i++ ) {
			let task = tasks[i]
			if( ! task.complete )
				console.log(`${i} - ${task.name} (${task.progress}/${task.goal})`)
		}
	}
}