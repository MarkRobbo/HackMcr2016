import urllib, json

def getTestingData():
    with open('sV2X1GsX.json') as data_file:
        data = json.load(data_file)
    return data

def loadShow(film):
    headers = { 'Accept': 'application/json'}
    request = urllib.request.Request('http://api.tvmaze.com/search/shows?q='+film, headers=headers)
    u = urllib.request.urlopen(request)
    output = u.read()
    c = output.decode()
    final = json.loads(c)
    return final

def getRating(film):
    final = loadShow(film)
    u = final[0]['show']['rating']['average']
    return u

def getImage(film):
    final = loadShow(film)
    u = final[0]['show']['image']['medium']
    return u

def findShows():
    data = getTestingData()
    countChannel = len(data['channels'])
    dic = {}
    for i in range(0,countChannel):
        channel = data['channels'][i]
        countShows = len(channel['program'])
        temp = []
        for j in range(0,countShows):
            temp.append(channel['program'][j]['title'])
        #dictionary to hold channel, then shows that are on
        dic[channel['title']] = temp
    return dic



if __name__ == '__main__':
    dict = findShows()
    for d in dict:
        #remove dupes
        new = list(set(dict[d]))
        print(new)
        for i in range(0, len(new)):
            show = new[i]
            y = show.replace(' ', '%20')
            print(y)
            print(getRating(y))