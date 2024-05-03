from django.http import JsonResponse
from .models import Lobby, Users


def get_url(request, lobby_id):
    return f'ws://{request.get_host()}/ws/lobby/{lobby_id}/'


def create(request):
    if request.method == 'GET':
        lobby_master = request.GET.get('name')
        lobby = Lobby()
        lobby.save()
        lobby.url_socket = get_url(request, lobby.id)
        lobby.save()

        user = Users(name=lobby_master, is_master=True, lobby_id=lobby)
        user.save()
        context = {
            'lobby_id': lobby.id,
            'url': lobby.url_socket,
            'user_id': user.id,
            'is_master': user.is_master
        }
        return JsonResponse(context)
    else:
        return JsonResponse({'request': 'not GET'})


def connection(request):
    if request.method == 'GET':
        lobby_id = request.GET.get('id')
        user_name = request.GET.get('name')
        lobby = Lobby.objects.get(id=lobby_id)
        lobby.save()


        user = Users(name=user_name, is_master=False, lobby_id=lobby)
        user.save()

        context = {
            'lobby_id': lobby.id,
            'url': lobby.url_socket,
            'user_id': user.id,
            'is_master': user.is_master
        }
        return JsonResponse(context)
    else:
        return JsonResponse({'request': 'not GET'})


def healthcheck(request):
    return JsonResponse({'status': 'ok', 'backend': '1.0'})
