from django.db import models


class Lobby(models.Model):
    id = models.CharField('ID', max_length=8, primary_key=True, unique=True)
    is_open = models.BooleanField('Status', default=False)

    def __str__(self):
        return self.id

    class Meta:
        verbose_name = 'Lobby'
        verbose_name_plural = 'Lobby'