class Vehiculo{
    constructor(placa, marca, modelo, color, velocidad){
        this.placa = placa;
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.velocidad = velocidad;
    }

    aumentarVelocidad(){
        this.velocidad += 1;
    }

    mostrarHTML(){
        return `
            <div class="bg-white p-6 rounded-lg shadow max-w-md mx-auto">
                <h3 class="text-lg font-semibold text-blue-800 mb-2">Placa: ${this.placa}</h3>
                <p class="text-gray-700 mb-1">
                    <span class="font-medium">Marca:</span> ${this.marca}</p>
                <p class="text-gray-700 mb-1">
                    <span class="font-medium">Modelo:</span> ${this.modelo}</p>
                <p class="text-gray-700 mb-1">
                    <span class="font-medium">Color:</span> ${this.color}</p>
                <p class="text-gray-700 mb-1">
                    <span class="font-medium">Velocidad:</span> ${this.velocidad} km/h</p>
            </div>
        `;
    }

    
}

const vehiculos = [
    new Vehiculo("ABC123", "Toyota", 2023, "Rojo", 120),
    new Vehiculo("DEF456", "Ford", 2000, "Azul", 130),
    new Vehiculo("GHI789", "Honda", 2020, "Negro", 140)
];

vehiculos.forEach(v => v.aumentarVelocidad());

const contenedor = document.getElementById("datos");
vehiculos.forEach(v => {
    contenedor.innerHTML += v.mostrarHTML();
});