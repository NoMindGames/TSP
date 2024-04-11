from django.urls import path
from . import views

urlpatterns = [
    #path('', views.lobby, name='lobby'),  # Маршрут для лобби
    path('chat/<str:room_name>/', views.chatroom, name='chatroom'),  # Маршрут для комнаты чата
    path('lobby_create', views.lobby_create, name='lobby_create'), #Маршрут для создания лобби
    path('lobby_connection', views.lobby_connection, name='lobby_connection') #Маршрут для подключения к лобби
]
