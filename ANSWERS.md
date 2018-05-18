<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
Middleware are little javascript implementations that handle data inside of a back-end server. They can either be local (have req, res) or global (don't have and can/are applied to all routes). It can be placed anywhere between two other middleware. Examples of the most common middleware are route handlers, then comes authenticators. One way to track and store user interaction with an application/website can be with sessions. Sessions are ussually created when a user logs-in or interacts with a website and the client is ussually given a cookie with specific info and an id. The cookie's id will be able to check itself with the session data whenever the user interacts with the website, allowing for authentication. Sessions use data on the server-end. Bcrypt is a package that allows for hashing and salting data such as passwords with a time-based hashing approach. You are able to set how many times you would like to hash. JWT are JSON web tokens. They are considered a more mondern way to handle tracking user-website activity because they are compatible accross domains (i think this means different urls for the client and server), are more secure, can hold more information, and do not store any data on the server-end. JSON web tokens are known as JWTs or "Jots". 


2.  What does bcrypt do in order to prevent attacks?
Bcrypt hashes passwords to decrease odds of bruteforce attacks


3.  What are the three parts of the JSON Web Token?
Header, Payload, Signature