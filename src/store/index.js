import axios from 'axios';
import { createStore } from 'vuex';

export const store = createStore({
    state: {
        apiKey: '4e472c9c305ae92aef28d89e3a057f2a',
        weather: null
    },
    mutations: {
        getWeather(state, payload) {
            state.weather = payload
        }
    },
    actions: {
        async getWeather(context, city) {
            try {
                let trimmedCity = city.trim()
                let response = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${trimmedCity}&appid=${context.state.apiKey}`);

                if(response.data) {
                    let {lat, lon, local_names} = response.data[0];
                    let response2 = await axios.get(`https://api.openweathermap.org/data/2.8/onecall?lat=${lat}&lon=${lon}&appid=${context.state.apiKey}&exclude=hourly,minutely,alerts&units=metric&lang=ru`)
                    let weatherInfo = {...response2.data, name: local_names.ru || local_names.fr || city};
                    context.commit('getWeather', weatherInfo)
                }
            } catch (error) {
                console.log(error);
            }
        }
    }
}) 