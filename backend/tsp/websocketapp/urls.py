from django.urls import path
from . import views

urlpatterns = [
    path('healthcheck/', views.healthcheck),
    path('create/', views.lobby_create, name='lobby_create'), #Маршрут для создания лобби
    path('connection/', views.lobby_connection, name='lobby_connection') #Маршрут для подключения к лобби
]
