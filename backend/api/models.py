from django.db import models

class User(models.Model):
    name= models.CharField(max_length=200)
    email = models.CharField(max_length=400)
    def __str__(self):
        return '%s' % ( self.name )

class Description(models.Model):
    SKILL_LEVELS = (
        (1, 'Fundamental Awareness'),
        (2, 'Novice'),
        (3, 'Intermediate'),
        (4, 'Advanced'),
        (5, 'Expert'),
    )
    description = models.TextField(max_length=300)
    skill_level = models.IntegerField(
        choices=SKILL_LEVELS,
        default=1
    )
    user= models.ForeignKey(User, on_delete=models.CASCADE , null=True, blank=False)
    def __str__(self):
        return "%s " % (self.user)

