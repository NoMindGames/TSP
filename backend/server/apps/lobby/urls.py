from django.urls import path
from . import views

urlpatterns = [
    path('healthcheck/', views.healthcheck, name='healthcheck'),
    path('create/', views.create, name='create'),
    path('connection/', views.connection, name='onnection')
]
