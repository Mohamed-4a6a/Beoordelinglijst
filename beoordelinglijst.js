function berekenen(cijfer){
    var beoordeling;

    if (cijfer >= 0 && cijfer <= 49) {
        beoordeling = " is onvoldoende";
    }

    else if (cijfer >= 50 && cijfer <= 59) {
        beoordeling = " is matig"
    }

    else if (cijfer >= 60 && cijfer <= 74) {
        beoordeling = " is voldoende";
    }

    else if (cijfer >= 75 && cijfer <= 100) {
        beoordeling = " is goed";
    }
    return beoordeling;
}

function toevoeg() {
    var cijfer = document.getElementById("input1").value

    document.getElementById('resultaat').innerHTML +="het cijfer "+cijfer+ berekenen(cijfer) +"<br>";
}

function volledigeCijfer() {
    var cijfer = document.getElementById("input2").value;

    document.getElementById('resultaat').innerHTML +="De beoordeling" + berekenen(cijfer) + " , want het cijfer is "+cijfer+".  <br>";
}