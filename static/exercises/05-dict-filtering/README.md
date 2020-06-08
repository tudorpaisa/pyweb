# Filtering a dictionary

Write a class `FilteredDict` which takes in a dictionary and keeps just the necessary keys. However, when passing our object to `json.dumps` should output a `json`. Keys not present in our input dictionary, should be replaced with `None`. So, given a `dict`...


```py
my_dict = {
    "fruit": "banana",
    "price": 9.99,
    "comment": "Made in China",
    "weight": 1
}
```

... from which we only want the `fruit` and `price`, create a class `FilteredDict` which is a valid `dict` so it can be passed to `json.dumps` to transform it into a `json` string.

```py
json.dumps(FilteredDict(my_dict))  # { "fruit": "banana", "price": 9.99 }
```
