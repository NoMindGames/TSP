# Generated by Django 3.2.25 on 2024-04-05 12:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('websocketapp', '0003_lobby_url_socket'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lobby',
            name='url_socket',
            field=models.TextField(verbose_name='URL'),
        ),
    ]
