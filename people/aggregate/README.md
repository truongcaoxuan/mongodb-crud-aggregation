# MongoDB Aggregation Excercise

Using data Collection `people.json`

## Aggreate list

**aggregate01**: Count the number of people in each country.

- Aggregation Pipeline Stages: `aggregate( $group, $sort )`

**aggregate02**: What is the most popular address and how many people live there?

- Aggregation Pipeline Stages: `aggregate( $group, $sort, $limit )`

**aggregate03**: How many people in each country have ever paid at a restaurant?

- Aggregation Pipeline Stages: `aggregate( $match, $group, $sort )`

**aggregate04**: Find 3 people with the most total account balance. If a person has the same total asset balance, compare using "firstName" and "lastName" fields.

Hint: Asset balances are stored in the field "wealth.bankAccounts.balance"

- Aggregation Pipeline Stages: `aggregate( $unwind, $group, $sort, $project )`

**aggregate05**: Count the number of restaurant payments, the total amount spent, and the average amount per payment by country.

- Aggregation Pipeline Stages: `aggregate( $unwind, $match, $group )`

**aggregate06**: There is a country where the average payment at a restaurant is the highest and a country where the average payment at a restaurant is the lowest. How many times more people in the first country spend than people in the second?

- Aggregation Pipeline Stages: `aggregate( $unwind, $match, $group )`

**aggregate07**: Write a query to find all people with one or more transactions worth less than $5. The returned results only include the fields firstName, lastName and the payments array containing ALL elements with amount less than 5$.

- Aggregation Pipeline Stages: `aggregate( $unwind, $match, $group )`

**aggregate08**: Write a query to calculate the total value that a person has paid by each category.

- Aggregation Pipeline Stages: `aggregate( $unwind, $group )`

**aggregate09**: Count the number of people in each country by age groups as follows:

- 18-29
- 30-39
- 40-49

First of all, the number of people in each group depends on the current day. If we execute our query today or in a week, we may get different results. This is because people are getting older every day.

So it is very important to set an arbitrary date that will be used to calculate one's age.

So we will assume that the current date is: 22/06/2016

- Aggregation Pipeline Stages: `aggregate( $set, $group )`

**aggregate10**: Count the number of people in each country by age groups as follows:
Calculate the percentage of the country's population in the following age groups:

- 18-29
- 30-39
- 40-49

Results must be rounded to two decimal places.

- Aggregation Pipeline Stages: `aggregate( $set, $group , $sort, $group, $project, $unwind, $group, $project )`
