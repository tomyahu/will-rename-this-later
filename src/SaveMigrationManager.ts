

// SaveMigrationManager
// A class with functions to migrate save files from different versions
export class SaveMigrationManager {

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


}