# MongoDB aggregate - Excercise 4

## Requirment

Find 3 people with the most total account balance. If a person has the same total asset balance, compare using "firstName" and "lastName" fields.
Hint: Asset balances are stored in the field "wealth.bankAccounts.balance"

## Solution

```agg
db.people.aggregate([
 { $unwind: "$wealth.bankAccounts"},
 { $group: { _id: { firstName: "$firstName", lastName: "$lastName" }, totalBalance: { $sum: "$wealth.bankAccounts.balance" } } },
 { $sort : { totalBalance: -1, "firstName": 1, "lastName": 1 } },
 { $project: {"firstName": 1, "lastName": 1, totalBalance: 1}},
        { $limit : 3}
]).pretty()

```

## Result

```result
{
 "firstName": "Mathilde",
 "lastName": "Bonnet",
 "totalBalance": 68544.28
} {
 "firstName": "Maxime",
 "lastName": "Michel",
 "totalBalance": 67416.83
} {
 "firstName": "Marie",
 "lastName": "Petit",
 "totalBalance": 66765.45
}

```