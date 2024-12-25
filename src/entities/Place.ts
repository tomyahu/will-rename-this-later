

export class Place {
	private _name : string;
	private _difficulty : number = 8;

	constructor(name) {
		this._name = name;
		this._difficulty = 8;
	}

	get name() : string { return this._name; }
	get difficulty() : number { return this._difficulty; }
	set difficulty( new_difficulty : number ) { this._difficulty = new_difficulty }
}