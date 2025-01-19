

export class Task {
	private _name : string;
	private _goal : number;
	private _progress : number;

	constructor( name : string, hearts : number ) {
		this._name = name
		this._goal = hearts * 10;
		this._progress = 0;
	}


	// addProgress
	// adds progress towards a goal
	public addProgress( progress : number ) : void {
		this._progress = Math.min( this.goal, this._progress + progress );
	}


	// setProgress
	// sets the current progress of the task
	public setProgress( new_progress : number ) : void {
		this._progress = Math.min( this.goal, new_progress );
	}


	// getters
	get name() : string { return this._name; }
	get goal() : number { return this._goal; }
	get progress() : number { return this._progress; }
	get complete() : boolean { return this.progress >= this.goal; }
}