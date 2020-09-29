document.getElementById('output').style.visibility = 'hidden';

document.getElementById('input').addEventListener('input', function(e) {
    document.getElementById('output').style.visibility = 'visible';
    
    let hours = e.target.value;

    document.getElementById('minutesOutput').innerHTML = hours*60;
    document.getElementById('secondsOutput').innerHTML = hours*60*60;
})