# Clase: Serialize

[Http/Serialize](../wiki/Http.Serialize).Serialize

**`Descripciónde Clase`**

Esta clase permite serializar o deserializar elemento para su uso via HTTP

**`Requieres`**

Utils

## Tabla de Contenido

### Constructor

- [constructor](../wiki/Http.Serialize.Serialize#constructor)

### Métodos

- [form](../wiki/Http.Serialize.Serialize#form)
- [parse](../wiki/Http.Serialize.Serialize#parse)
- [stringify](../wiki/Http.Serialize.Serialize#stringify)

## Constructor

### constructor

• **new Serialize**(): [`Serialize`](../wiki/Http.Serialize.Serialize)

#### Retornos

[`Serialize`](../wiki/Http.Serialize.Serialize)

## Métodos

### form

▸ **form**(`form`): `string`

Función especial<br>
Serializa todos los elementos de un formulario

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `form` | `HTMLFormElement` | El formulario |

#### Retornos

`string`

**`Throws`**

si form = null | undefined

#### Definido en

Http/Serialize.ts:54

___

### parse

▸ **parse**(`param`, `space?`): [`ObjAny`](../wiki/Types#objany)

#### Parametros

| Nombre | Tipo | Valor por defecto | Description |
| :------ | :------ | :------ | :------ |
| `param` | `string` | `undefined` | El texto serializado |
| `space?` | `string` | `"&"` | Separador del objecto |

#### Retornos

[`ObjAny`](../wiki/Types#objany)

**`Static`**

Convierte un texto serializado en un objecto javacript

#### Definido en

Http/Serialize.ts:31

___

### stringify

▸ **stringify**(`param`, `space?`): `string`

#### Parametros

| Nombre | Tipo | Valor por defecto | Description |
| :------ | :------ | :------ | :------ |
| `param` | [`ObjAny`](../wiki/Types#objany) \| [`ObjAny`](../wiki/Types#objany)[] | `undefined` | Objecto de parametros |
| `space?` | `string` | `"&"` | Separador del objecto |

#### Retornos

`string`

**`Static`**

Serializa un objeto para su envio fetchs

#### Definido en

Http/Serialize.ts:16
