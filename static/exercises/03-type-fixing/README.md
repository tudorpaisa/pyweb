# Type Fixing

Write a function (or class) which takes a dictionary as schema (where the values represent the desired datatype for the key), and a dictionary with data. The goal is to make sure that the input's types are the same as the schema's. If the type-casting will not work, return `None` instead. In other words, given...

```py
schema = {
    "dinner": float,
    "flowers": int,
    "location": str,
    "mariachi": int
}
```

... cast this ...

```py
data = {
    "dinner": 2.77,
    "flowers": "7",
    "location": "Burning Bridge",
    "mariachi": "priceless"
}
```

into this:

```py
data = {
    "dinner": 2.77,
    "flowers": 7,
    "location": "Burning Bridge",
    "mariachi": None
}
```

## Limitations

Expressions like:

```py
if schema[key] == int:
    return int(value)
```

... are not allowed. In fact, `if` statements are illegal in this exercise.

## Assumptions

You can assume that:
- The keys in your schema will always be in your input dictionary
