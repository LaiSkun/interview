# SparkMinds Coding Challenge (Java - React)

## The case study: Affiliate marketing

Affiliate marketing is one of the key activities, when introduce a new product.
To tackle that challenge, SparkMindsJSC wants to provide an API, via which seller can support sell the new product and earn the rewards.

The software stores the data in a database and generates the links for seller. The seller can send this link to buyer. When buyer buy the product by this link, seller will receive the rewards.

## Product Requirements

- [ ] I want to provide a screen to let seller can create an account and login to the dashboard, the user information should contain:
  - [ ] email (unique)
  - [ ] name
  - [ ] password
  - [ ] refferal code (random string is generated from BE - unique for each user)
- [ ] for each seller link I want to provide
  - [ ] link
  - [ ] product_name
  - [ ] user_id
  - [ ] is_deleted
  - [ ] created_date
- [ ] A screen to show all link of current logged in user (should have a button to delete the link)
- [ ] A screen to let user create new link

## Your Mission

Create a Java backend application and a React frontend application that satisfies all must-have requirements above, plus any nice-to-have requirements you wish to include.

For that, you'll need to provide a REST-API, set up a database and generate a random refferal code, that unique for each user.

You can use any boilerplate/approach you prefer, but try to keep it simple. We encourage you to use your favorite tools and packages to build a solid web application.

You don't have to host your service publicly, but feel free to do that.
Please include a description in the README.md how to run the project locally and provide us a well done description for the API.

The final delivery must be running with Docker.

## Tech Requirements

- Use the LTS version of Java 17 and React 18

## Instructions

- Fork this repo
- The challenge is on!
- Build a performance, clean and well-structured solution
- Commit early and often. We want to be able to check your progress
- Please complete your working solution within 3 days of receiving this challenge, and be sure to notify us with a link to your repo, when it is ready for review.

**Happy coding!**


Description:
First of all, I apologize for not using Java ver 17 because I do not have JDK17 files and most of my projects use Java 11 so I apologize for not being able to meet the Java 17 requirements. Sorry about that

Start Front-end(React 18)
Npm start

Start Back-end(Java 11) 























API Description
Overview
The API provides endpoints for managing links, including creating, searching, deleting, and using links.

The API provides endpoints for user authentication and referral code creation.
Endpoints
1. Manage Links
* Base URL: /link
1.1 Create Link
* URL: /create
* Method: POST
* Consumes: application/json
* Produces: application/json
* Description: Creates a new link.
* Request Body:
* productName: Name of the product associated with the link.
* ownerLink: Email address of the link owner.
* Responses:
* Success (HTTP Status 200 OK): Returns a JSON object indicating successful link creation.
* Failure (HTTP Status 400 Bad Request): Returns an error message.
1.2 Search Link
* URL: /search
* Method: POST
* Consumes: application/json
* Produces: application/json
* Description: Searches for links based on the provided criteria.
* Request Body:
* productName: (Optional) Name of the product associated with the link.
* ownerLink: (Optional) Email address of the link owner.
* Responses:
* Success (HTTP Status 200 OK): Returns a JSON object containing the search results.
* Failure (HTTP Status 400 Bad Request): Returns an error message.
1.3 Delete Link
* URL: /delete
* Method: POST
* Consumes: application/json
* Produces: application/json
* Description: Deletes a link.
* Request Body:
* productName: Name of the product associated with the link to be deleted.
* ownerLink: Email address of the link owner.
* Responses:
* Success (HTTP Status 200 OK): Returns a JSON object indicating successful link deletion.
* Failure (HTTP Status 400 Bad Request): Returns an error message.
1.4 Use Link
* URL: /uselink
* Method: POST
* Consumes: application/json
* Produces: application/json
* Description: Marks a link as used by a user.
* Request Body:
* productName: Name of the product associated with the link.
* ownerLink: Email address of the link owner.
* Responses:
* Success (HTTP Status 200 OK): Returns a JSON object indicating successful link usage.
* Failure (HTTP Status 400 Bad Request): Returns an error message.



2. User Authentication
* Base URL: /seller
2.1 Login
* URL: /login
* Method: POST
* Consumes: application/json
* Produces: application/json
* Description: Authenticates a user.
* Request Body:
* email: User's email address.
* password: User's password.
* Responses:
* Success (HTTP Status 200 OK): Returns a JSON object indicating successful login.
* Failure (HTTP Status 400 Bad Request): Returns an error message.
2.2 Create User
* URL: /create
* Method: POST
* Consumes: application/json
* Produces: application/json
* Description: Creates a new user account.
* Request Body:
* email: User's email address.
* password: User's password.
* Responses:
* Success (HTTP Status 200 OK): Returns a JSON object indicating successful account creation.
* Failure (HTTP Status 400 Bad Request): Returns an error message.
2.3 Create Referral Code
* URL: /refferal
* Method: POST
* Consumes: application/json
* Produces: application/json
* Description: Creates a referral code for a user.
* Request Body:
* email: User's email address.
* name: User's name.
* Responses:
* Success (HTTP Status 200 OK): Returns a JSON object containing the created referral code.
* Failure (HTTP Status 400 Bad Request): Returns an error message.

