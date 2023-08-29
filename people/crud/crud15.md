# MongoDB CRUD - Practice 15

## Requirement

Delete all of everyone's `market` fields.

## Solution

```agg
db.people.updateMany({},{$unset: {"wealth.market" : ""}})
```

## Result

```result

```
