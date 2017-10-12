from django.shortcuts import render


def main(request):
    template = 'main.html'
    return render(request, template)