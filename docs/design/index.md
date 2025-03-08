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

## Cards

### Red Card

This type of card will only be used in events or events like events. It will
represent events with a national impact, such as a coup or natural disasters. No
other card type should be used with this card.

### Blue Card

Card type to represent event starts only.

### Yellow Card

This card type represents one-time special events. If the card is selected, it
brings some privileges, items, etc. to the user.

### Purple Card

This card type is used for diplomatic transactions. For example, new
legislation, agreements with other countries.

### White Card

Default card type for standard situations.
