const cityInput = document.getElementById("city-input");
const searchButton = document.getElementById("search-button");
const hotelList = document.getElementById("hotel-list");
searchButton.addEventListener("click", async function() {
    const city = cityInput.value.trim();
    if(city === "") {
        alert("Please enter a city in Rwanda.");
        return;
    }
    try {
        const response = await fetch(
            `/api/hotels?city=${encodeURIComponent(city)}`
        );
        const data = await response.json();
        if (!response.ok) {
            alert(data.error);
            return;
        }
        console.log(data);
        hotelList.textContent = JSON.stringify(data,null,2);
    }catch(error) {
        console.log("Error:", error);
        alert("Something went wrong.Please try again.");
    }

});
