# coding: utf-8
from rest_framework import serializers

from .models import User,Talk

# モデルごとにjsonとして返したいfieldを指定する
class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('id','name', 'mail')

class TalkSerializer(serializers.ModelSerializer):
  speaker = UserSerializer()
  class Meta:
    model = Talk
    fields = ('message','created_at','updated_at','status','speaker')