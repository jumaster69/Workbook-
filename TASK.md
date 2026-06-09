# TASK - Lista de Tareas del Proyecto

**Proyecto Politécnico Gran Colombiano**

## Integrantes del Equipo
- Carolina Sotelo Huertas
- Brayan
- Jennifer Viviana Samper Torbello
- Juan Angel Torres Florez
- Jorge Torres
- Daniel Torres
---

## Tareas por Completar

### Fase 1: Planificación y Setup

**Estado**: 70% completado

- [x] Crear repositorio GitHub
- [x] Definir estructura del proyecto
- [x] Crear documentación base (README, WORKBOOK)
- [x] Configurar package.json
- [x] Crear archivo TSP.md
- [x] Crear archivo LOG.md
- [x] Crear archivo LOGD.md
- [ ] Crear archivo .env.example
- [ ] Configurar .gitignore final

**Responsable**: Juan Angel Torres Florez
**Plazo**: 10/06/2026
**Progreso**: 7 de 9 tareas completadas

---

### Fase 2: Desarrollo de Módulos

**Estado**: 10% completado

#### Módulo DummyJSON

- [ ] Implementar función getAllProducts()
- [ ] Implementar función getProductsByCategory()
- [ ] Implementar función searchProducts()
- [ ] Implementar función getProductDetails()
- [ ] Implementar función getUsers()
- [ ] Implementar función getPosts()
- [ ] Agregar manejo de errores robusto
- [ ] Agregar validaciones de entrada
- [ ] Crear tests unitarios
- [ ] Documentar cada función

**Responsable**: Carolina
**Plazo**: 18/06/2026
**Progreso**: 0 de 10 tareas completadas
**Prioridad**: Alta

#### Módulo FakeStore API

- [ ] Implementar función getFakeStoreProducts()
- [ ] Implementar función getFakeStoreByCategory()
- [ ] Implementar función getFakeStoreCategories()
- [ ] Implementar función getUserCart()
- [ ] Implementar función getUserData()
- [ ] Agregar manejo de errores robusto
- [ ] Agregar validaciones de entrada
- [ ] Crear tests unitarios
- [ ] Documentar cada función
- [ ] Optimizar performance

**Responsable**: Brayan
**Plazo**: 18/06/2026
**Progreso**: 0 de 10 tareas completadas
**Prioridad**: Alta

---

### Fase 3: Integración de Módulos

**Estado**: 0% completado

- [ ] Crear archivo index.js principal
- [ ] Combinar módulos de ambas APIs
- [ ] Crear función de comparación de precios
- [ ] Crear función de estadísticas generales
- [ ] Crear función de filtrado avanzado
- [ ] Implementar caché de datos (5 minutos)
- [ ] Implementar paginación
- [ ] Crear función de búsqueda combinada
- [ ] Validar integración de módulos
- [ ] Documentar funciones integradas

**Responsable**: Brayan, Carolina
**Plazo**: 22/06/2026
**Progreso**: 0 de 10 tareas completadas
**Prioridad**: Alta

---

### Fase 4: Testing y QA

**Estado**: 0% completado

#### Testing Unitario

- [ ] Crear suite de pruebas para DummyJSON
- [ ] Crear suite de pruebas para FakeStore
- [ ] Testing de manejo de errores
- [ ] Testing de validaciones de entrada
- [ ] Validar respuestas de API
- [ ] Alcanzar cobertura minima de 80%

**Responsable**: Jorge Torres
**Plazo**: 24/06/2026
**Progreso**: 0 de 6 tareas completadas
**Prioridad**: Alta

#### Testing de Integración

- [ ] Testing de combinación de módulos
- [ ] Testing de funciones integradas
- [ ] Testing de límites de API
- [ ] Testing de casos extremos
- [ ] Validar tiempo de respuesta
- [ ] Documentar resultados

**Responsable**: Jorge Torres
**Plazo**: 26/06/2026
**Progreso**: 0 de 6 tareas completadas
**Prioridad**: Media

---

### Fase 5: Documentación Final

**Estado**: 0% completado

- [ ] Crear TASK.md (lista de tareas)
- [ ] Crear SUMS.md (resumen del proyecto)
- [ ] Crear SCHEDULE.md (cronograma detallado)
- [ ] Documentar todas las funciones
- [ ] Crear guía de uso del proyecto
- [ ] Crear ejemplos de integración avanzados
- [ ] Documentar casos de error y soluciones
- [ ] Crear diagrama de arquitectura
- [ ] Crear FAQ (Preguntas Frecuentes)
- [ ] Revisar y validar documentación

**Responsable**: Jennifer Viviana Samper Torbello
**Plazo**: 28/06/2026
**Progreso**: 1 de 10 tareas completadas (TASK.md en proceso)
**Prioridad**: Media

---

### Fase 6: Revisión y Cierre

**Estado**: 0% completado

