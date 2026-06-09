# TSP - Marco Metodológico y Estructura Organizacional del Proyecto

**Proyecto**: Workbook - Integración de APIs (DummyJSON & FakeStore)  
**Institución**: Politécnico Grancolombiano — Facultad de Ingeniería de Software (Subgrupo 11)  
**Docente**: Prof. Natalia Martínez  
**Responsable de Procesos**: Jenifer Viviana Samper Torbello (*Process Manager*)

---

## 1. Introducción al Marco Metodológico TSPi

La metodología **Team Software Process (TSP)**, desarrollada por Watts Humphrey, proporciona un marco de trabajo estructurado y disciplinado para equipos de ingeniería de software. El subgrupo ha adoptado la adaptación de ciclo de vida incremental para guiar la planificación detallada, la gestión proactiva de riesgos y el control estadístico de la calidad de la aplicación de catálogo virtual. 

Bajo este modelo, cada miembro del equipo actúa no solo como desarrollador de código, sino como un **gerente funcional** responsable de un área del proceso, garantizando la predictibilidad y la minimización drástica de defectos antes de la fase de compilación y pruebas.

---

## 2. Estructura de Roles Operativos Oficiales (Entrega 2)

Para la segunda entrega, la estructura organizacional del subgrupo se encuentra integrada por seis (6) profesionales activos. La carga de trabajo se ha balanceado matemáticamente bajo el criterio de **esfuerzo equitativo al 16.6% por participante** (92 horas globales de ingeniería planificadas / 6 integrantes = ~15.3 horas netas de trabajo por persona).

### 👥 Matriz de Asignación de Roles y Responsabilidades Técnicas

| Nombre Completo del Integrante | Rol Operativo Formal TSP | Responsabilidades Clave en el Proceso (Entrega 2) | Cuota de Esfuerzo |
| :--- | :--- | :--- | :---: |
| **Juan Angel Torres Florez** | **Líder de Proyecto**<br>(*Project Manager*) | • Dirigir el proceso de lanzamiento (*Kick-off*).<br>• Coordinar el seguimiento diario y remover bloqueos de red.<br>• Administrar la gobernanza de ramas e integración remota en GitHub. | **16.6%**<br>(15.3 Horas) |
| **Jorge David Torres Muñoz** | **Gestor de Planificación**<br>(*Planning Manager*) | • Estructurar y auditar la coherencia matemática del Workbook.<br>• Controlar los logs en minutos netos de tarea en la hoja `LOGT`.<br>• Calcular desviaciones presupuestarias y valor ganado. | **16.6%**<br>(15.3 Horas) |
| **Diana Carolina Sotelo Huertas** | **Gestora de Calidad**<br>(*Quality Manager*) | • Mantener la bitácora unificada de inyección de errores `LOGD`.<br>• Coordinar las sesiones formales de inspección (*Code Reviews*).<br>• Asegurar el cumplimiento de los estándares de codificación. | **16.6%**<br>(15.3 Horas) |
| **Jenifer Viviana Samper Torbello** | **Gestora de Procesos**<br>(*Process Manager*) | • Definir el ciclo de vida del proceso y adaptar guías técnicas.<br>• Compilar y estructurar los artefactos Markdown del Workbook.<br>• Modelar los diagramas arquitectónicos y flujos del software. | **16.6%**<br>(15.3 Horas) |
| **Daniel Torres Valenzuela** | **Gestor de Soporte y Pruebas**<br>(*Test Manager*) | • Configurar el entorno automatizado de QA usando `Vitest`.<br>• Desarrollar las suites de especificaciones (*Specs*) unitarias.<br>• Monitorear la matriz de riesgos y los planes de mitigación. | **16.6%**<br>(15.3 Horas) |
| **Brayan Antonio Torres** | **Ingeniero de Desarrollo Core**<br>(*Software Developer*) | • Codificar los algoritmos funcionales de consumo asíncrono.<br>• Estructurar el punto de entrada unificado y mapeo de datos.<br>• Corregir de forma inmediata los defectos detectados en QA. | **16.6%**<br>(15.3 Horas) |

---

