from django.shortcuts import render
from .models import Banco
from .serializers import Myserializer

from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET','POST'])
def API(request):
    if request.method == 'POST':
        name = request.data.get("name")
        email = request.data.get("email")
        dados = Banco(name=name, email=email)
        dados.save()

    dados_banco = Banco.objects.all()
    serializer = Myserializer(dados_banco, many=True)
    return Response(serializer.data)


