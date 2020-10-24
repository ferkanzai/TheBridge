// From https://github.com/TheBridge-FullStackDeveloper/programacion-avanzada-bikram-objetos-clases

// Nivel básico

const Coche = {
    marca: '',
    modelo: '',
    matricula: '',
    acelerar() {
        console.log('a todo gas');
    },
    frenar() {
        console.log('cuidado con la abuelita en el paso de cebra');
    }
}

class Turismo {
    constructor(marca, modelo, matricula){
        this.marca = marca
        this.modelo = modelo
        this.matricula = matricula
    }

    acelerar() {
        console.log('a todo gas');
    }
    
    frenar() {
        console.log('cuidado con la abuelita en el paso de cebra');
    }
}

const miTurismo = new Turismo('Asiento', 'Leon', '1234AAA');
const miSegundoTurismo = new Turismo('Vuelve', 'XC90', '1540GAB');

class Persona {
    constructor(nombre, apellidos, edad, gustosMusicales) {
        this.nombre = nombre
        this.apellidos = apellidos
        this.edad = edad
        this.gustosMusicales = gustosMusicales
    }

    envejecer() {
        this.edad++
    }

    nuevoGusto(string) {
        this.gustosMusicales.push(string)
    }
}

const rockero = new Persona('Freddie', 'Mercury', 45, ['Queen', 'AC/DC']);

function aplicar_nuevoGusto(persona, nuevoGusto) {
    persona.nuevoGusto(nuevoGusto);
}

aplicar_nuevoGusto(rockero, 'My Chemical Romance');

const Perro = ['nombre', 'raza', function popo() {return ("Ha hecho " + Math.random() * 3 + " caquitas")}]
// console.log(Perro[0])

const Perrito = {
    nombre: '',
    raza: '',
    popo() {
        return ("Ha hecho " + Math.random() * 3 + " caquitas")
    }
}

class Perrazo {
    constructor(nombre, raza) {
        this.nombre = nombre
        this.raza = raza
    }

    popo() {
        return ("Ha hecho " + Math.random() * 3 + " caquitas")
    }
}

const lebrelazo = new Perrazo('Gus', 'Lebrel');

// Nivel intermedio

class Husky extends Perrazo {
    constructor(nombre, heterocromia) {
        super(nombre, 'Husky')
        this.heterocromia = heterocromia
    }

    tieneHeterocromia(heterocromia) {
        if (heterocromia) {
            console.log('si');
        } else {
            console.log('no');
        }
    }
}

const miHusky = new Husky('Alaska', true)

class Coordenadas {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

class Jugador {
    constructor(posicion, fuerza, velocidad, direccion, vida) {
        this.posicion = posicion
        this.fuerza = fuerza
        this.velocidad = velocidad
        this.direccion = direccion
        this.vida = vida
    }

    moverse() {
        this.posicion.x += this.velocidad.x * this.direccion.x
        this.posicion.y += this.velocidad.y * this.direccion.y
    }

    perderVida() {
        this.vida--
    }
}

const jugadores = [new Jugador((4, 6), 99, (45, 67), (54, 22), 100), new Jugador((4, 6), 99, (45, 67), (54, 22), 100), new Jugador((4, 6), 99, (45, 67), (54, 22), 100)]

const FrameworksJavaScript = {
    frameworks: [],
    generarFramework() {
        this.frameworks.push(randomString() + '.js')
    }
}

class Error_ {
    constructor(codigo, descripcion, nombre) {
        this.codigo = codigo
        this.descripcion = descripcion
        this.nombre = nombre
    }

    imprimirError() {
        console.log(this)
    }
}

class Huevera {
    constructor(huevosMaximos, huevos) {
        this.huevosMaximos = huevosMaximos
        this.huevos = huevos
    }

    comprarHuevos(num) {
        this.huevos += num
    }
}

// Nivel premium

const Nevera = {
    productos: [],
    get numProductos() {
        return this.productos.length
    }
}

const Congelador = {
    productos: [],
    set compra(array) {
        for(let i = 0; i < array.length; i++) {
            this.productos.push(array[i])
        }
    }
}