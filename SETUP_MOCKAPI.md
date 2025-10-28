# 📚 Guía de Configuración de MockAPI

Esta guía te ayudará a configurar MockAPI paso a paso para el proyecto TechStore.

## 🌐 Paso 1: Crear Cuenta en MockAPI

1. Visita [https://mockapi.io/](https://mockapi.io/)
2. Haz clic en "Sign Up" (Registrarse)
3. Puedes registrarte con:
   - GitHub
   - Google
   - Email

## 🚀 Paso 2: Crear un Nuevo Proyecto

1. Una vez dentro de tu dashboard, haz clic en "+ New Project"
2. Dale un nombre al proyecto: **TechStore**
3. Haz clic en "Create"

## 📦 Paso 3: Crear el Recurso de Productos

1. Dentro de tu proyecto, haz clic en "+ New Resource"
2. En el campo de nombre, escribe: **productos**
3. MockAPI generará automáticamente la URL del endpoint

## 🛠️ Paso 4: Configurar los Campos del Recurso

Haz clic en el ícono de configuración (⚙️) del recurso "productos" y agrega los siguientes campos:

| Campo | Tipo | Ejemplo |
|-------|------|---------|
| id | auto-generated | 1, 2, 3... |
| nombre | string | "Monitor LG UltraWide" |
| categoria | string | "Monitores" |
| precio | number | 85000 |
| imagen | string | "https://..." |
| stock | number | 15 |
| descripcion | string | "Descripción del producto" |

## 📝 Paso 5: Agregar Productos

Copia y pega estos productos uno por uno en MockAPI:

### Producto 1 - Monitor LG
```json
{
  "nombre": "Monitor LG UltraWide 29",
  "categoria": "Monitores",
  "precio": 85000,
  "imagen": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
  "stock": 15,
  "descripcion": "Monitor ultra panorámico de 29 pulgadas con resolución Full HD y tecnología IPS para colores vibrantes"
}
```

### Producto 2 - Smart TV Samsung
```json
{
  "nombre": "Smart TV Samsung 55",
  "categoria": "Televisores",
  "precio": 125000,
  "imagen": "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500",
  "stock": 8,
  "descripcion": "Smart TV 4K UHD de 55 pulgadas con sistema operativo Tizen y HDR10+"
}
```

### Producto 3 - Notebook HP
```json
{
  "nombre": "Notebook HP Pavilion",
  "categoria": "Notebooks",
  "precio": 165000,
  "imagen": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
  "stock": 12,
  "descripcion": "Notebook con procesador Intel Core i5 de 11va gen, 8GB RAM DDR4, 512GB SSD"
}
```

### Producto 4 - Monitor Dell
```json
{
  "nombre": "Monitor Dell 27 4K",
  "categoria": "Monitores",
  "precio": 95000,
  "imagen": "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?w=500",
  "stock": 10,
  "descripcion": "Monitor profesional 4K UHD de 27 pulgadas con panel IPS y cobertura sRGB del 99%"
}
```

### Producto 5 - Smart TV LG OLED
```json
{
  "nombre": "Smart TV LG OLED 65",
  "categoria": "Televisores",
  "precio": 285000,
  "imagen": "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500",
  "stock": 5,
  "descripcion": "TV OLED 4K de 65 pulgadas con WebOS, procesador α9 Gen 4 y Dolby Vision IQ"
}
```

### Producto 6 - Notebook Lenovo
```json
{
  "nombre": "Notebook Lenovo ThinkPad",
  "categoria": "Notebooks",
  "precio": 195000,
  "imagen": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500",
  "stock": 7,
  "descripcion": "Notebook profesional con Intel Core i7 de 12va gen, 16GB RAM, 1TB SSD NVMe"
}
```

### Producto 7 - Monitor Samsung Curvo
```json
{
  "nombre": "Monitor Samsung Curvo 32",
  "categoria": "Monitores",
  "precio": 110000,
  "imagen": "https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?w=500",
  "stock": 6,
  "descripcion": "Monitor gaming curvo de 32 pulgadas con 144Hz y 1ms de tiempo de respuesta"
}
```

### Producto 8 - Smart TV Sony
```json
{
  "nombre": "Smart TV Sony Bravia 50",
  "categoria": "Televisores",
  "precio": 155000,
  "imagen": "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=500",
  "stock": 9,
  "descripcion": "Smart TV 4K HDR con procesador X1 y sistema Android TV integrado"
}
```

### Producto 9 - Notebook Asus Gaming
```json
{
  "nombre": "Notebook ASUS ROG Strix",
  "categoria": "Notebooks",
  "precio": 245000,
  "imagen": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500",
  "stock": 4,
  "descripcion": "Notebook gaming con Intel Core i7, RTX 3060, 16GB RAM, 512GB SSD, pantalla 144Hz"
}
```

### Producto 10 - Monitor BenQ
```json
{
  "nombre": "Monitor BenQ Professional 24",
  "categoria": "Monitores",
  "precio": 72000,
  "imagen": "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=500",
  "stock": 14,
  "descripcion": "Monitor profesional Full HD de 24 pulgadas con calibración de fábrica"
}
```

## 🔗 Paso 6: Copiar la URL de la API

1. En tu recurso "productos", encontrarás una URL como:
   ```
   https://[ID_UNICO].mockapi.io/api/v1/productos
   ```

2. Copia la parte base de la URL (sin "/productos"):
   ```
   https://[ID_UNICO].mockapi.io/api/v1
   ```

## ⚙️ Paso 7: Configurar la URL en el Proyecto

1. Abre el archivo `src/services/api.js`
2. Reemplaza la constante `API_URL` con tu URL:

```javascript
const API_URL = 'https://TU_ID_UNICO.mockapi.io/api/v1';
```

## ✅ Paso 8: Verificar que Funciona

1. Ejecuta el proyecto: `npm run dev`
2. Ve a la sección "Productos"
3. Deberías ver todos los productos cargados desde MockAPI

## 🎯 Endpoints Disponibles

Una vez configurado, tendrás acceso a estos endpoints:

- `GET /api/v1/productos` - Obtener todos los productos
- `GET /api/v1/productos/:id` - Obtener un producto específico
- `POST /api/v1/productos` - Crear un nuevo producto
- `PUT /api/v1/productos/:id` - Actualizar un producto
- `DELETE /api/v1/productos/:id` - Eliminar un producto

## 🔍 Probar los Endpoints

Puedes probar tus endpoints directamente desde el navegador:

1. Ir a: `https://TU_ID_UNICO.mockapi.io/api/v1/productos`
2. Deberías ver un JSON con todos tus productos

## 💡 Consejos Útiles

- MockAPI genera automáticamente IDs únicos para cada producto
- Puedes editar los productos directamente desde el dashboard de MockAPI
- Los cambios en MockAPI se reflejan inmediatamente en tu aplicación
- MockAPI tiene un límite de 100 peticiones por minuto en la versión gratuita (más que suficiente para desarrollo)

## 🆘 Solución de Problemas

### Error: No se cargan los productos
- Verifica que la URL en `api.js` esté correcta
- Asegúrate de que el recurso se llame exactamente "productos"
- Comprueba la consola del navegador para ver errores específicos

### Error 404
- Verifica que la URL incluya `/api/v1`
- Asegúrate de que el proyecto esté activo en MockAPI

### CORS Error
- MockAPI maneja CORS automáticamente, no deberías tener este problema
- Si persiste, verifica que estés usando HTTPS en la URL

---

¡Listo! Tu MockAPI está configurado y funcionando. 🎉
