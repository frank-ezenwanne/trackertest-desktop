from typing_extensions import Required
from django.db import models
from django.conf import settings
from django.utils import timezone

class DailyReview(models.Model):
    date = models.DateTimeField(default=timezone.now)
    title = models.CharField(max_length=255 )
    content = models.TextField()
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                              on_delete=models.CASCADE)


class DailyPlan(models.Model):
    date = models.DateTimeField(default=timezone.now)
    tasks_num = models.IntegerField() 
    complete_hrs = models.IntegerField()
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                              on_delete=models.CASCADE)



class Stats(models.Model):
    DAILY_REVIEW = 'DRV'
    DAILY_PROPOSAL = 'DRP'
    GMAIL = 'GML'
    SKYPE = 'SKP'

    ACTIVITY_CHOICES=[
        (DAILY_REVIEW,'Daily_Review'),
        (DAILY_PROPOSAL,'Daily_Proposal'),
        (GMAIL,'Gmail'),
        (SKYPE,'Skype')
            ]
    date = models.DateTimeField(default=timezone.now)
    activity = models.CharField(max_length=20)  
    time = models.IntegerField() #seconds
    keyboard_taps = models.IntegerField()
    clicked_submit = models.BooleanField(default=False)
    clicked_box = models.BooleanField(default=False, choices=ACTIVITY_CHOICES)
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                              on_delete=models.CASCADE)

