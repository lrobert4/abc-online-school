from django.contrib import admin
from .models import Subject, Lesson, Note

admin.site.register([Subject, Lesson, Note])
