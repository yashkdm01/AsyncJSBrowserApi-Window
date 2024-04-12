// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Define the URL of the API
var apiURL = 'https://jsonplaceholder.typicode.com/users';

// Set up a function to be called when the AJAX request completes
xhr.onload = function() {
  // Check if the request was successful
  if (xhr.status >= 200 && xhr.status < 300) {
    // Parse the JSON response
    var users = JSON.parse(xhr.responseText);
    
    // Log each user's name to the console
    console.log('List of User Names:');
    users.forEach(function(user) {
      console.log(user.name);
    });
  } else {
    // Log an error if the request failed
    console.error('The request failed!');
  }
};

// Initialize a GET request to the API URL
xhr.open('GET', apiURL, true);

// Send the request
xhr.send();
