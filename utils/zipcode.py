import csv

zipcodes = set()
with open('static/data/bar_locations.csv', 'rb') as csvfile:
    reader = csv.reader(csvfile)
    for row in reader:
        try:
            zipcodes.add(int(row[1][:5]))
        except:
            pass
listOfZips = list(zipcodes)

incidents = [0] * len(listOfZips)
    
with open('static/data/bar_locations.csv', 'rb') as csvfile:
    reader = csv.reader(csvfile)
    for row in reader:
        try:
            zipcode = int(row[1][:5])
            index = listOfZips.index(zipcode)
            incidents[index] = incidents[index] + int(row[6])
            print incidents[index]
        except:
            pass
        