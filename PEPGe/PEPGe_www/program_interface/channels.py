import requests
from datetime import datetime

API_URL = 'http://epgservices.sky.com/tvlistings-proxy/TVListingsProxy/tvlistings.json'

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

    response = requests.get(API_URL, params={
        'channels': ','.join(channels),
        'time': time.strftime('%Y%m%d%H%M'),
        'duration': duration,
        'detail': detail,
        'siteId': siteId
    })
    response.raise_for_status()

    return response.json()
