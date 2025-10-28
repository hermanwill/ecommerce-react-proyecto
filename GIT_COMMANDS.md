# 📚 Guía de Git y GitHub

Comandos esenciales para trabajar con Git y GitHub en tu proyecto TechStore.

## 🚀 Configuración Inicial

### Primera vez usando Git

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

### Inicializar repositorio

```bash
cd ecommerce-react-proyecto
git init
git branch -M main
```

## 📤 Subir Proyecto a GitHub

### Primera vez

1. Crea un repositorio en GitHub (sin README)

2. Conecta tu proyecto local:
```bash
git remote add origin https://github.com/TU_USUARIO/ecommerce-react-proyecto.git
```

3. Agrega todos los archivos:
```bash
git add .
```

4. Haz tu primer commit:
```bash
git commit -m "Primer commit: Proyecto eCommerce completo"
```

5. Sube los cambios:
```bash
git push -u origin main
```

## 🔄 Flujo de Trabajo Diario

### Ver estado de los archivos
```bash
git status
```

### Agregar cambios
```bash
git add .                    # Agregar todos los archivos
git add src/pages/Cart.jsx   # Agregar un archivo específico
```

### Hacer commit
```bash
git commit -m "Descripción clara de los cambios"
```

### Subir cambios a GitHub
```bash
git push
```

### Ver historial
```bash
git log
git log --oneline           # Versión resumida
```

## 🌿 Trabajar con Branches

### Crear y cambiar a una nueva rama
```bash
git checkout -b nombre-rama
```

### Ver todas las ramas
```bash
git branch
```

### Cambiar de rama
```bash
git checkout main
git checkout dev
```

### Fusionar una rama
```bash
git checkout main           # Ir a la rama destino
git merge nombre-rama       # Fusionar
```

### Eliminar una rama
```bash
git branch -d nombre-rama   # Local
git push origin --delete nombre-rama  # Remoto
```

## ⬇️ Actualizar desde GitHub

### Descargar cambios
```bash
git pull
```

### Ver diferencias antes de pull
```bash
git fetch
git diff origin/main
```

## 🔧 Comandos Útiles

### Deshacer cambios no commiteados
```bash
git checkout -- archivo.jsx    # Un archivo
git checkout -- .              # Todos los archivos
```

### Deshacer el último commit (mantener cambios)
```bash
git reset --soft HEAD~1
```

### Ver cambios realizados
```bash
git diff                    # Cambios no staged
git diff --staged          # Cambios staged
```

### Cambiar mensaje del último commit
```bash
git commit --amend -m "Nuevo mensaje"
```

## 🎯 Ejemplos de Commits

### Buenos mensajes de commit
```bash
git commit -m "Agregar funcionalidad de carrito de compras"
git commit -m "Corregir error en cálculo de total"
git commit -m "Actualizar estilos de Navbar"
git commit -m "Implementar rutas protegidas"
```

### Mensajes según el tipo de cambio
```bash
git commit -m "feat: Agregar página de detalle de producto"
git commit -m "fix: Corregir error en cantidad del carrito"
git commit -m "style: Mejorar diseño responsive"
git commit -m "docs: Actualizar README con instrucciones"
```

## 🚨 Solución de Problemas

### Error: "Please commit your changes or stash them"
```bash
git stash              # Guardar cambios temporalmente
git pull               # Actualizar
git stash pop          # Restaurar cambios
```

### Error: "Failed to push"
```bash
git pull --rebase      # Traer cambios y aplicar los tuyos encima
git push
```

### Error: "Merge conflict"
1. Abre los archivos en conflicto
2. Busca las líneas con `<<<<<<<`, `=======`, `>>>>>>>`
3. Edita el archivo manualmente
4. Guarda los cambios
```bash
git add .
git commit -m "Resolver conflictos de merge"
git push
```

### Descartar todos los cambios locales
```bash
git reset --hard origin/main
```

## 📋 .gitignore

Ya incluido en el proyecto. Archivos ignorados:
```
node_modules/
dist/
*.local
.env
.DS_Store
```

## 🔐 GitHub con SSH (Opcional)

### Generar clave SSH
```bash
ssh-keygen -t ed25519 -C "tu@email.com"
```

### Agregar clave a GitHub
1. Copia el contenido de `~/.ssh/id_ed25519.pub`
2. Ve a GitHub → Settings → SSH Keys
3. Agrega la clave

### Cambiar URL del repositorio a SSH
```bash
git remote set-url origin git@github.com:TU_USUARIO/ecommerce-react-proyecto.git
```

## 📊 Ver Información del Repositorio

### Ver URL del repositorio remoto
```bash
git remote -v
```

### Ver información de la rama actual
```bash
git branch --show-current
```

### Ver diferencias con el remoto
```bash
git fetch
git status
```

## 🎓 Flujo de Trabajo Recomendado

### Para desarrollo de nuevas funcionalidades:

1. Crear rama de feature:
```bash
git checkout -b feature/nueva-funcionalidad
```

2. Trabajar y hacer commits:
```bash
git add .
git commit -m "Implementar nueva funcionalidad"
```

3. Subir la rama:
```bash
git push -u origin feature/nueva-funcionalidad
```

4. Crear Pull Request en GitHub

5. Después del merge, actualizar main:
```bash
git checkout main
git pull
```

## 🆘 Comandos de Emergencia

### Deshacer TODOS los cambios (CUIDADO)
```bash
git reset --hard HEAD
git clean -fd
```

### Ver qué archivos se van a commitear
```bash
git diff --cached
```

### Remover archivo del staging
```bash
git reset HEAD archivo.jsx
```

## 💡 Consejos

1. **Haz commits frecuentes**: Mejor muchos commits pequeños que uno grande
2. **Mensajes claros**: Describe QUÉ cambios hiciste y POR QUÉ
3. **Pull antes de push**: Siempre actualiza antes de subir cambios
4. **Usa branches**: No trabajes directamente en main
5. **Revisa antes de commit**: Usa `git status` y `git diff`

## 📱 Comandos Rápidos

```bash
git status              # Ver estado
git add .               # Agregar todo
git commit -m "msg"     # Commit
git push                # Subir
git pull                # Actualizar
git log --oneline       # Ver historial
git branch              # Ver ramas
```

---

¡Con estos comandos podrás manejar tu proyecto en GitHub sin problemas! 🚀
