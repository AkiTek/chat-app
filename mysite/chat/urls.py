from django.urls import path
from . import views

from rest_framework import routers
from .views import UserViewSet,TalkViewSet,user_log_in


urlpatterns = [
    path(r'user_log_in',views.user_log_in,name='user_log_in')
]

# apiのroute定義
router = routers.DefaultRouter()
router.register(r'users',UserViewSet) # GET /api/users でUserの一覧
router.register(r'talks',TalkViewSet,base_name='talks') # GET /api/talks でTalkの一覧
# POSTとかも全部この設定のままいける

# もし/api/talk/listのようにわかりやすくURLにしたいなら,base_name="talk"としてあげないといけない
