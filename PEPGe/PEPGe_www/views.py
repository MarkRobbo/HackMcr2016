from django.shortcuts import render
from django.http import JsonResponse

from .program_interface import channels

# Create your views here.
def index (req):
    return render(req, 'index.html')

def tv_listing (req):
    return JsonResponse(channels.get_channel_data(["2002", "2006"], 1))
