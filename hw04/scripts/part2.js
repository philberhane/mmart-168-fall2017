//Philemon Berhane

let language = 'English'
let languageCode = 'en'
let jsonData


const setLanguage = (code) => {
    //Note: language codes here: https://www.w3schools.com/tags/ref_language_codes.asp
    languageCode = code
    if (code === 'ru') {
        language = 'Russian'
    } else if (code === 'es') {
        language = 'Spanish'
    } else {
        language = 'English'
    }
    document.getElementById('language').innerHTML = language

    //clear form:
    document.querySelector("pre").innerHTML = ''
}


const getData = () => { /*getData will return all of the data from tweets that
  contain the given searched term*/
    const term = document.getElementById('term').value
    const baseURL = 'https://mmart168-twitter-proxy.herokuapp.com/1.1/search/tweets.json?q=' + term
    twitterURL = baseURL + '&lang=' + languageCode
    fetch(twitterURL)
        .then(function(response) {
            return response.json()
        })
        .then(function(json) {
            console.log(json)
            jsonData = json
            let formattedJSON = syntaxHighlight(JSON.stringify(json, null, "    "))
            document.querySelector("pre").innerHTML = formattedJSON
        })
}


/*
ANSWERS TO HOMEWORK PART 2 QUESTIONS:

Q: Using comments, edit the part2.js file and describe in your own words what
you think the getData function does.

A: getData will return all of the data from tweets that contain the given 
searched term

Q: Open your JavaScript Console (right-click > inspect) and type jsonData into
the console. You should see a JavaScript object that represents the Tweets
returned by your search. To reference the status array, you can type
jsonData.statuses. How would you reference the first status in the
jsonData.statuses list?

A: jsonData.statuses[0]


Q; How would you reference the text property for the fifth status in the
jsonData.statuses list?

A: jsonData.statuses[4].text


Q: Extra credit: How would you reference the name property, which is inside of
the user property for the second status in the jsonData.statuses list?

A: jsonData.statuses[1].user.name
*/





/**********************************************************************/
/* IGNORE THE CODE BELOW: JUST A WAY TO ADD COLOR TO THE JSON RESULTS */
/**********************************************************************/
const syntaxHighlight = (json) => {
    // This is just a convenience function to add color to the JSON response:
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number'
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key'
            } else {
                cls = 'string'
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean'
        } else if (/null/.test(match)) {
            cls = 'null'
        }
        return '<span class="' + cls + '">' + match + '</span>'
    })
}
