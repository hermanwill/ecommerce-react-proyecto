# 🛒 TechStore - Proyecto eCommerce React

Proyecto de eCommerce desarrollado con React + Vite que cumple con todos los requerimientos del curso. Incluye carrito de compras, integración con API, rutas dinámicas y rutas protegidas.

## 📋 Requerimientos Implementados

### ✅ Requerimiento #1: Carrito de Compras Básico
- ✓ Componente para listar productos disponibles
- ✓ useState para manejar el estado del carrito
- ✓ Eventos de clic para agregar productos al carrito
- ✓ Componente separado para mostrar el carrito
- ✓ Layout del eCommerce

### ✅ Requerimiento #2: Integración con API
- ✓ Conexión a MockAPI para obtener productos
- ✓ Estado de carga y manejo de errores
- ✓ Gestión del estado con useState
- ✓ useEffect para efectos secundarios
- ✓ Diseño actualizado del eCommerce
- ✓ Ampliación del carrito (agregar, eliminar, modificar cantidad)

### ✅ Requerimiento #3: Integración de Rutas
- ✓ Implementación de React Router
- ✓ Estado de carga y manejo de errores
- ✓ Componentes para cada sección
- ✓ Navegación entre productos

### ✅ Requerimiento #4: Rutas Dinámicas y Protegidas
- ✓ Rutas dinámicas para detalle de productos
- ✓ Interactividad completa
- ✓ Rutas protegidas con autenticación
- ✓ Navbar funcional

## 🚀 Tecnologías Utilizadas

- React 18
- Vite
- React Router DOM
- JavaScript (ES6+)
- CSS3
- MockAPI

## 📁 Estructura del Proyecto

```
ecommerce-react-proyecto/
├── public/
├── src/
│   ├── components/
│   │   ├── Layout.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProductCard.jsx
│   │   └── ProtectedRoute.jsx
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   └── CartContext.jsx
│   ├── pages/
│   │   ├── Cart.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Products.jsx
│   │   └── Profile.jsx
│   ├── services/
│   │   └── api.js
│   ├── styles/
│   │   └── App.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🔧 Configuración de MockAPI

### Paso 1: Crear cuenta en MockAPI
1. Visita [mockapi.io](https://mockapi.io/)
2. Crea una cuenta gratuita
3. Crea un nuevo proyecto llamado "TechStore"

### Paso 2: Crear el endpoint de productos
1. En tu proyecto, crea un nuevo recurso llamado `productos`
2. Agrega los siguientes campos:
   - `nombre` (string)
   - `categoria` (string)
   - `precio` (number)
   - `imagen` (string - URL de la imagen)
   - `stock` (number)
   - `descripcion` (string)

### Paso 3: Agregar productos de ejemplo
Crea al menos 6 productos con estos ejemplos:

```json
[
  {
    "nombre": "Monitor LG UltraWide 29",
    "categoria": "Monitores",
    "precio": 85000,
    "imagen": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
    "stock": 15,
    "descripcion": "Monitor ultra panorámico de 29 pulgadas con resolución Full HD"
  },
  {
    "nombre": "Smart TV Samsung 55",
    "categoria": "Televisores",
    "precio": 125000,
    "imagen": "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500",
    "stock": 8,
    "descripcion": "Smart TV 4K UHD de 55 pulgadas con sistema operativo Tizen"
  },
  {
    "nombre": "Notebook HP Pavilion",
    "categoria": "Notebooks",
    "precio": 165000,
    "imagen": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
    "stock": 12,
    "descripcion": "Notebook con procesador Intel Core i5, 8GB RAM, 512GB SSD"
  },
  {
    "nombre": "Monitor Dell 27 4K",
    "categoria": "Monitores",
    "precio": 95000,
    "imagen": "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?w=500",
    "stock": 10,
    "descripcion": "Monitor 4K UHD de 27 pulgadas con tecnología IPS"
  },
  {
    "nombre": "Smart TV LG OLED 65",
    "categoria": "Televisores",
    "precio": 285000,
    "imagen": "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500",
    "stock": 5,
    "descripcion": "TV OLED 4K de 65 pulgadas con WebOS y HDR"
  },
  {
    "nombre": "Notebook Lenovo ThinkPad",
    "categoria": "Notebooks",
    "precio": 195000,
    "imagen": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500",
    "stock": 7,
    "descripcion": "Notebook profesional con Intel Core i7, 16GB RAM, 1TB SSD"
  }
]
```

### Paso 4: Actualizar la URL de la API
1. Copia la URL de tu proyecto MockAPI
2. Abre el archivo `src/services/api.js`
3. Reemplaza la URL en `API_URL` con tu URL de MockAPI

```javascript
const API_URL = 'TU_URL_MOCKAPI_AQUI/api/v1';
```

## 💻 Instalación y Ejecución Local

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de instalación

1. Clona el repositorio:
```bash
git clone https://github.com/TU_USUARIO/ecommerce-react-proyecto.git
cd ecommerce-react-proyecto
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura tu URL de MockAPI en `src/services/api.js`

4. Ejecuta el proyecto en modo desarrollo:
```bash
npm run dev
```

5. Abre tu navegador en `http://localhost:5173`

## 🌐 Deploy en Vercel

### Opción 1: Deploy desde el repositorio de GitHub

1. Sube tu proyecto a GitHub
2. Ve a [vercel.com](https://vercel.com/)
3. Inicia sesión con tu cuenta de GitHub
4. Haz clic en "Add New Project"
5. Selecciona tu repositorio
6. Vercel detectará automáticamente que es un proyecto Vite
7. Haz clic en "Deploy"
8. ¡Listo! Tu proyecto estará disponible en una URL pública

### Opción 2: Deploy desde la línea de comandos

1. Instala Vercel CLI:
```bash
npm install -g vercel
```

2. Desde la raíz del proyecto:
```bash
vercel
```

3. Sigue las instrucciones en pantalla
4. Tu proyecto será desplegado automáticamente

## 🎯 Funcionalidades Principales

### 🛍️ Carrito de Compras
- Agregar productos al carrito
- Modificar cantidades
- Eliminar productos
- Ver total de la compra
- Persistencia del carrito durante la sesión

### 🔐 Autenticación
- Sistema de login simple
- Rutas protegidas (Perfil)
- Página de perfil con estadísticas del usuario

### 📱 Navegación
- Página de inicio con información de la tienda
- Listado completo de productos
- Detalle individual de cada producto
- Vista del carrito de compras

### 🎨 Diseño
- Diseño responsive
- Interfaz moderna y limpia
- Feedback visual en todas las acciones
- Estados de carga y error

## 🔑 Uso del Sistema de Login

Para acceder a las rutas protegidas:
1. Ve a "Iniciar Sesión"
2. Ingresa cualquier correo electrónico
3. Ingresa cualquier contraseña
4. Serás redirigido a tu perfil

## 📝 Scripts Disponibles

```bash
npm run dev      # Ejecuta el proyecto en modo desarrollo
npm run build    # Construye el proyecto para producción
npm run preview  # Previsualiza la versión de producción
```

## 🤝 Contribuciones

Este es un proyecto académico, pero las sugerencias son bienvenidas.

## 📄 Licencia

MIT

## 👨‍💻 Autor

Proyecto desarrollado como parte del curso de React

---

¡Gracias por revisar este proyecto! 🚀
