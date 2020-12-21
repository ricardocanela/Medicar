# Desafio Intmed

Durante este desafio foi construído um sistema para uma clínica chamada Medicar com o intuito de auxiliar seus clientes na marcação de consultas e gerenciar seu corpo médico. 

Os detalhes do desafio podem ser vistos em:

https://github.com/ricardocanela/vagas

## Instrução de uso

### Backend

1 - Certifique-se de que possui a versão 3.8.5 do python (versão utilizada para desenvolvimento) instalada na máquina.

2 - Crie um ambiente virtual na pasta **backend** com o comando:

`
python3.8 -m venv venv
`

3 - Ative o ambiente virtual com Python 3.8.5 utilizando:

`
source venv/bin/activate
`

4 - Instale as bibliotecas necessárias do python com:

`
pip install -r requirements.txt
`

5 - Entre na pasta Medicar e inicie a API com o comando:

`
python manage.py runserver
`

6 - Para criar um superusuário:

`
python manage.py createsuperuser
`

### Frontend

1 - Certifique-se de que possui instalado o npm em sua máquina

2 - Na pasta **frontend/Medicar** utilize o comando:

`
npm start
`

3 - Acesse http://localhost:4200/login para utilizar o sistema pela visão do paciente

ou http://localhost:4200/admin para a visão do administrador. 