def type_fixer(schema: dict, data: dict) -> dict:
    return data


schema = {"dinner": float, "flowers": int, "location": str, "mariachi": int}

data = [{
    "dinner": 2.77,
    "flowers": "7",
    "location": "Burning Bridge",
    "mariachi": "priceless"
}, {
    "dinner": 1337,
    "flowers": "black",
    "location": "London",
    "mariachi": False
}, {
    "dinner": "41.99",
    "flowers": 13.4,
    "location": 777,
    "mariachi": True
}]

for i in data:
    print(type_fixer(schema, i))
