# RISK_MATRIX - Matriz de Riesgos y Planes de Contingencia (Entrega 2)

**Proyecto**: Workbook - Integración de APIs (DummyJSON & FakeStore)  
**Metodología**: Team Software Process (TSP)  
**Gestor de Pruebas y Riesgos (*Test Manager*)**: Daniel Torres Valenzuela  
**Gestor de Planificación y Tiempos (*Planning Manager*)**: Jorge David Torres Muñoz  

Este artefacto metodológico tiene como propósito identificar, cuantificar y mitigar proactivamente los riesgos técnicos, operativos y de calidad que puedan afectar el desarrollo incremental del catálogo virtual. El control estadístico y seguimiento de los indicadores de riesgo está bajo la gobernanza del *Test Manager* en sincronía con el plan de calidad.

---

## 1. Escala Homologada de Evaluación (Criterios TSP)

La prioridad de cada riesgo se calcula mediante el algoritmo estándar de exposición:  
$$\text{Prioridad} = \text{Probabilidad} \times \text{Impacto}$$

* **Probabilidad:** Baja (1-2) | Media (3-4) | Alta (5)
* **Impacto:** Bajo (1-2) | Medio (3-4) | Alto (5)
* **Zonas de Acción:** * `Prioridad >= 12`: **Crítico** (Mitigación inmediata y revisión semanal)
  * `Prioridad 6-11`: **Moderado** (Monitoreo quincenal)
  * `Prioridad <= 5`: **Bajo** (Aceptación pasiva)

---

## 2. Matriz Analítica de Riesgos Colectivos (Balanceada al 16.6%)

