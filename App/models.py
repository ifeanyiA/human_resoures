from django.db import models

# Create your models here.
# Prevent duplicate emails


class Registered_email(models.Model):
    email = models.CharField(max_length=200)
    

    def __str__(self):
        return self.email
