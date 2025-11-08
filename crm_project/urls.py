from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/service/", include("service_order.urls")),
    path("api/quote/", include("quote.urls")),
    path("api/inventory/", include("inventory.urls")),
]
