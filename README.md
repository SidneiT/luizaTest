# LuizaLabs Teste

*NodeJs 14.17.0*<br/>
*Vue 2*<br/>
*Fastify 3*<br/><br/>

## Subir em containers

```
docker-compose up
```

Sobe front e back para teste integrado

**Front**: http://localhost:8080

**Back**: http://localhost:3000/products



## Subindo individual

Rodar primeiro BFF para comunicação do front, o front só funciona com o BFF rodando.



No diretorio do bff rodar os comandos:

```
npm install && npm run dev
ou
yarn && yarn dev
```

**Acesso**: http://localhost:3000/products



Em seguida subir o Front

No diretóiro do front rodar os comandos.

```
npm install && npm run serve
ou
yarn && yarn serve
```

**Acesso**: http://localhost:8080





------

### Front  

**Diretório**: ./front

[Readme](./front/README.md)



------

### Back

**Diretório**: ./bff

[Readme](./bff/README.md)