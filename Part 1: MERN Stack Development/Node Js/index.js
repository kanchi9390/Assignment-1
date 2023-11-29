const fs = require("fs");

// Function to calculate the total number of posts for each user
function calculateTotalPosts(users) {
  users.forEach((user) => {
    const totalPosts = user.posts.length;
    user.totalPosts = totalPosts;
  });
}

// Function to read JSON file
function readJSONFile(filename) {
  const rawData = fs.readFileSync(filename);
  return JSON.parse(rawData);
}

// Function to write JSON file
function writeJSONFile(filename, data) {
  const jsonData = JSON.stringify(data, null, 2);
  fs.writeFileSync(filename, jsonData);
}

// Read user data from the input JSON file
const userData = readJSONFile("exampleFile.json");

// Calculate the total number of posts for each user
calculateTotalPosts(userData);

// Write the modified data to the output JSON file
writeJSONFile("newExampleFile.json", userData);

console.log(
  "Data manipulation complete. Check the output file:newExampleFile.json"
);

//const add = require("./calculator");

//console.log(add(6, 3));
