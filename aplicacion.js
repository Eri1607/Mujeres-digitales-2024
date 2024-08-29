// Variables & Condicionales
function checkAge(age) {
    let message;
    if (age >= 60) {
        message = "Eres de la tercera edad";
    } else if (age < 18) {
        message = "Eres menor de edad.";
    } else {
        message = "Eres mayor de edad.";
    }

    return message;
}

console.log(checkAge(62));

// Ciclos
function listNumbers() {
    let numbers = [1, 2, 3, 4];
    for (let i = 1; i <= 5; i++) {
        numbers.push(i);
    }
    return numbers;
}

const sumarNumeros50 = () => {
    let sumatoria = 0;
    for (let i = 1; i <= 50; i++) {
        if (i % 2 == 0) {
            sumatoria += i;
        }
    }
    console.log(sumatoria);
}

// Arreglos
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));

// Funciones
function greet(name) {
    return `Hola, ${name}!`;
}

// JSON
function getPersonInfo() {
    const person = {
        name: "Juan",
        age: 25,
        city: "Madrid"
    };
    return JSON.stringify(person, null, 2);
}

// Gestión de Tareas
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Función para agregar una nueva tarea
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Por favor, ingresa una tarea.");
        return;
    }

    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Eliminar";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", function () {
        taskList.removeChild(taskItem);
    });

    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);

    taskInput.value = "";
}

// Agregar evento al botón de agregar tarea
addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

// Función para ejecutar todos los ejemplos y mostrar los resultados
function runExamples() {
    let output = '';

    output += "1. Variables & Condicionales:\n";
    output += checkAge(20) + "\n\n";

    output += "2. Ciclos:\n";
    output += listNumbers().join(", ") + "\n\n";

    output += "3. Arreglos:\n";
    const exampleArray = [1, 2, 3, 4, 5];
    output += `La suma del arreglo [${exampleArray.join(", ")}] es: ${sumArray(exampleArray)}\n\n`;

    output += "4. Funciones:\n";
    output += greet("Estudiante") + "\n\n";

    output += "5. JSON:\n";
    output += getPersonInfo() + "\n";

    document.getElementById("output").textContent = output;
}

// Adjuntar event listener al botón de ejecutar código
document.getElementById("runCode").addEventListener("click", runExamples);