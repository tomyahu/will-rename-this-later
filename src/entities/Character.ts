

export class Character {
	private _name : string;
	private _max_hp : number;
	private _hp : number;

	constructor( name: string ) {
		this._name = name;
		this._max_hp = 1;
		this._hp = this._max_hp;
	}


	// fullHeal
	// sets current hp to max hp
	public fullHeal() : void {
		this._hp = this._max_hp;
	}

	
	// damage
	// damages the character
	public damage( dmg : number ) : void {
		this._hp -= dmg;
		this._hp = Math.max( 0, this._hp );
	}


	// isAlive
	// checks if the character has hp
	public isAlive() : boolean {
		return this._hp > 0;
	}


	// getters
	get name() : string { return this._name; }
	get max_hp() : number { return this._max_hp; }
	get hp() : number { return this.hp; }

	// setters
	set max_hp( new_max_hp : number ) { this._max_hp = new_max_hp; }
	set hp( new_hp : number ) { this._hp = new_hp; }
}