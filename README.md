# SafeBikeRoute

A web application to help cyclists visualize, process and update data to improve safety.

### Technical Stack

Front-End

- React
- ReactStrap
- react-google-maps
- recharts

Backend

- Node.js
- Express
- mongoose

Database

- MongoDB

### Steps to run the application

```
1) Create a database either in Local System or Cloud such as mongoDB Atlas.
2) Create a database user to access the application.
3) Create a .env file in the backend root folder and add the database connection URI as an environment variable
4) Create a Google Cloud Account and then generate a Google Maps API credentials key to access google maps as an public or private API. Add the API key in index.html file the public folder in the front-end for the maps component to render.
5) At the initial stage the database is empty. Populate DB with seeder scripts.
Run the following command in the terminal: node seed.js
This will load the sample data into the database.
6) To run backend, go to backend folder and run the following command to start the server:
npm install -----> to install all the required packages present in package.json file
npm start   -----> to start the server
The server will run on 3001 port
7) To run front-end, go to frontend folder run the following command to get the Landing Page
npm install -----> to install all the required packages
npm start   -----> to start the server
This will run the front end at 3000 port
Open the http://localhost:3000/ in the browser to access the application

```
