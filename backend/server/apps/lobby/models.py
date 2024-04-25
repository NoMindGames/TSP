from django.db import models


class Lobby(models.Model):
    id = models.AutoField('id', primary_key=True)
    url_socket = models.TextField('url', default='NULL')
    users_count = models.IntegerField('users_count', default=0)

    def __str__(self):
        return self.id

    class Meta:
        verbose_name = 'Lobby'
        verbose_name_plural = 'Lobbies'
