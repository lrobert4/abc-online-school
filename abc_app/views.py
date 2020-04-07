from rest_framework import viewsets, generics
from .serializers import SubjectSerializer, LessonSerializer, NoteSerializer
from .models import Subject, Lesson, Note


class SubjectView(viewsets.ModelViewSet):
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer

class LessonView(viewsets.ModelViewSet):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer

class NoteList(viewsets.ModelViewSet):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer


