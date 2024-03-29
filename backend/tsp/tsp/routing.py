from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
from websocketapp import routing as websocket_routing
# import  os
# import sys
#
# sys.path.append(os.path.join(os.path.dirname(__file__), 'websocketapp'))
# import websocketapp
application = ProtocolTypeRouter({
    "websocket": AuthMiddlewareStack(
        URLRouter(
            websocket_routing.websocket_urlpatterns
        )
    ),
})
# application = ProtocolTypeRouter({
#     "websocket": AuthMiddlewareStack(
#         URLRouter(
#             websocketapp.routing.websocket_urlpatterns
#         )
#     ),
# })
