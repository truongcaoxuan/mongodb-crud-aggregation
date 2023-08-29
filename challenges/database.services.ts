import practiceData from "./practiceData.json";
import orders from "./orders.json";
import customers from "./customers.json";
let db: any = practiceData;
let od: any = orders;
let ct: any = customers;

// Task 1: Find all users who are located in New York.
db.challenges.find({ "address.city": "New York" });

// Task 2: Find the user(s) with the email "johndoe@example.com" and retrieve their favorite movie.
db.challenges
  .find({ email: "johndoe@example.com" })
  .project({ "favorites.movie": true });

// Task 3: Find all users with "pizza" as their favorite food and sort them according to age.
db.challenges.aggregate([
  // pipeline 1 --> find people who loves pizza
  {
    $match: { "favorites.food": "pizza" },
  },
  // pipeline 2 --> sort them by age
  {
    $sort: { age: 1 },
  },
]);

// Task 4: Find all users over 30 whose favorite color is "green".
db.challenges.aggregate([
  // pipeline 1 --> find people older than 30 and favourite color is green
  {
    $match: { age: { $gt: 30 }, "favorites.color": "green" },
  },
]);

// Task 5: Count the number of users whose favorite movie is "The Shawshank Redemption."
db.challenges.aggregate([
  // pipeline 1 --> people who loves The Shawshank Redemption.
  {
    $match: { "favorites.movie": "The Shawshank Redemption" },
  },
  // pipeline 2 --> calculates the people who loves that movie
  {
    $count: "total",
  },
]);

// Task 6: Update the zipcode of the user with the email "johndoe@example.com" to "10002".
db.challenges.aggregate([
  // pipeline 1 --> find user by emaal
  {
    $match: { email: "johndoe@example.com" },
  },
  // pipeline 2 --> update the zipcode
  {
    $set: { "address.zipcode": "10002" },
  },
]);

//Task 7: Delete the user with the email "alicewilliams@example.com" from the user data.
db.challenges.deleteOne({ email: "alicesmith@example.com" });

// Task 8: Group users by their favorite movie and retrieve the average age in each movie group.
db.challenges.aggregate([
  // pipeline 1 --> group user by favorite movie
  // and return their average age in each group
  {
    $group: {
      _id: "$favorites.movie",
      average: { $avg: "$age" },
    },
  },
]);

// Task 9: Calculate the average age of users with a favorite " pizza " food.
db.challenges.aggregate([
  // pipeline 1 --> people who loves pizza
  {
    $match: { "favorites.food": "pizza" },
  },
  // pipeline 2 --> average age of that group
  {
    $group: {
      _id: null,
      average: { $avg: "$age" },
    },
  },
  // pipeline 3 --> closest integer
  {
    $project: {
      _id: 0,
      average: { $floor: { $toInt: "$average" } },
    },
  },
]);

// Task 10: Perform a lookup aggregation to retrieve the orders data along with the customer details for each order.
db.orders.aggregate([
  {
    $lookup: {
      from: "customers",
      localField: "customer_id",
      foreignField: "_id",
      as: "inventory",
    },
  },
  {
    $project: { inventory: true },
  },
]);
