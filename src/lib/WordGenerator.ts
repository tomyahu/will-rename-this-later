import { WORD_TABLE } from "../consts";


export class WordGenerator {

	static randomWord() {
		return WORD_TABLE[ Math.floor( Math.random() * WORD_TABLE.length ) ];
	}
}