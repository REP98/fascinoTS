# **FascinoTS `V2`**

El Nuevo Fascino pero ahora escrito con TS

En esta versión, he hecho uso de grandes librerias y he integrado dentro del código de Fascino.

## Nuevas Dependencias

### [**Lodash**](https://lodash.com)
 Añade multiples funciones al core de Fascino y puede usarlas asi:
```javascript
 _$.indexOf([1, 2, 1, 2], 2); // Función IndexOf de lodash dentro de Fascino
 // => 1
```
### [**MarkdownIt**](https://markdown-it.github.io)
  Convierte texto Markdown a HTML Valido puede usarlo de dos maneras:
```javascript
 // 1.
 _$.md_render('# Fascino')
 // => <h1>Fascino</h1>
 // 2.
 _$("#mydiv").load("path/to/file.md")
 // => Esto obtendra via fetch el contenido de File.md y lo convertira en HTML
 // que luego añadrira al contenedor `#midiv`
```
### [**Colorsea**](https://colorsea.js.org)

Funciones utiles para la maipulación de colores

```javascript
let mycolor= "#c91f43";
_$.colorsea(mycolor).rgb()
// => [201, 31, 67]
// Un poco más oscuro
let darkMyColor = _$.colorsea(mycolor).darken(10);
darkMyColor.hex()
// => '#9d1834'
```

## Instalación

Puede instalarlo de manera fácil, descargando el repositorio de github
```shell
git clone https://github.com/REP98/fascinoTS.git
```
por npm
```shell
npm i --save @rep985/fascinots
```
o integrarlo directamente a su proyecto por jsDelivr
```html
<!-- Solo el core -->
<script src="https://cdn.jsdelivr.net/npm/@rep985/fascinots@2.0.0/dist/fascino.umd.js"></script>
```

## Ejemplo

Desde Node con Typescript
```TS
import {Fascino} from "@rep985/fascinots";

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

Puedo saber mas en la [página oficial](https://rep98.github.io/fascinoTS)

## Licencia
FascinoTs licenciado bajo la licencia [MIT](LICENCES)
