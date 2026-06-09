# SCHEDULE - Cronograma Detallado y Control de Esfuerzo (Semanas 1 a 4)

**Proyecto**: Workbook - Integración de APIs (DummyJSON & FakeStore API)  
**Institución**: Politécnico Grancolombiano — Facultad de Ingeniería de Software (Subgrupo 11)  
**Docente**: Prof. Natalia Martínez  
**Responsable de Control de Tiempos**: Jorge David Torres Muñoz (*Planning Manager*)

---

## 1. Estructura Organizacional y Roles Operativos Oficiales (Entrega 2)

Para dar cumplimiento estricto al marco metodológico TSPi, los roles operativos del equipo de seis (6) integrantes se han balanceado de manera que cada ingeniero asuma el **16.6% del esfuerzo global del proyecto** (92 horas de ingeniería totales / 6 integrantes = ~15.3 horas netas de dedicación por persona).

* **Líder de Proyecto (*Project Manager*):** Juan Angel Torres Florez
* **Gestor de Planificación y Tiempos (*Planning Manager*):** Jorge David Torres Muñoz
* **Gestora de Calidad y Defectos (*Quality Manager*):** Diana Carolina Sotelo Huertas
* **Gestora de Procesos y Configuración (*Process Manager*):** Jenifer Viviana Samper Torbello
* **Gestor de Soporte y Pruebas (*Test Manager*):** Daniel Torres Valenzuela
* **Ingeniero de Desarrollo (*Software Developer Core*):** Brayan Antonio Torres

---

## 2. Planificación General del Esfuerzo (Distribución TSP)

| Fase TSP | Semanas | Horas Totales Equipo | % de Esfuerzo Fase | Estado |
| :--- | :---: | :---: | :---: | :---: |
| **Fase 1: Planificación y Setup** | Semana 1 | 20 Horas | 21.7% | Completado |
| **Fase 2: Desarrollo y Codificación** | Semana 2 | 32 Horas | 34.8% | En Progreso |
| **Fase 3: Testing Unitario y QA** | Semana 3 | 24 Horas | 26.1% | Pendiente |
| **Fase 4: Documentación Final y Cierre**| Semana 4 | 16 Horas | 17.4% | Pendiente |
| **TOTAL GLOBAL REBALANCEADO** | **1 a 4** | **92 Horas Netas** | **100.0%** | **Gobernado** |

---

## 3. Calendario Detallado de Actividades por Horas y Responsables

### SEMANA 1: PLANIFICACIÓN Y SETUP (08/06/2026 - 14/06/2026)
**Presupuesto de la Fase:** 20 Horas de Equipo

#### Sábado 08/06/2026 — Kick-off y Definición Metodológica
* **09:00 - 10:00 (1 hr) | Equipo Completo:** Reunión de Lanzamiento, alineación de objetivos de integración de APIs y firma del acta inicial.
* **10:00 - 12:00 (2 hrs) | Juan Angel Torres Florez (*Project Manager*) & Brayan Antonio Torres:** Inicialización de la organización en GitHub, configuración del repositorio base, `.gitignore` y políticas de ramas (*main/develop*).
* **13:00 - 15:30 (2.5 hrs) | Jenifer Viviana Samper Torbello (*Process Manager*):** Estructuración de las plantillas del TSPi Workbook y creación del archivo maestro `README.md`.
* **15:30 - 17:00 (1.5 hrs) | Diana Carolina Sotelo Huertas (*Quality Manager*):** Definición de los estándares de codificación, convenciones de Commits (Conventional Commits) y formato de documentación.

#### Domingo 09/06/2026 — Líneas Base de Planificación
* **10:00 - 12:00 (2 hrs) | Jorge David Torres Muñoz (*Planning Manager*):** Configuración matemática de la hoja `SUMS`, estimación de tiempos iniciales y matriz de asignación al 16.6% de esfuerzo.
* **12:00 - 13:00 (1 hr) | Brayan Antonio Torres:** Inicialización del entorno Node.js, ejecución de `npm init` y estructuración del archivo central `package.json` con dependencias core (Axios, Dotenv).
* **14:00 - 16:30 (2.5 hrs) | Jenifer Viviana Samper Torbello (*Process Manager*):** Redacción y formalización del marco metodológico en `TSP.md`.
* **16:30 - 17:00 (0.5 hrs) | Daniel Torres Valenzuela (*Test Manager*):** Setup inicial del motor de pruebas automatizadas `Vitest` y validación de scripts en `package.json`.

