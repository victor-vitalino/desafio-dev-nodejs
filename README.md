# Desafio desenvolvedor NodeJs Jr

## Objetivo: <br>
Desenvolver uma RestApi [post] que receba: 
```
{
  latitude: -9.6341418,
  longitude: -35.7141995,
  denunciante: {
      nome: 'José de Oliveira',
      cpf: '95761638037',
  },
  denuncia: {
      titulo: 'Esgoto a céu aberto',
      descricao:
      'Existe um esgoto a céu aberto nesta localidade.',
   },
}

```
<br>

E retorne:
```
      data: {
                id: 2,
                latitude: -9.6341418,
                longitude: -35.7141995,
                denunciante: {
                    nome: 'José de Oliveira',
                    cpf: '95761638037',
                },
                denuncia: {
                    titulo: 'Esgoto a céu aberto',
                    descricao:
                        'Existe um esgoto a céu aberto nesta localidade.',
                },
                endereco: {
                    logradouro: 'Rua José Antônio Reginaldo Pontes Lima',
                    bairro: '',
                    cidade: 'Maceió',
                    estado: 'Alagoas',
                    pais: 'BR',
                    cep: '57045-015',
                },
            }
```
Que utilize uma api externa para buscar as localizações e utilize um sistema de cache para
otimizar o retorno, utilizando a api externa apenas quando necessário. <br>
Seguindo os principios SOLID <br>

> Mais detalhes em [Desafio](https://github.com/RogaLabs/teste-backend-nodejs)
<br>

## Como executar este projeto?
1. Clone este projeto
2. Execute o comando ``` yarn ```
3. Renomeie o arquivo ```.env copy``` para ``` .env ``` e edite as chaves da api e do seu banco de dados
4. Execute no console o comando ```yarn database``` para executar as migrations no banco de dados <br>
5. execute o comando ```dev``` para iniciar a aplicação.
> Sucesso !!

## Pré-Requisitos
1. Ter o banco de dados Postgres instalado em sua máquina ou Executando no docker
2. Ter o banco Redis instalado em sua máquina ou Executando no docker
3. Os dois bancos deven estar Executando no momendo em que usar a aplicação
4. Criar a database que ira usar no Postgres (Colocar o mesmo nome da database criada lá no arquivo .env na variável DB_NAME)

## Como executar os testes nesse repositorio?
- execute o comando ```yarn test```

## Observações
- A mesma instância do cache é utilizada para o cache e para os testes o que pode gerar interferências no retorno da api,
execute o comando ``` docker exec -it nome-do-seu-container redis-cli FLUSHALL ``` para realizar a limpeza deste cache
no caso de suas requisiçoes terem a mesma lalitude e longitude que as do teste já que elas ficarão salvas do cache;

- O projeto foi desenvolvido em ambiente windows, por conta disso foi utilizado o comando ```SET NODE_ENV=test``` no package.json,
    além da flag ```&&``` para encadear os comandos dentro dos scripts, caso esteja testando num Mac retire a flag ```SET``` e os ```&&```

## Tecnologias Utilizadas
1. ExpressJs - Para gerenciamento de requisições http
2. Jest - Para realização de testes automatizados
3. Sequelize - Orm para execução de queries no banco de dados
4. Redis - Banco de dados chave/valor
5. Yup - Para a validação de dados recebidos 

## Como o banco sql foi estruturado?

O banco possui as tabelas de endereco, denunciante, descricao de denuncia. <br>
**descricao**
```
    id:integer,
    titulo:string,
    descricao:string
```
**denunciante**
```
    id:integer,
    nome:string,
    cpf:string
```
**endereco**
```
    id:integer,
    logradouro:string,
    bairro:string
    cidade:string
    estado:string
    pais:string
    cep:string
```
E **denucia** que liga as outras atraves de chaves estrangeiras ficando:
```
    id: integer,
    latitude: double,
    longitude:double,
    id_denunciante:integer,
    id_descricao:integer,
    id_endereco:integer
```
<br>
desta forma impedindo a duplicação de dados como os de denunciante e de endereço

## Como o cache está sendo salvo?
O cache está sendo salvo num banco chave/valor de forma que ao criar uma nova denuncia será adicionado a este banco uma nova chave e valor
ficando dessa forma:
```
"cache:latitude:longitude":"objeto-json-endereço-transformado-em-string"
```

