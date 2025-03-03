# Design

## Models

The model is actually the json file that creates the data of the game. The model
is actually the json file that creates the data of the game. The model consists
of 4 main parts. These are detailed under the following headings.

### Story

### Components

### Events

### Sides

## Sides

There are 5 sides. These are **Green**, **Conservative**, **Liberal**,
**Nationalist**, **Socialist**. These sides have **name**s, **icon**s and
**acceptance** values.

```json
"sidekey": {
    "acceptance": 50,
    "name": "side name",
    "icon": "side icon"
},
```

These values are shown in the header in the game.

![image here]

Also, the side that the decision will affect is shown at the bottom of the
cards.

![image here]
