// 編號：CANDY-003
// 程式語言：JavaScript
// 題目：完成函數的內容，把陣列裡的 0 都移到最後面

let list = [false, 1, 0, -1, 2, 0, 1, 3, "a"];

function moveZerosToEnd(list) {
	let listno0 = list.filter(function (x) {
		return x !== 0;
	}); //將不是０的選出
	let list0 = list.filter(function (x) {
		return x === 0;
	}); //選出只有０
	return listno0.concat(list0); //合併兩陣列
}
let result = moveZerosToEnd(list);
console.log(result); // 印出 [false, 1, -1, 2, 1, 3, "a", 0, 0]

//第三題二解
// let list = [false, 1, 0, -1, 2, 0, 1, 3, "a"];
function moveZerosToEnd(list) {
	list.sort(function (a, b) {
		if (a !== 0 && b === 0) {
			return -1;
		}
		if (a === 0 && b !== 0) {
			return 1;
		}
		return 0;
	});
	return list;
}
// let result = moveZerosToEnd(list);
console.log(result); // 印出 [false, 1, -1, 2, 1, 3, "a", 0, 0]
