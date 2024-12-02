document.getElementById('calculadora').addEventListener('click',function() {
    var value = document.getElementById('value').value;
    var fee = (document.getElementById('fee').value) / 100;
    var time = document.getElementById('time').value;

    var total = value * (1+fee)**time;

    document.getElementById('total').innerHTML = ("R$" + total.toFixed(2)).replace('.',',');
});