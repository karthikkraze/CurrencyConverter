// Author : Karthik Saride
// ID : C0886429

function convertCADtoUSD() {
    var cadAmount = document.getElementById("cadAmount").value;
    if (cadAmount !== "") {
        var rate = 0.8; 
        var usdAmount = parseFloat(cadAmount) * rate;
        document.getElementById("usdResult").innerHTML = "USD Amount: " + usdAmount.toFixed(3);
    } else {
        document.getElementById("usdResult").innerHTML = "Please enter a CAD amount.";
    }
}

function convertUSDtoCAD() {
    var usdAmount = document.getElementById("usdAmount").value;
    if (usdAmount !== "") {
        var rate = 1.25;
        var cadAmount = parseFloat(usdAmount) * rate;
        document.getElementById("cadResult").innerHTML = "CAD Amount: " + cadAmount.toFixed(3);
    } else {
        document.getElementById("cadResult").innerHTML = "Please enter a USD amount.";
    }
}
