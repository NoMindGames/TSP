# Generated by Django 3.2.25 on 2024-04-05 12:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('websocketapp', '0002_lobby'),
    ]

    operations = [
        migrations.AddField(
            model_name='lobby',
            name='url_socket',
            field=models.TextField(default=0, verbose_name='URL'),
        ),
    ]