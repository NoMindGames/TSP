from django.db import models


class ChatRoom(models.Model):
    name = models.CharField(max_length=100)


class Message(models.Model):
    room = models.ForeignKey(ChatRoom, on_delete=models.CASCADE)
    sender = models.CharField(max_length=100)
    content = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)


class Lobby(models.Model):
    id = models.CharField('ID', max_length=8, primary_key=True, unique=True)
    is_open = models.BooleanField('Status', default=False)
    url_socket = models.TextField('URL')

    def __str__(self):
        return self.id

    class Meta:
        verbose_name = 'Lobby'
        verbose_name_plural = 'Lobby'
