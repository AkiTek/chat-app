from django.shortcuts import render
from django.utils.safestring import mark_safe
import json

import django_filters
from rest_framework import viewsets, filters, status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import User, Talk
from .serializer import UserSerializer, TalkSerializer

def index(request):
    return render(request, 'chat/index.html', {})


def room(request, room_name):
    return render(request, 'chat/room.html', {
        'room_name_json': mark_safe(json.dumps(room_name))
    })

# モデルの出力を設定する（パイプ役）
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class TalkViewSet(viewsets.ModelViewSet):

    queryset = Talk.objects.all()
    serializer_class = TalkSerializer

@api_view(['POST'])
def user_log_in(request):
    user = {"id": 1, "username": 'John',"firstName": 'H',"lastName": 'Smith',"token": 'fake-jwt-token'};
    return Response(data=user,status=status.HTTP_200_OK)

# Function View = 
# class based view = APIViewsは特定のモデルに紐づかないHTTPメソッドごとに処理を変えられる関数名はget,post...など

# Generic View = 特定のレコードに紐づくか、紐づかないかで分類できる generic.ListCreateAPIViewはレコードの作成、一覧のみ

# ViewSets = 取得、一覧、登録、更新、削除をまとめて管理。Rails の resourcesみたいな感じ。@actionで新たなroutingパスを追加定義



