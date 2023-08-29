# MongoDB Aggregate - Challenge 5

## Requirment

Count the number of users whose favorite movie is `"The Shawshank Redemption"`.

## Solution

```agg
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
```

## Result

```result
{
  total: 3
}
```
