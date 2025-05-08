## Integrantes

Nombre completo | Código  
--- | ---  
Jean Carlos Lerma Rojas | 2259305  
Juan Camilo Garcia Saenz | 2259416  
Jersson Daniel Gutierrez Gonzalez | 2060071  

# Informe Final - Análisis de Algoritmos II

## Proyecto: Subsecuencias Palindrómicas y Planeación de Fiesta

### Materia:

* Análisis de Algoritmos II

### Profesor:

* Carlos Andres Delgado

---

## 1️⃣ Introducción

En este proyecto se abordaron dos problemas fundamentales en el ámbito de los algoritmos:

1. **Subsecuencias Palindrómicas Más Largas**: Encontrar todas las subsecuencias palindrómicas de máxima longitud en un conjunto de frases.  
2. **Planeación de una Fiesta**: Seleccionar un conjunto de empleados para asistir a una fiesta, maximizando el valor de convivencia y asegurando que ningún subordinado directo esté presente si su jefe también asiste.

Para la resolución de estos problemas, se implementaron tres enfoques algorítmicos:

* **Fuerza Bruta**: Generación exhaustiva de todas las posibles soluciones.  
* **Programación Dinámica**: Uso de subproblemas para optimizar el cálculo de resultados.  
* **Voraz (Greedy)**: Selección de soluciones parciales óptimas para construir la solución final.

---

## 2️⃣ Metodología

La metodología aplicada se dividió en las siguientes fases:

1. **Análisis del problema**: Se realizó una revisión exhaustiva de los enunciados para identificar las restricciones y objetivos de optimización.  
2. **Diseño de Algoritmos**: Se definieron tres estrategias distintas (Fuerza Bruta, Programación Dinámica y Voraz) para abordar ambos problemas.  
3. **Implementación**: Se desarrollaron las soluciones en JavaScript, manteniendo una estructura clara y optimizada.  
4. **Análisis de Complejidad**: Se evaluaron los algoritmos en cuanto a complejidad temporal y espacial, tanto teórica como experimentalmente.  
5. **Validación y Pruebas**: Se diseñaron pruebas de juguete, pequeñas, medianas, grandes y extra grandes para validar la correcta ejecución de los algoritmos.

---

## 3️⃣ Implementación

### 3.1 Subsecuencias Palindrómicas

#### - Fuerza Bruta

La solución por **Fuerza Bruta** para encontrar el palíndromo más largo genera todas las posibles subcadenas del texto y verifica si cada una de ellas es un palíndromo. La complejidad temporal es O(n³), ya que se generan todas las subcadenas posibles (O(n²)) y para cada una se valida si es un palíndromo (O(n)).

Se puede conocer más sobre la implementación de la fuerza bruta en el documento [palindrome-brute-force.md](./docs/palindrome-brute-force.md).

---

#### - Programación Dinámica

La solución por **Programación Dinámica** optimiza el proceso almacenando resultados parciales en una tabla, evitando recalcular subproblemas. Su complejidad temporal es O(n²), lo cual representa una mejora significativa frente a la fuerza bruta.

Se puede conocer más sobre la implementación de la dinámica en el documento [palindrome-dynamic-programming.md](./docs/palindrome-dynamic-programming.md).

---

#### - Voraz (Greedy)

El algoritmo **Voraz** realiza una búsqueda progresiva en los extremos del texto para construir un palíndromo, logrando un desempeño de O(n²). Aunque no garantiza siempre el palíndromo más largo, su eficiencia es considerable para entradas medianas.

Se puede conocer más sobre la implementación de la Voraz en el documento [palindrome-greedy-solution.md](./docs/palindrome-greedy-solution.md).

---

### 3.2 Planeación de la Fiesta

#### - Fuerza Bruta

Este enfoque genera todos los subconjuntos posibles de empleados y evalúa cuál cumple con las condiciones de no supervisión. La complejidad temporal es O(2ⁿ · n²).

Se puede conocer más sobre la implementación por fuerza bruta en el documento [business-party-brute-force.md](./docs/business-party-brute-force.md).

---

#### - Programación Dinámica

La solución dinámica emplea un recorrido DFS y la técnica de memoización para determinar la mejor combinación de asistentes. Su complejidad es O(n²).

Se puede conocer más sobre la implementación por programación dinámica en el documento [business-party-dynamic.md](./docs/business-party-dynamic.md).

---

#### - Voraz (Greedy)

El enfoque voraz selecciona los empleados en función de su valor de convivencia, descartando aquellos que entran en conflicto jerárquico. Su complejidad es O(n²).

Se puede conocer más sobre la implementación por programación Voraz en el documento [business-party-greedy.md](./docs/business-party-greedy.md).

---

## 4️⃣ Recomendaciones para ejecutar el programa

Se recomienda ejecutar el programa en **Windows**, ya que este sistema operativo incluye por defecto las librerías necesarias para que **Electron** funcione correctamente, incluyendo la funcionalidad de "Choose File" (selección de archivos mediante una ventana del sistema).  
Para correr el programa en Windows, use el siguiente comando:

```bash
npm run electron
```
Si se desea ejecutar el programa en Linux, también es posible hacerlo con el mismo comando:

```bash
npm run electron
```
No obstante, se deben tener en cuenta las siguientes consideraciones:

Asegúrese de contar con un entorno gráfico correctamente configurado.

Algunas distribuciones de Linux pueden requerir la instalación manual de ciertas librerías que en Windows ya están incluidas. Para evitar errores al ejecutar Electron, se recomienda instalar las siguientes dependencias:

```bash
sudo apt-get install \
  libnss3 \
  libatk-bridge2.0-0 \
  libxss1 \
  libasound2 \
  libgtk-3-0 \
  libx11-xcb1 \
  libxcb-dri3-0
```

Si el botón "Choose File" no responde o no se abre la ventana de selección, verifique los permisos del entorno gráfico o intente ejecutar el programa con privilegios.

## 5️⃣ Reporte Sonarqube

Este sería el reporte generado por sonarqube

(./docs/imgs/reportSonar.png)

