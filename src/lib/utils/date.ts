const weekNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthNames = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];

const getDate = () => {
    // DATE
	const date = new Date()
	const day = date.getDate()
	const month = monthNames[date.getMonth()]
	const year = date.getFullYear()
    // TIME
    const hours = date.getHours()
    const minutes = date.getMinutes()

	const dateFormat = day + ' ' + month + ' ' + year
    const timeFormat = hours + ":" + minutes
    return{date: dateFormat, time:timeFormat}
};


export { getDate };
