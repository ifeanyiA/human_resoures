from django.contrib import admin
from django.urls import path
from App import views

urlpatterns = [
    #path to access django admin
    path('admin/', admin.site.urls),
    # path to render homepage
    path('',views.home,name="home"),
    #path to render opportunities page
    path('opportunities',views.opportunities, name="opportunities"),

# =========================== SEND EMAIL ==============================
    # Path to send frontend form
    path('send_email_frontend',views.send_email_frontend,name="email_frontend"),

    # Path to send backend form
    path('send_email_backend',views.send_email_backend,name="email_backend"),

    # Path to send fullstack form
    path('send_email_fullstack',views.send_email_fullstack,name="email_fullstack"),



]
