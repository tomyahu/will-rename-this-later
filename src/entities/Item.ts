

export class Item {
	private _name : string;
	private _description : string;

	constructor( name : string, description : string ) {
		this._name = name;
		this._description = description;
	}


	// getters
	get name() : string { return this._name; }
	get description() : string { return this._description; }
}