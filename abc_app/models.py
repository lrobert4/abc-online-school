from django.db import models

class Subject(models.Model):
    name = models.CharField(max_length=255)
    

    def __str__(self):
        return self.name

class Lesson(models.Model):
    title = models.CharField(max_length=255)
    album = models.CharField(max_length=255)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE, related_name='subjects')

    def __str__(self):
        return self.title

class Note(models.Model):
    title = models.CharField(max_length=150)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title



