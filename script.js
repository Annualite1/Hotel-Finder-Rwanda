const API_KEY = "9784bd17afec4fd59f7736dcdca53fb3";
const cityInput = document.getElementById("city-input");
const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", function() {
    const city = cityInput.value.trim();
    if(city === "") {
        alert("Please enter a city in Rwanda.");
        return;
    }
    const geocodeUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(city + ", Rwanda")}&filter=countrycode:rw&format=json&apikey=${API_KEY}`;
    fetch(geocodeUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log("Error:", error);
        alert("Something went wrong.Please try again.");
    })

});
