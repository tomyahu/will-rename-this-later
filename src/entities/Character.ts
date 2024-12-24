

export class Character {
	private _name : string;
	constructor( name: string ) {
		this._name = name;
	}


	// getters
	get name() : string { return this._name }
}