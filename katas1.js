

function cubicSquare(){
    let resultado = 0;
    for (let i = 1; i <=10; i++){
    resultado = i**3
    console.log(resultado);
    }
}
cubicSquare();


function divisiblesFor(number, divisor){
    for (let i = divisor; i <= number; i++){
        if(i%divisor == 0){
            console.log(i);
    }
    
    }
}
divisiblesFor(100, 10);



function stringElement(string, number){
    for (let i = 0; i < string.length; i++){
        if(string[i] == number){
        } 
    }
    console.log(string[number].toUpperCase())
}
stringElement("arthur", 4);




function stringSlicer(string, number){
    for (let i = 0; i < number; i++){
        console.log(string[i])
    }
}
stringSlicer("Algorítmos", 4)





function stringRest(string, number){
    let novaString = ""
    for (let i = 0; i < string.length; i++){
        if(i >= number){
        novaString += string[i]
        }
    }
    return novaString
} 
let palavra = prompt("Escolha uma palavra")
let numero = parseInt(prompt("Escolha um número"))
console.log(stringRest(palavra, numero));







function countVowels(string){
    let count = 0;
    let minusculo = string.toLowerCase();
    
    for (let i = 0; i < minusculo.length; i++){

        if(minusculo[i] == "a" || minusculo[i] == "e" || minusculo[i] == "i" || minusculo[i] == "o" || minusculo[i] == "u"){
            count++
           
        }
    }
    return count;
}
let palavra2 = prompt("Digite sua palavra aqui")
console.log(countVowels(palavra2));




function countTextOccurrences(string, letra){
    let count = 0;
    let min = string.toLowerCase();

    for (let i = 0; i < min.length; i++){

        if(min[i] == letra){
            count++          
        }
    }
return count;
}

console.log(countTextOccurrences("Abacaxi", "a"));



function textBackwards(string){

    let stringInvertida = ""
    for (let i = string.length-1 ; i >= 0 ; i--){

        stringInvertida += string[i]
    } 
    
    return stringInvertida;    
}

let palavra1 = prompt("Digite sua palavra aqui")
console.log(textBackwards(palavra1));



function removeBlank(string){

    let stringSemEspaco = "";
    for (let i = 0; i < string.length; i++){
        if (string[i] != " "){
            stringSemEspaco = stringSemEspaco + string[i]
        }
    }
    return stringSemEspaco;
}
let stringNormal = prompt("Digite uma frase aqui")
console.log(removeBlank(stringNormal));




function encryptText(string){
    let fraseEncriptada = "";
    for (let i = 0 ; i < string.length ; i++){

            if(string[i] == "a"){
                fraseEncriptada += "x";
            } else if(string[i] == "A"){
                fraseEncriptada += "X";
            } else if(string[i] == "e"){
                fraseEncriptada += "y"
            } else if(string[i] == "E"){
                fraseEncriptada += "Y";
            } else if(string[i] == "i"){
                fraseEncriptada += "w";
            } else if(string[i] == "I"){
                fraseEncriptada += "W";
            } else if(string[i] == "o"){
                fraseEncriptada += "k";
            } else if(string[i] == "O"){
                fraseEncriptada += "K";
            } else if(string[i] == "u"){
                fraseEncriptada += "z";
            } else if(string[i] == "U"){
                fraseEncriptada += "Z";
            } else {
                fraseEncriptada += string[i]
            }
    }
    return fraseEncriptada;
}

let stringCodigo = prompt("Digite uma frase aqui")
console.log(encryptText(stringCodigo));
