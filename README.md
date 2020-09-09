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
2. Execute um ``` yarn ``` ou ``` npm install ``` 
3. Renomeie o arquivo .env copy para .env e edite as chaves da api e do seu banco de dados
4. Execute no console o comando ```yarn database``` para executar as migrations no banco de dados <br>
5. execute o comando ```dev``` para iniciar a aplicação.
> Sucesso !!

## Pré-Requisitos
1. Ter o banco de dados Postgres instalado em sua máquina ou Executando no docker
2. Ter o banco Redis instalado em sua máquina ou Executando no docker
3. Os dois bancos deven estar Executando no momendo em que usar a aplicação
4. Criar a database que ira usar no Postgres (Colocar o mesmo nome da database criada lá no arquivo .env na variável DB_NAME)

## Como executar os testes nesse repositorio?
-- execute o comando ```yarn test```

## Observações
- A mesma instância do cache é utilizada para o cache e para os testes o que pode gerar interferências no retorno da api,
execute o comando ``` docker exec -it nome-do-seu-container redis-cli FLUSHALL ``` para realizar a limpeza deste cache.

