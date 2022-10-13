function checkNumber(event) {
    //creating a function that will only allow numbers to be inputted
    var aCode = event.which ? event.which : event.keyCode;
    if(aCode > 31 && (aCode < 48 || aCode > 57)) return false;
    return true;
}

function getMean()
{
    num1 = document.getElementById("fnum").value;
    num2 = document.getElementById("snum").value;
    num3 = document.getElementById("tnum").value;
    results = ((parseInt(num1)+parseInt(num2)+parseInt(num3))/3);
    document.getElementById("meanResults").innerHTML = results;
}

function getMax()
{
    num1 = document.getElementById("fnum").value;
    num2 = document.getElementById("snum").value;
    num3 = document.getElementById("tnum").value;
    var res = Math.max(num1, num2, num3);
    document.getElementById("maxResults").innerHTML = res;
}

function getMin()
{
    num1 = document.getElementById("fnum").value;
    num2 = document.getElementById("snum").value;
    num3 = document.getElementById("tnum").value;
    var res = Math.min(num1, num2, num3);
    document.getElementById("minResults").innerHTML = res;
}

function getMedian()
{
    num1 = document.getElementById("fnum").value;
    num2 = document.getElementById("snum").value;
    num3 = document.getElementById("tnum").value;
    var med = num2;
    document.getElementById("medianResults").innerHTML = med;
}

function getRange()
{
    num1 = document.getElementById("fnum").value;
    num2 = document.getElementById("snum").value;
    num3 = document.getElementById("tnum").value;
    var res1 = Math.max(num1, num2, num3);
    var res2 = Math.min(num1, num2, num3);
    var f_range = res1-res2;
    document.getElementById("rangeResults").innerHTML = f_range;
}