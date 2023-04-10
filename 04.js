// 編號：CANDY-004
// 程式語言：JavaScript
// 題目：完成函數的內容，把傳進去的秒數變成平常人類看的懂的時間格式

function humanReadableTimer(seconds) {
	const hr = String(Math.floor(seconds / 3600)).padStart(2, 0); //將所有秒數除3600(1小時的秒數)拿整數,換成字串，沒兩位數的捕0
	const min = String(Math.floor((seconds % 3600) / 60)).padStart(2, 0); //將所有秒數除3600得到餘數，在用餘數除60拿整數得到分,換成字串，沒兩位數的捕0
	const sec = String(seconds % 60).padStart(2, 0); //所有秒數除60,餘數得到秒,換成字串，沒兩位數捕0
	return `${hr}:${min}:${sec}`;
}

console.log(humanReadableTimer(0)); // 印出 00:00:00
console.log(humanReadableTimer(59)); // 印出 00:00:59
console.log(humanReadableTimer(60)); // 印出 00:01:00
console.log(humanReadableTimer(90)); // 印出 00:01:30
console.log(humanReadableTimer(3599)); // 印出 00:59:59
console.log(humanReadableTimer(3600)); // 印出 01:00:00
console.log(humanReadableTimer(45296)); // 印出 12:34:56
console.log(humanReadableTimer(86399)); // 印出 23:59:59
console.log(humanReadableTimer(86400)); // 印出 24:00:00
console.log(humanReadableTimer(359999)); // 印出 99:59:59
