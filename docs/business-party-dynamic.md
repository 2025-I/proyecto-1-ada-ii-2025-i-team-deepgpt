# Solución dinámica al problema: Planeando una fiesta de la compañía

Este problema representa el caso particular del problema general del **conjunto independiente máximo en un árbol**. El problema consiste en encontrar el subconjunto más grande de vértices en un árbol tal que no haya dos vértices adyacentes en ese subconjunto.

## Estrategia

Para resolver este problema de forma dinámica, utilizamos la siguiente estrategia:

1. **Conversión de matriz a lista de adyacencia:**  
   Se transforma la matriz de adyacencia a una lista de adyacencia. Esta conversión permite optimizar la consulta de nodos adyacentes. Mientras que con la matriz se necesita recorrer todas las columnas de un nodo para verificar cuáles están conectadas, con la lista accedemos directamente a los vecinos.

2. **Recorrido DFS (Depth-First Search):**  
   Se realiza un recorrido DFS en el grafo. Por cada nodo:

   - Se omite el nodo padre y se evita visitar nodos ya marcados (para prevenir ciclos).
   - Se evalúan dos escenarios:
     - **No incluir al nodo actual:** Se puede considerar incluir o no a sus hijos, tomando el máximo beneficio posible.
     - **Incluir al nodo actual:** No se pueden incluir los hijos, ya que están directamente conectados.

   En cada paso se calcula el beneficio en términos de **convivencia**, que es el criterio usado para decidir qué nodos seleccionar.

## Notación

Sea \( T \) un árbol enraizado en el nodo \( u \), y definimos:

- \( \text{val}(u) \): Valor de convivencia del nodo \( u \)
- \( \text{hijos}(u) \): Conjunto de hijos directos de \( u \)
- \( \text{dp}(u, 1) \): Máxima suma si se incluye al nodo \( u \)
- \( \text{dp}(u, 0) \): Máxima suma si se excluye al nodo \( u \)

Entonces, las relaciones de recurrencia son:

$$
\text{dp}(u, 1) = \text{val}(u) + \sum_{v \in \text{hijos}(u)} \text{dp}(v, 0)
$$

$$
\text{dp}(u, 0) = \sum_{v \in \text{hijos}(u)} \max(\text{dp}(v, 0), \text{dp}(v, 1))
$$

## Análisis de complejidad temporal

- **Conversión de matriz a lista de adyacencia:**  
  Requiere recorrer la matriz completa de tamaño \( n \times n \), por lo tanto su complejidad es:

  $$
  O(n^2)
  $$

- **DFS + programación dinámica:**  
  El algoritmo visita cada nodo una sola vez, y procesa sus aristas una vez. La complejidad del recorrido DFS en un grafo es:

  $$
  O(n + m)
  $$

  donde \( n \) es el número de nodos y \( m \) el número de aristas. En un árbol, \( m = n - 1 \), así que esta parte es lineal:

  $$
  O(n)
  $$

- **Paso final (selección del resultado óptimo):**  
  Solo se compara y retorna el mejor resultado entre dos valores, por lo que su complejidad es:

  $$
  O(1)
  $$

### Conclusión

En resumen, la complejidad total del algoritmo es dominada por la conversión de la matriz a lista de adyacencia, que es:

$$
O(n^2)
$$

El resto del algoritmo tiene complejidad lineal \( O(n) \), pero no afecta al orden de crecimiento dominante.
