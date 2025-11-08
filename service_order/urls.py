from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ClientViewSet, DeviceViewSet, ServiceOrderViewSet

router = DefaultRouter()
router.register(r'clients', ClientViewSet)
router.register(r'devices', DeviceViewSet)
router.register(r'service-orders', ServiceOrderViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
