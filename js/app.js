API_KEY = `2d33308bdc9c12614551c7dc488d89e5`
const searchTemperature = () => {
    const city = document.getElementById('city-name').value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    // console.log(url);
    fetch (url)
        .then(res => res.json())
        .then (data => displayTemperature(data));
}
const setInerText = (id,text)=>{
    document.getElementById(id).innerText = text;
}
const displayTemperature = temperature => {
    setInerText('city',temperature.name)
    setInerText('temperature',temperature.main.temp)
    setInerText('condition',temperature.weather[0].main)
    // console.log(temperature);
    // set weather icon
    const url = ` http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url)
}