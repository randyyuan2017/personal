from django.shortcuts import render


def main(request):
    template = 'main.html'
    return render(request, template)


def projects(request):
    template = 'projects.html'
    return render(request, template)