# Generated by Django 3.1.4 on 2020-12-18 15:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('medicos', '0004_auto_20201218_1556'),
    ]

    operations = [
        migrations.AlterField(
            model_name='medico',
            name='email',
            field=models.CharField(blank=True, max_length=255, null=True, unique=True),
        ),
    ]