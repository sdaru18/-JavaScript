// 編號：CANDY-005
// 程式語言：JavaScript
// // 題目：完成函數的內容，把傳進去的數字的每個位數平方之後組合在一起

function squareDigits(num) {
	let newmun = Array.from(String(num)).map((x) => {
		return x * x;
	}); //將數字轉成字串再轉成陣列,在用陣列算平方
	return newmun.join(""); //轉回字串拿掉逗號
}

console.log(squareDigits(3212)); // 印出 9414
console.log(squareDigits(2112)); // 印出 4114
console.log(squareDigits(387)); // 印出 96449
