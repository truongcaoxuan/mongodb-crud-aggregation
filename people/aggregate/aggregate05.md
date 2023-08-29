# MongoDB aggregate - Excercise 5

## Requirement

Count the number of restaurant payments, the total amount spent, and the average amount per payment by country.

## Solution

```agg
db.people.aggregate([
 { $unwind: "$payments" },
 { $match: { "payments.name" : "restaurant" }},
 { $group: { 
  _id: "$address.country", 
  totalVisits: { $sum: 1 },
  totalAmount: { $sum: "$payments.amount" },
  avgAmount: { $avg: "$payments.amount"} }}
]).pretty()

```

## Result

```result
{
 "_id": "France",
 "totalVisits": 78627.0,
 "totalAmount": 2958352.16000001,
 "avgAmount": 37.625143525761
} {
 "_id": "Poland",
 "totalVisits": 66489.0,
 "totalAmount": 2026963.35,
 "avgAmount": 30.4856946261787
}
```
