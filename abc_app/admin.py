from django.contrib import admin
from .models import Subject, Lesson, Quiz, GradedQuiz, Choice, Question

admin.site.register([Subject, Lesson, Quiz, GradedQuiz, Choice, Question])
