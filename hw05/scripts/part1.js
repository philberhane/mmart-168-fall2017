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
    getData()
}

const clearData = () => {
    const element = document.getElementById('results')
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

//Note: language codes here: https://www.w3schools.com/tags/ref_language_codes.asp
const getData = () => {

    const term = document.getElementById('term').value
    const baseURL = 'https://mmart168-twitter-proxy.herokuapp.com/1.1/search/tweets.json?q=' + term
    twitterURL = baseURL + '&lang=' + languageCode
    fetch(twitterURL)
        .then(function(response) {
            return response.json()
        })
        .then(function(json) {
            let div
            let textNode

            // output statuses:
            console.log(json.statuses)

            // clear out existing tweets:
            clearData()

            // ---------------------- TASK 1 -----------------------------------
            const reverseText = (str) => {
              return str.split('').reverse().join('')
            }

            /* This reverseText function takes a string, splits it up into an
            array of strings, reverses the array, and combines the array of
            strings into one string.
            */

            // ---------------------- TASK 2 -----------------------------------
            const reverseTweet = (tweetText) => {
              if (tweetText.indexOf('#') === -1) {
                return reverseText(tweetText)
              } else {
                return tweetText
              }
            }

            /* This reverseTweet function uses if and else statements to
            implement the reverseText function when the tweets don't contain
            hastags, and if they do have hashtags, they get returned normally ie
            without being reversed.
            */

            // ---------------------- DELIVERABLE -----------------------------------
            // When somebody searches for a keyword, tweets with hashtags will appear as normal. Tweets with no hashtags will be inexplicably reversed.
            // EXTRA CREDIT: Add a class to reversed tweets to make their background red. This will require modifying the existing CSS!

            json.statuses.forEach((status) => {
                div = document.createElement('div')
                div.className = 'tweet'
                textNode = document.createTextNode(reverseTweet(status.text))
                div.appendChild(textNode)
                document.getElementById('results').appendChild(div)
            })

        })
}
