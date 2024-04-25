# Clase: HeaderFetch

[Http/HeaderFetch](../wiki/Http.HeaderFetch).HeaderFetch

**`Descripción de Clase`**

Manejador de Cabeceras

**`Requieres`**

Utils

## Tabla de Contenido

### Constructor

- [constructor](../wiki/Http.HeaderFetch.HeaderFetch#constructor)

### Accessors

- [header](../wiki/Http.HeaderFetch.HeaderFetch#header)
- [options](../wiki/Http.HeaderFetch.HeaderFetch#options)

### Métodos

- [add](../wiki/Http.HeaderFetch.HeaderFetch#add)
- [delete](../wiki/Http.HeaderFetch.HeaderFetch#delete)

## Constructor

### constructor

• **new HeaderFetch**(`_options?`): [`HeaderFetch`](../wiki/Http.HeaderFetch.HeaderFetch)

Inicializador de las Cabeceras

#### Parametros

| Nombre | Tipo |
| :------ | :------ |
| `_options?` | `HeadersInit` |

#### Retornos

[`HeaderFetch`](../wiki/Http.HeaderFetch.HeaderFetch)

#### Definido en

Http/HeaderFetch.ts:18

## Accessors

### header

• `get` **header**(): `Headers`

Obtiene las Cabeceras

#### Retornos

`Headers`

#### Definido en

Http/HeaderFetch.ts:45

• `set` **header**(`h`): `void`

Establece las Cabeceras

#### Parametros

| Nombre | Tipo |
| :------ | :------ |
| `h` | `HeadersInit` |

#### Retornos

`void`

#### Definido en

Http/HeaderFetch.ts:52

___

### options

• `get` **options**(): `HeadersInit`

Obtiene las Opciones de la cabecera

#### Retornos

`HeadersInit`

[description]

#### Definido en

Http/HeaderFetch.ts:27

• `set` **options**(`op`): `void`

Establece las opciones

#### Parametros

| Nombre | Tipo |
| :------ | :------ |
| `op` | `HeadersInit` |

#### Retornos

`void`

#### Definido en

Http/HeaderFetch.ts:34

## Métodos

### add

▸ **add**(`op`): `void`

Añade una cabecera al elemento

#### Parametros

| Nombre | Tipo |
| :------ | :------ |
| `op` | `HeadersInit` |

#### Retornos

`void`

#### Definido en

Http/HeaderFetch.ts:63

___

### delete

▸ **delete**(`name`): `void`

Borra una cabecera por su nombre

#### Parametros

| Nombre | Tipo |
| :------ | :------ |
| `name` | `string` |

#### Retornos

`void`

#### Definido en

Http/HeaderFetch.ts:70
