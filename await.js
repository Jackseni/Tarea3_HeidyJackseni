let fetch = require('node-fetch')


async function getCountry(countryName) {
    try {
        let response = await fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
        let country = await response.json()
        return country[0].name;
        // console.log(country[0].name)
        //return "Hola Mundo"

    } catch (error) {
        return "Error al consultar el API"
    }
}

(async function() {
    let country = await getCountry("Honduras")
    console.log(country)
})()






//let countryPromise = getCountry("Honduras") 

/*countryPromise.then(response => {
        return response.json()
    })
    .then(response => {
        console.log(response)
        return response;
    })
    .catch(err => console.log("Error: ", err))
    //console.log("country ==>", country)*/