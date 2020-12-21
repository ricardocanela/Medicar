from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token  

from agenda.viewsets import UserViewSet, AgendaViewSet, ConsultaViewSet, HorarioViewSet

from medicos.viewsets import MedicoViewSet, EspecialidadeViewSet


# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'medicos', MedicoViewSet)
router.register(r'especialidades', EspecialidadeViewSet)
router.register(r'consultas', ConsultaViewSet)
router.register(r'horarios', HorarioViewSet)
router.register(r'agendas', AgendaViewSet, basename='agendas')

#router.register(r'agendas/(?P<library_id>[0-9]+)', AgendaViewSet, basename='agendas')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls')),
    path('api-token-auth/', obtain_auth_token, name='api_token_auth')
]
