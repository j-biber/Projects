//hocemo da otkinemo 'n' (n <= arr.lenght) random elementa iz tog niza
// generisemo 'n' indeksa uz pomoc Math.random()
// Math.floor(Math.random() * (arr.length)) -> 0, 1, 2, ... (arr.length - 1)

function fetchRandomElementsFromArray(arr, n) {

	const indexes = [];

	while (indexes.length < n) {
		let i = Math.floor(Math.random() * (arr.length));
		let a;

		for (let j = 0; j < indexes.length; j++) {
			if (indexes[j] === i) {
				a = i;
				break;
			}
		}

		if (i !== a) {
			indexes.push(i);
		}
	}

	const newArr = [];

	for (let k = 0; k < n; k++) {
		let index = indexes[k];
		newArr.push(arr[index]);
	}

	return newArr;
}


export default fetchRandomElementsFromArray;