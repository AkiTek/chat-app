from django.contrib import admin
from .models import User,Talk

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
  pass

@admin.register(Talk)
class TalkAdmin(admin.ModelAdmin):
  pass