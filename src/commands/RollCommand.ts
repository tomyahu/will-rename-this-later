import exp = require("constants");
import { Controller } from "../Controller";
import { Command } from "./Command";


export class RollCommand extends Command {

	constructor() {
		super();
		this._name = "r";
		this._description = "Computes the number of an expression";
	}


	// execute
	// Computes the final number of an expression
	public execute(ctrl: Controller, args: string[]): void {
		if( args.length == 0 )
			return console.log("This Command requires an expression to parse");

		try {
			console.log( this._parse( args.join(" ")) );
		} catch {
			console.log( "Invalid Expression" );
		}
	}


	// _parse
	// parses the expression
	private _parse( expression : string ) : number {
		return this._parseSum( expression.replace( " ", "" ) );
	}


	private _parseSum( expression : string ) : number {
		let sum_split = expression.split("+");
		let res = 0;
		for( let i = 0; i < sum_split.length; i++ ) {
			res += this._parseSubstract( sum_split[i] );
		}

		return res;
	}


	private _parseSubstract( expression : string ) : number {
		let sub_split = expression.split("-");
		let res = 0;
		for( let i = 0; i < sub_split.length; i++ ) {
			res += this._parseVal( sub_split[i] );
		}

		return res
	}


	private _parseVal( expression : string ) : number {
		if( expression.includes('d') ){
			let splitted_expression = expression.split('d');

			let dice_to_roll = Number.parseInt( splitted_expression[0] );
			let res = 0;
			for( let i = 0; i < dice_to_roll; i++ )
				res += Math.floor( Math.random() * Number.parseInt( splitted_expression[1] ) ) + 1;

			return res;

		} else {
			return Number.parseInt( expression );
		}
	}
}