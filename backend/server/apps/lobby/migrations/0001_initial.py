# Generated by Django 5.0.4 on 2024-05-03 09:48

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Lobby',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, verbose_name='id')),
                ('url_socket', models.TextField(default='NULL', verbose_name='url')),
            ],
            options={
                'verbose_name': 'Lobby',
                'verbose_name_plural': 'Lobbies',
            },
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, verbose_name='id')),
                ('name', models.TextField(default='NULL', verbose_name='name')),
                ('is_master', models.BooleanField(default=False, verbose_name='master')),
                ('lobby_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='lobby.lobby', verbose_name='id')),
            ],
            options={
                'verbose_name': 'User',
                'verbose_name_plural': 'Users',
            },
        ),
        migrations.CreateModel(
            name='Message',
            fields=[
                ('message_id', models.AutoField(primary_key=True, serialize=False, verbose_name='id')),
                ('text', models.TextField(default='NULL', verbose_name='text')),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='lobby.user')),
            ],
            options={
                'verbose_name': 'Message',
                'verbose_name_plural': 'Messages',
            },
        ),
    ]
