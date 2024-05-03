# Generated by Django 3.2.25 on 2024-05-03 08:27

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('lobby', '0004_lobby_url_socket'),
    ]

    operations = [
        migrations.AlterField(
            model_name='users',
            name='lobby_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='lobby.lobby', verbose_name='id'),
        ),
    ]