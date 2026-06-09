# TASK - Lista de Tareas y Planificación Detallada del Proyecto

**Proyecto Politécnico Grancolombiano**

## Estructura de Subgrupo (6 Integrantes Activos)
- **Brayan Antonio Torres** — Líder de Proyecto (Team Leader)
- **Jorge David Torres Muñoz** — Responsable de Planificación y Tiempos (Planning Manager)
- **Carolina Sotelo Huertas** — Responsable de Calidad y Estética Visual (Quality Manager)
- **Juan Angel Torres Florez** — Responsable de Soporte, Versiones y Estimaciones (Support Manager)
- **Daniel Torres** — Responsable de Pruebas Automatizadas y Riesgos (Test Manager)
- **Jennifer Viviana Samper Torbello** — Responsable de Arquitectura y Flujos (Process Manager)

---

## Planificación de Tareas por Componente Técnico (Granularidad TSP)

### Fase 1: Planificación, Setup y Línea Base
**Estado**: 100% Completado  
**Coordinador**: Brayan Antonio Torres

- [x] **TSK1-01** Crear repositorio organizacional en GitHub Web | *Responsable: Juan Angel Torres*
- [x] **TSK1-02** Estructurar entorno base de la aplicación y package.json | *Responsable: Juan Angel Torres*
- [x] **TSK1-03** Configurar variables de entorno y archivo .env.example | *Responsable: Juan Angel Torres*
- [x] **TSK1-04** Diseñar el Acta de Lanzamiento 1 y 2 (Línea base evolutiva) | *Responsable: Brayan Antonio*
- [x] **TSK1-05** Rebalancear el Workbook (SUMS) al 16.6% por integrante | *Responsable: Jorge David*

---

### Fase 2: Desarrollo y Congelación de Módulos Core
**Estado**: 35% Completado  

#### ÍTEM 1: Módulo de Compra Directa y Pasarela Simulada (Lanzamiento Temprano)
- [x] **TSK2-01.1** Diseño de la interfaz de pasarela y componentes reactivos | *Responsable: Jorge David*
- [x] **TSK2-01.2** Configuración de enrutamiento dinámico Angular `/compra/:id` | *Responsable: Jorge David*
- [x] **TSK2-01.3** Implementación lógica de captura de tarjetas y simulación HTTP | *Responsable: Jorge David*
- [x] **TSK2-01.4** Inspección de código cruzada (Code Review) de pasarela | *Responsable: Jorge David*
- [x] **TSK2-01.5** Programación de pruebas unitarias aisladas de flujo transaccional | *Responsable: Jorge David*
*Nota: Componente congelado al 100% de manera anticipada para estabilizar la arquitectura.*

#### ÍTEM 2: Módulo de Autenticación, Registro y Seguridad
- [ ] **TSK2-02.1** Maquetación responsiva de formularios de Login y Registro | *Responsable: Brayan Antonio*
- [ ] **TSK2-02.2** Implementación de validators reactivos (Email y longitud) | *Responsable: Brayan Antonio*
- [ ] **TSK2-02.3** Configuración de Angular Guards para la protección de rutas | *Responsable: Brayan Antonio*
- [ ] **TSK2-02.4** Code Review enfocado en seguridad de formularios del cliente | *Responsable: Brayan Antonio*

#### ÍTEM 3: Consumo e Integración de la API DummyJSON
- [ ] **TSK2-03.1** Desarrollar servicios inyectables para getAllProducts() | *Responsable: Carolina Sotelo*
- [ ] **TSK2-03.2** Implementar lógica de mapeo para getProductsByCategory() | *Responsable: Carolina Sotelo*
- [ ] **TSK2-03.3** Programar el motor de búsqueda indexada searchProducts() | *Responsable: Carolina Sotelo*
- [ ] **TSK2-03.4** Manejo de excepciones y códigos de error HTTP de la API externa | *Responsable: Carolina Sotelo*

#### ÍTEM 4: Consumo e Integración de la API FakeStore
- [ ] **TSK2-04.1** Implementar funciones asíncronas para getFakeStoreProducts() | *Responsable: Jennifer Viviana*
- [ ] **TSK2-04.2** Diseñar filtros avanzados de ordenamiento por categorías | *Responsable: Jennifer Viviana*
- [ ] **TSK2-04.3** Estructurar lógica de captura de usuarios y carritos externos | *Responsable: Jennifer Viviana*
- [ ] **TSK2-04.4** Configurar interceptores HTTP para auditoría de latencia de API | *Responsable: Jennifer Viviana*

---

### Fase 3: Lógica de Persistencia y Middleware de Integración
**Estado**: 0% Completado  

