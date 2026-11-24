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
        hotelList.innerHTML= "";
    
        if (!data.features || data.features.length === 0) {
            hotelList.textContent = "No hotels found in this city.";
            return;
        }
            data.features.forEach(function(hotel) {
                const details = hotel.properties;
                const card= document.createElement("div");
                card.className = "hotel-card";
                const name= document.createElement("h3");
                name.textContent = details.name || "Hotel";
                const location = document.createElement("p");
                location.textContent= details.formatted || details.city || "Location unavailable";
                card.appendChild(name);
                card.appendChild(location);
                hotelList.appendChild(card);
            });
        } catch(error) {
            console.log("Error:", error);
            alert("Something went wrong.Please try again.");
        }
    });

    
