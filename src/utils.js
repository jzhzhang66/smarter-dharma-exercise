
var axios = require('axios')

export async function useApi(givenCity) {
	const res = await axios.get('https://api.weatherbit.io/v2.0/current', {
		params: {
			city: givenCity,
			key: "35dea05a775a4a5bbdb9828c3acbc689"
		}
	})
	return res.data
}
