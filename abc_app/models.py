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

# Quiz Models Below:

class Quiz(models.Model):
    title = models.CharField(max_length=100, default="Quiz Title")
    
    def __str__(self):
        return self.title


class GradedQuiz(models.Model):
    quiz = models.ForeignKey(Quiz, on_delete=models.SET_NULL, blank=True, null=True)
    grade = models.FloatField()
    
    def __str__(self):
        return self.grade


class Choice(models.Model):
    title = models.CharField(max_length=100)

    def __str__(self):
        return self.title

class Question(models.Model):
    question = models.CharField(max_length=255)
    choices = models.ManyToManyField(Choice)
    answer = models.ForeignKey(Choice, on_delete=models.CASCADE, related_name='answer')
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    order = models.SmallIntegerField()

    def __str__(self):
        return self.question

