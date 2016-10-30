import requests
from datetime import datetime

SKY_API = 'http://epgservices.sky.com/tvlistings-proxy/TVListingsProxy/tvlistings.json'
TVMAZE_API = 'http://api.tvmaze.com/search/shows'

def get_tv_listing(channels, duration, detail=2, siteId=1, time=None):
    """Get a listing with the given parameters.

    Args:
        channels (list): The channels to request a listing for.
        duration (int): The duration parameter. Effect currently undetermined.
        detail (int): The detail parameter. Effect currently undetermined.
        siteId (int): The siteId parameter. Effect currently undetermined.
        time (:obj:`datetime`, optional) The starting time of the query range.

        If not specified, the current time will be used.

    Returns:
        A dict containing a tv listing for the given parameters.

        The exact response is undefined and determined by sky.
    """

    if time is None:
        time = datetime.now()

    response = requests.get(SKY_API, params={
        'channels': ','.join(channels),
        'time': time.strftime('%Y%m%d%H%M'),
        'duration': duration,
        'detail': detail,
        'siteId': siteId
    })
    response.raise_for_status()

    return response.json()

def get_more_info(show_name):
    """Get additional info for the show show_name.

    Args:
        show_name (str): The name of the show to retrieve information for.

    Returns:
        A dict containing the additional information.
    """

    response = requests.get(TVMAZE_API, params={
        'q': show_name,
    })
    response.raise_for_status()

    return response.json()

def append_tvmaze_info(channel_data):
    """Append tvmaze info to the given sky channel data.

    Args:
        channel_data (dict): The channel data as returned by
            get_tv_listing.
    """

    # If we only have one channel, the list of channels is a dict
    # instead. To avoid iterating over the string of the first
    # key, we need to assign the single show as an array.
    if type(channel_data['channels']) == list:
        channel_list = channel_data['channels']
    else:
        channel_list = [channel_data['channels']]

    for channel in channel_list:
        # Same as above, except for shows in a program.
        if type(channel['program']) == list:
            show_list = channel['program']
        else:
            show_list = [channel['program']]

        # For each show, retrieve and add additional information.
        for show in show_list:
            extra = get_more_info(show['title'])
            try:
                show['rating'] = extra[0]['show']['rating']['average']
                show['image'] = extra[0]['show']['image']['medium']
            except:
                show['rating'] = 0
                show['image'] = 'https://chosenlawyers.com/assets/img/video.png'

def get_channel_data(channels, duration, detail=2, siteId=1, time=None):
    """Get channel data for the given parameters.

    Args:
        channels (list): The channels to request a listing for.
        duration (int): The duration parameter. Effect currently undetermined.
        detail (int): The detail parameter. Effect currently undetermined.
        siteId (int): The siteId parameter. Effect currently undetermined.
        time (:obj:`datetime`, optional) The starting time of the query range.

        If not specified, the current time will be used.

    Returns:
        A dict containing a tv listing for the given parameters.

        The dict format is:
        {
            channel_name: {
                name:
                start:
                duration:
                desc:
                remoteRecordable:
                status:
                image:
                relevance:
            }
        }
    """

    data = get_tv_listing(channels, duration, detail, siteId)
    append_tvmaze_info(data)

    # Same issue as in append_tvmze_info
    if type(data['channels']) == list:
        data = data['channels']
    else:
        data = [data['channels']]

    # Produce the return dict from the acquired data
    ret = {}
    for channel in data:

        ret[channel['title']] = {}
        ret[channel['title']]['name'] = channel['program']['title']
        ret[channel['title']]['start'] = channel['program']['start']
        ret[channel['title']]['duration'] = channel['program']['dur']
        ret[channel['title']]['desc'] = channel['program']['shortDesc']
        ret[channel['title']]['remoteRecordable'] = channel['program']['remoteRecordable']
        ret[channel['title']]['status'] = channel['program']['scheduleStatus']
        ret[channel['title']]['image'] = channel['program']['image']
        ret[channel['title']]['relevance'] = channel['program']['rating']
        ret[channel['title']]['genre'] = channel['program']['genre']
        ret[channel['title']]['subgenre'] = channel['program']['subgenre']

    return ret
