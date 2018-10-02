# mysite/routing.py
from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
import chat.routing
# applicationとして 'Websocket'通信はOK(AuthMiddlewareStack)ですよ URLの振り分けはchat.routingのwebsocket_urlpatternsダオ
application = ProtocolTypeRouter({
    # (http->django views is added by default)
    'websocket': AuthMiddlewareStack(
        URLRouter(
            chat.routing.websocket_urlpatterns
        )
    ),
})
