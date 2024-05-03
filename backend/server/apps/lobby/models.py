from django.db import models


class Lobby(models.Model):
    id = models.AutoField('id', primary_key=True)
    url_socket = models.TextField('url', default='NULL')

    def __str__(self):
        return f"{self.id}"

    class Meta:
        verbose_name = 'Lobby'
        verbose_name_plural = 'Lobbies'


class User(models.Model):
    id = models.AutoField('id', primary_key=True)
    name = models.TextField('name', default='NULL')
    is_master = models.BooleanField('master', default = False)
    lobby_id = models.ForeignKey(Lobby, on_delete=models.CASCADE, verbose_name="id")

    def __str__(self):
        return f"{self.id}"

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'


class Message(models.Model):
    message_id = models.AutoField('id', primary_key=True)
    text = models.TextField('text', default='NULL')
    user_id = models.ForeignKey(User, on_delete=models.DO_NOTHING)

    def __str__(self):
        return f"{self.message_id}"

    class Meta:
        verbose_name = 'Message'
        verbose_name_plural = 'Messages'