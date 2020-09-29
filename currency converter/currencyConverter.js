document.getElementById('output').style.visibility = 'hidden';

document.getElementById('input').addEventListener('input', function(e) {
document.getElementById('output').style.visibility = 'visible';
    
    let rupees = e.target.value;

    document.getElementById('usdOutput').innerHTML = '$'+rupees*73.77;
    document.getElementById('eurOutput').innerHTML = '€'+rupees*52.52;
    document.getElementById('audOutput').innerHTML = '$'+rupees*86.56;
})