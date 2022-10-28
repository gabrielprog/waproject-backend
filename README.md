# Passo a passo de como rodar meu projeto

Usei um ORM que sou bem familiarizado que é o sequelize, e também usei o axios para consumir API REST

[Documentação da api](https://documenter.getpostman.com/view/24111994/2s8YK6N7Z9)

## Configuração do projeto

Você precisa renomear o arquivo ".env.example" para ".env" e logo após isso é preciso configurar o banco de dados, por padrão aplicação roda na porta 3000 e no cabeçalho do arquivo você pode alterar isso

```
# DATABASE CONFIG

USERNAME="" => Usuário da conexão com o banco de dados
PASSWORD="" => Senha da conexão com o banco de dados
DATABASE="database_development" => Nome do banco de dados para que ORM crie um banco de dados com esse nome
HOST="127.0.0.1" => Hostname da conexão com o banco de dados
DIALECT="mysql" => Qual banco de dados vai usar é recomendado usar o mysql
```

## Instalação das dependências do projeto:
```
yarn
```

## Start do banco de dados da aplicação
```
yarn sequelize-cli db:create
yarn sequelize-cli db:migrate
```

## Começando aplicação
```
yarn start
```


