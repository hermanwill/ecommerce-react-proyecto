# 🚀 Guía de Deployment en Vercel

Esta guía te llevará paso a paso para publicar tu proyecto TechStore en Vercel de forma gratuita.

## 📋 Prerrequisitos

- Cuenta de GitHub
- Proyecto subido a un repositorio de GitHub
- Cuenta gratuita en Vercel (se puede crear con GitHub)

## 🔧 Parte 1: Preparar el Proyecto para Deployment

### Paso 1: Verificar archivos necesarios

Asegúrate de que tu proyecto tenga estos archivos:
- ✅ `vercel.json` - Configuración de Vercel
- ✅ `package.json` - Dependencias del proyecto
- ✅ `vite.config.js` - Configuración de Vite
- ✅ `.gitignore` - Para no subir node_modules

### Paso 2: Actualizar la URL de MockAPI

Si aún no lo has hecho, actualiza `src/services/api.js` con tu URL de MockAPI:

```javascript
const API_URL = 'https://TU_ID_MOCKAPI.mockapi.io/api/v1';
```

## 📤 Parte 2: Subir el Proyecto a GitHub

### Si aún no tienes el proyecto en GitHub:

1. Crea un nuevo repositorio en [github.com](https://github.com)
   - Haz clic en "+" → "New repository"
   - Nombre: `ecommerce-react-proyecto`
   - Visibilidad: Public o Private (ambas funcionan)
   - NO inicialices con README

2. En tu terminal, dentro de la carpeta del proyecto:

```bash
git init
git add .
git commit -m "Primer commit: Proyecto eCommerce completo"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/ecommerce-react-proyecto.git
git push -u origin main
```

## 🌐 Parte 3: Deployment en Vercel

### Método 1: Deploy desde la Web (Recomendado)

#### Paso 1: Crear cuenta en Vercel
1. Ve a [vercel.com](https://vercel.com/)
2. Haz clic en "Sign Up"
3. Selecciona "Continue with GitHub"
4. Autoriza a Vercel para acceder a tus repositorios

#### Paso 2: Importar el Proyecto
1. En el Dashboard de Vercel, haz clic en "Add New..."
2. Selecciona "Project"
3. Busca tu repositorio `ecommerce-react-proyecto`
4. Haz clic en "Import"

#### Paso 3: Configurar el Proyecto
Vercel detectará automáticamente que es un proyecto Vite. Verifica:

- **Framework Preset**: Vite
- **Build Command**: `vite build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

No necesitas cambiar nada, estos son los valores por defecto.

#### Paso 4: Deploy
1. Haz clic en "Deploy"
2. Espera 1-2 minutos mientras Vercel construye tu proyecto
3. ¡Listo! Verás un mensaje de "Congratulations"

#### Paso 5: Acceder a tu Sitio
Vercel te proporcionará una URL como:
```
https://ecommerce-react-proyecto-tu-usuario.vercel.app
```

### Método 2: Deploy desde la Terminal

#### Paso 1: Instalar Vercel CLI
```bash
npm install -g vercel
```

#### Paso 2: Login
```bash
vercel login
```
Sigue las instrucciones para autenticarte.

#### Paso 3: Deploy
Desde la raíz del proyecto:
```bash
vercel
```

Responde las preguntas:
- Set up and deploy? → **Yes**
- Which scope? → Selecciona tu cuenta
- Link to existing project? → **No**
- What's your project's name? → `ecommerce-react-proyecto`
- In which directory is your code located? → `.`

#### Paso 4: Deploy a Producción
```bash
vercel --prod
```

## 🔄 Actualizar el Proyecto

### Después de hacer cambios en tu código:

1. Commit y push a GitHub:
```bash
git add .
git commit -m "Descripción de los cambios"
git push
```

2. Vercel detectará automáticamente los cambios y hará un nuevo deploy

## ⚙️ Configuraciones Adicionales

### Agregar un Dominio Personalizado

1. Ve a tu proyecto en Vercel Dashboard
2. Haz clic en "Settings" → "Domains"
3. Agrega tu dominio personalizado
4. Sigue las instrucciones para configurar los DNS

### Variables de Entorno

Si necesitas agregar variables de entorno:

1. Ve a "Settings" → "Environment Variables"
2. Agrega tus variables:
   - Name: `VITE_API_URL`
   - Value: Tu URL de MockAPI
3. Haz clic en "Save"
4. Redeploy el proyecto

## 📊 Monitorear el Proyecto

En el Dashboard de Vercel puedes ver:
- 📈 Analíticas de visitantes
- ⚡ Rendimiento del sitio
- 🚀 Historial de deployments
- 📝 Logs en tiempo real

## 🎯 URLs Importantes

Después del deployment tendrás:

- **URL de Producción**: `https://tu-proyecto.vercel.app`
- **Preview URLs**: URLs temporales para cada branch
- **Dashboard**: `https://vercel.com/tu-usuario/ecommerce-react-proyecto`

## ✅ Verificar que Todo Funciona

1. Visita tu URL de Vercel
2. Prueba la navegación:
   - ✅ Página de inicio carga correctamente
   - ✅ Lista de productos se muestra (desde MockAPI)
   - ✅ Puedes ver detalles de un producto
   - ✅ El carrito funciona
   - ✅ El login funciona
   - ✅ Las rutas protegidas funcionan

## 🐛 Solución de Problemas

### Error: "Build failed"
- Verifica que `package.json` tenga todas las dependencias
- Asegúrate de que el código funciona localmente con `npm run build`
- Revisa los logs en el Dashboard de Vercel

### Error: "Page Not Found" en rutas
- Verifica que tengas el archivo `vercel.json` con la configuración de rewrites

### Los productos no cargan
- Verifica que la URL de MockAPI sea correcta
- Comprueba en la consola del navegador si hay errores de CORS
- Asegúrate de que MockAPI esté activo

### El sitio es muy lento
- Vercel tiene servidores en todo el mundo, el primer acceso puede ser lento
- Los siguientes accesos serán más rápidos por el CDN

## 💡 Mejores Prácticas

1. **Usa branches para desarrollo**:
   - `main` para producción
   - `dev` para desarrollo
   - Vercel creará preview URLs para cada branch

2. **Protege tu rama main**:
   - Configura branch protection en GitHub
   - Requiere reviews antes de merge

3. **Monitorea el rendimiento**:
   - Revisa las analíticas de Vercel
   - Optimiza si ves problemas de velocidad

## 🎓 Recursos Adicionales

- [Documentación de Vercel](https://vercel.com/docs)
- [Vercel CLI Documentation](https://vercel.com/docs/cli)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

## 🎉 ¡Felicidades!

Tu proyecto TechStore ahora está en línea y accesible desde cualquier parte del mundo.

Comparte tu URL con:
- 👨‍🏫 Tu profesor
- 👥 Tus compañeros
- 💼 Tu portfolio

---

URL de ejemplo del proyecto desplegado:
`https://ecommerce-react-proyecto.vercel.app`
