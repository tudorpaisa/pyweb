class FilteredDict:
    pass


import json

inputs = [
    {
        "fruit": "banana",
        "price": 9.99,
        "comment": "Made in China",
        "weight": 1
    },
    {
        "fruit": "apple",
        "weight": 1.5,
        "origin": "Italy"
    },
    {
        "fruct": "grapes",
        "prince": 5.05,
        "weight": 1.5
    },
]

for i in inputs:
    print(json.dumps(FilteredDict(i)))
