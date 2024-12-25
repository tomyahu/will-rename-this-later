import { Place } from "../entities/Place";

export class PlaceFactory {

	// fromDictionary
	// makes a new place from a dictionary
	public static fromDictionary( dictionary ) : Place {
		let place = new Place( dictionary._name )
		return place;
	}
}