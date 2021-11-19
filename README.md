
<div  align="center">
	<h1  style="text-align: center">Api Notion Chrome</h1>
</div>

_Acerca del Proyecto_
Es una api que permite crear una página dentro de una base de datos de Notion.


## Instalación🚀

Clonar el repositorio
```
git clone https://github.com/JaviMiot/ApiNotionChrome.git
```

### Pre-requisitos 📋

Para el uso de API  necesitas tener el Token de la Integración de Notion y el Id de la base de datos donde se crearán las páginas.

Estos pasos los puedes seguir en la página oficial de [Notion](https://developers.notion.com/docs/getting-started), Tambien puedes ver como funciona con la extensión de Chrome [Aquí](https://github.com/JaviMiot/ChromeExtensionPlatziCourse)

### Forma de uso 🔧
La url de Api para crear una página es:
```
api/v1/notion/database/{databaseId}/createpage/
Donde:
databaseId : Es id de la base de datos donde almacenaremos nuestra página de Notion

```
Y esta disponible en Heroku: https://apinotion.herokuapp.com/api/v1/notion/database/{databaseId}/createpage/
Para probarla solo deberias cambiar **databaseId** por el Id de tu base de datos de Notion.

Para enviar los datos de nuestra página sigue la siguiente estructura, donde se enviará el token de Notion en el parámetro **notionkey**, en **data** se enviará los parámetros de la pagina de Notion.

```js
{
    "notionkey": "{token de Notion}",
    "data": {
        "parent": {
            "database_id": "8288fe2ca51449ffb7c2d2b7a156e78c"
        },
        "icon": {
            "type": "external",
            "external": {
                "url": "https://static.platzi.com/media/avatars/Platzi-f730e65b-e92b-44d3-81c0-5c59c4dc4658.png"
            }
        },
        "properties": {
            "Status": {
                "select": {
                    "name": "En Proceso"
                }
            },
            "Profesor": {
                "multi_select": [
                    {
                        "name": "Santiago Camargo nuevo"
                    }
                ]
            },
            "link": {
                "url": "https://ejemplo/"
            },
            "Nombre del curso": {
                "title": [
                    {
                        "type": "text",
                        "text": {
                            "content": "titulo ejemplo desde api heroku"
                        }
                    }
                ]
            }
        }
    }
}

```
## Contruido con 🛠️



* [Express.js](https://expressjs.com/es/) - El framework web usado
* [Notion Developer](https://developers.notion.com/docs/getting-started) - Api de Notion
* [JavaScrip](https://developer.mozilla.org/es/docs/Web/JavaScript) - Lenguaje de programación
* [Chrome Developer Plugin](https://developer.chrome.com/docs/extensions/mv3/getstarted/) - Creación de extensiones


## Contribution 🖇️

Por favor lee el [CONTRIBUTING.md](https://gist.github.com/villanuevand/xxxxxx) para detalles de nuestro código de conducta, y el proceso para enviarnos pull requests.


## Autors ✒️


* **Javier Manobanda** - *Trabajo Inicial* - [Github](https://github.com/JaviMiot)


## License 📄
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---
⌨️ with❤️ by [Javier Manobanda](https://github.com/JaviMiot)😊