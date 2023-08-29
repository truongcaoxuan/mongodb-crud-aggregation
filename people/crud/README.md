# MongoDB CRUD Practices

Using data Collection `people.json`

## CRUD list

**CRUD- Practice01**: Count all the people named `Pauline Fournier`.

- Collection Methods: `find().count()`

**CRUD- Practice02**: Count all people whose name is `Pauline Fournier` and who were born before `January 1, 1970`.

- Collection Methods: `find( $lt ).count()`

**CRUD- Practice03**: Count all people with names: `Lucas Dubois`, `Camille Dubois`

- Collection Methods: `find( $or ).count()`

**CRUD- Practice04**: Count all the people who have `no credits`.

- Collection Methods: `find( $size ).count()`

**CRUD- Practice05**: Count everyone who spent exactly `$12.99` on the `cinema`.

- Collection Methods: `find( $elemMatch ).count()`

**CRUD- Practice06**: Count all the people whose first payment was `$12.99` for the `cinema`.

In this lesson, you only count cases where `payments[0]` satisfy the above requirement.

- Collection Methods: `find().count()`

**CRUD- Practice07**: Count all the people who have `never been to the cinema` (no cinema payments yet).

- Collection Methods: `find( $not{ $elemMatch }).count()`

**CRUD- Practice08**: Count all the `female` who spent more than `$100` on `shoes` and more than `$50` on `pants` in one bill.

- Collection Methods: `find( $and, $elemMatch ).count()`

**CRUD- Practice09**: Count all the people from `Warsaw`, `Poland` who have been to the `cinema` but never to the `disco`.

- Collection Methods: `find().count( $and, $elemMatch, $not)`

**CRUD- Practice10**: Count all the `female` from `Paris` and `male` from `Cracow` that have all of the following properties: `flat`, `house`, `land`

At least one of the properties must be valued at more than `$2,000,000`, and none of the properties under `$500,000`.

- Collection Methods: `find( $and, $or, $elemMatch, $not).count()`

**CRUD- Practice11**: Count all the people who have exactly `10` transactions.

- Collection Methods: `find().count()`

**CRUD- Practice12**: Finds all people with firstName = `'Thomas'` and returns only the following fields: `_id`, `firstName` and `lastName`.

- Collection Methods: `find().pretty()`

**CRUD- Practice13**: Find everyone who has one or more transactions worth less than `$5`.

The returned results only include the `firstName`, `lastName` and `payments` fields containing only the first word whose amount is less than 5$.

- Collection Methods: `find( $elemMatch ).pretty()`

**CRUD- Practice14**: Add an element to the payments of people who are in `France` with the following structure:

- Collection Methods: `updateOne( $addToSet )`

**CRUD- Practice15**: Delete all of everyone's `market` fields.

- Collection Methods: `updateMany( $unset )`
