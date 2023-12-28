const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const alphabets = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]



let password1 = document.getElementById("password-1")
let password2 = document.getElementById("password-2")

let use_alphabets = true
let use_symbols = true
let use_numbers = true

let charactersToUse = []

function getArrayToUse(){
    alphabetsToUse = alphabets
    symbolsToUse = symbols
    numbersToUse = numbers
    if (!use_alphabets){
        alphabetsToUse = ""
    }
    if (!use_symbols){
        symbolsToUse = ""
    }
    if (!use_numbers){
        numbersToUse = ""
    }
    return [...alphabetsToUse, ...symbolsToUse, ...numbersToUse]
}

function generatePasswords(){
    if(document.getElementById("alphabet-checkbox").checked) {
        use_alphabets = true
      }
    else{
        use_alphabets = false
    }
    if(document.getElementById("symbol-checkbox").checked) {
        use_symbols = true
      }
    else{
        use_symbols = false
    }
    if(document.getElementById("number-checkbox").checked) {
        use_numbers = true
      }
    else{
        use_numbers = false
    }
    if (!use_alphabets && !use_numbers && !use_symbols){
        window.alert("Cannot generate password. Select some characters")
        exit()
    }
    charactersToUse = getArrayToUse()
    console.log(typeof(charactersToUse))
    
    password1.innerText = generateOnePassword(charactersToUse)
    password2.innerText = generateOnePassword(charactersToUse)
}
function generateOnePassword(charactersToUse){
    
    let generatedPassword = ""
    for(let i = 0; i <15; i++){
        randomIndex = Math.floor((Math.random() * charactersToUse.length))
        generatedPassword += charactersToUse[randomIndex]
    }
    return generatedPassword

}


