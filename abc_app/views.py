from rest_framework import viewsets

from .serializers import SubjectSerializer, LessonSerializer
from .models import Subject, Lesson


class SubjectView(viewsets.ModelViewSet):
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer

class LessonView(viewsets.ModelViewSet):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer


