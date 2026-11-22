require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.get("/api/hotels", async (req, res) => {
    try {
    const city = req.query.city;
    if(!city) {
        return res.status(400).json({
            error:"Please provide a city name"
        });
    }
    const apiKey = process.env.GEOAPIFY_API_KEY;
    const geoUrl=new URL(
        "https://api.geoapify.com/v1/geocode/search"
    );
    geoUrl.searchParams.set("text",`${city}, Rwanda`);
    geoUrl.searchParams.set("filter", "countrycode:rw");
    geoUrl.searchParams.set("format","json");
    geoUrl.searchParams.set("limit", "1");
    geoUrl.searchParams.set("apiKey", apiKey);
    const geoResponse=await fetch(geoUrl);
    const geoData = await geoResponse.json();

    if (!geoResponse.ok) {
        return res.status(502).json({
            error:"Could not find the city"
        });
    }
    if (!geoData.results || geoData.results.length === 0) {
       return res.status(404).json({
        error:"City not found in Rwanda"
       });
    }
    const placeId=geoData.results[0].place_id;
    const hotelUrl=new URL(
        "https://api.geoapify.com/v2/places"
    );
    hotelUrl.searchParams.set("categories","accommodation");
    hotelUrl.searchParams.set("filter",`place:${placeId}`);
    hotelUrl.searchParams.set("limit", "20");
    hotelUrl.searchParams.set("apiKey",apiKey);
     const hotelResponse=await fetch(hotelUrl);
    const hotelData = await hotelResponse.json();
    if(!hotelResponse.ok) {
        return res.status(502).json({
            error:"Hotel search failed"
        });
    }
    res.json(hotelData);
} catch (error) {
    console.error(error);
    res.status(500).json({
        error:"Something went wrong while searching"
    });
}
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});