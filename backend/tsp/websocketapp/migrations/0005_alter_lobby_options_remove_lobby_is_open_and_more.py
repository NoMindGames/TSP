# Generated by Django 4.2.11 on 2024-04-11 10:27

import django.core.validators
from django.db import migrations, models
import re


class Migration(migrations.Migration):

    dependencies = [
        ('websocketapp', '0004_alter_lobby_url_socket'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='lobby',
            options={'verbose_name': 'Lobby', 'verbose_name_plural': 'Lobbies'},
        ),
        migrations.RemoveField(
            model_name='lobby',
            name='is_open',
        ),
        migrations.AddField(
            model_name='lobby',
            name='users_id',
            field=models.CharField(default=0, max_length=100, unique=True, validators=[django.core.validators.RegexValidator(re.compile('^\\d+(?:,\\d+)*\\Z'), code='invalid', message='Enter only digits separated by commas.')], verbose_name='USERS ID'),
        ),
        migrations.AddField(
            model_name='lobby',
            name='users_quantity',
            field=models.IntegerField(default=0, verbose_name='USERS QUANTITY'),
        ),
        migrations.AlterField(
            model_name='lobby',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='lobby',
            name='url_socket',
            field=models.TextField(default='NULL', verbose_name='URL'),
        ),
    ]