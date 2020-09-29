document.getElementById('output').style.visibility = 'hidden';

document.getElementById('input').addEventListener('input', function(e){
    document.getElementById('output').style.visibility = 'visible';

    let celcius = e.target.value;
    let kelvin = celcius + 273.15;
    let fahrenheit = (celcius * 9/5) + 32;
    document.getElementById('kelvinOutput').innerHTML = kelvin;
    document.getElementById('fehrenheitOutput').innerHTML = fahrenheit;
})