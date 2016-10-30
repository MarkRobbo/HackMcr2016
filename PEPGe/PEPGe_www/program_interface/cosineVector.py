from scipy import spatial
import channels

PROGRAM_FAVORITES = {
    "Overboard": [8.5, 6, 4, 'ITV'],
    "Saturday Kitchen Live": [9, 3, 10, 'BBC One Lon'],
    "Later... with Jools Holland": [1, 4, 6, 'BBC Two Eng']
}
"""The favorites of the sample user.
"""

def create_vector (program_parameters, favorite_parameters, weights):
    """Create a weighted dataset to compute the program similarity.
    """

    vector = []

    vector.append(program_parameters["relevance"])

    if program_parameters["channel"] == favorite_parameters["channel"]:
        vector.append(weights[0])
    else:
        vector.append(0)

    if program_parameters["genre"] == favorite_parameters["genre"]:
        vector.append(weights[1])
    else:
        vector.append(0)

    if (program_parameters["genre"] == favorite_parameters["genre"]
        and program_parameters["subgenre"] == favorite_parameters["subgenre"]):
        vector.append(weights[2])
    else:
        vector.append(0)

    return vector

def programSimilarity(chanel, time):
    """Compute the similarity of a channel to a user's preference.
    """

    channel_data = channels.get_channel_data(chanel, time)
    outerResults = {}

    for d, favorite in PROGRAM_FAVORITES.items():
        results = {}

        favorite_parameters = {
            "relevance": favorite[0],
            "genre": favorite[1],
            "subgenre": favorite[2],
            "channel": favorite[3]
        }

        for channel, program_parameters in channel_data.items():

            if program_parameters['relevance'] == None:
                program_parameters['relevance'] = 0
            program_parameters['channel'] = channel

            dataSetI = create_vector(program_parameters,
                                     favorite_parameters,
                                     [3, 6, 8])

            favorite_parameters['channel'] = 3
            dataSetII = list(favorite_parameters.values())

            #difference between vectors
            result = 1 - spatial.distance.cosine(dataSetI, dataSetII)
            results[program_parameters['name']] = result

        outerResults[d] = results

    return outerResults