#### Lunes 10/06/2026 — Cierre del Entorno de Configuración
* **09:00 - 09:30 (0.5 hrs) | Equipo Completo:** Standup diario de sincronización de dependencias técnicas.
* **09:30 - 11:30 (2 hrs) | Juan Angel Torres Florez (*Project Manager*):** Creación del archivo de variables de entorno `.env.example` y establecimiento de tokens simétricos de prueba.
* **11:30 - 13:00 (1.5 hrs) | Brayan Antonio Torres & Diana Carolina Sotelo Huertas:** Creación física de la arquitectura de carpetas (`/src/modules`, `/src/utils`, `/tests`).
* **14:00 - 16:00 (2 hrs) | Jorge David Torres Muñoz (*Planning Manager*):** Inspección y aseguramiento de la trazabilidad cruzada entre las pestañas `TASK` y `SCHEDULE`.

---

### SEMANA 2: DESARROLLO Y CODIFICACIÓN (15/06/2026 - 21/06/2026)
**Presupuesto de la Fase:** 32 Horas de Equipo

#### Martes 16/06/2026 — Construcción del Core DummyJSON
* **09:00 - 09:30 (0.5 hrs) | Equipo Completo:** Standup diario de revisión de bloqueos en consumo de endpoints externos.
* **09:30 - 12:30 (3 hrs) | Diana Carolina Sotelo Huertas (*Quality Manager*):** Desarrollo técnico del módulo DummyJSON: implementación unificada de las funciones asíncronas `getAllProducts()` y `getProductsByCategory()`.
* **13:30 - 16:30 (3 hrs) | Diana Carolina Sotelo Huertas (*Quality Manager*):** Programación avanzada de los motores de búsqueda integrados: `searchProducts()` y lógica de captura de detalles en `getProductDetails()`.
* **16:30 - 17:30 (1 hr) | Jorge David Torres Muñoz (*Planning Manager*):** Registro y auditoría preventiva de los minutos devengados en el log `LOGT`.

#### Miércoles 17/06/2026 — Construcción del Core FakeStore
* **09:00 - 09:30 (0.5 hrs) | Equipo Completo:** Standup diario. Evaluación del estado de la cuota de peticiones HTTP.
* **09:30 - 12:30 (3 hrs) | Brayan Antonio Torres:** Desarrollo del adaptador para FakeStore API: codificación unificada de las funciones de extracción de catálogo `getFakeStoreProducts()` y mapeo estructurado por categorías `getFakeStoreByCategory()`.
* **13:30 - 16:30 (3 hrs) | Brayan Antonio Torres:** Implementación de la lógica transaccional simulada de usuarios y carritos: `getUserCart()` y empaquetamiento de datos en `getUserData()`.
* **16:30 - 17:30 (1 hr) | Juan Angel Torres Florez (*Project Manager*):** Revisión de la integración de ramas intermedias en la rama de desarrollo remoto.

#### Jueves 18/06/2026 — Integración de Capas y Control de Errores
* **09:00 - 11:30 (2.5 hrs) | Brayan Antonio Torres & Diana Carolina Sotelo Huertas:** Fusión de módulos asíncronos en el punto de entrada principal `index.js`. Programación de algoritmos de comparación analítica de precios inter-API.
* **11:30 - 13:00 (1.5 hrs) | Diana Carolina Sotelo Huertas (*Quality Manager*):** Inserción de bloques robustos de manejo de excepciones HTTP (`try/catch`) y normalización unificada de códigos de error de red.
* **14:00 - 16:30 (2.5 hrs) | Jenifer Viviana Samper Torbello (*Process Manager*):** Documentación técnica in-line de parámetros y tipos usando anotaciones JSDoc estandarizadas.
* **16:30 - 17:30 (1 hr) | Daniel Torres Valenzuela (*Test Manager*):** Análisis de viabilidad y cobertura teórica sobre la integración unificada de módulos.

---

### SEMANA 3: TESTING UNITARIO Y QA (22/06/2026 - 28/06/2026)
**Presupuesto de la Fase:** 24 Horas de Equipo

