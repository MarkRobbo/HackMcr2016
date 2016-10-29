from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^tv-listing$', views.tv_listing, name='listing')
]
