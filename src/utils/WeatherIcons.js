import sunny from '../assets/Sunny.svg';
import cloudy from '../assets/Cloudy.svg';
import rainy from '../assets/Rainy.svg';
import snowy from '../assets/Snowy.svg';
import mostlySunny from '../assets/MostlySunny.svg';

export const weatherIcons = {
        1: sunny,
        2: sunny,
        3: sunny,
        4: sunny,
        5: mostlySunny,
        6: mostlySunny,
        7: mostlySunny,
        8: rainy,
        9: rainy,
        10: rainy,
        11: rainy,
        12: rainy,
        13: rainy,
        14: cloudy,
        15: cloudy,
        16: cloudy,
        17: cloudy,
        18: cloudy,
        19: rainy,
        20: rainy,
        21: snowy,
        22: snowy,
        23: snowy,
        24: snowy,
        25: snowy,
        26: snowy,
        27: snowy,
    };

    export function getWeatherIcon(weatherSymbol) {
        return weatherIcons[weatherSymbol];
    }

