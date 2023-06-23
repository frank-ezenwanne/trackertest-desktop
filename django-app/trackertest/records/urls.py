from django.urls import path,include
from .api import StatsAPI, DailyReviewAPI, GetDailyReview,DailyPlanAPI,GetDailyPlan,StatsClickAPI

urlpatterns =[
    path("api/stats/",StatsAPI.as_view()),
    path("api/dailyreview/",DailyReviewAPI.as_view()), #this will stand for get n post req--fetch all n create
    path("api/updatereview/<int:pk>/",DailyReviewAPI.as_view()),
    path("api/getreview/<int:pk>/",GetDailyReview.as_view()),
    path("api/dailyplan/",DailyPlanAPI.as_view()), #this will stand for get n post req--fetch all n create
    path("api/updateplan/<int:pk>/",DailyPlanAPI.as_view()),
    path("api/getplan/<int:pk>/",GetDailyPlan.as_view()),
    path("api/statsclick/",StatsClickAPI.as_view()),]