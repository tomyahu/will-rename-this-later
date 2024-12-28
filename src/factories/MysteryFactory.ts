import { Mystery } from "../entities/Mystery";


export class MysteryFactory {
	

	// fromDictionary
	// creates a Mystery from a dictionary
	public static fromDictionary( dictionary ) : Mystery {
		let mystery = new Mystery( dictionary._name );

		mystery._setUndiscoveredClues( dictionary.undiscovered_clues );
		mystery._setDiscoveredClues( dictionary.discovered_clues );

		return mystery;
	}

}