# Prueba técnica

### **Prueba técnica para desarrollador frontend de Angular**

#### **Duración**: 3-4 horas
#### **Dificultad**: Intermedio a avanzado
#### **Objetivo**: Evaluar la capacidad de un candidato para crear una aplicación Angular con enrutamiento, servicios, administración de estado e integración de API.

---

## **Descripción general de la producto**
Debe crear una **aplicación de administración de productos** simple con Angular. La aplicación debe permitir a los usuarios:
1. Ver una lista de productos (implementación iniciada.)
2. Agregar un nuevo producto
3. Actualizar datos de un producto
4. Eliminar un producto

---

## **Requisitos**

### **1. Configuración del proyecto**
- Angular 18
- Seguir las mejores prácticas para la estructura de carpetas
- Corregir implementación actual en caso de errores
  - `StatusComponent` y `StatusColorPipe` se excluyen de esta regla (No deben ser modificados).

### **2. Interfaz de usuario y enrutamiento**
- Implementar una **Página de inicio** que muestre la lista de productos (`/`)
- Implementar una **Página para agregar productos** donde los usuarios puedan agregar una nueva producto (`/create`)
- Cualquier otra que considere necesaria

### **3. Componente de lista de productos**
- Cada producto debe mostrar:
- Título del producto
- Descripcion 
- Precio 
- Categoría (consultar API)
- Botones para "Editar" y "Eliminar"
- Alternar entre vista de tarjetas y tabla.
- Utilizar `StatusComponent` para rangos de precio:
  - Verde 0 < x < 100 // Barato
  - Amarillo 101 < x < 500 // Medio
  - Rojo 501 < x // Caro

### **4. Componente de formulario de producto**
- Crear un `ProductFormComponent` para agregar nuevas productos o editar una existente.
- Usar **Formularios reactivos** con validación (p. ej., título requerido y categoría).

### **6. Integración de API**

- API URL: https://young-sands-07814.herokuapp.com/api (Está configurada en el `environment`)
- [Documentación fakeapi](https://fakeapi.platzi.com/)

### **7. Características adicionales (opcionales)**
- Implementa un **filtro** en funcion del campo de texto. Soportado por API.
- Mejorar la apariencia visual. (Biblioteca o estilos personalizado, libre elección).
- Utilizar una biblioteca de componentes (Recomendación, libre elección)
- Agrega **pruebas unitarias** usando Jasmine/Karma (Al menos un componente y un servicio.)

---

## **Criterios de evaluación**
✔️ **Calidad del código**: limpio, legible, modular, sigue las mejores prácticas de Angular
✔️ **Funcionalidad**: cumple con todos los requisitos
✔️ **Gestión de estado**: uso eficiente de RxJS o NgRx (en caso necesario)
✔️ **Integración de API**: uso adecuado de HTTPClient
✔️ **Bonificación**: si se implementan características adicionales

---

## **Envío**
- Envía el proyecto a **GitHub** o **GitLab**
- Comparte el enlace del repositorio
