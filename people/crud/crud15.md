# MongoDB CRUD - Practice 15

## Requirment

Delete all of everyone's `market` fields.

## Solution

```agg
db.people.updateMany({},{$unset: {"wealth.market" : ""}})
```

## Result

```result

```
