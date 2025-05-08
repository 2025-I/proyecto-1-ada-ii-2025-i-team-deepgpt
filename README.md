## Integrantes

Nombre completo | Código
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

**Gráfica de Complejidad:**

![Comparación entre tiempo de ejecución y función cúbica](./imgs/brute-force-solution-palindrome.png)

---

#### - Programación Dinámica

La solución por **Programación Dinámica** optimiza el proceso almacenando resultados parciales en una tabla, evitando recalcular subproblemas. Su complejidad temporal es O(n²), lo cual representa una mejora significativa frente a la fuerza bruta.

**Gráfica de Complejidad:**

![Comparación entre tiempo de ejecución y función cuadrática](./imgs/palindrome-dynamic.png)

---

#### - Voraz (Greedy)

El algoritmo **Voraz** realiza una búsqueda progresiva en los extremos del texto para construir un palíndromo, logrando un desempeño de O(n²). Aunque no garantiza siempre el palíndromo más largo, su eficiencia es considerable para entradas medianas.

**Gráfica de Complejidad:**

![Comparación entre tiempo de ejecución y función cuadrática](./imgs/palindrome-greedy.png)

---

### 3.2 Planeación de la Fiesta

#### - Fuerza Bruta

Este enfoque genera todos los subconjuntos posibles de empleados y evalúa cuál cumple con las condiciones de no supervisión. La complejidad temporal es O(2ⁿ · n²).

**Gráfica de Complejidad:**

![Gráfica de complejidad experimental](./imgs/business-party-brute-force.png)

---

#### - Programación Dinámica

La solución dinámica emplea un recorrido DFS y la técnica de memoización para determinar la mejor combinación de asistentes. Su complejidad es O(n²).

**Gráfica de Complejidad:**

![Comparación entre tiempo de ejecución y función cuadrática](./imgs/business-party-dynamic.png)

---

#### - Voraz (Greedy)

El enfoque voraz selecciona los empleados en función de su valor de convivencia, descartando aquellos que entran en conflicto jerárquico. Su complejidad es O(n²).

**Gráfica de Complejidad:**

![Comparación entre tiempo de ejecución y función cuadrática](./imgs/business-party-greedy.png)

---

## 4️⃣ Análisis de Complejidad

### 4.1 Complejidad Teórica

Se detallarán los análisis de complejidad de cada algoritmo, tanto en tiempo como en espacio.

### 4.2 Complejidad Experimental

Se incluirán las gráficas proporcionadas y se analizarán los resultados experimentales comparando con la teoría.

---

## 5️⃣ Resultados Experimentales

Se detallarán los casos de prueba y los resultados obtenidos, analizando los tiempos de ejecución y el comportamiento de cada enfoque.

---

## 6️⃣ Conclusiones

Resumen de los resultados, observaciones sobre el rendimiento de cada algoritmo y propuestas de mejoras futuras.

---

## 7️⃣ Referencias

Se listarán las referencias bibliográficas y documentales consultadas para la elaboración del proyecto.


