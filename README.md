# Coding Test for Node.Js / Full-stack Developer

A simple HTTP web server using only the HTTP core module.
 
Each project is a JSON entry with the following keys:

	id: The unique ID of the project.
	name: The name of the project.

```
// index.js

var projects = require('./data-store');

// For GET requests, send the data from the projects array. 


// Write your server logic here
```

## Detailed 


- The web server created using only the native `HTTP module`.

- Accepts requests for the GET /projects/:id endpoint, where id is the value passed in the URL. If the ID value is not set or is empty in the URL, the server responds back with the status code 400 and the JSON message {"message" : "BAD REQUEST"}.

- If the ID is valid, server sends a JSON response back with the filtered project data, along with the status code 200.

- If the ID is valid but no matching projects are found for the ID, the server responds with the status code 404 and json message.

- If the request to the web server contains a route other than /projects, the server responds back with the status code 404.

- Server is listening for requests on port 8000. 
