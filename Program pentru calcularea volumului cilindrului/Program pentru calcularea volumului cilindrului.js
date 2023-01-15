function calculeazavolumul(){
    let inaltimea = parseFloat(document.getElementById("inaltimea").value);
    let raza = parseFloat(document.getElementById("raza").value);

    let volumul = raza**2 * Math.PI * inaltimea;

    document.getElementById("rezultatul").innerHTML='Volumul este : ' + volumul;
}