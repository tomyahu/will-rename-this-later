

export class Util {

	static shuffle_array(array : number[]) : number[] {
		let currentIndex = array.length;
		let new_array = array.slice(0);;
	
		while (currentIndex != 0) {
			let randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;
		
			[new_array[currentIndex], new_array[randomIndex]] = [
				new_array[randomIndex], new_array[currentIndex]];
		}

		return new_array;
	}

}