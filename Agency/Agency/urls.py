from django.contrib import admin
from django.urls import path
from App import views

urlpatterns = [
    #path to access django admin
    path('admin/', admin.site.urls),
    # path to render homepage
    path('',views.home,name="home"),
]
