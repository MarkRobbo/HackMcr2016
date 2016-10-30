from django.shortcuts import render
from django.http import JsonResponse

from .program_interface import channels
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
def index (req):
    return render(req, 'index.html')

@csrf_exempt
def tv_listing (req):
    if req.method == 'GET':
        channel_input = req.GET.get('channels').split(',')
        time = req.GET.get('time')
    else:
        channel_input = req.POST.get('channels').split(',')
        time = req.POST.get('time')

    return JsonResponse(channels.get_channel_data(channel_input,
                                                  1,
                                                  time=time))