## 3. Ciclo de Vida del Proceso (Fases de Ingeniería Aplicadas)

El desarrollo del proyecto se divide en fases granulares bien definidas. De acuerdo con las métricas TSP, ninguna tarea técnica puede asignarse a un "Equipo Completo"; cada actividad cuenta con un responsable individual para asegurar el correcto registro en el log de tiempos.

[Planificación y Setup] ➔ [Diseño e Interp] ➔ [Codificación Core] ➔ [Inspección (Code Review)] ➔ [Testing (Vitest)] ➔ [Cierre]

### A. Fase de Planificación y Setup (`PLANIF`)
* **Objetivo**: Estabilizar la línea base del proyecto.
* **Actividades**: Configuración organizacional en GitHub, creación de variables de entorno `.env.example`, balanceo matemático de la hoja `SUMS` y estructuración fina de la matriz `TASK`.
* **Gobernador**: Jorge David Torres Muñoz (*Planning Manager*).

### B. Fase de Diseño de Componentes (`DISEÑO`)
* **Objetivo**: Definir los contratos de interfaz de las APIs públicas de DummyJSON y FakeStore.
* **Actividades**: Estructuración de interfaces del estado del carro de compras, diagramación modular de flujos e inyección de datos tipados en JSDoc.
* **Gobernadora**: Jenifer Viviana Samper Torbello (*Process Manager*).

### C. Fase de Codificación Activa (`CÓDIGO`)
* **Objetivo**: Implementación física de las funciones asíncronas de obtención, filtrado y comparación de catálogos.
* **Actividades**: Construcción de adaptadores para `getAllProducts()`, `getFakeStoreProducts()`, algoritmos de cálculo de totales en el carrito y persistencia local usando `localStorage`.
* **Responsables**: Brayan Antonio Torres & Diana Carolina Sotelo Huertas.

### D. Fase de Revisión e Inspección de Código (`REVISI`)
* **Objetivo**: Detectar errores de lógica de forma temprana en fases de escritorio, reduciendo el costo de la calidad.
* **Actividades**: Auditoría cruzada antes de ejecutar *Merges* en GitHub Web, verificación de excepciones `try/catch` y remoción inmediata de errores tipográficos.
* **Gobernadora**: Diana Carolina Sotelo Huertas (*Quality Manager*).

### E. Fase de Pruebas Automatizadas (`PRUEBA`)
* **Objetivo**: Garantizar la inmutabilidad de los módulos y certificar una cobertura mínima del 80% en líneas de código.
* **Actividades**: Programación de archivos `.spec.js` en Vitest, inyección de latencia controlada y verificación ante datos simulados (*Mocking*).
* **Gobernador**: Daniel Torres Valenzuela (*Test Manager*).

### F. Fase de Documentación Final y Cierre (`DOCUM`)
* **Objetivo**: Compilación del artefacto técnico final y lecciones aprendidas.
* **Actividades**: Consolidación del reporte ejecutivo bajo formato APA 7 y congelamiento definitivo de la rama principal de producción.
* **Gobernador**: Juan Angel Torres Florez (*Líder de Proyecto*).

---

## 4. Estrategia y Plan de Gestión de Calidad (Métricas Core)

Para asegurar el éxito de la Entrega 2 ante la auditoría académica, el equipo define tres (3) indicadores métricos estrictos de calidad:

1. **Densidad de Defectos Objetivo:** Menor a 2 defectos por cada KLOC (Mil líneas de código) en la rama de producción (`main`).
2. **Tasa de Contención de Errores (Fases Tempranas):** Meta del **70%**. Al menos el 70% de los errores inyectados durante la codificación deben ser descubiertos y eliminados en las fases de inspección (*Code Review*) o autocorrección antes de que el código llegue a la ejecución de pruebas automatizadas en Vitest.
3. **Cobertura Certificada de Testing (Code Coverage):** Mínimo **80%** de instrucciones, funciones y líneas validadas con éxito dentro de las especificaciones unitarias.

---
**Estado del Marco**: Aprobado por el Subgrupo 11 y fijado en la línea base de la Entrega 2.
