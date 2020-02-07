# Code Challenge ADP

Implementing a solution to find the top 5 Ice Cream Shops in Alpharetta, also getting a review of each one.

## Description

In this implementation an API was developed using the stack Node.js, Express and Jest to perform the application tests.

A create-react-app was also developed to show the API results.

## Setup

In the __backend__ folder, execute the following commands:

If you have __yarn__ installed:
```
yarn
```

Or if you prefer to use __npm__:
```
npm install
```

Then go to the __frontend__ folder and run the same command.

This will install all the necessary dependencies to run the applications.

To start the applications, open two terminals, one in the frontend folder and another in the backend folder and run the command _yarn start_ or _npm start_ on each terminal.

## API specification

Access the implementation at http://localhost:3333.

### Business Controller

__GET /businesses__

Search and return the businesses.

_Parameters_

limit: Optional parameter that limits the amount of results returned. The default value is 5 and the maximum is 50.

_Responses_

`200 OK` Success in searching and returning the businesses. Returns a _businesses array_.

`400 BAD REQUEST` Error getting the businesses.

### Reviews Controller

__GET /reviews/{businessId}__

Returns the reviews of a business.

_Parameters_

limit: Optional parameter that limits the amount of results returned. The default value is all reviews of the business.

_Responses_

`200 OK` Success in searching and returning the businesses. Returns a _businesses array_.

`400 BAD REQUEST` Error getting the reviews of the business.

## React App specification

Access the implementation at http://localhost:3000.

### Home Page

This page contains a __BusinessesList__ component that does a request to _/businesses_ using 5 as the limit of the businesses. 

Each business in __BusinessesList__ is a __BusinessesBox__ component that contains the business information and a __Review__ component.

__Review__ component receive the business data and does a request to _/reviews/{businessId]_ using 1 as the limit of the reviews.

Also was developed two components __BusinessPlaceholder__ and __ReviewPlaceholder__ that are shown while the API doesn't return the information.
