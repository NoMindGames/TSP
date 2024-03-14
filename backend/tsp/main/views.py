from django.http import HttpResponse
from django.http import JsonResponse


def welcome(request):
    return HttpResponse('<h4>Welcome<h4>')


def healthcheck(request):
    return JsonResponse({'status': 'ok', 'backend_version': '1.0'})
