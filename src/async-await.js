
// let fetch= require("node-fetch")
async function getCountry(countryName){
    try{
    let response= await fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
    let country =  await response.json()
        console.log(country)
        return country
    }catch(error){
        return "error de peticion"
    }
}
(async function(){
    let country= await getCountry("argentina")
    console.log(country)
})()