- [ ] Revisión de código completo
- [ ] Validación de calidad general
- [ ] Pruebas finales del sistema
- [ ] Corrección de defectos críticos
- [ ] Preparación para presentación
- [ ] Documentación de lecciones aprendidas
- [ ] Cierre oficial del proyecto
- [ ] Presentación final al cliente

**Responsable**: Equipo completo
**Plazo**: 30/06/2026
**Progreso**: 0 de 8 tareas completadas
**Prioridad**: Alta

---

## Tareas Críticas

| ID | Descripción | Prioridad | Asignado | Plazo | Estado |
|----|------------|-----------|----------|-------|--------|
| TASK-001 | Implementar módulo DummyJSON | Crítica | Carolina | 18/06 | Pendiente |
| TASK-002 | Implementar módulo FakeStore | Crítica | Brayan | 18/06 | Pendiente |
| TASK-003 | Integración de módulos | Alta | Brayan, Carolina | 22/06 | Pendiente |
| TASK-004 | Testing unitario | Alta | Jorge Torres | 24/06 | Pendiente |
| TASK-005 | Documentación final | Media | Jennifer Viviana | 28/06 | Pendiente |
| TASK-006 | Revisión y cierre | Alta | Equipo completo | 30/06 | Pendiente |

---

## Detalles de Tareas Seleccionadas

### TASK-001: Implementar módulo DummyJSON

**Descripción**: Crear todas las funciones necesarias para consumir la API DummyJSON

**Tareas incluidas**:
1. getAllProducts() - Obtener todos los productos
2. getProductsByCategory() - Filtrar por categoría
3. searchProducts() - Búsqueda por palabras clave
4. getProductDetails() - Detalles de un producto
5. getUsers() - Obtener información de usuarios
6. getPosts() - Obtener posts disponibles

**Requisitos**:
- Código documentado
- Manejo de errores
- Validaciones de entrada
- Tests unitarios
- Cumplimiento con estándares del proyecto

**Criterios de aceptación**:
- Todas las funciones funcionan correctamente
- Manejo de errores implementado
- 80% de cobertura de tests
- Código revisado y aprobado

**Bloqueadores**: Ninguno
**Dependencias**: Configuración inicial completada

---

### TASK-002: Implementar módulo FakeStore

**Descripción**: Crear todas las funciones necesarias para consumir la API FakeStore

**Tareas incluidas**:
1. getFakeStoreProducts() - Obtener todos los productos
2. getFakeStoreByCategory() - Filtrar por categoría
3. getFakeStoreCategories() - Obtener categorías
4. getUserCart() - Obtener carrito de usuario
5. getUserData() - Información de usuarios
6. Funciones de utilidad

**Requisitos**:
- Código documentado
- Manejo de errores
- Validaciones de entrada
- Tests unitarios
- Performance optimizado

**Criterios de aceptación**:
- Todas las funciones funcionan correctamente
- Tiempo de respuesta menor a 500ms
- Manejo robusto de errores
- 80% de cobertura de tests

**Bloqueadores**: Ninguno
**Dependencias**: Configuración inicial completada

---

## Estadísticas Generales

| Métrica | Valor |
|---------|-------|
| Total de tareas | 73 |
| Completadas | 7 |
| En progreso | 1 |
| Pendientes | 65 |
| Porcentaje de completitud | 9.6% |
| Tareas críticas | 6 |
| Tareas de alta prioridad | 12 |
| Tareas de media prioridad | 8 |

---

## Distribución de Tareas por Participante

| Participante | Tareas Asignadas | Completadas | En Progreso | Pendientes |
|-------------|-----------------|------------|------------|-----------|
| Carolina | 10 | 0 | 0 | 10 |
| Brayan | 10 | 0 | 0 | 10 |
| Jorge Torres | 12 | 0 | 0 | 12 |
| Jennifer Viviana Samper Torbello | 10 | 1 | 0 | 9 |
| Juan Angel Torres Florez | 9 | 7 | 1 | 1 |
| Equipo completo | 8 | 0 | 0 | 8 |
| **Total** | **73** | **7** | **1** | **65** |

---

## Dependencias entre Tareas

1. Configuración inicial -> Desarrollo de módulos
2. Desarrollo de módulos -> Integración
3. Integración -> Testing
4. Testing -> Documentación final
5. Documentación final -> Revisión y cierre

---

## Riesgos y Mitigación

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|------------|---------|-----------|
| Retraso en desarrollo | Media | Alto | Asignar recursos adicionales |
| Problemas de integración | Media | Medio | Testing continuo |
| Defectos en producción | Baja | Alto | Revisar código |
| Comunicación deficiente | Baja | Medio | Reuniones regulares |

---

## Próximas Tareas Inmediatas

1. Completar TASK.md, SUMS.md y SCHEDULE.md
2. Iniciar desarrollo del módulo DummyJSON
3. Iniciar desarrollo del módulo FakeStore
4. Configurar ambiente de testing

---

**Última actualización**: 08/06/2026 23:10
**Próxima revisión**: 10/06/2026
**Responsable**: Juan Angel Torres Florez
