# MongoDB Aggregate - Challenge 14

## Requirement

Calculate the total count of friends across all users.

## Solution

```agg
db.challenges.aggregate([
    {$project: { "name": 1, "numFriend": { $size:"$friends" }}},
    { "$sort": { "numFriend": -1 } }
])
```

## Result

```result
{
  _id: ObjectId("64ed4ed7345377d730c0ac99"),
  name: 'John Doe',
  numFriend: 2
}
{
  _id: ObjectId("64ed4ed7345377d730c0ac9a"),
  name: 'Pohn Doe',
  numFriend: 2
}
{
  _id: ObjectId("64ed4ed7345377d730c0ac9b"),
  name: 'Dohn Doe',
  numFriend: 2
}
{
  _id: ObjectId("64ed4ed7345377d730c0ac9d"),
  name: 'David Wilson',
  numFriend: 2
}
{
  _id: ObjectId("64ed4ed7345377d730c0ac9e"),
  name: 'Olivia Johnson',
  numFriend: 2
}
{
  _id: ObjectId("64ed4ed7345377d730c0ac9f"),
  name: 'William Martinez',
  numFriend: 2
}
{
  _id: ObjectId("64ed4ed7345377d730c0aca0"),
  name: 'Mia Taylor',
  numFriend: 2
}
{
  _id: ObjectId("64ed4ed7345377d730c0aca1"),
  name: 'Ethan Anderson',
  numFriend: 2
}
{
  _id: ObjectId("64ed4ed7345377d730c0aca2"),
  name: 'Ava Moore',
  numFriend: 2
}
{
  _id: ObjectId("64ed4ed7345377d730c0aca3"),
  name: 'Benjamin Hill',
  numFriend: 2
}
{
  _id: ObjectId("64ed4ed7345377d730c0aca4"),
  name: 'Charlotte Lee',
  numFriend: 2
}
```
