# LOGD - Registro Detallado de Defectos y Control de Calidad (Semanas 2 a 5)

**Proyecto**: Workbook - Integración de APIs (DummyJSON & FakeStore)  
**Metodología**: Team Software Process (TSP)  
**Gestora de Calidad (*Quality Manager*)**: Diana Carolina Sotelo Huertas  
**Gestor de Pruebas (*Test Manager*)**: Daniel Torres Valenzuela  

Este artefacto constituye el núcleo de control estadístico de calidad del subgrupo. Su propósito fundamental es documentar la inyección y remoción de errores durante el ciclo incremental del software, permitiendo auditar la densidad de defectos, el rendimiento de las fases de inspección (*Code Review*) y asegurar que ningún código sea integrado a producción con fallas críticas latentes.

---

## 1. Matriz Analítica de Registro de Defectos (Estándar PSP/TSP)

| ID Defecto | Fecha | ID Tarea Asociada | Ingeniero Responsable | Tipo de Defecto | Fase Inyección | Fase Remoción | Tiempo Fijación (Min) | Descripción Técnica y Solución Aplicada |
| :--- | :---: | :--- | :--- | :--- | :---: | :---: | :---: | :--- |
| **DEF-01** | 10/06/2026 | TSK2-01.3 | Jorge David Torres | 20: Sintaxis/Lógica | CÓDIGO | REVISIÓN | 15 | Excepción no capturada en la respuesta simulada del HTTP para transacciones rechazadas. Se adicionó un bloque `catch` específico. |
| **DEF-02** | 12/06/2026 | TSK2-02.2 | Brayan Antonio Torres| 10: Documentación | PLANIF | CÓDIGO | 20 | Inconsistencia en las expresiones regulares (*regex*) de los validadores reactivos del Login. Se reestructuró el patrón de caracteres. |
| **DEF-03** | 16/06/2026 | TSK2-03.2 | Diana Carolina Sotelo | 40: Sistema/Datos | DISEÑO | CÓDIGO | 45 | Error de tipado estructural (`Type Mismatch`) al procesar los arreglos anidados de la API externa DummyJSON. Se definió interfaz estricta. |
| **DEF-04** | 16/06/2026 | TSK2-04.1 | Jenifer Viviana Samper | 30: Interfaz/API | CÓDIGO | CÓDIGO | 30 | Error de desbordamiento por asincronismo en el ciclo de carga de FakeStore API. Se implementó un mapeo controlado con `Promise.all`. |
| **DEF-05** | 17/06/2026 | TSK2-03.3 | Diana Carolina Sotelo | 20: Sintaxis/Lógica | CÓDIGO | REVISIÓN | 15 | Pérdida de contexto del puntero `this` dentro del motor de búsqueda indexada. Solucionado mediante la adopción de funciones flecha. |
| **DEF-06** | 17/06/2026 | TSK3-02 | Juan Angel Torres | 40: Sistema/Datos | CÓDIGO | CÓDIGO | 40 | Duplicación de memoria al añadir ítems idénticos en el estado local del carrito. Se reprogramó el algoritmo de verificación por ID. |
| **DEF-07** | 22/06/2026 | TSK4-02 | Daniel Torres | 50: Entorno/Test | CÓDIGO | PRUEBA | 25 | Falla en las aserciones de la suite Vitest debido al desfase de milisegundos en la latencia emulada de red. Se configuró un *fake timer*. |
| **DEF-08** | 24/06/2026 | TSK2-04.4 | Jenifer Viviana Samper | 30: Interfaz/API | CÓDIGO | PRUEBA | 35 | Fuga de peticiones recurrentes dentro de los interceptores HTTP de latencia de red. Se implementó una bandera de limpieza (*cleanup*). |

---

## 2. Clasificación de Defectos por Categoría (Tipos Estándar TSP)

Para el análisis estadístico, los errores detectados se agrupan utilizando la codificación internacional de procesos de Humphrey (2005):

* **10 - Documentación / Comentarios:** 1 Defecto (12.5%).
* **20 - Sintaxis, Gramática o Lógica Pura:** 2 Defectos (25.0%).
* **30 - Interfaz, Protocolos de Comunicación o Integración de APIs:** 2 Defectos (25.0%).
* **40 - Estructura de Sistema, Base de Datos o Tipado de Memoria:** 2 Defectos (25.0%).
* **50 - Entorno de Compilación, Configuración o Suites de Testing:** 1 Defecto (12.5%).

---

## 3. Cuadro Estadístico de Rendimiento de Calidad (Métricas Consolidadas)

A partir de la auditoría cruzada de las pestañas de gobernanza, los líderes de control de calidad consolidan el rendimiento técnico de la Entrega 2 mediante las siguientes métricas analíticas:

### A. Tiempos de Fijación y Costo de Calidad
* **Tiempo Total Invertido en Remoción de Errores (A.FRT):** 225 minutos netos (3.75 Horas de Ingeniería).
* **Tiempo Promedio de Reparación por Defecto:** 28.1 minutos por error.

### B. Análisis de Eficiencia por Fases (Inyección vs. Remoción)
* **Defectos Inyectados en Fase de Diseño:** 1 Defecto.
* **Defectos Inyectados en Fase de Planificación:** 1 Defecto.
* **Defectos Inyectados en Fase de Código Activo:** 6 Defectos.
* **Defectos Removidos durante la Fase de Código (Autocorrección):** 3 Defectos (37.5%).
* **Defectos Removidos durante la Fase de Revisión (Inspección Cruzada):** 3 Defectos (37.5%).
* **Defectos Removidos durante la Fase de Pruebas Unitarias (Vitest/QA):** 2 Defectos (25.0%).

### C. Indicador de Densidad de Defectos (Métrica Clave TSP)
* **Total de Defectos Encontrados:** 8 defectos controlados.
* **Densidad de Defectos Post-Inspección:** 0 defectos críticos en la rama de integración principal (*main*).  
* **Tasa de Contención de Erreores en Fases Tempranas:** **75%** de los defectos se contuvieron y eliminaron mediante las fases de *Code Review* y autocorrección antes de que llegaran a la ejecución física de las pruebas automatizadas, cumpliendo con la meta de calidad del subgrupo.

---

## 4. Estado de Conectividad y Respuestas Externas (Línea Base del Sistema)

Como evidencia técnica del comportamiento del software en un entorno estable y libre de anomalías, se anexan las métricas funcionales de consumo de los endpoints unificados:

### DummyJSON API — Métricas de Consumo Técnico
```http
GET [https://dummyjson.com/products](https://dummyjson.com/products)
Status: 200 OK | Tiempo de respuesta promedio: 250ms
Volumen de datos procesado de forma unificada: 100 productos mapeados

GET [https://dummyjson.com/products/category/smartphones](https://dummyjson.com/products/category/smartphones)
Status: 200 OK | Tiempo de respuesta promedio: 180ms
Esquema de aserción: Aprobado (5 sub-componentes validados)

GET [https://fakestoreapi.com/products](https://fakestoreapi.com/products)
Status: 200 OK | Tiempo de respuesta promedio: 200ms
Volumen de datos procesado de forma unificada: 20 productos mapeados

GET [https://fakestoreapi.com/products/categories](https://fakestoreapi.com/products/categories)
Status: 200 OK | Tiempo de respuesta promedio: 150ms
Estructura de matriz de respuesta: Inmutable (4 categorías base)

Aprobado para Auditoría de Calidad: Diana Carolina Sotelo Huertas (Quality Manager) & Daniel Torres Valenzuela (Test Manager).
