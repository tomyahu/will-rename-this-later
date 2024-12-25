import { WORD_TABLE } from "../consts";
import { Controller } from "../Controller";
import { Command } from "./Command";


export class WordTableCommand extends Command {

	constructor() {
		super();
		this._name = "words";
		this._description = "Prints a random word from the word table";
	}

	
	// execute
	// prints an amount of random words given the argument
	public execute(ctrl: Controller, args: string[]): void {
		let total_words = 1;

		if( args.length == 1 )
			total_words = Number.parseInt( args[0] );

		for( let i = 0; i < total_words; i++ )
			console.log( this.randomWord() );
	}


	private randomWord() {
		return WORD_TABLE[ Math.floor( Math.random() * WORD_TABLE.length ) ];
	}
}