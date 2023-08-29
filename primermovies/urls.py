from django.contrib import admin
from django.views.generic import TemplateView
from django.urls import path, re_path

urlpatterns = [
    path('admin/', admin.site.urls),
]

urlpatterns += [
    re_path(r'^.*', TemplateView.as_view(template_name='index.html'))
]
