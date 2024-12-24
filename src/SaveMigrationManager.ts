

// SaveMigrationManager
// A class with functions to migrate save files from different versions
export class SaveMigrationManager {

	// 0.0.1 -> 0.1.0
	public static m_0_0_1_to_0_1_0( dictionary ) {
		dictionary.logs = [];
		dictionary.version = "0.1.0";
		return dictionary;
	}


}