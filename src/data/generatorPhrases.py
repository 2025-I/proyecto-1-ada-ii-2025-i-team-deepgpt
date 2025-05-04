import random

# Lista de palíndromos conocidos
palindromes = [
    "Llego a tierra y le dijo: Dabale arroz a la zorra el abad, ella aceptó.",
    "El ministro dijo: Se es o no se es un ministro.",
    "María dijo: Yo dono rosas, oro no doy por ello él la dejó.",
    "A mamá Roma le aviva el amor a mamá.",
    "Sé verlas al revés",
    "A ti no, bonita",
    "Yo hago yoga hoy",
    "Anita lava la tina",
    "Aman a Panamá",
    "Allí ves Sevilla",
    "Somos o no somos",
    "Árbol, aire, trazo leve, drama largo. Lisa, ávida, da nueva ley la rocosa cólera. Coteja, el oleaje, tocar el ocaso coral y el ave. Una dádiva así logra la mar: de veloz, arterial obra.",
    "Alba honda de los álamos al aire. La luz aledaña del azul al erial asoma. La soledad no habla.",
    "La ruta nos aportó somera dádiva, luna, somero amar de fortuna, y laúd nos animó. Erial. El aire lazó, leve, veloz, al erial. El aire omina son dual. Ya nutro fe. Drama. Oremos. A nula vida daremos otro paso natural.",
    "Amar tal somos y somos sonrisa, somos asirnos. Somos la ruta no breve, dádiva de sal y arena. Maldades, la falaz nada, la mirada brutal somos. Somos arte, larga marca. Sacra, magra letra somos. Somos la turbada rima, la danza, la falsedad. La manera y la sed ávida de verbo natural somos. Sonrisa somos. Asirnos somos. Y somos la trama.",
    "Oh, leo cada mamada, Coelho.",
    "Atar a la rata.",
    "El bar es imán o zona miserable.",
    "Adivina ya te opina, ya ni miles origina, ya ni cetro me domina, ya ni monarcas, a repaso ni mulato carreta, acaso nicotina, ya ni cita vecino, anima cocina, pedazo gallina, cedazo terso nos retoza de canilla goza, de pánico camina, ónice vaticina, ya ni tocino saca, a terracota luminosa pera, sacra nómina y ánimo de mortecina, ya ni giros elimina, ya ni poeta, ya ni vida.",
    "Átale, demoníaco Caín, o me delata.",
    "La mar ¡Ah! El anís es azul al ocaso. Claro, la canícula hará mal. Alejábase bello sol. ¡Sumerge la usada roda! A remar. ¡A La Habana, bucanero Morgan! Oleaje de la mar… ¡Al remo! ¡Corre! Playas… Ay, al perro comer la rama le deja el onagro, morena cubana. ¡Bah! A la ramera adorada su alegre muslo sol le besa. ¡Bajel a la mar! ¡Ah! Alucina calor al cosaco. La luz asesina le hará mal.",
    "Nada, yo soy Adán",
    "Amor azul Ramera, de todo te di. Mariposa colosal, sí, yo de todo te di. Poda la rosa, Venus. El átomo como tal es un evasor alado. Pide, todo te doy: isla, sol, ocaso, pirámide. Todo te daré: mar, luz, aroma."
]

# Fragmentos no palindrómicos para complementar
non_palindromic_fragments = [
    "Mientras caminaba por el bosque, encontró una vieja nota que decía:",
    "En la última página del diario, había una frase que no lograba olvidar:",
    "Un susurro en el viento repetía constantemente:",
    "El anciano recordaba lo que solía decir su esposa:",
    "En el antiguo mural podía leerse una frase intrigante:",
    "La inteligencia artificial reprodujo una línea en voz baja:",
    "En la pantalla apareció una cita misteriosa:",
    "El viajero cansado murmuró antes de dormir:",
    "Durante la conferencia, el orador dijo con voz firme:",
    "El mensaje secreto decía claramente:",
    "Aún recordaba el momento cuando la ciudad brillaba con luces vibrantes.",
    "A través de las ventanas del tren, observaba el paisaje mientras viajaba.",
    "El viento soplaba suavemente entre las hojas caídas del árbol.",
    "La pintura en la pared le decía más de lo que las palabras podrían expresar.",
    "Cada paso que daba en la ciudad vieja lo acercaba a un misterio no resuelto.",
    "La canción que sonaba de fondo le traía recuerdos agridulces.",
    "La luz del atardecer iluminaba las calles vacías, creando una atmósfera melancólica.",
    "Pensó en todo lo que había dejado atrás, sin saber si alguna vez volvería.",
    "Las montañas a lo lejos parecían un murmullo constante, como una llamada a lo desconocido.",
    "Caminaba sin rumbo fijo, dejándose llevar por el sonido de sus propios pensamientos."
]

size= [500, 1000, 2000, 3000, 4000, 5000]
# Generar n frases con palíndromos dentro
# iteramos por cada tamaño
for i in size:
    # Generar una lista de frases con palíndromos
    lines = [str(i)]
    for _ in range(i):
        intro = random.choice(non_palindromic_fragments)
        palindrome = random.choice(palindromes)
        sentence = f"{intro} \"{palindrome}\", y entonces todo cambió."
        lines.append(sentence)

    # Unir líneas en un solo texto
    output_text = "\n".join(lines)
    output_text[:4000]  # Mostrar los primeros 1000 caracteres para revisión previa
    # Guardar el texto en un archivo
    with open(f"src/data/palindrome{i}.txt", "w", encoding="utf-8") as file:
        file.write(output_text)