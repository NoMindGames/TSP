from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('lobby/', include('server.apps.lobby.urls'))
]