| ID Riesgo | Descripción del Riesgo Técnico u Operativo | Prob (1-5) | Imp (1-5) | Prioridad | Estado | Tarea TASK Asociada | Ingeniero Responsable (Rol PDF) | Estrategia de Mitigación y Plan de Contingencia |
| :--- | :--- | :---: | :---: | :---: | :---: | :--- | :--- | :--- |
| **RG-01** | **Fallo de disponibilidad en APIs externas**<br>Interrupción del servicio de DummyJSON o FakeStore durante el desarrollo. | 2 | 4 | **8** | Activo | TSK2-03.4<br>TSK2-04.4 | **Jenifer Viviana Samper**<br>(*Process Manager*) | **Mitigación:** Diseñar una capa de abstracción con datos estáticos (*Mocking JSON*).<br>**Contingencia:** Interceptar los códigos de error HTTP de red y activar el caché local temporizado de contingencia automáticamente. |
| **RG-02** | **Cambios en los esquemas de respuesta**<br>Modificación imprevista en las propiedades JSON de los productos de las APIs públicas. | 2 | 5 | **10** | Activo | TSK2-03.2<br>TSK2-04.1 | **Jenifer Viviana Samper**<br>(*Process Manager*) | **Mitigación:** Mapeo estricto de tipos de datos en la capa del servicio.<br>**Contingencia:** Daniel Torres ejecutará aserciones estructurales automáticas en Vitest para congelar la integración ante desajustes de esquemas. |
| **RG-03** | **Desfase del cronograma en minutos netos**<br>Subestimación de las horas requeridas en las fases de codificación y desarrollo. | 3 | 4 | **12** | Crítico | TSK1-05<br>TSK5-02 | **Jorge David Torres**<br>(*Planning Manager*) | **Mitigación:** Planificación granular de tareas menores a 4 horas en la hoja TASK.<br>**Contingencia:** Alerta temprana si el balance de esfuerzo en la pestaña SUMS se desvía del 16.6% individual; reasignación inmediata de tareas pendientes. |
| **RG-04** | **Baja cobertura en las pruebas de software**<br>No alcanzar la meta del 80% de cobertura en líneas de código para la Entrega 2. | 2 | 4 | **8** | Activo | TSK4-02<br>TSK4-05 | **Daniel Torres Valenzuela**<br>(*Test Manager*) | **Mitigación:** Escritura de archivos `.spec.ts` en paralelo a la creación de funciones asíncronas.<br>**Contingencia:** Restringir los Pull Requests en GitHub si el reporte automatizado de Vitest no cumple la cuota de calidad. |
| **RG-05** | **Conflictos densos en el repositorio remoto**<br>Pérdida de código o fallas de fusión (*Merge Conflicts*) al trabajar en GitHub Web. | 2 | 4 | **8** | Activo | TSK1-01<br>TSK3-01 | **Juan Angel Torres Florez**<br>(*Project Manager*) | **Mitigación:** Implementación rigurosa del modelo Gitflow utilizando ramas por componente técnico e IDs claros.<br>**Contingencia:** Bloqueo de fusiones directas a `main`; auditoría obligatoria de la rama de desarrollo por el líder antes del merge. |
| **RG-06** | **Densidad elevada de defectos en la entrega**<br>Inyección masiva de errores de lógica o de tipado detectados de forma tardía. | 2 | 4 | **8** | Activo | TSK4-06<br>TSK4-07 | **Diana Carolina Sotelo**<br>(*Quality Manager*) | **Mitigación:** Ejecutar inspecciones de código cruzadas (*Code Reviews*) en lotes pequeños antes de integrar.<br>**Contingencia:** Registro obligatorio en el LOGD y aislamiento inmediato del componente defectuoso para su refactorización. |
| **RG-07** | **Inconsistencia métrica en el Workbook**<br>Discrepancias entre los minutos del LOGT, el cronograma SCHEDULE y el informe PDF. | 2 | 5 | **10** | Activo | TSK5-01<br>TSK5-02 | **Jorge David Torres**<br>(*Planning Manager*) | **Mitigación:** Auditoría matemática semanal de los logs de tiempo individuales devengados.<br>**Contingencia:** Ajuste inmediato de la línea base operativa y normalización manual de las tablas cruzadas del repositorio. |
| **RG-08** | **Desbalance en las cargas operativas**<br>Retraso por acumulación excesiva de horas en un solo integrante (Riesgo corregido). | 1 | 5 | **5** | Mitigado| TSK1-05 | **Brayan Antonio Torres**<br>(*Software Developer*) | **Mitigación:** Reestructuración inicial del Workbook fijando el 16.6% de esfuerzo equitativo (15.3 horas netas por ingeniero).<br>**Contingencia:** Traspaso inmediato de tareas documentales al Process Manager si se superan las horas de código. |

---

## 3. Protocolos de Monitoreo y Escalación de Contingencias

Para asegurar que las estrategias de mitigación se ejecuten de manera disciplinada, el subgrupo define los siguientes tres niveles operativos de gobernanza:

### A. Frecuencia de Auditoría Analítica
* **Riesgos Críticos (Prioridad >= 12):** Evaluados semanalmente durante las reuniones de sincronización por el *Planning Manager* (Jorge David) para revisar desviaciones en las horas del `LOGT`.
* **Riesgos Moderados y Bajos (Prioridad < 12):** Monitoreados de forma quincenal por el *Test Manager* (Daniel Torres) mediante la ejecución física de las suites de pruebas y la bitácora del `LOGD`.

### B. Mecanismo Formal de Escalación ante Materialización
Si un indicador técnico del software falla o un riesgo se activa formalmente en el repositorio:
1. **Notificación:** El ingeniero que detecta la anomalía abre un *Issue* en GitHub Web en un plazo máximo de 30 minutos y etiqueta al responsable directo del riesgo.
2. **Activación:** El responsable activa el Plan de Contingencia descrito en la sección 2 (por ejemplo, el uso de datos simulados o el aislamiento de ramas).
3. **Registro:** El *Quality Manager* (Diana Carolina) documenta la inyección y el tiempo neto de remoción del error de forma obligatoria en la pestaña `LOGD.md` para no alterar el control estadístico de calidad de la Entrega 2.

---
**Aprobado para su Despliegue**: Daniel Torres Valenzuela (*Test Manager*) & Jorge David Torres Muñoz (*Planning Manager*).
