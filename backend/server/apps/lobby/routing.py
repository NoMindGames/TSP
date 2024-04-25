from django.urls import re_path
from .consumers import LobbyConsumer

urlpatterns = [
  re_path(r'ws/lobby/(?P<lobby_id>\d+)/$', LobbyConsumer.as_asgi()),
]
