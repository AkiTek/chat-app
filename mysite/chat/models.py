from django.db import models

class User(models.Model):
  name = models.CharField(max_length = 32)
  mail = models.EmailField()

  def __repr__(self):
    return "{}: {}".format(self.pk, self.name)

  __str__ = __repr__

class Talk(models.Model):
  STATUS_SET = (
    (0,"未読"),
    (1,"既読"),
  )

  message = models.TextField()
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now_add=True)
  status = models.IntegerField(choices=STATUS_SET,default=0)
  speaker = models.ForeignKey(User, related_name = 'talks', on_delete = models.CASCADE)

