# Solución dinámica al problema: Planeando una fiesta de la compañía

Este problema representa a el problema general de del conjunto independiente máximo en un árbol. El problema del conjunto independiente máximo en un árbol es el problema de encontrar el subconjunto más grande de vértices en un árbol tal que no haya dos vértices adyacentes en ese subconjunto.

## Estrategia

Para resolver este problema de forma dinámica utilizamos la siguiente estrategia. Primero pasamos de una **matriz de adyacencia** a una **lista de adyacencia**, esto lo hacemos ya que la lista de adyacencia nos proporciona una optimización en la consulta de los nodos adyacentes. Por ejemplo, en la matriz de adyacencia, para saber cuáles son los nodos adyacentes, debemos recorrer cada uno de ellos y validar si están relacionados; pero recorremos cada nodo, por lo que perdemos tiempo en consultar nodos que no están relacionados.

En cambio, con la **lista de adyacencia**, cada nodo tiene directamente los nodos relacionados con él, por lo que no se pierde tiempo en consultar nodos que no están relacionados.

Luego, utilizamos la técnica **DFS (Depth-First Search)** para recorrer cada uno de los nodos. Cuando estamos en un nodo, tomamos de la lista de adyacencia y consultamos los relacionados a este. Primero se valida que **no sea el padre** y luego que **no esté visitado** (para no caer en ciclos), para luego validar los **dos casos** que se pueden presentar:

1. **No llevar el nodo actual:** por lo tanto se podría llevar a los hijos o no, si esto otorga mayor beneficio.
2. **Llevar el nodo actual:** en este momento **no se podrían llevar a sus hijos** ya que tendrían una relación directa.

En cada caso se calcula el **beneficio de la convivencia**, ya que es el criterio para seleccionar la mejor opción.

## Notación

Sea $$T$$ un árbol enraizado en el nodo $$u$$, y definimos:

- $$\text{val}(u)$$: el valor de convivencia del nodo $$u$$
- $$\text{hijos}(u)$$: el conjunto de hijos directos de $$u$$
- $$\text{dp}(u, 1)$$: máxima suma si se incluye a $$u$$
- $$\text{dp}(u, 0)$$: máxima suma si se excluye a $$u$$

Entonces:

$$
\text{dp}(u, 1) = \text{val}(u) + \sum_{v \in \text{hijos}(u)} \text{dp}(v, 0)
$$

$$
\text{dp}(u, 0) = \sum_{v \in \text{hijos}(u)} \max(\text{dp}(v, 0), \text{dp}(v, 1))
$$

## Análisis de Complejidad Temporal

Como primer paso realizamos la conversión de matriz de adyacencia a lista de adyacencia. Este paso consume:

$$
O(n^2)
$$

ya que se debe recorrer cada relación de nodo con los demás, es decir, cada celda de la matriz.

Luego, en el segundo paso, tenemos el algoritmo de recorrido de árbol DFS, el cual tiene una complejidad temporal de:

$$
O(n)
$$

Y dentro de este, se recorren las **aristas** de este nodo, pero esto **se hace máximo una vez por nodo**. Más específicamente, si llegamos al nodo 1, este recorre sus aristas una vez. Cuando pasamos de este nodo, **no se vuelven a recorrer sus aristas**.

Por lo tanto, en general, aunque se recorren todas las aristas, **no se hace por cada nodo**, sino **solo por el nodo actual una vez**. Esto nos deja que la complejidad del algoritmo sea:

$$
O(n + m)
$$

donde $$n$$ es el número de nodos y $$m$$ es el número de aristas.

En un árbol, siempre se cumple que:

$$
m = n - 1
$$

por lo tanto:

$$
O(n + m) = O(n)
$$

Y en el paso final, la complejidad es:

$$
O(1)
$$

ya que solo accede a los elementos y hace una comparación.

### En resumen:

La complejidad del algoritmo es:

$$
O(n^2)
$$

por la conversión de matriz de adyacencia a lista de adyacencia, que es el paso más costoso. El algoritmo dinámico en sí tiene complejidad lineal, pero no domina la complejidad total.

## Análisis de Complejidad Temporal Experimental

Se realizaron múltiples ejecuciones del algoritmo con diferentes tamaños de entrada: 10, 50, 100, 400, 700, 1000, 3000 y 5000. Estos tamaños fueron seleccionados teniendo en cuenta el máximo valor que soporta el equipo de pruebas sin comprometer la estabilidad del sistema.

Por otro lado, se realizó la comparación gráfica entre la curva de tiempos de ejecución del algoritmo (representada en color azul) y la función cuadrática $$O(n^2)$$ (representada en color rojo). Se puede evidenciar cómo ambas presentan un comportamiento similar, con algunas variaciones que pueden deberse a factores externos como la carga del sistema, el recolector de basura del entorno de ejecución u otros procesos corriendo en segundo plano.

En general, los resultados experimentales confirman la hipótesis teórica de que el algoritmo presenta una complejidad de tipo cuadrática. A continuación, se muestra la gráfica que evidencia esta comparación:

![Comparación entre tiempo de ejecución y función cuadrática](./imgs/business-party-dynamic.png)
