
var axios = require('axios')

export async function useApi(cities) {
	const toReturn = [];
	var i;
	for (i = 0; i < cities.length; i++) {
		const res = await axios.get('https://api.weatherbit.io/v2.0/current', {
			params: {
				city: cities[i],
				key: "d1f066326de5414ebbf24be733d04166"
			}
		})
		toReturn.push(res.data)
	}

	return toReturn
}
