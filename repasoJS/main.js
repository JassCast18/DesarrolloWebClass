alert('Hola Mundo');

//=======================
//Tabla
//=======================
let nombre= "Jaser Castellanos";
let edad = 22;

let tablaVariables =`
<h2 class="text-xl font-bold text-blue-600 mb-2">Variables</h2>
    <table class="table-auto border-collapse w-full text-left bg-white rounded shadow">
        <thead>
            <tr class="bg-gray-200">
                <th class="border px-4 py-2">Variable</th>
                <th class="border px-4 py-2">Valor</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="border px-4 py-2">nombre</td>
                <td class="border px-4 py-2">${nombre}</td>
            </tr>
            <tr>
                <td class="border px-4 py-2">edad</td>
                <td class="border px-4 py-2">${edad}</td>
            </tr>
        </tbody>
    </table>
`;
datos.innerHTML = tablaVariables;

//=======================
//Tabla 2: Estructuras de Control
//=======================
let mensajeEdad = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";

let tablaControl = `
<h2 class="text-xl font-bold text-blue-600 mt-8 mb-2">Estructuras de Control</h2>
    <table class="table-auto border-collapse w-full text-left bg-white rounde shadow">
        <thead>
            <tr class="bg-gray-200">
                <th class="border px-4 py-2">Condición</th>
                <th class="border px-4 py-2">Resultado</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="border px-4 py-2">edad >= 18</td>
                <td class="border px-4 py-2">${mensajeEdad}</td>
            </tr>
        </tbody>
    </table>
`;
datos.innerHTML += tablaControl;
//=======================
//Tabla 3: Bucle For (Años)
//=======================

let tablaBucle= `
<h2 class="text-xl font-bold text-blue-600 mt-8 mb-2">Bucle For</h2>
    <table class="table-auto border-collapse w-full text-left bg-white rounded shadow">
        <thead>
            <tr class="bg-gray-200">
                <th class="border px-4 py-2">#</th>
                <th class="border px-4 py-2">Año</th>
            </tr>
        </thead>
        <tbody>
`;

for (let i = 2021; i <= 2025; i++) {
    tablaBucle += `
            <tr>
                <td class="border px-4 py-2">${i-2020}</td>
                <td class="border px-4 py-2">Año ${i}</td>
            </tr>
    `;
}
tablaBucle += `
        </tbody>
    </table>
`;
datos.innerHTML += tablaBucle;
//=======================
//Tabla 4: Funcion 
//=======================
function MuestraDatos(nombre, edad) {
    return `
    <h2 class="text-xl font-bold text-blue-600 mt-8 mb-2">Función</h2>
    <table class="table-auto border-collapse w-full text-left bg-white rounded shadow">
        <thead>
            <tr class="bg-gray-200">
                <th class="border px-4 py-2">Propiedad</th>
                <th class="border px-4 py-2">Valor</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="border px-4 py-2">Nombre</td>
                <td class="border px-4 py-2">${nombre}</td>
            </tr>
            <tr>
                <td class="border px-4 py-2">Edad</td>
                <td class="border px-4 py-2">${edad}</td>
            </tr>
        </tbody>
    </table>
`;
}

datos.innerHTML += MuestraDatos(nombre, edad);