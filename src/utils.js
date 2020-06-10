
var axios = require('axios')

export async function useApi(cities) {
	const toReturn = [];
	var i;
	for (i = 0; i < cities.length; i++) {
		const res = await axios.get('https://api.weatherbit.io/v2.0/current', {
			params: {
				city: cities[i],
				key: "35dea05a775a4a5bbdb9828c3acbc689"
			}
		})
		toReturn.push(res.data)
	}

	return toReturn
}