#### Lunes 22/06/2026 — Suite Automatizada de Pruebas Unitarias
* **09:00 - 09:30 (0.5 hrs) | Equipo Completo:** Standup técnico para fijación de criterios de aceptación de QA.
* **09:30 - 13:00 (3.5 hrs) | Daniel Torres Valenzuela (*Test Manager*):** Programación avanzada de la suite de especificaciones automatizadas `dummyjson.spec.js` bajo el framework Vitest. Muestreo con datos simulados (*mocking*).
* **14:00 - 17:00 (3 hrs) | Daniel Torres Valenzuela (*Test Manager*):** Programación y despliegue de la suite de especificaciones `fakestore.spec.js` para asegurar la inmutabilidad de los esquemas JSON de respuesta.
* **17:00 - 18:00 (1 hr) | Jorge David Torres Muñoz (*Planning Manager*):** Validación cruzada del estado de resolución de pruebas frente a los plazos establecidos en la matriz `TASK`.

#### Miércoles 24/06/2026 — Pruebas de Límites e Inyección de Defectos
* **09:00 - 12:00 (3 hrs) | Daniel Torres Valenzuela (*Test Manager*):** Ejecución de pruebas de cobertura extrema (*edge cases*), evaluación de respuestas ante latencia de red inyectada y control de desbordamientos de arreglos.
* **12:00 - 13:00 (1 hr) | Diana Carolina Sotelo Huertas (*Quality Manager*):** Apertura formal y clasificación de anomalías detectadas en la bitácora unificada de control de calidad `LOGD.md`.
* **14:00 - 16:30 (2.5 hrs) | Jorge Torres Muñoz (*Planning Manager*) & Daniel Torres Valenzuela (*Test Manager*):** Sesión técnica conjunta de depuración física de código para garantizar una cobertura mínima certificada del 80% en líneas e instrucciones.
* **16:30 - 17:30 (1 hr) | Juan Angel Torres Florez (*Project Manager*):** Revisión técnica del estado cualitativo de la deuda técnica remanente del software.

---

### SEMANA 4: DOCUMENTACIÓN FINAL Y CIERRE (29/06/2026 - 30/06/2026)
**Presupuesto de la Fase:** 16 Horas de Equipo

#### Lunes 29/06/2026 — Consolidación del Workbook Académico
* **09:00 - 12:00 (3 hrs) | Jenifer Viviana Samper Torbello (*Process Manager*):** Compilación unificada del artefacto final `WORKBOOK.md`, incorporando guías procedimentales de instalación paso a paso, ejemplos de consumo y diagramación lógica de flujos arquitectónicos.
* **12:00 - 13:00 (1 hr) | Daniel Torres Valenzuela (*Test Manager*):** Generación automática del reporte estadístico de cobertura de pruebas unitarias e integración en la documentación general.
* **14:00 - 16:30 (2.5 hrs) | Jenifer Viviana Samper Torbello (*Process Manager*):** Redacción de la sección técnica de preguntas frecuentes (FAQ) y tabulación fina de las lecciones aprendidas de ingeniería según la metodología PSP/TSP.
* **16:30 - 17:30 (1 hr) | Jorge David Torres Muñoz (*Planning Manager*):** Cierre cuantitativo de las métricas de varianza de tiempo y balance de esfuerzo en la pestaña `SUMS`.

#### Martes 30/06/2026 — Inspección de Calidad y Cierre Oficial
* **09:00 - 12:00 (3 hrs) | Equipo Completo:** Sesión formal de *Code Review* unificada de cierre de proyecto. Inspección técnica de control de defectos abierta y congelamiento definitivo de la rama `main` de producción.
* **12:00 - 13:00 (1 hr) | Juan Angel Torres Florez (*Project Manager*):** Despliegue de la versión definitiva del repositorio, verificación de enlaces activos y firma electrónica de aprobación técnica de la Entrega 2.

---

## 4. Hitos de Control del Proyecto (Semanas 1 a 4)

* **HITO-01 (14/06/2026):** Entorno base configurado, repositorio estabilizado y arquitectura de archivos vacía aprobada por el Gestor de Soporte.
* **HITO-02 (21/06/2026):** Módulos core de DummyJSON y FakeStore API codificados al 100%, integrados dinámicamente sin bloqueos HTTP activos.
* **HITO-03 (26/06/2026):** Suites de testing automatizadas ejecutadas en Vitest con una cobertura de líneas de código superior al 80% y bitácora de defectos saneada.
* **HITO-04 (30/06/2026):** TSPi Workbook completamente consolidado en Markdown, sin discrepancias matemáticas y aprobado para la presentación final ante el cliente académico.

---
**Métrica de Calidad del Cronograma**: 100% consistente con las pestañas de Gobernanza TSP (`SUMS`, `TASK` y `LOGT`).  
**Estado del Cronograma**: Línea base formalmente fijada, auditada y lista para informe PDF de Entrega 2.
