var currentTime = new Date(),
      hours = currentTime.getHours(),
      minutes = currentTime.getMinutes();

	if (minutes < 10) {
	 minutes = "0" + minutes;
  }

	var suffix = "AM";
	if (hours >= 12) {
    suffix = "PM";
    hours = hours - 12;
	}
	if (hours == 0) {
	 hours = 12;
	}

document.getElementById('datetime').innerHTML += hours + ":" + minutes + " " + suffix


const apiKey = 'MW9S-E7SL-26DU-VV8V'



const makeStationList = () => {
    const url = 'https://api.bart.gov/api/stn.aspx?key=' + apiKey +
                    '&cmd=stns&json=y'
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            json = json.root

            const stations = json.stations.station

            stations.forEach((station) => {
              console.log(station.name)

              const option = document.createElement("option")
              option.value = station.abbr
              option.innerHTML = station.name
              document.getElementById('station_list').appendChild(option)
            })


        })
        .catch((err) => {
            console.log(err)
        })
}

const getArrivalTimes = () => {
    const stationList = document.getElementById('station_list')
    // PART III.B.1: The bartStationCode should read from the list and query
    // for the corresponding station

    const bartStationCode = stationList.value



    let url = 'https://api.bart.gov/api/etd.aspx?key=' + apiKey + '&cmd=etd' +
                '&orig=' + bartStationCode + '&json=y'
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            json = json.root

            // This clears out existing div!!!
            document.getElementById('results').innerHTML = ''

            // Add header that displays selected station name
            /*const header = document.createElement('h2')
            header.innerHTML = json.station[0].name
            document.getElementById('results').appendChild(header)*/

            // Log all of the train lines:
            json.station[0].etd.forEach((line) => {

              // print name of train line to p tag and append to DOM
                const trainLine = document.createElement('p')
                trainLine.className = 'trainline'
                //trainLine.innerHTML = line.destination

                // add platform
                 trainLine.innerHTML = 'Platform ' + line.estimate[0].platform

                 // also add the direction:
                  trainLine.innerHTML +=  ' (' + line.estimate[0].direction + ')'

                  //now append to the DOM
                document.getElementById('results').appendChild(trainLine)

                //add abbreviation
                const abbreviation = document.createElement('span')
                abbreviation.innerHTML = line.destination
                document.getElementById('results').appendChild(abbreviation)

                //now add the color of the train
                const color = document.createElement('span')
                color.style.background = line.estimate[0].hexcolor
                color.classList.add('train-square')
                document.getElementById('results').appendChild(color)

                // Log all of the estimated times for each train line (loop inside a loop)
                line.estimate.forEach((estimate) => {
                  const departureTime = document.createElement('span')
                  departureTime.innerHTML = estimate.minutes + ' minutes'
                  if (estimate.delay !== '0') {
                    departureTime.innerHTML += ' (delay)'
                  }
                  departureTime.innerHTML += ','
                  console.log(estimate.minutes)
                  document.getElementById('results').appendChild(departureTime)
                })
          })
        })


  .catch((err) => {
            console.log(err)
        })
}

makeStationList()
