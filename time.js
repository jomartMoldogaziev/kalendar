

let clock = () => {
	let date = new Date()
	let hours = date.getHours()
	let minutes = date.getMinutes()
	let second = date.getSeconds()

	if (hours <10) hours = '0' + hours
	if (minutes <10) minutes = '0' + minutes
	if (second < 10) second = '0' + second
	let years = [2024]

	let date_time = hours + ':' + minutes + ':' + second

	let element = (document.getElementById('time').innerHTML = date_time)
	setTimeout(() => {
		clock()
	}, 1000);
}
clock()
