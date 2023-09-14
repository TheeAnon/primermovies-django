from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth.models import User
from .models import UserAccount

# Create your views here.


def index(requests):
    return render(requests, 'index.html')


def check_email_existence(request):
    if request.method == "GET":
        email = request.GET.get("email")
        try:
            user = UserAccount.objects.get(email=email)
            return JsonResponse({"exists": True})
        except UserAccount.DoesNotExist:
            return JsonResponse({"exists": False})
    else:
        return JsonResponse({"error": "Invalid request method"}, status=400)


def check_user_verified(request):
    if request.method == "GET":
        email = request.GET.get("email")
        try:
            user = UserAccount.objects.get(email=email, is_active=True)
            return JsonResponse({"exists": True})
        except UserAccount.DoesNotExist:
            return JsonResponse({"exists": False})
    else:
        return JsonResponse({"error": "Invalid request method"}, status=400)
