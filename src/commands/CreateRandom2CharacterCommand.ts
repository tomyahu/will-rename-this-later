import { Controller } from "../Controller";
import { Character } from "../entities/Character";
import { Util } from "../lib/Util";
import { Command } from "./Command";
import { CreateRandomCharacterCommand } from "./CreateRandomCharacterCommand";

export class CreateRandom2CharacterCommand extends CreateRandomCharacterCommand {
	protected stats_array = [-1,0,1,1,2,2];

	constructor() {
		super();
		this._name = "c-create2";
	}

}
