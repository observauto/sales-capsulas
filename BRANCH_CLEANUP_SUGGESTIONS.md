# Branch Cleanup Suggestions — Observauto Awareness

## Resumen ejecutivo
- No se detectaron remotos configurados (`git branch -r` sin resultados). Se recomienda configurar `origin` antes de ejecutar la limpieza.
- La rama local activa `work` contiene trabajo pendiente y no debe eliminarse hasta completarse el PR asociado.
- Tras configurar el remoto y sincronizar con `main`, repetir esta auditoría para identificar ramas mergeadas y sin actividad reciente (>30 días).

## Salidas de comandos recientes

```
$ git fetch --all --prune
(no remotos configurados)

$ git branch -vv
* work 720015c chore(awareness): resolve README.md conflict and update documentation

$ git branch -r
(no remotos configurados)

$ git branch --merged origin/main
fatal: malformed object name origin/main

$ git branch -r --merged origin/main
fatal: malformed object name origin/main
```

## Ramas remotas candidatas a limpieza
_No hay datos disponibles. Configura un remoto (`origin`) y vuelve a ejecutar el análisis._

| Rama | Última actividad | Motivo |
| --- | --- | --- |
| _Sin datos_ | _N/A_ | Configurar remoto y volver a auditar |

## Ramas locales candidatas a limpieza
_No se identificaron ramas locales adicionales distintas de `work`._

| Rama | Motivo |
| --- | --- |
| _Sin datos_ | Configurar remoto y volver a auditar |

## Comandos sugeridos (referencia)
```
# Borrar rama remota (ejecutar solo tras confirmar):
# git push origin --delete <rama>

# Borrar rama local (ejecutar solo tras confirmar):
# git branch -d <rama>
```

## Pasos para proteger `main` en GitHub
1. Ir a **Settings → Branches → Branch protection rules** y seleccionar **Add rule**.
2. En **Branch name pattern**, ingresar `main`.
3. Activar **Block force pushes** y **Block deletions**.
4. (Opcional) Activar **Require a pull request before merging** para forzar revisiones.
5. (Opcional) Activar **Require status checks to pass before merging** y seleccionar los pipelines relevantes.

## Próximos pasos sugeridos
- Configurar el remoto oficial: `git remote add origin https://github.com/observauto/sales-capsulas.git`.
- Ejecutar `git fetch origin` y repetir el análisis para identificar ramas mergeadas mayores a 30 días.
- Documentar cada eliminación en el PR correspondiente.
