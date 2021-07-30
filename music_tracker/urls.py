from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('records/', views.RecordList.as_view(), name = 'record_list'),
    path('records/<int:pk>', views.RecordDetail.as_view(), name = 'record_detail')
]