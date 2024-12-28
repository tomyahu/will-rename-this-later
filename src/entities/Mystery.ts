import { WordGenerator } from "../lib/WordGenerator";


export class Mystery {
	private _name : string;
	private undiscovered_clues : Set<string>;
	private discovered_clues : Set<string>;

	constructor( name : string ) {
		this._name = name;
		this.undiscovered_clues = new Set<string>();
		this.discovered_clues = new Set<string>();

		while( this.undiscovered_clues.size < 3 )
			this.undiscovered_clues.add( WordGenerator.randomWord() )
	}


	// getDiscoveredClues
	// gets an array with all discovered clues
	public getDiscoveredClues() : string[] {
		return Array.from( this.discovered_clues );
	}


	// discoverClue
	// discovers a new clue
	public discoverClue() : string {
		let undiscovered_clues_array = Array.from( this.undiscovered_clues );
		let new_clue = undiscovered_clues_array[ Math.floor( Math.random() * this.undiscovered_clues.size ) ];

		this.discovered_clues.add( new_clue );
		this.undiscovered_clues.delete( new_clue );

		return new_clue;
	}


	// toDictionary
	// returns this mystery as a dictionary
	public toDictionary() {
		let mystery_dict = {
			_name: this._name,
			undiscovered_clues : Array.from( this.undiscovered_clues ),
			discovered_clues : Array.from( this.discovered_clues ),
		}
		return mystery_dict;
	}


	// setUndiscoverdClues
	// sets the undiscovered clues of the mystery
	public _setUndiscoveredClues( clues : string[] ) : void {
		this.undiscovered_clues.clear();
		clues.forEach( clue => {
			this.undiscovered_clues.add( clue );
		});
	}


	// setDiscoverdClues
	// sets the discovered clues of the mystery
	public _setDiscoveredClues( clues : string[] ) : void {
		this.discovered_clues.clear();
		clues.forEach( clue => {
			this.discovered_clues.add( clue );
		});
	}


	// getters
	get name() : string { return this._name; }
	get is_solved() : boolean { return this.undiscovered_clues.size == 0; }
}