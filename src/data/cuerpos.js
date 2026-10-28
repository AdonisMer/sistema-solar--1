// distMkm = distancia al Sol en millones de km (para lunas, la del planeta que orbitan)
// c1/c2 = colores del degradado que dibuja la esfera

export const CATEGORIAS = [
  { id: "rocosos", nombre: "Planetas rocosos", emoji: "🪨", color: "#fb923c" },
  { id: "gaseosos", nombre: "Gigantes gaseosos", emoji: "🌪️", color: "#f59e0b" },
  { id: "helados", nombre: "Gigantes helados", emoji: "🧊", color: "#38bdf8" },
  { id: "enanos", nombre: "Planetas enanos", emoji: "🔸", color: "#a78bfa" },
  { id: "lunas", nombre: "Lunas", emoji: "🌙", color: "#94a3b8" },
  { id: "otros", nombre: "Sol y otros", emoji: "☀️", color: "#facc15" },
];

export const CUERPOS = [
  // Rocosos
  { id: 1, nombre: "Mercurio", categoria: "rocosos", diametroKm: 4879, distMkm: 57.9, dia: "58.6 días terrestres", anio: "88 días", lunas: "0", c1: "#d1d5db", c2: "#6b7280", curioso: "Aunque es el más cercano al Sol, no es el más caliente: ese puesto es de Venus." },
  { id: 2, nombre: "Venus", categoria: "rocosos", diametroKm: 12104, distMkm: 108.2, dia: "243 días terrestres (al revés)", anio: "225 días", lunas: "0", c1: "#fde68a", c2: "#b45309", curioso: "Gira al revés y su día dura más que su año." },
  { id: 3, nombre: "Tierra", categoria: "rocosos", diametroKm: 12742, distMkm: 149.6, dia: "24 horas", anio: "365.25 días", lunas: "1", c1: "#60a5fa", c2: "#166534", curioso: "Es el único lugar conocido con vida y con agua líquida en su superficie." },
  { id: 4, nombre: "Marte", categoria: "rocosos", diametroKm: 6779, distMkm: 227.9, dia: "24.6 horas", anio: "687 días", lunas: "2", c1: "#fca5a5", c2: "#9a3412", curioso: "Tiene el volcán más grande del sistema solar: el Monte Olimpo." },
  // Gigantes gaseosos
  { id: 5, nombre: "Júpiter", categoria: "gaseosos", diametroKm: 139820, distMkm: 778.5, dia: "9.9 horas", anio: "11.9 años", lunas: "Más de 90", c1: "#fed7aa", c2: "#9a3412", curioso: "Su Gran Mancha Roja es una tormenta que se observa desde hace siglos." },
  { id: 6, nombre: "Saturno", categoria: "gaseosos", diametroKm: 116460, distMkm: 1434, dia: "10.7 horas", anio: "29.5 años", lunas: "Más de 250", anillos: true, c1: "#fef3c7", c2: "#a16207", curioso: "Es menos denso que el agua: flotaría en una bañera lo bastante grande." },
  // Gigantes helados
  { id: 7, nombre: "Urano", categoria: "helados", diametroKm: 50724, distMkm: 2871, dia: "17.2 horas (al revés)", anio: "84 años", lunas: "Más de 25", c1: "#a5f3fc", c2: "#0e7490", curioso: "Gira prácticamente de lado, con una inclinación de unos 98°." },
  { id: 8, nombre: "Neptuno", categoria: "helados", diametroKm: 49244, distMkm: 4495, dia: "16.1 horas", anio: "165 años", lunas: "16", c1: "#93c5fd", c2: "#1e3a8a", curioso: "Tiene los vientos más veloces del sistema solar, de más de 2,000 km/h." },
  // Enanos
  { id: 9, nombre: "Plutón", categoria: "enanos", diametroKm: 2377, distMkm: 5906, dia: "6.4 días terrestres", anio: "248 años", lunas: "5", c1: "#fde7d3", c2: "#92614a", curioso: "Fue reclasificado como planeta enano en 2006." },
  { id: 10, nombre: "Ceres", categoria: "enanos", diametroKm: 940, distMkm: 413.7, dia: "9.1 horas", anio: "4.6 años", lunas: "0", c1: "#d4d4d8", c2: "#52525b", curioso: "Es el objeto más grande del cinturón de asteroides." },
  { id: 11, nombre: "Eris", categoria: "enanos", diametroKm: 2326, distMkm: 10120, dia: "25.9 horas", anio: "559 años", lunas: "1", c1: "#f5f5f4", c2: "#78716c", curioso: "Su descubrimiento en 2005 impulsó la redefinición de lo que es un planeta." },
  { id: 12, nombre: "Makemake", categoria: "enanos", diametroKm: 1430, distMkm: 6850, dia: "22.8 horas", anio: "305 años", lunas: "1", c1: "#fdba74", c2: "#7c2d12", curioso: "Su nombre viene de un dios de la mitología rapanui (Isla de Pascua)." },
  { id: 13, nombre: "Haumea", categoria: "enanos", diametroKm: 1560, distMkm: 6450, dia: "3.9 horas", anio: "285 años", lunas: "2", c1: "#e5e7eb", c2: "#6b7280", curioso: "Gira tan rápido que tiene forma alargada, como un balón de rugby." },
  // Lunas
  { id: 14, nombre: "La Luna", categoria: "lunas", diametroKm: 3474, distMkm: 149.6, orbita: "Tierra", dia: "27.3 días terrestres", anio: "—", lunas: "—", c1: "#e5e7eb", c2: "#6b7280", curioso: "Se aleja de la Tierra unos 3.8 cm cada año." },
  { id: 15, nombre: "Ío", categoria: "lunas", diametroKm: 3643, distMkm: 778.5, orbita: "Júpiter", dia: "1.8 días terrestres", anio: "—", lunas: "—", c1: "#fef08a", c2: "#a16207", curioso: "Es el cuerpo con más actividad volcánica del sistema solar." },
  { id: 16, nombre: "Europa", categoria: "lunas", diametroKm: 3122, distMkm: 778.5, orbita: "Júpiter", dia: "3.5 días terrestres", anio: "—", lunas: "—", c1: "#f5f5f4", c2: "#a8a29e", curioso: "Bajo su corteza de hielo podría haber un océano de agua líquida." },
  { id: 17, nombre: "Ganímedes", categoria: "lunas", diametroKm: 5268, distMkm: 778.5, orbita: "Júpiter", dia: "7.2 días terrestres", anio: "—", lunas: "—", c1: "#d6d3d1", c2: "#57534e", curioso: "Es la luna más grande del sistema solar, incluso mayor que Mercurio." },
  { id: 18, nombre: "Calisto", categoria: "lunas", diametroKm: 4821, distMkm: 778.5, orbita: "Júpiter", dia: "16.7 días terrestres", anio: "—", lunas: "—", c1: "#a8a29e", c2: "#292524", curioso: "Tiene una de las superficies más antiguas y llenas de cráteres." },
  { id: 19, nombre: "Titán", categoria: "lunas", diametroKm: 5150, distMkm: 1434, orbita: "Saturno", dia: "15.9 días terrestres", anio: "—", lunas: "—", c1: "#fcd34d", c2: "#b45309", curioso: "Es la única luna con atmósfera densa y lagos de metano líquido." },
  { id: 20, nombre: "Encélado", categoria: "lunas", diametroKm: 504, distMkm: 1434, orbita: "Saturno", dia: "1.4 días terrestres", anio: "—", lunas: "—", c1: "#ffffff", c2: "#94a3b8", curioso: "Lanza chorros de vapor de agua desde su polo sur." },
  { id: 21, nombre: "Tritón", categoria: "lunas", diametroKm: 2707, distMkm: 4495, orbita: "Neptuno", dia: "5.9 días terrestres", anio: "—", lunas: "—", c1: "#fbcfe8", c2: "#9d174d", curioso: "Orbita en sentido contrario a la rotación de Neptuno." },
  { id: 22, nombre: "Fobos", categoria: "lunas", diametroKm: 22, distMkm: 227.9, orbita: "Marte", dia: "7.7 horas", anio: "—", lunas: "—", c1: "#a8a29e", c2: "#44403c", curioso: "Se acerca lentamente a Marte y en decenas de millones de años podría desintegrarse." },
  { id: 23, nombre: "Caronte", categoria: "lunas", diametroKm: 1212, distMkm: 5906, orbita: "Plutón", dia: "6.4 días terrestres", anio: "—", lunas: "—", c1: "#d4d4d8", c2: "#52525b", curioso: "Es tan grande respecto a Plutón que ambos giran alrededor de un punto situado entre los dos." },
  // Sol y otros
  { id: 24, nombre: "El Sol", categoria: "otros", diametroKm: 1392700, distMkm: 0, dia: "~25 días terrestres (ecuador)", anio: "—", lunas: "—", c1: "#fef08a", c2: "#ea580c", curioso: "Contiene cerca del 99.8% de toda la masa del sistema solar." },
  { id: 25, nombre: "Cometa Halley", categoria: "otros", diametroKm: 11, distMkm: 2667, dia: "~2.2 días terrestres", anio: "~76 años", lunas: "—", c1: "#e0f2fe", c2: "#475569", curioso: "Se ve desde la Tierra cada ~76 años; su próxima visita será hacia 2061." },
  { id: 26, nombre: "Vesta", categoria: "otros", diametroKm: 525, distMkm: 353, dia: "5.3 horas", anio: "3.6 años", lunas: "0", c1: "#d6d3d1", c2: "#78716c", curioso: "Es uno de los asteroides más brillantes y a veces se ve a simple vista." },
];
