# Virtual Inventory Front — Documentación de Código

## Guía de Despliegue

### Desarrollo Local

**Requisitos:**
- Node.js 20+
- npm 10+

**Pasos:**

```bash
# 1. Clonar repositorio
git clone <repo-url>
cd virtual-inventory-front

# 2. Instalar dependencias
npm install

# 3. Iniciar backend simulado (terminal 1)
npm run backend

# 4. Iniciar frontend (terminal 2)
npm run start
```

La app estará disponible en `http://localhost:4200` y el backend en `http://localhost:3000`.

### Build de Producción

```bash
npm run build
# Los archivos se generan en: dist/virtual-inventory-front/browser/
```

### Servir Build de Producción

```bash
# Con servidor estático
npx serve dist/virtual-inventory-front/browser -p 8080

# O con http-server
npx http-server dist/virtual-inventory-front/browser -p 8080
```

### Despliegue en Vercel

```bash
npm i -g vercel
vercel
```

**`vercel.json`** (para SPA routing):
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Despliegue en Netlify

**`netlify.toml`**:
```toml
[build]
  command = "npm run build"
  publish = "dist/virtual-inventory-front/browser"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Despliegue en GitHub Pages

```bash
npm install -D angular-cli-ghpages
ng build --base-href="/<repo-name>/"
npx angular-cli-ghpages --dir=dist/virtual-inventory-front/browser
```

---

## Variables de Entorno

### Estado Actual

La API URL está hardcodeada en `src/app/models/api.url.ts`:

```typescript
export const API_URL = 'http://localhost:3000';
```

### Variables Requeridas

| Variable | Ubicación | Desarrollo | Producción |
|----------|-----------|-----------|------------|
| `API_URL` | `src/app/models/api.url.ts` | `http://localhost:3000` | URL del backend real |
| `PORT` | `server.js` (hardcodeado) | `3000` | Puerto del servidor |

### Configuración Recomendada: Angular Environments

**1. Crear `src/environments/environment.ts`** (desarrollo):
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000',
};
```

**2. Crear `src/environments/environment.prod.ts`** (producción):
```typescript
export const environment = {
  production: true,
  apiUrl: 'https://api.tudominio.com',
};
```

**3. Actualizar `src/app/models/api.url.ts`:**
```typescript
import { environment } from '../../environments/environment';
export const API_URL = environment.apiUrl;
```

**4. Configurar reemplazo en `angular.json`:**

Agregar en `build.configurations.production`:
```json
"fileReplacements": [
  {
    "replace": "src/environments/environment.ts",
    "with": "src/environments/environment.prod.ts"
  }
]
```

### Variables del Backend (server.js)

El `server.js` tiene el puerto hardcodeado en `3000`. Se puede externalizar:

```javascript
const PORT = process.env.PORT || 3000;
const DB_FILE = process.env.DB_FILE || 'db.json';
// ...
server.listen(PORT, () => {
  console.log(`JSON Server corriendo en http://localhost:${PORT}`);
});
```

**`.env` para el backend** (no commitear):
```env
PORT=3000
DB_FILE=db.json
```

Agregar al `.gitignore`:
```
.env
.env.local
```
