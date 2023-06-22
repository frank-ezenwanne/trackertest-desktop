from rest_framework import serializers
from .models import DailyReview, DailyPlan, Stats

class DailyReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = DailyReview
        fields = '__all__'

class DailyPlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = DailyPlan
        fields = '__all__'

class StatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stats
        fields = '__all__'