from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework.decorators import api_view
from .serializers import (DailyReviewSerializer, DailyPlanSerializer, StatSerializer)

from .models import DailyReview, DailyPlan, Stats
from django.conf.global_settings import AUTH_USER_MODEL as CustomUser
from django.utils import timezone


class DailyReviewAPI(APIView):
    permission_classes = [IsAuthenticated,]
    def get(self, request, *args, **kwargs):
        reviews = DailyReview.objects.filter(user=request.user)
        serialized = DailyReviewSerializer(reviews, many=True)
        return Response({'reviews':serialized.data})

    def post(self,request, *args, **kwargs):
        serializer = DailyReviewSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({'review':serializer.data})

    def update(self, request, pk, *args, **kwargs):
        review = DailyReview.objects.get(id=pk)
        serializer = DailyReviewSerializer(instance = review, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({'review' : serializer.data})

class GetDailyReview(APIView):
    permission_classes = [IsAuthenticated,]
    def get(self, request, pk, *args, **kwargs):
        review = DailyReview.objects.get(id=pk, user=request.user)
        serialized = DailyReviewSerializer(review, many=False)
        return Response({'review':serialized.data})


    


class DailyPlanAPI(APIView):
    permission_classes = [IsAuthenticated,]
    def get(self, request, *args, **kwargs):
        plan = DailyPlan.objects.filter(user=request.user)
        serialized = DailyPlanSerializer(plan, many=True)
        return Response({'plans':serialized.data})

    def post(self,request, *args, **kwargs):
        serializer = DailyPlanSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({'plan':serializer.data})

    def update(self, request, pk, *args, **kwargs):
        plan = DailyPlan.objects.get(id=pk)
        serializer = DailyPlanSerializer(instance = plan, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({'plan':serializer.data})
        

class GetDailyPlan(APIView):
    permission_classes = [IsAuthenticated,]
    def get(self, request, pk, *args, **kwargs):
        plan = DailyPlan.objects.get(id=pk, user=request.user)
        serialized = DailyPlanSerializer(plan, many=False)
        return Response({'plan':serialized.data})


class StatsAPI(APIView):
    permission_classes = [IsAuthenticated,]
    def get(self, request, *args, **kwargs):
        timers = Stats.objects.filter(user=request.user) #if I hav time, com bak to filter only time
        serialized = StatSerializer(timers, many=True)
        return Response({'timers':serialized.data})

    def post(self, request, *args, **kwargs):
        serializer = StatSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({'timer':serializer.data})

class StatsClickAPI(APIView):
    permission_classes = [IsAuthenticated,]

    def get(self, request, *args, **kwargs):
        stats = Stats.objects.filter(activity__istartswith='Daily',user=request.user)
        serialized = StatSerializer(stats, many=True)
        return Response({'stats':serialized.data})




