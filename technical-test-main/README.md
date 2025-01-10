# Prueba Técnica - JavaScript y React con Vite

## Objetivo

Crear una aplicación web sencilla utilizando JavaScript y React con Vite, aplicando conceptos básicos e intermedios de ambas tecnologías.

---

## Instrucciones

1. Clona el siguiente repositorio de inicio o configura un nuevo proyecto con Vite:

   ```bash
   npm create vite@latest my-react-app --template react
   cd my-react-app
   npm install
   npm run dev
   ```

2. Completa las siguientes tareas.

---

## Tareas

### Parte 1: JavaScript

#### Manipulación de Arrays

- Crea una función `filterBySearch` que reciba un array de objetos y una cadena de búsqueda.
- Devuelve los objetos que contengan la cadena en alguna de sus propiedades.

**Ejemplo de entrada:**

```javascript
const items = [
  { id: 1, name: "Apple", category: "Fruit" },
  { id: 2, name: "Carrot", category: "Vegetable" },
  { id: 3, name: "Banana", category: "Fruit" },
];
const search = "Fruit";
```

**Salida esperada:**

```javascript
[
  { id: 1, name: "Apple", category: "Fruit" },
  { id: 3, name: "Banana", category: "Fruit" },
];
```

#### Promesas

- Implementa una función `fetchData` que use `fetch` para obtener datos de la API pública [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts).
- Muestra los primeros 5 títulos de los posts en la consola.

---

### Parte 2: React

#### Componentes Básicos

- Crea un componente llamado `PostList`.
- Este componente debe:
  - Mostrar una lista de posts (puedes usar los datos de [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts)).
  - Incluir una barra de búsqueda que permita filtrar los posts por título en tiempo real.

**Props esperadas:**

- `posts`: Un array de objetos con información de los posts.
- `onSearch`: Una función para manejar cambios en la barra de búsqueda.

#### Estado y Efectos

- Usa `useState` y `useEffect` en un componente principal para:
  - Cargar los datos de la API al montar el componente.
  - Pasar los datos a `PostList` como prop.

#### Interactividad

- Permite que los usuarios puedan dar clic en un post para verlo en detalle.
- Muestra los detalles del post seleccionado en un componente `PostDetail`.

---

## Criterios de Evaluación

### JavaScript

- Uso correcto de funciones, manipulación de arrays y promesas.

### React

- Estructura de componentes.
- Uso correcto de props, `useState`, y `useEffect`.
- Separación de responsabilidades entre componentes.

### Buenas prácticas

- Código limpio y legible.
- Uso de convenciones estándar.

---

## Extras (Opcionales)

- Estiliza la aplicación utilizando **Tailwind CSS** o **CSS Modules**.
- Implementa paginación para los posts.
- Usa **Zustand** o **Context API** para manejar el estado global.

---

¡Buena suerte con la prueba técnica!
