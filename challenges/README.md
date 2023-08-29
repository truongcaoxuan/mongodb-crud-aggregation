# Mongoose Aggregation Challenges

## Challenges list

**challenge01**: Find all users who are located in New York.

- usage : `find()`

**challenge02**: Find the user(s) with the email "**[johndoe@example.com](mailto:johndoe@example.com)**" and retrieve their favorite movie.

- usage: `find()`

**challenge03**: Find all users with "pizza" as their favorite food and sort them according to age.

- usage stage : `aggregate( $match , $sort )`

**challenge04**: Find all users over 30 whose favorite color is "green".

- usage stage : `aggregate( $match )`

**challenge05**: Count the number of users whose favorite movie is "The Shawshank Redemption."

- usage stage : `aggregate( $match , $count )`

**challenge06**: Update the zipcode of the user with the email "**[johndoe@example.com](mailto:johndoe@example.com)**" to "10002".

- usage stage : `aggregate( $match , $set )`

**challenge07**: Delete the user with the email "**[alicewilliams@example.com](mailto:alicewilliams@example.com)**" from the user data.

- usage stage : `deleteOne()`

**challenge08**: Group users by their favorite movie and retrieve the average age in each movie group.

- usage stage : `aggregate( $group )`

**challenge09**: Calculate the average age of users with a favorite " pizza " food.

- usage stage : `aggregate( $match , $group, $project )`

**challenge10**: Perform a lookup aggregation to retrieve the orders data along with the customer details for each order.

- usage stage : `aggregate( $lookup )`

## More Tasks on Aggregation

**challenge11** Group users by their favorite color and retrieve the count of users in each color group.

- usage stage : `aggregate( $group , $sum, $sort )`

**challenge12** Find the user(s) with the highest/Lowest age.

- usage : `find().sort().limit()`

**challenge13** Find the most common favorite food among all users.

- usage stage : `aggregate( $group , $sort, $limit )`

**challenge14** Calculate the total count of friends across all users.

- usage stage : `aggregate( $project , $sort )`

**challenge15** Find the user(s) with the longest name.

- usage stage : `aggregate( $addFields , $sort, $limit )`

**challenge16** Calculate each state's total number of users in the address field.

- usage stage : `aggregate( $group , $sort )`

**challenge17** Find the user(s) with the highest number of friends.

- usage stage : `aggregate( $project , $sort, $limit )`

These tasks involve using various aggregation operators such as **`$group`**, **`$avg`**, **`$max`**, **`$sum`**, and **`$project`** to perform complex calculations and data transformations. You can write MongoDB aggregation queries to accomplish each task based on user data. Adjust the queries according to your specific implementation and requirements.
