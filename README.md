# Hotel Finder Rwanda

## Project Overview
Hotel Finder Rwanda is a web application designed to help users discover hotels in Rwanda by searching for a specific city or location.
The application provides a simple and user-friendly interface where users can enter a location  and view available hotel information.
The project demonstrates the development and deployment of a web application using frontend technologies,backend development,APIs,web servers, and load balancing.

 ## Features
 -Search for hotels by city or location.
 -Retrieve hotel information using the Geoapify API.
 -User-friendly and responsive interface.
 -Backend API for handling hotel search requests.
 -Secure API key management using environment variables.
 -Nginx web server configuration.
 -Load balancing using HAProxy.
 -Deployment across multiple web servers.
 -Backend process management using PM2.

 ## Technologies Used

 ### Frontend
 -HTML5
 -CSS3
 -JavaScript

 ### Backend
 -Node.js
 -Express.js
  
 ### APIs
 -Geoapify Places API

### Infrastructure and Deployment
-Linux(Ubuntu)
-Nginx
-HAProxy
-PM2
-Git and GitHub

## System Architecture
The application uses a multi-server architecture to distribute incoming traffic and improve availability.

The system consists of:

1.**Users:** Access the Hotel Finder Rwanda website through a browser.
2.**HAProxy:** Act as the load balancer and distributes incoming requests between the two web servers using round-robin algorithm.
3.**Web Server 1:** Uses Nginx to serve the frontend application and forwards API requests to the local Node.js backend.
4. **Web Server 2:** Uses Nginx to serve the frontend application and forwards API requests to the backend running on Web01.
5. **Backend Server:** Runs the Node.js and Express application on Web01,handles hotel search requests, and communicates with Geoapify.
6.**Geoapify API:** Provides hotel and location information used to retrieve hotel results.

### Architecture Flow

User -> HAProxy -> Web01 / Web02 -> Backend API on Web01 -> Geoapify API

## Project Structure

```text
Hotel-Finder-Rwanda/
|
|-index.html
|-style.css
|-script.js
|-README.md
|-.gitignore
|
|-backend/
  |-server.js
  |-package.json
  |-package-lock.json
  | .env.example
  |.env (not uploaded to Github)
```  

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Annualite1/Hotel-Finder-Rwanda.git
```
### 2. Navigate to the Project 

```bash
cd Hotel-Finder-Rwanda
```
### 3. Install Backend Dependencies
```bash
cd backend
npm install
```
### 4. Configure Environment Variables
 Create a `.env` file uinside the backend directory.
 
 Add your Geoapify API key:
 ```env
 GEOAPIFY_API_KEY=your_api_key_here
 PORT=3000
 ```

 Replace `your_api_key_here` with your actual Geoapify API key.

 Never share your private API key publicly.

 ### 5. Start the Backend Server
 ```bash
 node server.js
 ```
 The backend server should run on port 3000.
 ## API Endpoint
 The backend provides an endpoint for retrieving hotel information.
 **Endpoint:**
 ```text
 GET/api/hotels?city=Kigali
 ```
 **Example request:**
 ```text
 http://localhost:3000/api/hotels?city=Kigali
 ```
 The endpoint accepts a city name and communicates with the Geoapify API to retrieve relevant hotel information.


 ## Deployment
 The application is deployed on Ubuntu Linux servers using a three server architecture.

 The deployment infrastructure uses:
 -Nginx to serve the frontend application on both servers.
 -Node.js and Express to handle backend requests on Web01.
 -PM2 to manage the backend application process.
 -HAProxy to distribute incoming traffic between Web01 and Web02 .
 -GitHub for source code management and version control.

 Live Website: http://18.133.156.127

 ## Load Balancing 
 HAProxy is used to distribute incoming traffic across multiple web servers.

 This helps prevent a single wb server from handling all incoming requests and improves the availabilty of the application.
 This configuration uses the round-robin algorithm to distribute requests between Web01 and Web02.
 HaProxy also checks whether the web servers are available.
 ## Security
 The project follows basic security practices:
 -API keys are stored in environment variables.
 -The `.env` file is excluded from version control.
 -Backend requests are handled through the Express server.
 -Sensitive credentials should never be committed to Github.
 -Web02 accesses the backend through a restricted private network connection.


 ## Future Improvements
 Possible future improvements include:
 -Adding hotel images and detailed descriptions.
 -Displaying hotel locations on an interactive map.
 -Adding hotel ratings and reviews.
 -Providing filters based on price  and facilities.
 -Adding hotel booking functionality.
 -Improving mobile responsiveness.
 -Adding more locations across Rwanda.

 ## Author 
  Annualite