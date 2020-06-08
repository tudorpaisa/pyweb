# Multi-type casting

NOTE: This exercise might contain spoilers to the _Type Fixing_ exercise

Write a class `MultiType` which represents multiple correct data types for dictionary. When called, this class should cast an input to the first matching data type. If no typecasting is successful, the class should return `None`.

```py
schema = {
    "dinner": MultiType(float, str),
    "flowers": MultiType(int)
}
```

... cast this ...

```py
data = {
    "dinner": "2.77",
    "flowers": "7.75"
}
```

into this:

```py
data = {
    "dinner": 2.77,
    "flowers": None
}
```

## Assumptions

You can assume that:
- The keys in your schema will always be in your input dictionary
