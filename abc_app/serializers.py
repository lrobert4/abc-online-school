from rest_framework import serializers

from .models import Subject, Lesson


class LessonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lesson
        fields = ('id', 'title', 'album', 'subject')

class SubjectSerializer(serializers.ModelSerializer):
    lessons = LessonSerializer(many=True, read_only=True)
    class Meta:
        model = Subject
        fields = ('id', 'name', 'lessons')