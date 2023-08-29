# MongoDB CRUD - Practice 3

## Requirment

Count all people with names:

- `Lucas Dubois`
- `Camille Dubois`

## Solution

```agg
db.people.find({$or: [{"firstName": "Lucas", "lastName": "Dubois"}, {"firstName": "Camille", "lastName": "Dubois"}]}).count()
```

## Result

```result
471
```
