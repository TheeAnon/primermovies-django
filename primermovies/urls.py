from django.contrib import admin
from django.views.generic import TemplateView
from django.urls import path, re_path, include
from backend.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('auth/', include('djoser.social.urls')),
    path('api/check-email-exists/', check_email_existence,
         name='check_email_existence'),
    path('api/check-user-verified/', check_user_verified,
         name='check_user_verified'),
]

urlpatterns += [re_path(r'^.*',
                        TemplateView.as_view(template_name='index.html'))]
