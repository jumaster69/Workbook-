# Matriz de Riesgos LOGD

**Proyecto Politécnico Gran Colombiano**

## Integrantes del Equipo
- Carolina Sotelo Huertas
- Brayan
- Jennifer Viviana Samper Torbello
- Juan Angel Torres Florez
- Jorge Torres
- Daniel Torres

---

## Matriz de Riesgos

### Escala de Evaluación

**Probabilidad:**
- Baja: 1-2
- Media: 3-4
- Alta: 5

**Impacto:**
- Bajo: 1-2
- Medio: 3-4
- Alto: 5

**Prioridad = Probabilidad × Impacto**

---

## Riesgos Identificados

| ID | Riesgo | Descripción | Probabilidad | Impacto | Prioridad | Estado | Responsable | Mitigación |
|---|--------|-------------|--------------|---------|-----------|--------|------------|-----------|
| RG-001 | Fallo en conectividad con API | Las APIs (DummyJSON, FakeStore) pueden no estar disponibles o responder lentamente | 2 | 4 | 8 | Activo | Juan Angel Torres Florez | Implementar reintentos exponenciales, caché de datos, monitoreo de disponibilidad |
| RG-002 | Cambios en estructura de APIs | Las APIs públicas pueden cambiar su estructura de respuesta sin previo aviso | 2 | 5 | 10 | Activo | Jennifer Viviana Samper Torbello | Documentar versiones de API, validación de esquemas, testing continuo |
| RG-003 | Desfase en cronograma | Retrasos en el desarrollo por complejidad o cambios de requisitos | 3 | 4 | 12 | Activo | Juan Angel Torres Florez | Revisiones semanales, ajuste dinámico de tareas, comunicación clara |
| RG-004 | Falta de sincronización del equipo | Conflictos en Git, duplicación de trabajo o cambios conflictivos | 2 | 3 | 6 | Mitigado | Brayan | Establecer ramas por feature, code reviews, reuniones diarias |
| RG-005 | Errores en manejo de datos | Transformación incorrecta de datos entre APIs | 3 | 4 | 12 | Activo | Carolina Sotelo Huertas | Testing unitario riguroso, validación de datos, casos de prueba |
| RG-006 | Problemas de rendimiento | Aplicación lenta por consultas ineficientes o falta de caché | 2 | 3 | 6 | Activo | Brayan | Optimización de consultas, implementar paginación, caché estratégico |
| RG-007 | Falta de documentación | Código poco documentado dificulta mantenimiento futuro | 1 | 3 | 3 | Mitigado | Jennifer Viviana Samper Torbello | Generar documentación continua, comentarios en código |
| RG-008 | Seguridad de datos | Exposición de credenciales o manejo inseguro de datos | 2 | 5 | 10 | Activo | Jorge Torres | Usar variables de entorno, validación de inputs, HTTPS |
| RG-009 | Falta de testing | Código sin pruebas puede fallar en producción | 3 | 4 | 12 | Activo | Daniel Torres | Implementar testing unitario, integración, automatizado |
| RG-010 | Incompatibilidad de versiones | Conflictos entre versiones de dependencias (Node.js, Axios, etc.) | 2 | 3 | 6 | Activo | Brayan | Usar lock files, especificar versiones exactas, testing en CI/CD |
| RG-011 | Comunicación inefectiva | Falta de claridad en requisitos o tareas entre el equipo | 2 | 4 | 8 | Mitigado | Juan Angel Torres Florez | Reuniones semanales, documentación clara, Slack/Discord |
| RG-012 | Límites de API | Restricciones de rate limiting pueden bloquear consultas | 1 | 3 | 3 | Activo | Carolina Sotelo Huertas | Implementar throttling, distribuir requests, respetar límites |

---

## Matriz de Riesgo Priorizado

### Riesgos Críticos (Prioridad > 10)

1. **RG-002**: Cambios en estructura de APIs - Prioridad 10
   - Responsable: Jennifer Viviana Samper Torbello
   - Plan: Validar esquemas de respuesta, mantener tests de integración

2. **RG-003**: Desfase en cronograma - Prioridad 12
   - Responsable: Juan Angel Torres Florez
   - Plan: Sprint planning, daily standups, ajustes dinámicos

3. **RG-005**: Errores en manejo de datos - Prioridad 12
   - Responsable: Carolina Sotelo Huertas
   - Plan: Suite de tests, validación robusta, casos edge

4. **RG-008**: Seguridad de datos - Prioridad 10
   - Responsable: Jorge Torres
   - Plan: Code review de seguridad, secretos en .env

5. **RG-009**: Falta de testing - Prioridad 12
   - Responsable: Daniel Torres
   - Plan: Coverage > 80%, tests antes de merge