#### ÍTEM 5: Gestión y Persistencia del Carro de Compras Local
- [ ] **TSK3-01** Definir el estado global del carrito (Interfaces y Props) | *Responsable: Juan Angel Torres*
- [ ] **TSK3-02** Programar algoritmos de adición, remoción y cálculo de totales | *Responsable: Juan Angel Torres*
- [ ] **TSK3-03** Sincronizar persistencia del estado utilizando localStorage | *Responsable: Juan Angel Torres*
- [ ] **TSK3-04** Inspección técnica sobre el manejo de memoria en almacenamiento local | *Responsable: Juan Angel Torres*

#### ÍTEM 6: Transformación, Comparación y Caché Combinada
- [ ] **TSK3-05** Crear el módulo intermedio de unificación de respuestas de APIs | *Responsable: Jennifer Viviana*
- [ ] **TSK3-06** Diseñar algoritmo de comparación analítica de precios cruzados | *Responsable: Jennifer Viviana*
- [ ] **TSK3-07** Implementar middleware de caché local temporizado (5 minutos) | *Responsable: Jennifer Viviana*

---

### Fase 4: Aseguramiento de Calidad, Inspección y Pruebas (QA)
**Estado**: 0% Completado  

#### Control de Defectos y Pruebas Unitarias Automatizadas
- [ ] **TSK4-01** Configurar el motor de ejecución automatizada Vitest en el proyecto | *Responsable: Daniel Torres*
- [ ] **TSK4-02** Desarrollar la suite de pruebas unitarias para el componente DummyJSON | *Responsable: Daniel Torres*
- [ ] **TSK4-03** Desarrollar la suite de pruebas unitarias para el componente FakeStore | *Responsable: Daniel Torres*
- [ ] **TSK4-04** Validar la asertividad en el control de límites y excepciones de red | *Responsable: Daniel Torres*
- [ ] **TSK4-05** Generar el reporte automatizado de cobertura (Meta: Mínimo 80%) | *Responsable: Daniel Torres*

#### Auditorías de Calidad de Proceso
- [ ] **TSK4-06** Dirigir las sesiones formales de Code Review de integración de ramas | *Responsable: Carolina Sotelo*
- [ ] **TSK4-07** Mantener la bitácora de inyección y remoción de errores (Pestaña LOGD) | *Responsable: Carolina Sotelo*

---

### Fase 5: Gobernanza TSP y Documentación Técnica Final
**Estado**: 20% Completado  

- [x] **TSK5-01** Estructurar la pestaña TASK de planificación fina (Este documento) | *Responsable: Jorge David*
- [ ] **TSK5-02** Consolidar la hoja SCHEDULE e hitos semanales del Workbook | *Responsable: Jorge David*
- [ ] **TSK5-03** Elaborar los diagramas formales de arquitectura modular del software | *Responsable: Jennifer Viviana*
- [ ] **TSK5-04** Redactar los estándares de codificación y guías de instalación | *Responsable: Jennifer Viviana*
- [ ] **TSK5-05** Diseñar las matrices de riesgos y planes de contingencia (Acta 7) | *Responsable: Daniel Torres*
- [ ] **TSK5-06** Integrar el reporte ejecutivo final de la Entrega 2 bajo formato APA 7 | *Responsable: Brayan Antonio*

---

## Estadísticas de Control de Tareas (Métricas Globales)

| Métrica TSP | Valor Planificado | Estado Actual |
| :--- | :---: | :--- |
| **Total de Tareas Granulares** | 33 | — |
| **Tareas Completadas** | 11 | 🟢 33.3% Progreso |
| **Tareas en Progreso** | 1 | 🟡 3.0% |
| **Tareas Pendientes** | 21 | ⚪ 63.7% |
| **Tareas con Responsable Único Asignado** | 33 | 🔒 100% Concurrencia Controlada |

---

## Resumen de Asignación de Tareas por Participante

| Rol Operativo TSP | Participante Responsable | Tareas Asignadas | Completadas | Pendientes |
| :--- | :--- | :---: | :---: | :---: |
| **Líder de Proyecto** | Brayan Antonio Torres | 5 | 1 | 4 |
| **Planificación y Tiempos** | Jorge David Torres Muñoz | 6 | 6 | 0 |
| **Gestión de Calidad** | Carolina Sotelo Huertas | 6 | 0 | 6 |
| **Soporte y Versiones** | Juan Angel Torres Florez | 6 | 3 | 3 |
| **Pruebas y Riesgos** | Daniel Torres | 5 | 0 | 5 |
| **Arquitectura y Flujos** | Jennifer Viviana Samper Torbello | 5 | 1 | 4 |
| **TOTALES** | **Subgrupo Completo** | **33** | **11** | **22** |

---
**Última actualización**: 09/06/2026 13:43  
**Auditor de Planificación**: Jorge David Torres Muñoz  
**Estado de Línea Base**: Aprobado por el Subgrupo sin retrasos.
