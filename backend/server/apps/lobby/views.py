from django.http import JsonResponse
from .models import Lobby


def get_url(request, lobby_id):
    return f'ws://{request.get_host()}/ws/lobby/{lobby_id}/'


def create(request):
    lobby = Lobby()
    lobby.save()
    lobby.url_socket = get_url(request, lobby.id)
    lobby.users_count = 1
    lobby.save()
    context = {
        'lobby_id': lobby.id,
        'url': lobby.url_socket,
        'user_id': lobby.users_count
    }
    return JsonResponse(context)


def connection(request):
    if request.method == 'GET':
        lobby_id = request.GET.get('id')
        lobby = Lobby.objects.get(id=lobby_id)
        lobby.users_count += 1
        lobby.save()
        context = {
            'lobby_id': lobby.id,
            'url': lobby.url_socket,
            'user_id': lobby.users_count,
        }
        return JsonResponse(context)


def healthcheck(request):
    return JsonResponse({'status': 'ok', 'backend': '1.0'})
