import csv
import json

csvfile = open('quotes.csv', 'r')
jsonfile = open('list.json', 'w')

fieldnames = ("quote","author","category")
reader = csv.DictReader(csvfile, fieldnames)
jsonfile.write("[")
counter = 0
for row in reader:
    counter += 1
    if counter > 200000:
        break
    json.dump(row, jsonfile)
    jsonfile.write(',\n')
jsonfile.write("]")