from scipy import spatial
import channels

def programSimilarity(chanel, time):
    #ranking of favourite programs
    # order is [rating, genre, sub genre + genre, channel]
    # this is made up testing data based on one user
    programFavourite = {"Overboard": [8.5, 6, 4, 'ITV'], "Saturday Kitchen Live": [9,3,10,'BBC One Lon']}
    dic = channels.get_channel_data(chanel, time)
    #data = [rating, genre, sub genre + genre, channel]
    outerResults = {}
    results = {}
    # loops through favourite programs
    for d in programFavourite.keys():
        #print(d)
        fav = programFavourite[d]
        rating = fav[0]
        genre = fav[1]
        subgenre = fav[2]
        channel = fav[3]
        #looks at each show for each channel
        for j in dic.keys():
            #print(j)
            data = dic[j]
            rating2 = data['relevance']
            if(rating2 == None):
                rating2 = 0
            genre2 = data['genre']
            subgenre2 = data['subgenre']
            channel2 = j
            if (channel2 == channel):
                chan = 3
                chan2 = 3
            else:
                chan = 0
                chan2 = 3
            if (genre == genre2):
                gen = 6
                gen2 = 6
            else:
                gen = 0
                gen2 = 6
            if ((genre == genre2) and (subgenre == subgenre2)):
                sub = 8
                sub2 = 8
            else:
                sub = 0
                sub2 = 8
            # print(rating)
            # print(rating2)
            # print(gen)
            # print(gen2)
            # print(sub)
            # print(sub2)
            # print(chan)
            # print(chan2)
            dataSetI = [rating, gen, sub, chan]
            dataSetII = [rating2, gen2, sub2, chan2]
            #difference between vectors
            result = 1 - spatial.distance.cosine(dataSetI, dataSetII)
            results[data['name']] = result
        outerResults[d] = results
    return outerResults

if __name__ == '__main__':
    #TEEEESSSTTT
    chanel = ['2002','2006','6000','1621','1800']
    time = 1560
    print(programSimilarity(chanel, time))