# SafeBikeRoute

A web application to help cyclists visualize, process and update data to improve saftey.

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
1) Create a Mongo DB Connection URI and add it to .env file in the backend
2) Create a Google Cloud Account and Google Maps API key to access google maps and add the key in index.html file the public folder in front-end
3) Open the backend folder and Run seeder scripts to load the dataset into the database using the following command:
node seed.js
4) In the backend folder run the following command to start the server:
npm install -----> to install all the required packages
npm start   -----> to start the server
The server will run on 3001 port
5) In the frontend folder run the following command to start the Landing Page
npm install -----> to install all the required packages
npm start   -----> to start the server
The front end of the application will run on 3000 port
Open the http://localhost:3000/ in the browser to access the application
```
