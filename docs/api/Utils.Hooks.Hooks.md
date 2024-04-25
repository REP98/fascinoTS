# Clase: Hooks

[Utils/Hooks](../wiki/Utils.Hooks).Hooks

**`Descripción de Clase`**

Ganchos de Fascino inspirados en Wordpress

**`Ejemplo`**

Imaginemos que tenemos un video que queremos que se redimencione al cambiar el tamaño de pantalla
pero tenemos las configuraciónes del video en un archivo y la carga en otro
```javascript
// Archivo VideoConfig.ts
// Declaramos el Hook
_$.hooks.add("mihook.resize", (w,h) => {
_$("video").styel({
    width: (w - 10) + "px", 
    height: (h - 16) + "px"
})
})
// Archivo main.ts
_$(window).on("resize", (e) => {
    _$.hooks.run("mihook.resize", screen.width, screen.height)
})
```

## Tabla de Contenido

### Constructor

- [constructor](../wiki/Utils.Hooks.Hooks#constructor)

### Accessors

- [hook](../wiki/Utils.Hooks.Hooks#hook)

### Métodos

- [add](../wiki/Utils.Hooks.Hooks#add)
- [persistent](../wiki/Utils.Hooks.Hooks#persistent)
- [run](../wiki/Utils.Hooks.Hooks#run)
- [temporal](../wiki/Utils.Hooks.Hooks#temporal)

## Constructor

### constructor

• **new Hooks**(): [`Hooks`](../wiki/Utils.Hooks.Hooks)

Inicilaizador de los Ganchos

#### Retornos

[`Hooks`](../wiki/Utils.Hooks.Hooks)

#### Definido en

Utils/Hooks.ts:43

## Accessors

### hook

• `get` **hook**(): [`HookRecord`](../wiki/Types#hookrecord)

Lista de Canchos

#### Retornos

[`HookRecord`](../wiki/Types#hookrecord)

#### Definido en

Utils/Hooks.ts:51

## Métodos

### add

▸ **add**(`name`, `callback`): `void`

Añade un Gancho

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `name` | `string` | nombre del cancho |
| `callback` | [`FnAny`](../wiki/Types#fnany) | Funcion a Ejecutar |

#### Retornos

`void`

#### Definido en

Utils/Hooks.ts:61

___

### persistent

▸ **persistent**(`name`, `callback?`): `void`

Añade un Gancho Persistente, el cual se almacenara en el Storage del navegador

#### Parametros

| Nombre | Tipo |
| :------ | :------ |
| `name` | `string` \| [`HookRecord`](../wiki/Types#hookrecord) |
| `callback?` | [`FnAny`](../wiki/Types#fnany) |

#### Retornos

`void`

#### Definido en

Utils/Hooks.ts:72

___

### run

▸ **run**(`name`, `...args`): `void`

Ejecuta un gancho y le pasa los argumentos

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `name` | `string` | nombre del gancho |
| `...args` | `any`[] | argumentos de la función |

#### Retornos

`void`

#### Definido en

Utils/Hooks.ts:104

___

### temporal

▸ **temporal**(`name`, `callback?`): `void`

Añade ganchos de forma temporal al almacenamiento Storega del Navegador

#### Parametros

| Nombre | Tipo |
| :------ | :------ |
| `name` | `string` \| [`HookRecord`](../wiki/Types#hookrecord) |
| `callback?` | [`FnAny`](../wiki/Types#fnany) |

#### Retornos

`void`

#### Definido en

Utils/Hooks.ts:88
