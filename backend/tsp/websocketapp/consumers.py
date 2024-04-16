import json
from channels.generic.websocket import WebsocketConsumer
from .models import ChatRoom, Message

class ChatConsumer(WebsocketConsumer):
    def connect(self):
        self.room_name = self.scope['url_route']['kwargs']['lobby_id']
        self.room_group_name = f'chat_{self.room_name}'

        # Join room group
        self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )

        self.accept()

    def disconnect(self, close_code):
        # Leave room group
        self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    def receive(self, text_data):
        # data = json.loads(text_data)
        # message = data['message']
        # sender = data['sender']
        #
        # room = self.get_room()
        # self.save_message(room, sender, message)
        #
        # # Send message to room group
        # self.channel_layer.group_send(
        #     self.room_group_name,
        #     {
        #         'type': 'chat_message',
        #         'sender': sender,
        #         'message': message
        #     }
        # )
        pass
    #
    # async def chat_message(self, event):
    #     sender = event['sender']
    #     message = event['message']
    #
    #     # Send message to WebSocket
    #     await self.send(text_data=json.dumps({
    #         'sender': sender,
    #         'message': message
    #     }))
    #
    # async def get_room(self):
    #     room, created = await self._get_or_create_room()
    #     return room
    #
    # async def _get_or_create_room(self):
    #     return await self.__class__.async_create_or_get_room(self.room_name)
    #
    # @classmethod
    # async def async_create_or_get_room(cls, room_name):
    #     room, created = await ChatRoom.objects.get_or_create(name=room_name)
    #     return room, created
    #
    # async def save_message(self, room, sender, message):
    #     await Message.objects.create(room=room, sender=sender, content=message)
