function encodeRailFenceCipher(string, numberRails) {
	if (!string || !numberRails) {
		console.log("invalid input");
		return "invalid key";
	}
	var arr = string.split(""),
		result = [];
	for (var i = 0; i < numberRails; i++) {
		result[i] = [];
		for (var j = 0; j < arr.length; j++) {
			var k = j * 2 * (numberRails - 1) + i;
			if (k < arr.length) result[i].push(k);
			if (i !== 0 && i !== numberRails) {
				var k2 = j * 2 * (numberRails - 1) - i;
				if (k2 < arr.length && k2 > 0) result[i].push(k2);
			}
		}
	}
	function uniqueSort(arr) {
		arr = Array.from(new Set(arr));
		return arr.sort(function (a, b) {
			return a - b;
		});
	}

	result = result
		.map(function (arr) {
			return uniqueSort(arr);
		})
		.reduce(function (a, b) {
			return a.concat(b);
		})
		.map(function (i) {
			return arr[i];
		})
		.join("");
	return result;
}

function decodeRailFenceCipher(string, numberRails) {
	if (!string || !numberRails) {
		console.log("invalid input");
		return "";
	}
	var div = 2 * (numberRails - 2) + 2,
		stringArr = string.split(""),
		len = parseInt(stringArr.length / div),
		remainder = stringArr.length % div,
		splitArr = [],
		tempArr = [],
		result = [];
	for (var i = 0; i < numberRails; i++) {
		splitArr.push(i === 0 || i === numberRails - 1 ? len : 2 * len);
	}
	if (remainder > numberRails) {
		splitArr = splitArr.map(function (num) {
			return num + 1;
		});
		remainder = remainder - numberRails;
		for (var j = numberRails - 2; j >= numberRails - remainder - 1; j--) {
			splitArr[j]++;
		}
	} else {
		for (j = 0; j < remainder; j++) {
			splitArr[j]++;
		}
	}

	tempArr = splitArr.map(function (len) {
		var ans = stringArr.splice(0, len);
		return ans;
	});
	var float = 0,
		k = 0;

	function lineUp(isAdd) {
		if (k === string.length) {
			return;
		}
		result.push(tempArr[float].shift());
		k++;
		isAdd ? float++ : float--;
		if (float === numberRails) {
			float = float - 2;
			isAdd = false;
		}
		if (float === 0) {
			isAdd = true;
		}
		lineUp(isAdd);
	}

	lineUp(true);
	return result.join("");
}

export { encodeRailFenceCipher, decodeRailFenceCipher };
// console.log(decodeRailFenceCipher("misbah", 2));
