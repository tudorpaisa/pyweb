class MultiType:
    pass


schema = {"dinner": MultiType(float, str), "flowers": MultiType(int)}

data = [{"dinner": "2.77", "flowers": "7.75"}, {"dinner": "9", "flowers": 10}]

for i in data:
    print("dinner:", schema["dinner"](i["dinner"]))
    print("flowers:", schema["flowers"](i["flowers"]))
