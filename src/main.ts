import * as readline from 'readline-sync';
import { Controller } from './Controller';


let ctrl = new Controller();

while( true ) {
	let msg = readline.question("> ");
	let splitted_msg = msg.split(" ");
	
	let command = splitted_msg[0];
	splitted_msg.shift();

	ctrl.executeCommand( command, splitted_msg );
	console.log("");
}
