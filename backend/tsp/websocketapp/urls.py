from django.urls import path
from . import views

urlpatterns = [
    path('', views.lobby, name='lobby'),  # Маршрут для лобби
    path('chat/<str:room_name>/', views.chatroom, name='chatroom'),  # Маршрут для комнаты чата
]
