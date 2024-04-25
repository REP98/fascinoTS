# Clase: Selector

[DOM/Selector](../wiki/DOM.Selector).Selector

Esta Clase se encarga del tratamiento de los Selectores

**`Requieres`**

Utils

**`Ejemplo`**

```typescript
let div: Selector = new Selector('div.miclassdiv') // Obtiene todos los div con la clase miclassdiv
console.log(div.node) // Muestra la lista de elementos `div` cuya clase es `.miclassdiv`
```

## Herencia

- **`Selector`**

  ↳ [`Fascino`](../wiki/DOM.Fascino)

## Tabla de Contenido

### Constructor

- [constructor](../wiki/DOM.Selector.Selector#constructor)

### Propiedades

- [ctx](../wiki/DOM.Selector.Selector#ctx)
- [length](../wiki/DOM.Selector.Selector#length)

### Accessors

- [node](../wiki/DOM.Selector.Selector#node)

### Métodos

- [\_query](../wiki/DOM.Selector.Selector#_query)
- [\_query\_selector](../wiki/DOM.Selector.Selector#_query_selector)
- [\_toElement](../wiki/DOM.Selector.Selector#_toelement)

## Constructor

### constructor

• **new Selector**(`selector?`, `ctx?`): [`Selector`](../wiki/DOM.Selector.Selector)

Crea una instancia de Selector.

#### Parametros

| Nombre | Tipo | Valor por defecto | Description |
| :------ | :------ | :------ | :------ |
| `selector?` | `any` | `undefined` | Selector para buscar elementos en el DOM. |
| `ctx?` | `ParentNode` | `document` | Contexto opcional para la búsqueda de elementos. |

#### Retornos

[`Selector`](../wiki/DOM.Selector.Selector)

#### Definido en

DOM/Selector.ts:64

## Propiedades

### ctx

• **ctx**: `ParentNode` = `document`

Contexto opcional para la búsqueda de elementos.

#### Definido en

DOM/Selector.ts:66

___

### length

• **length**: `number` = `0`

Longitud de la colección de elementos seleccionados.

#### Definido en

DOM/Selector.ts:58

## Accessors

### node

• `get` **node**(): `Element`[]

Obtiene los elementos seleccionados por el selector.

#### Retornos

`Element`[]

#### Definido en

DOM/Selector.ts:91

• `set` **node**(`element`): `void`

Establece los elementos a seleccionar por el selector

#### Parametros

| Nombre | Tipo |
| :------ | :------ |
| `element` | `string` \| `Element` \| `Element`[] \| `Document`[] |

#### Retornos

`void`

#### Definido en

DOM/Selector.ts:96

## Métodos

### \_query

▸ **_query**(`sel`): `Element`[]

Realiza una búsqueda de elementos utilizando el selector especificado.

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `sel` | `any` | Selector para buscar elementos en el DOM. |

#### Retornos

`Element`[]

- Array de elementos encontrados por la funcion `querySelectorAll`.

#### Definido en

DOM/Selector.ts:196

___

### \_query\_selector

▸ **_query_selector**(`selector`): [`Selector`](../wiki/DOM.Selector.Selector)

Realiza una búsqueda de elementos utilizando el selector especificado y actualiza la colección de elementos.

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `selector` | `any` | Selector para buscar elementos en el DOM. |

#### Retornos

[`Selector`](../wiki/DOM.Selector.Selector)

- Instancia actualizada de Selector.

#### Definido en

DOM/Selector.ts:136

___

### \_toElement

▸ **_toElement**(`element`): `Element`[] \| `Document`[] \| `HTMLElement`[]

Convierte una colección de elementos en un array de elementos o HTMLElements.

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `element` | `any`[] | Colección de elementos a convertir. |

#### Retornos

`Element`[] \| `Document`[] \| `HTMLElement`[]

- Array de elementos o HTMLElements.

#### Definido en

DOM/Selector.ts:112
