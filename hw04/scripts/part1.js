//Philemon Berhane

let language
let languageCode

const setLanguage = (code) => { //The set language creates an argument of what to do when the user activates the "onClick" function in the HTML
    //Note: language codes here: https://www.w3schools.com/tags/ref_language_codes.asp
    languageCode = code
    if (code === 'am') {
        language = 'Amharic'
    } else if (code === 'zh') {
        language = 'Chinese'
    } else {
        language = 'English'
    }
    document.getElementById('language').innerHTML = language
}
