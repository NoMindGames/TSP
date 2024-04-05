from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import ChatRoom, Message, Lobby
from django.http import JsonResponse
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync
from . import config
from channels.routing import ProtocolTypeRouter, URLRouter


def lobby(request):
    if request.method == 'GET':
        lobby = Lobby(request.GET)
        config.id_lobby = config.id_lobby + 1
        lobby.id = config.id_lobby
        lobby.is_open = True
        lobby.url_socket = URLRouter(websocket_urlpatterns)
        lobby.save()
        context = {
            'id': lobby.id,
            'url': lobby.url_socket
        }
        return JsonResponse({'sucsess': True}, context)
    return JsonResponse({'success': False, 'error': 'Invalid request'})
    # room_name = request.POST.get('room_name')
    # if room_name:
    # room, created = ChatRoom.objects.get_or_create(name=room_name)
    # return redirect('chatroom', room_name=room_name)
    # rooms = ChatRoom.objects.all()
    # return render(request, 'websocketapp/index.html', {'rooms': rooms})


def lobby_connection(request):
    if request.method == 'GET':
        lobby = Lobby(request.GET)
        if lobby.is_open:
            k = 0
            for i in range(len(config.list_users)):
                if config.list_users[i] != 0:
                    k = k+1
                    if i == 0:
                        config.list_users[i] = 1
                        context={
                            'id_users': config.list_users[i]
                        }
                        return JsonResponse({'sucsess': True}, context)
                    else:
                        config.list_users[i] = config.list_users[i - 1] + 1
                        context = {
                            'id_users': config.list_users[i]
                        }
                        return JsonResponse({'sucsess': True}, context)
            if k == len(config.list_users):
                return JsonResponse({'success': False, 'error': 'Lobby is full'})
    return JsonResponse({'success': False, 'error': 'Invalid request'})


def chatroom(request, room_name):
    if request.method == 'POST':
        message_content = request.POST.get('message')
        if message_content:
            room, created = ChatRoom.objects.get_or_create(name=room_name)
            Message.objects.create(room=room, content=message_content, sender=request.user)
            # После сохранения сообщения перенаправляем обратно на страницу комнаты
            return redirect('chatroom', room_name=room_name)
    room, created = ChatRoom.objects.get_or_create(name=room_name)
    messages = Message.objects.filter(room=room).order_by('-timestamp')[:50]
    return render(request, 'websocketapp/chatroom.html', {'room_name': room_name, 'messages': messages})
