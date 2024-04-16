from .models import ChatRoom, Message, Lobby
from django.http import JsonResponse

def get_url(request, lobby_id):
    return f'ws://{request.get_host()}/ws/lobby/{lobby_id}/'

def lobby_create(request):
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


def lobby_connection(request):
    if request.method == 'GET':
        lobby_id = request.GET.get('id')
        lobby = Lobby.objects.filter(id=lobby_id)[0]
        lobby.users_count += 1
        lobby.save()
        context = {
            'lobby_id': lobby_id,
            'url': lobby.url_socket,
            'user_id': lobby.users_count,
        }
        return JsonResponse(context)

def healthcheck(request):
    return JsonResponse({'status': 'ok', 'backend_version': '1.0'})