# Generated by Django 3.1.4 on 2020-12-18 16:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('agenda', '0003_auto_20201218_1628'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='consulta',
            options={'ordering': ['horario']},
        ),
        migrations.RemoveField(
            model_name='consulta',
            name='agenda',
        ),
    ]