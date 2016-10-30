from django.shortcuts import render
from django.http import JsonResponse

from .program_interface import channels

# Create your views here.
def index (req):
    return render(req, 'index.html')

def tv_listing (req):
    channel_input = req.GET.get('channels').split(',')
    time = req.GET.get('time')

    return JsonResponse(channels.get_channel_data(channel_input,
                                                  1,
                                                  time=time))
