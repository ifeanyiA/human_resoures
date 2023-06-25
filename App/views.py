from django.shortcuts import render

# Create your views here.
def home(request):
    template_name="App/home.html"
   
    return render(request,template_name)

# function to render opportunities page
def opportunities(request):
    template_name="App/opportunities.html"
   
    return render(request,template_name)