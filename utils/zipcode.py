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
           
        except:
            pass
print max(incidents)
f= open("static/js/zipcode_data.js","w")
str = "var zip_data = {"
for i in range(len(listOfZips)):
     str += "'%d' : %d, " % (listOfZips[i], incidents[i])
str = str.strip(",")
str += "}"
f.write(str)
f.close()