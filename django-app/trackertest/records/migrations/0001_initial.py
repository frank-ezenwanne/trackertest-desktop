# Generated by Django 3.2.19 on 2023-06-24 04:05

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='DailyPlan',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateTimeField(default=django.utils.timezone.now)),
                ('tasks_num', models.IntegerField()),
                ('complete_hrs', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='DailyReview',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateTimeField(default=django.utils.timezone.now)),
                ('title', models.CharField(max_length=255)),
                ('content', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Stats',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateTimeField(default=django.utils.timezone.now)),
                ('activity', models.CharField(max_length=20)),
                ('time', models.IntegerField()),
                ('keyboard_taps', models.IntegerField()),
                ('clicked_submit', models.BooleanField(default=False)),
                ('clicked_box', models.BooleanField(choices=[('DRV', 'Daily_Review'), ('DRP', 'Daily_Proposal'), ('GML', 'Gmail'), ('SKP', 'Skype')], default=False)),
            ],
        ),
    ]
