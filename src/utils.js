
var axios = require('axios')

export async function useApi(cities) {
	const toReturn = [];
	var i;
	for (i = 0; i < cities.length; i++) {
		const res = await axios.get('https://api.weatherbit.io/v2.0/current', {
			params: {
				city: cities[i],
				key: "5243b6821b1446deaefcbda25827b571"
			}
		})
		toReturn.push(res.data)
	}

	return toReturn
}

export function emoji(temp) {
	if (temp > 25) {
		return "🔥"
	}
	else if (temp >= 15 && temp <= 25) {
		return "☀️"
	}
	else if (temp >= 5 && temp < 15) {
		return "☁️"
	}
	else {
		return "❄️"
	}
}