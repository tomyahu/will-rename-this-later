

export class Character {
	private _name : string;
	private _max_hp : number;
	private _hp : number;
	private _str: number;
	private _dex: number;
	private _con: number;
	private _int: number;
	private _wis: number;
	private _cha: number;

	constructor( name: string ) {
		this._name = name;
		this._max_hp = 10;
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
	get hp() : number { return this._hp; }
	get str() : number { return this._str; }
	get dex() : number { return this._dex; }
	get con() : number { return this._con; }
	get int() : number { return this._int; }
	get wis() : number { return this._wis; }
	get cha() : number { return this._cha; }

	// setters
	set max_hp( new_max_hp : number ) { this._max_hp = new_max_hp; }
	set hp( new_hp : number ) { this._hp = new_hp; }
	set str( new_str : number ) { this._str = new_str; }
	set dex( new_dex : number ) { this._dex = new_dex; }
	set con( new_con : number ) { this._con = new_con; }
	set int( new_int : number ) { this._int = new_int; }
	set wis( new_wis : number ) { this._wis = new_wis; }
	set cha( new_cha : number ) { this._cha = new_cha; }
}