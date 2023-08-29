# MongoDB Aggregate - Challenge 7

## Requirment

Delete the user with the email `"alicewilliams@example.com"` from the user data.

## Solution

```agg
db.challenges.deleteOne({ email: "alicesmith@example.com" });
```

## Result

```result
{
  acknowledged: true,
  deletedCount: 1
}
```
