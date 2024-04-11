from django.core.validators import validate_comma_separated_integer_list
from django.db import models


class ChatRoom(models.Model):
    name = models.CharField(max_length=100)


class Message(models.Model):
    room = models.ForeignKey(ChatRoom, on_delete=models.CASCADE)
    sender = models.CharField(max_length=100)
    content = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)


class Lobby(models.Model):
    id = models.AutoField('ID', primary_key=True)
    url_socket = models.TextField('URL', default='NULL')
    users_count = models.IntegerField('USERS COUNT', default=0)

    def __str__(self):
        return self.id

    class Meta:
        verbose_name = 'Lobby'
        verbose_name_plural = 'Lobbies'
