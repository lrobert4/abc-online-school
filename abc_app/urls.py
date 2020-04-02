from django.urls import path, include
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register('subjects', views.SubjectView)
router.register('lessons', views.LessonView)


urlpatterns = [
    path('', include(router.urls))
]