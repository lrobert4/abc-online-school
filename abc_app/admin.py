from django.contrib import admin
from .models import Subject, Lesson

admin.site.register([Subject, Lesson])
