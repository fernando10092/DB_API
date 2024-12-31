from django.db import models

class Banco(models.Model):
    name = models.TextField()
    email = models.EmailField()
