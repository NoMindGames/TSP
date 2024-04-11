# Generated by Django 3.2.25 on 2024-04-05 12:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('websocketapp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Lobby',
            fields=[
                ('id', models.CharField(max_length=8, primary_key=True, serialize=False, unique=True, verbose_name='ID')),
                ('is_open', models.BooleanField(default=False, verbose_name='Status')),
            ],
            options={
                'verbose_name': 'Lobby',
                'verbose_name_plural': 'Lobby',
            },
        ),
    ]