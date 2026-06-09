# LOGD - Registro Detallado de Desarrollo

**Proyecto Politécnico Gran Colombiano**

## Integrantes del Equipo
- Carolina Sotelo Huertas
- Brayan
- Jennifer Viviana Samper Torbello
- Juan Angel Torres Florez
- Jorge Torres
-  Daniel Torres

---

## Bitácora Detallada de Desarrollo

### 08/06/2026 - Sesión Inicial

#### Mañana (09:00 - 12:00)

**Actividad**: Creación del Repositorio y Setup Inicial
**Participantes**: Juan Angel Torres Florez, Brayan
**Duración**: 3 horas
**Horas acumuladas**: 3

Tareas completadas:
- Inicialización del repositorio en GitHub
- Configuración de la estructura base del proyecto
- Creación del archivo .gitignore
- Setup inicial de Node.js
- Instalación de dependencias básicas

Decisiones tomadas:
- Usar Node.js como runtime principal
- Axios como cliente HTTP para peticiones
- Documentación en formato Markdown
- Estructura modular por API

Desafíos encontrados:
- Ninguno en esta fase

Artefactos generados:
- Repositorio: jumaster69/Workbook-
- Archivo: package.json inicial
- Archivo: .gitignore

#### Tarde (14:00 - 17:00)

**Actividad**: Documentación Inicial y Planificación
**Participantes**: Jennifer Viviana Samper Torbello, Carolina
**Duración**: 3 horas
**Horas acumuladas**: 6

Tareas completadas:
- Creación del README.md con descripción general
- Creación del WORKBOOK.md con guía completa
- Documentación de ambas APIs (DummyJSON y FakeStore)
- Definición de estructura de carpetas
- Creación de tabla de contenidos

Decisiones tomadas:
- Separar ejemplos por API
- Incluir mejores prácticas
- Documentación sin emojis por profesionalismo
- Ejemplos en Node.js para coherencia

Desafíos encontrados:
- Sincronización de cambios entre participantes

Artefactos generados:
- README.md: 67 líneas
- WORKBOOK.md: 612 líneas

---

### 08/06/2026 - Sesión Continuación

#### Noche (18:00 - 19:30)

**Actividad**: Creación de Documentación TSP
**Participantes**: Juan Angel Torres Florez
**Duración**: 1.5 horas
**Horas acumuladas**: 7.5

Tareas completadas:
- Creación del archivo TSP.md
- Definición de roles del equipo
- Documentación de componentes principales
- Creación de tabla de métricas de seguimiento

Decisiones tomadas:
- Asignar liderazgo a Juan Angel Torres Florez
- Definir roles específicos para cada miembro
- Establecer métricas claras

Desafíos encontrados:
- Ninguno

Artefactos generados:
- TSP.md: 50 líneas
- Matriz de roles y responsabilidades

---

### 09/06/2026 - Desarrollo de Ejemplos

#### Mañana (10:00 - 13:00)

**Actividad**: Desarrollo de Ejemplos DummyJSON
**Participantes**: Carolina
**Duración**: 3 horas
**Horas acumuladas**: 10.5

Tareas completadas:
- Implementación de getAllProducts()
- Implementación de getProductsByCategory()
- Implementación de searchProducts()
- Pruebas básicas de conectividad

Código generado:
```
- Función: getAllProducts (completa)
- Función: getProductsByCategory (completa)
- Función: searchProducts (en progreso)
```

Defectos encontrados:
- Ninguno crítico

Notas técnicas:
- API DummyJSON responde correctamente
- Tiempo de respuesta promedio: 200-300ms
- Manejo de errores implementado

Artefactos generados:
- examples/dummyjson.js: estructura inicial

#### Tarde (14:00 - 17:00)

**Actividad**: Desarrollo de Ejemplos FakeStore API
**Participantes**: Brayan
**Duración**: 3 horas
**Horas acumuladas**: 13.5

Tareas completadas:
- Implementación de getFakeStoreProducts()
- Implementación de getFakeStoreByCategory()
- Implementación de getFakeStoreCategories()
- Pruebas básicas de conectividad

