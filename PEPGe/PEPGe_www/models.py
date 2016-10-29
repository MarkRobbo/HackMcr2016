from django.db import models

# Create your models here.
class Program (models.Model):
    title = models.CharField(max_length=256)
    description = models.TextField()
    date = models.DateField()
    start = models.DateTimeField()
    duration = models.PositiveIntegerField()
