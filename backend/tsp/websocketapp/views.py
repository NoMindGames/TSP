from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import ChatRoom, Message, Lobby
from django.http import JsonResponse
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync
from . import config
from channels.routing import ProtocolTypeRouter, URLRouter


def lobby_create(request):
    lobby = Lobby()
    lobby.url_socket = 'URLRouter'
    lobby.users_quantity = 1
    lobby.save()
    context = {
        'id': lobby.id,
        'url': lobby.url_socket,
        'id_host': lobby.users_id[0]
    }
    return JsonResponse(context)
    # room_name = request.POST.get('room_name')
    # if room_name:
    # room, created = ChatRoom.objects.get_or_create(name=room_name)
    # return redirect('chatroom', room_name=room_name)
    # rooms = ChatRoom.objects.all()
    # return render(request, 'websocketapp/index.html', {'rooms': rooms})


def lobby_connection(request):
    if request.method == 'GET':
        #lobby_id = Lobby.id()
        lobby_id = request.GET.get('id')
        lobby = Lobby.objects.filter(id=lobby_id)
        if lobby.users_quantity == 10:
            return JsonResponse({'success': False}, 'Lobby is full')
        else:
            lobby.users_quantity += 1
            lobby.users_id.append(lobby.users_id[len(lobby.users_id)-1]+1)
        lobby.save()
        context = {
            'url': lobby.url_socket,
            'user_id': lobby.users_id[len(lobby.users_id) - 1],
            'lobby': lobby_id
        }
        return JsonResponse(context)

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