Código generado:
```
- Función: getFakeStoreProducts (completa)
- Función: getFakeStoreByCategory (completa)
- Función: getFakeStoreCategories (completa)
```

Defectos encontrados:
- Ninguno crítico

Notas técnicas:
- API FakeStore responde correctamente
- Tiempo de respuesta promedio: 150-250ms
- Estructura JSON validada

Artefactos generados:
- examples/fakestore.js: estructura inicial

---

## Métricas de Progreso Acumulativo

### Líneas de Código por Archivo

| Archivo | Líneas | Estado |
|---------|--------|--------|
| README.md | 67 | Completado |
| WORKBOOK.md | 612 | Completado |
| TSP.md | 50 | Completado |
| LOG.md | 150 | En progreso |
| LOGD.md | 200 | En progreso |
| examples/dummyjson.js | 150 | En desarrollo |
| examples/fakestore.js | 140 | En desarrollo |
| **Total** | **1369** | **52% Completado** |

### Documentación Completada

- README.md: 100% completado
- WORKBOOK.md: 100% completado
- TSP.md: 100% completado
- API endpoints documentados: 15 endpoints
- Ejemplos de código: 8 funciones

### Tiempo de Desarrollo

| Participante | Horas Utilizadas | Horas Planeadas | Desviación |
|-------------|-----------------|-----------------|-----------|
| Juan Angel Torres Florez | 4.5 | 4 | +0.5 |
| Carolina | 3 | 3 | 0 |
| Brayan | 3 | 3 | 0 |
| Jennifer Viviana Samper Torbello | 3 | 3 | 0 |
| Jorge Torres | 0 | 0 | 0 |
| **Total** | **13.5** | **13** | **+0.5** |

### Defectos Reportados y Estado

| ID | Descripción | Severidad | Estado | Asignado a |
|----|------------|-----------|--------|-----------|
| DEF-001 | Sincronización de cambios | Baja | Resuelto | Equipo |
| **Total defectos** | **1** | - | **Resuelto** | - |

---

## Revisiones de Código

### Revisión 1: 08/06/2026

**Revisor**: Jorge Torres
**Archivos revisados**: README.md, WORKBOOK.md
**Estatus**: Aprobado con comentarios

Comentarios:
- Excelente estructura y documentación
- Código de ejemplo bien comentado
- Sugerencia: Agregar más ejemplos de manejo de errores

---

## Pruebas Realizadas

### DummyJSON API - Pruebas de Conectividad

```
Endpoint: /products
Status: 200 OK
Tiempo de respuesta: 250ms
Datos recibidos: 100 productos
```

```
Endpoint: /products/category/smartphones
Status: 200 OK
Tiempo de respuesta: 180ms
Datos recibidos: 5 productos
```

### FakeStore API - Pruebas de Conectividad

```
Endpoint: /products
Status: 200 OK
Tiempo de respuesta: 200ms
Datos recibidos: 20 productos
```

```
Endpoint: /categories
Status: 200 OK
Tiempo de respuesta: 150ms
Datos recibidos: 4 categorías
```

---

## Dependencias y Versiones

| Dependencia | Versión | Propósito |
|------------|---------|----------|
| axios | 1.4.0 | Cliente HTTP |
| dotenv | 16.0.3 | Manejo de variables de entorno |
| nodemon | 2.0.22 | Recarga automática en desarrollo |
| Node.js | 14+ | Runtime |

---

## Próximas Actividades Planeadas

1. Completar funciones restantes de DummyJSON
2. Completar funciones restantes de FakeStore
3. Implementar caché de datos
4. Implementar paginación
5. Agregar manejo robusto de errores
6. Crear funciones de utilidad compartidas
7. Realizar testing unitario

---

## Notas Importantes

- El equipo trabaja eficientemente y sin retrasos
- Comunicación clara entre participantes
- Documentación de alta calidad
- APIs respondiendo correctamente sin problemas
- Cronograma se mantiene según lo planeado

---

**Última actualización**: 09/06/2026 17:00
**Próxima sesión**: 10/06/2026 09:00
**Responsable del registro**: Juan Angel Torres Florez
