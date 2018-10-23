Full Stack Customer Database
========

This project is to practice and demonstrate some of my Spring and React competency. It consists of a back end API built with Spring Boot with an in memory database and a React front end to render the table of customers with CRUD capabilities.

The project was created over the course of a week and I have deployed the front and back ends to lower the barrier of entry for people to view the results.

To view the project visit [this page.](https://trevh86.github.io/CustomerDatabaseFrontEnd/) Be aware that you may need to wait a minute or so for the back end to start back up if it hasn't been used for 30 minutes.

You can also utilize the back end separately by utilizing [this address.](https://customer-database-backend.herokuapp.com/api/customers)


If you would like to clone the project you will need to:

    
    Clone the Repo.
    npm install in the front end directory.
    npm start to run the front end.

    import the back end to Eclipse or IntelliJ for example.
    wait for your IDE to get the dependencies and then run.

## Notes
It is worth noting that this is project would require some additions before seeing production.

Such tweaks are:

    Input validation.
    Authentication with JWT.
    More testing, especially for the front end (Jest, Snapshot, Enzyme).
    Better security configuration for the back end.
    Better security for the front end using JWT.
    Login functionality.
    Currently the deployed front and back ends are running off temporary separate repositories. I would like to either split them permanently or somehow run them from this single repository.
If I get time, I believe I will implement the above tweaks.

Features
--------

- A back end API with GET, POST, DELETE, PATCH and PUT.
- A responsive front end offering CRUD functionality.
- A visually pleasing UI using Material UI, React-Toastify, React-Skylight, React-Confirm-Alert and React-Table.
- Back end testing with JUnit.
- H2 in memory database.

Installation
------------

To install your own instance of this project first you need to clone this repo using git clone or click the clone or download button. Once complete you can follow the back end and front end instructions below:

#### Back End:
    Import into your favourite IDE.
    Wait for it to build your dependencies.
    Run using your IDE to run in embedded server mode.
    OR
    Build using maven with the mvn build command.
    Host using your favourite application server such as Jetty, Tomcat or JBoss.
_Hosting with your application server may cause the API address to be http://localhost:8080/customer-database/api/customers
    instead of http://localhost:8080/api/customers. The API address would need to be changed your front end ./constants/contants.js_

#### Front End:
    Using node package manager enter:
    npm install
    npm start
    The front end will then run and be opened in your default browser on localhost:3000, for example.
