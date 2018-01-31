
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function currentDate () {
	const date = new Date();

	const currSecond = date.getSeconds();
	const secDegree = ((currSecond/60) * 360)+ 90;
	secondHand.style.transform = `rotate(${secDegree}deg)`;

	const currMinute = date.getMinutes();
	const minDegree = ((currMinute/60) * 360)+ 90;
	minuteHand.style.transform = `rotate(${minDegree}deg)`;

	const currHour = date.getHours();
	const hourDegree = ((currHour/12) * 360)+ 90;
	hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(currentDate, 1000);