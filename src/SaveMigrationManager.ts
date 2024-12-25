

// SaveMigrationManager

import { SAVE_VERSION } from "./consts";

// A class with functions to migrate save files from different versions
export class SaveMigrationManager {

	static migration_functions = {
		"0.0.1": this.m_0_0_1_to_0_1_0,
		"0.1.0": this.m_0_1_0_to_0_2_0,
		"0.2.0": this.m_0_2_0_to_0_2_1,
	}


	// migrate
	// takes a save file dictionary and updates it to the current version
	public static migrate( dictionary ) {
		if( SAVE_VERSION.localeCompare(dictionary.version) == 0 ) { 
			console.log(`File already at current version ${SAVE_VERSION}`);
			return dictionary;
		}

		console.log(`Migrating file from version ${dictionary.version}`);

		while( dictionary.version in this.migration_functions ) {
			let version = dictionary.version;
			dictionary = this.migration_functions[version](dictionary);
			console.log(`Updated file to version ${dictionary.version}`);
		}

		console.log("Reached current version")
		return dictionary;
	}


	// 0.0.1 -> 0.1.0
	public static m_0_0_1_to_0_1_0( dictionary ) {
		dictionary.logs = [];
		dictionary.version = "0.1.0";
		return dictionary;
	}


	// 0.1.0 -> 0.2.0
	public static m_0_1_0_to_0_2_0( dictionary ) {
		dictionary.places = {};
		dictionary.version = "0.2.0";
		return dictionary;
	}

	// 0.2.0 -> 0.2.1
	public static m_0_2_0_to_0_2_1( dictionary ) {
		dictionary.current_place = "";
		dictionary.version = "0.2.1";
		return dictionary;
	}


}