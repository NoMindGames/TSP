from django.db import models


class Lobby(models.Model):
    id = models.AutoField('id', primary_key=True)
    url_socket = models.TextField('url', default='NULL')
    #users_count = models.IntegerField('users_count', default=0)

    def __str__(self):
        return self.id

    class Meta:
        verbose_name = 'Lobby'
        verbose_name_plural = 'Lobbies'


class Users(models.Model):
    id = models.AutoField('id', primary_key=True)
    name = models.TextField('name', default='NULL')
    is_master = models.BooleanField('master', default = False)
    #lobby_id = models.AutoField('lobby_id')
    lobby_id = models.ForeignKey(Lobby, models.CASCADE)

    def __str__(self):
        return self.id

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'


class Chat(models.Model):
    message_id = models.AutoField('id', primary_key=True)
    text = models.TextField('text', default='NULL')
    #user_id = models.AutoField('user_id')
    user_id = models.ForeignKey(Users, models.DO_NOTHING)

    def __str__(self):
        return self.message_id

    class Meta:
        verbose_name = 'Message'
        verbose_name_plural = 'Messages'