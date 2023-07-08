from django.shortcuts import render
#new imports
from django.http import HttpResponseRedirect #Redirect the page after the submit 
from django.contrib import messages
from django.core.mail import EmailMultiAlternatives
from django.template import loader


# Create your views here.
def home(request):
    template_name="App/home.html"
   
    return render(request,template_name)

# function to render opportunities page
def opportunities(request):
    template_name="App/opportunities.html"
   
    return render(request,template_name)
# =============================== RESUMES ========================= 

 # Function to send frontend form
def send_email_frontend(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        age = request.POST.get('age')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        address = request.POST.get('address')
        experience = request.POST.get('experience')
        skills = request.POST.get('skills')


 # Function to send backend form
def send_email_backend(request):
    pass

 # Function to send fullstack form

 def send_email_fullstack(request):
    pass