# fascinoTS V2

El Nuevo Fascino pero ahora escrito con TS

En esta versión, he hecho uso de grandes librerias y he integrado dentro del código de Fascino.

## Nuevas Dependencias

* [Lodash](https://lodash.com)
* [MarkdownIt](https://markdown-it.github.io)
* [Colorsea](https://colorsea.js.org)

## Instalación

Puede instalarlo de manera fácil, descargando el repositorio de github
```shell
git clone https://github.com/REP98/fascinoTS.git
```
por npm
```shell
npm i --save @rep985/fascinoTs
```
o integrarlo directamente a su proyecto por jsDelivr
```html
<!-- Solo el core -->
<script src="https://cdn.jsdelivr.net/npm/fascinoTs@1.1.0/dist/fascinoTs.min.js"></script>
```
```html
<!-- Core con plugin -->
<script src="https://cdn.jsdelivr.net/npm/fascinoTs@1.1.0/dist/fascinoTs-all.min.js"></script>
```

## Ejemplo

Desde Node con Typescript
```TS
import {Fascino} from "@rep985/fascinoTs";

new Fascino(() => {
    // Esto se ejecuta al cargar el navegador
    let body: Fascino = new Fascino("body");
    body.html(`<h1>Hola Mundo</h1>`)
})
```

Desde el Navegador
```HTML
<script src="path/to/scrit/fascinoTs.umd.cjs"></script>
<script defer>
    _$(function() {
        _$("body").html(`<h1>Hola Mundo</h1>`)
    })
</script>
```
## Documentación Oficial

Puedo saber mas en la [página oficial](https://rep98.github.io/fascino)

## Licencia
FascinoTs licenciado bajo la licencia [MIT](LICENCES)
