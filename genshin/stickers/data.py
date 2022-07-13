import os
import re
sets = ['set_1', 'set_2', 'set_3', 'set_4', 'set_5', 'set_6']

stickers = []

def parse(string):
    m = re.search(r'set_(\d+)\\(\d+)_(\w[^_]+)_(\w+)\.png', string)
    sticker = {
        'set': m.group(1),
        'id': m.group(2),
        'character': m.group(3),
        'name': m.group(4),
        'src': m.group(2) + "_" + m.group(3) + "_" + m.group(4)
    }
    return sticker

directory = 'set_4'
for filename in os.listdir(directory):
    f = os.path.join(directory, filename)
    stickers.append(parse(f))

print(stickers)