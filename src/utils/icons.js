import clearIcon from '../assets/clear.png';
import cloudIcon from '../assets/cloud.png';
import drizzleIcon from '../assets/drizzle.png';
import rainIcon from '../assets/rain.png';
import snowIcon from '../assets/snow.png';



function Icons(type) {
    switch (type) {
        case "01d":
        case "01n":
            return clearIcon;
        case "02d":
        case "02n":
        case "03d":
        case "03n":
            return cloudIcon;
        case "04d":
        case "04n":
            return drizzleIcon;
        case "09d":
        case "09n":
        case "10d":
        case "10n":
            return rainIcon;
        case "13d":
        case "13n":
            return snowIcon;
        default:
            return clearIcon;
    }


}

export default Icons;