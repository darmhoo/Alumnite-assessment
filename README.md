# User Management App

It was built with Vuejs and Tailwind css

## Setup instructions

run npm install to get packages

I am making use of [json server] (https://www.npmjs.com/package/json-server) to mock the backend
it provides me the avenue to make use of REST api calls to get my data.

checkout the .env.example to see the environment variable needed

run npx json-server src/modules/users/data/users.json to start the backend server
run npm start dev to view the project on your browser


## features Overview

the landing page list out the users that are currently on the mock data
the create user page enables us to create user users using the fields provided
images are uploaded to cloudinary whereas the link are stored in out json file
We are able to view specific user by clicking on the uses row needed
Edit of user is also possible using form

## Limitations

I tried using node file system for the json data, but i wasnt able to dur to security reasons
I couldnt implement a pagination incase the data grew out of hand