---

## Matriz de Riesgo Medios (Prioridad 6-8)

| ID | Riesgo | Probabilidad | Impacto | Prioridad | Mitiga por |
|---|--------|--------------|---------|-----------|-----------|
| RG-001 | Fallo en conectividad | 2 | 4 | 8 | Reintentos, caché |
| RG-004 | Falta de sincronización | 2 | 3 | 6 | Git workflow, reviews |
| RG-006 | Problemas de rendimiento | 2 | 3 | 6 | Optimización, paginación |
| RG-010 | Incompatibilidad de versiones | 2 | 3 | 6 | Lock files, testing |
| RG-011 | Comunicación inefectiva | 2 | 4 | 8 | Reuniones, documentación |

---

## Matriz de Riesgo Bajos (Prioridad < 6)

| ID | Riesgo | Probabilidad | Impacto | Prioridad | Mitiga por |
|---|--------|--------------|---------|-----------|-----------|
| RG-007 | Falta de documentación | 1 | 3 | 3 | Docs continuas |
| RG-012 | Límites de API | 1 | 3 | 3 | Throttling, respetar límites |

---

## Plan de Respuesta por Riesgo

### RG-003 - Desfase en Cronograma (CRÍTICO)

**Estrategia**: Monitoreo Activo

**Acciones**:
- Sprint semanal de 20 horas por participante
- Daily standup de 15 minutos
- Replanificación el viernes
- Buffer de 2 horas por semana
- Asignado a: Juan Angel Torres Florez

---

### RG-005 - Errores en Manejo de Datos (CRÍTICO)

**Estrategia**: Prevención

**Acciones**:
- Escribir tests antes de código (TDD)
- Validar datos con esquemas JSON
- Testing de casos edge (valores nulos, vacíos)
- Code review de Carolina y Jorge
- Asignado a: Carolina Sotelo Huertas

---

### RG-009 - Falta de Testing (CRÍTICO)

**Estrategia**: Prevención

**Acciones**:
- Coverage mínimo 80%
- Tests unitarios para funciones críticas
- Tests de integración para APIs
- CI/CD con GitHub Actions
- Asignado a: Daniel Torres

---

### RG-002 - Cambios en APIs (CRÍTICO)

**Estrategia**: Mitigación

**Acciones**:
- Versionamiento de respuestas
- Tests que validen estructura
- Monitoreo de cambios en documentación
- Comunicación con equipo si hay cambios
- Asignado a: Jennifer Viviana Samper Torbello

---

### RG-008 - Seguridad de Datos (CRÍTICO)

**Estrategia**: Prevención

**Acciones**:
- Nunca commitear credenciales
- Usar .env para configuración sensible
- .gitignore debe incluir .env
- Validar y sanitizar inputs
- Revisar código antes de merge
- Asignado a: Jorge Torres

---

## Monitoreo y Seguimiento

### Frecuencia de Revisión
- Semanal: Riesgos críticos (prioridad > 10)
- Quincenal: Riesgos medios (prioridad 6-10)
- Mensual: Riesgos bajos (prioridad < 6)

### Responsable del Seguimiento
Juan Angel Torres Florez (Líder del Proyecto)

### Mecanismo de Escalación
Si un riesgo se materializa:
1. Notificar al responsable del riesgo
2. Activar plan de contingencia
3. Comunicar al equipo en 30 minutos
4. Documentar incidente en LOGD.md

---

## Matriz de Dependencias de Riesgos

```
RG-003 (Cronograma) ← RG-005 (Datos) y RG-009 (Testing)
RG-002 (APIs) → RG-001 (Conectividad) y RG-006 (Rendimiento)
RG-008 (Seguridad) ← RG-011 (Comunicación)
```

---

## Recursos y Presupuesto de Mitigación

| Riesgo | Recurso Necesario | Tiempo | Responsable |
|--------|------------------|--------|-----------|
| RG-001 | Implementar retry logic | 2 horas | Brayan |
| RG-002 | Crear tests de integración | 4 horas | Jennifer |
| RG-003 | Setup de sprint planning | 1 hora | Juan Angel |
| RG-005 | Suite de tests | 6 horas | Carolina |
| RG-008 | Auditoría de seguridad | 2 horas | Jorge |
| RG-009 | Coverage tracking | 3 horas | Daniel |

---

## Lecciones Aprendidas (Iterativo)

Este documento será actualizado conforme:
- Se materialicen riesgos
- Se completen fases del proyecto
- Surjan nuevos riesgos identificados
- Se mejoren las estrategias de mitigación

---

**Última actualización**: 09/06/2026 18:00
**Próxima revisión**: 16/06/2026
**Responsable**: Juan Angel Torres Florez
