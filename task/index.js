
// const array = [12, 24, 36, 45, 69, 58, 4, 8, 2, 6, 5]

// function bubbleSort(arr) {
//     let n = arr.length;

//     for (let i = 0; i <= n - 1; i++) {
//         for (let j = 0; j <= n - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Փոխանակում
//             }
//         }
//     }
//     return arr
// }

// bubbleSort(array)  ///[2, 4, 5, 6, 8, 12, 24, 36, 45, 58, 69]////

// const array1 = [5, 4, 23, 56, 48, 78, 69, 10, 2, 20, 3, 1]

// function selectionSort(arr) {
//     let n = arr.length;
//     for (let i = 0; i <= n - 1; i++) {
//         let index = i
//         for (let j = i + 1; j <= n - 1; j++) {
//             if (arr[j] < arr[index]) {
//                 index = j
//             }
//         }
//         [arr[i], arr[index]] = [arr[index], arr[i]]
//     }
//     return arr
// }

// selectionSort(array1) //[1, 2, 3, 4, 5, 10, 20, 23, 48, 56, 69, 78]////


// const array2 = [12, 45, 23, 14, 65, 48, 78, 69]

// function changeValesPosition(arr) {
//     for (let i = 0; i < arr.length - 1; i += 2) {
//         let temp = arr[i]
//         arr[i] = arr[i + 1]
//         arr[i + 1] = temp
//     }
//     return arr
// }

// changeValesPosition(array2) ///[45, 12, 14, 23, 48, 65, 69, 78]///


// let x = +prompt("Գրեք թիվ և որոշեք պարզ է թե բաղադրյալ");

// function Isprime(prompt) {
//     let isprime;
//     if (prompt <= 1) {
//         alert("anorosh")
//     }
//     for (let i = 2; i < prompt; i++) {
//         isprime = true
//         if (x % i === 0) {
//             isprime = false
//             break;
//         }
//     }
//     if (isprime === true) {
//         alert(`${prompt} parz tiv e`)
//     }
//     else {
//         alert(`${prompt} baxadryal tiv e`)
//     }
// }

// Isprime(x)

// let arr = [
//     [12, 24, 36, 23, 12, null, true, "Hallo", 45, 26],
//     [1, 4, "", "faafafa", NaN, undefined, 23, 15, 26, 47, 59],
//     [5, 6, 9, "Hay", 8, 6, 32, "sgsgsgs", 15, false, 45, 13]
// ]

// function SumNumebr(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array[i].length; j++) {
//             if (typeof (array[i][j]) === "number" && !isNaN(array[i][j])
//             ) {
//                 sum += array[i][j]
//             }
//         }
//     }
//     return sum
// }

// console.log(SumNumebr(arr))

// function checkType(item, index, obj) {
//     if (typeof (item) === "number") {
//         obj.numberCount++
//     }
//     else if (typeof (item) === "boolean") {
//         obj.BooleanCount++;
//     }
//     else if (typeof (item) === "string") {
//         obj.stringCoiunt++
//     }
//     else if (typeof (item) === "object") {
//         obj.nullCount++
//     }
//     if (typeof (item) === "undefined") {
//         obj.undeFinedCount++
//     }
//     return obj
// }

// function getArrayTypeCount(array) {
//     let obj = {
//         numberCount: 0,
//         nullCount: 0,
//         stringCoiunt: 0,
//         undeFinedCount: 0,
//         BooleanCount: 0,
//         NanCount: 0
//     }
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array[i].length; j++) {
//             checkType(array[i][j], j, obj)
//         }
//     }

//     return {
//         numberCount: obj.numberCount,
//         stringCount: obj.stringCoiunt,
//         nulCount: obj.nullCount,
//         undeFinedCount: obj.undeFinedCount,
//         BooleanCount: obj.BooleanCount,
//         NanCount: obj.NanCount
//     }
// }

// function getMaxNumber (arr) {
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = i + 1; j < arr.length; j++) {
//             if(arr[i] < arr[j]) {
//                 arr[i] = arr[j]
//             }
//         }
//         return arr[i]
//     }
// }

// console.log(getMaxNumber([10, 23, 36, 12, 45, 58, 699, 800, 940, 320]))

// function findExtraLetteIndex(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = i + 1; j < arr.length; j++) {
//             if(arr[i] === arr[j]) {
//                 console.log(j)
//             }
//         }
//     }

// }
// findExtraLetteIndex(["h", "j", "i", "l", "g", "t", "l", "i", 'm'])

// const getType = getArrayTypeCount(arr)
// console.log(`string = ${getType.stringCount}`)
// console.log(`number = ${getType.numberCount}`)
// console.log(`object = ${getType.nulCount}`)
// console.log(`boolean = ${getType.BooleanCount}`)
// console.log(`undefined = ${getType.undeFinedCount}`)


const inputs = document.querySelector('.result .curentOperation')
const calculatorConstrols = document.querySelector('.calculator-constrols')
const operations = document.querySelector('.operation')
const previusOperation = document.querySelector('.previusOperation')

let result = 0;
let curentOperant = "";
let operation = "";
let previousInput = "";

const btns = [
    'AC', "+/-", "%", "/",
    "7", "8", "9", "*",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "DE", "="
]

function HandleClickBtns(event) {
    const { innerHTML } = event.target;
    if (innerHTML === "0" && curentOperant === "") return;
    if (innerHTML === "." && curentOperant.includes('.')) return;
    if (innerHTML === "." && curentOperant === "") return;
    const numbers = event.target.innerHTML
    renderNumberInout(numbers)
}

const sumNumber = (btns) => {
    if (curentOperant === "") return;
    operation = btns
    operations.innerHTML = operation
}

const addBtnsValue = (numbers) => {
    if (operation !== "" && curentOperant !== "") {
        previousInput += numbers
        previusOperation.innerHTML = previousInput
    }
    else {
        curentOperant += numbers
        inputs.innerHTML = curentOperant;
    }
}

const Primes = () => {
    if (curentOperant === "") return;
    let primes = parseInt(inputs.innerHTML);
    primes = primes / 100;
    curentOperant = primes;
    inputs.innerHTML = curentOperant.toString();
}


function equals() {
    const curentOperation = parseInt(curentOperant);
    const previous = parseInt(previousInput);

    if (!curentOperant || operation === "" || !previous) return;

    switch (operation) {
        case "+":
            result = curentOperation + previous
            break;
        case "-":
            result = curentOperation - previous
            break;
        case "*":
            result = curentOperation * previous
            break;
        case "/":
            result = curentOperation / previous
            break;
    }

    curentOperant = result.toString()
    operation = "";
    previousInput = ""
    previusOperation.innerHTML = previousInput;
    operations.innerHTML = operation
    inputs.innerHTML = curentOperant
}

function increment() {
    if (curentOperant === "") return;
    let toggleSign = parseInt(inputs.innerHTML)
    toggleSign = -toggleSign
    curentOperant = toggleSign
    inputs.innerHTML = curentOperant.toString()
}

const removeBtnsValue = () => {
    if (previousInput === "") {
        operation = operation.slice(0, -1)
        operations.innerHTML = operation

        if (operation === "") {
            curentOperant = curentOperant.slice(0, -1)
            inputs.innerHTML = curentOperant === "" ? "0" : curentOperant
        }
    }
    else {
        previousInput = previousInput.slice(0, -1)
        previusOperation.innerHTML = previousInput === "" ? "" : previousInput
    }
}

function renderNumberInout(numbers) {
    switch (numbers) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
        case ",":
        case ".":
            addBtnsValue(numbers)
            break;
        case "AC":
            clearScreen()
            break;
        case "C":
            clearScreen()
            break;
        case "DE":
            removeBtnsValue()
            break;
        case "+":
        case "-":
        case "*":
        case "/":
            sumNumber(numbers)
            break;
        case "+/-":
            increment()
            break;
        case "%":
            Primes()
            break;
        case "=":
            equals()
            break;
    }
}


function clearScreen() {
    curentOperant = "";
    inputs.innerHTML = "0"
    operation = ""
    operations.innerHTML = operation
    previousInput = ""
    previusOperation.innerHTML = previousInput
}

function renderBtns() {
    calculatorConstrols.innerHTML = ""
    btns.forEach((element, index) => {
        const button = document.createElement("button");
        button.classList.add('button')
        button.innerHTML = element
        button.addEventListener("click", HandleClickBtns)
        calculatorConstrols.appendChild(button)
    })
}

renderBtns()

const arrow = document.querySelectorAll('.arrow i')
const mount = document.querySelector('.mount');
const year = document.querySelector('.year')
const days = document.getElementById('days')
const calendarBody = document.getElementById('calculator-body')

let curentdates = new Date();
let curentMount = curentdates.getMonth();
let curentDay = curentdates.getDay();
let curentYear = curentdates.getFullYear();
let curentDate = curentdates.getDate();
let dateIndex = null;

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dayArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function chekActiveClass(index) {
    return index === curentdates.getDate() && curentMount === new Date().getMonth()
        && curentYear === new Date().getFullYear() ? '"dates active"' : '"dates"'
}

const selectDay = (index) => {
    curentdates.setDate(index)
    renderCalendar()

    document.querySelectorAll('.dates').forEach((element) => {
        element.classList.remove('fade-in')
        element.style.animationDelay = `none`;
    })
}

function renderCalendar() {
    mount.innerHTML = `${monthNames[curentMount]} `
    year.innerHTML = `${curentYear}`
    let mountsDate = new Date(curentYear, curentMount + 1, 0).getDate()
    let start = new Date(curentYear, curentMount, 1).getDay()
    let end = new Date(curentYear, curentMount + 1, mountsDate).getDay();
    let endDate = new Date(curentYear, curentMount, 0).getDate();
    let htlm1 = "";
    let htlm2 = "";

    for (let i = 0; i < dayArr.length; i++) {
        htlm1 += `<div class=${`${curentDay === i ? 'active' : 'day'}`}>${dayArr[i]}</div>`
    }
    for (let i = start; i > 0; i--) {
        htlm2 += `<div class="dates inactive">${endDate - i + 1}</div>`;
    }
    for (let i = 1; i <= mountsDate; i++) {
        let activeClass = chekActiveClass(i)
        htlm2 += `<div onclick="selectDay(` + i + `)" class=${activeClass}>${i}</div>`;
    }
    for (let i = 1; i < end; i++) {
        htlm2 += `<div class="dates mounstartend">${i}</div>`;
    }
    days.innerHTML = htlm1
    calendarBody.innerHTML = htlm2
    document.querySelectorAll('.dates').forEach((element, index) => {
        element.style.animationDelay = `${index * 0.02}s`;
        element.classList.add('fade-in');
        element.addEventListener("click", () => {
            document.querySelector('.activeBorder')?.classList.remove('activeBorder')
            element.classList.add('activeBorder')
        })
    })
}

renderCalendar();

const NextCalendar = () => {
    curentMount++;
    if (curentMount > 11) {
        curentMount = 0;
        curentYear++
    }
    renderCalendar()
}

const PrevCalendar = () => {
    curentMount--;
    if (curentMount < 0) {
        curentMount = 11
        curentYear--
    }
    renderCalendar()
}

arrow.forEach((icon) => {
    icon.addEventListener("click", () => {
        icon.classList.contains('fa-arrow-right') ? NextCalendar() : PrevCalendar()
    })
})


const forms = document.getElementById('add-todo')
const todobody = document.getElementById('todo-body')
const clear = document.querySelector('.clear');
const clearCompleted = document.querySelector('.clear-completed')
const taskInput = document.getElementById('input')
const childprogress = document.querySelector('.child-progress')
const todolength = document.querySelector('.todo-length')
let editTodo = null;
let progressCompleted = localStorage.getItem('progressCompleted') || 0
let completedTask = JSON.parse(localStorage.getItem('completedTask')) || [];
let todo = JSON.parse(localStorage.getItem('todos')) || []
childprogress.style.width = `${progressCompleted}%`;
let draggedIndex = null;

function showCountTaks() {
    let completedtasklength = todo.filter((element) => element.completed).length
    todolength.innerHTML = `${todo.length} / ${completedtasklength}`
}

showCountTaks()

const updateProgress = () => {
    progressCompleted = (completedTask.length / todo.length) * 100
    childprogress.style.width = `${progressCompleted}%`
    childprogress.style.transition = 'width 0.3s ease';
    localStorage.setItem('progressCompleted', progressCompleted)
}

const addtask = (event) => {
    event.preventDefault()

    if (taskInput.value.trim() === "") return;
    if (editTodo !== null) {
        updateTodoTask()
    }
    else {
        let newTaks = {
            id: todo.length + 1,
            text: taskInput.value,
            completed: false
        }
        todo.push(newTaks)
        localStorage.setItem('todos', JSON.stringify(todo))
        updateProgress()
        showTask()
        showCountTaks()
        taskInput.value = "";
        editTodo = null
    }
}

function updateTodoTask() {
    todo.forEach((element) => {
        if (element.id === editTodo.id) {
            element.text = taskInput.value
            localStorage.setItem('todos', JSON.stringify(todo))
            showTask()
            editTodo = null
            taskInput.value = ""
        }
    })
}

document.onload = showTask()

const editTask = (id) => {
    const editTask = todo.find((element) => element.id === id)
    if (editTask) {
        editTodo = editTask
        taskInput.value = editTodo.text
    }
}

const clearTodo = () => {
    todo = [];
    completedTask = []
    localStorage.setItem('completedTask', JSON.stringify(completedTask))
    localStorage.setItem('todos', JSON.stringify(todo))
    progressCompleted = 0
    childprogress.style.width = `${progressCompleted}%`;
    childprogress.style.transition = 'none';
    localStorage.setItem('progressCompleted', progressCompleted)
    showCountTaks()
    showTask()
    window.location.reload()
}


const DeleteCompleted = (index) => {
    completedTask.splice(index, 1)
    todo.splice(index, 1)
    localStorage.setItem('completedTask', JSON.stringify(completedTask))
    localStorage.setItem('todos', JSON.stringify(todo))
    showCountTaks()
    updateProgress()
    window.location.reload()
}

const ToggleCompleted = (index) => {
    todo[index].completed = !todo[index].completed
    completedTask = todo.filter((element) => element.completed)
    localStorage.setItem('todos', JSON.stringify(todo))
    localStorage.setItem('completedTask', JSON.stringify(completedTask))
    showTask()
    showCountTaks()
    updateProgress()
}

const filterTaskCompleted = () => {
    todo = todo.filter((element) => !element.completed)
    completedTask = todo.filter((element) => element.completed)
    localStorage.setItem('completedTask', JSON.stringify(completedTask))
    localStorage.setItem('todos', JSON.stringify(todo))
    showTask()
    showCountTaks()
    updateProgress()
}

clearCompleted.addEventListener("click", filterTaskCompleted)

clear.addEventListener("click", clearTodo)

function dragStart(event, index) {
    draggedIndex = index
}

function dragOver(event) {
    event.preventDefault()
}

function dragDrop(event, index) {
    event.preventDefault();
    [todo[draggedIndex], todo[index]] = [todo[index], todo[draggedIndex]]
    localStorage.setItem('todos', JSON.stringify(todo))
    showTask()
}

function showTask() {
    var list = "";

    todo.forEach((element, index) => {
        list += `
            <div 
            data-index=${index}
            ondrop="dragDrop(event,`+ index + `)"
            ondragover="dragOver(event)"
            ondragstart="dragStart(event,`+ index + `)"
            
             class="task-item">
                <div class="task-text">
                <div onclick="ToggleCompleted(`+ index + `)" class="toggle-completed"></div>
                    <p class=${`${element.completed ? 'completed' : ''}`}>${element.text}</p>
                </div>
                <div class="actions">
                    <button onclick="editTask(`+ element.id + `)" class="edit">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                       <button onclick="DeleteCompleted(`+ index + `)" class="remove">
                       <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
    })
    todobody.innerHTML = list
}

forms.addEventListener("submit", addtask)

const taskconteiner = document.querySelector('.task-conteiner')
const taskcontent = document.querySelector('.task-content')

let test = [
    {
        id: 1, tilte: "Թեստ 1", true: "Բուենոս Այրես",
        options: ["Չիլի", "Բուենոս Այրես", "Սան Մարինո", "Սան Ֆրանսիսկո"],
        text: "Վորն է Արգենտինայի մայրաքաղաքը", time: "0:25"
    },
    {
        id: 2, tilte: "Թեստ 2", true: "Հռոմ",
        options: ["Հռոմ", "Լիսաբոն", "Միլան", "Մադրիդ"],
        text: "Վորն է Իտալիայի մայրաքաղաքը", time: "0:25"
    },
    {
        id: 3, tilte: "Թեստ 3", true: "Լոնդոն",
        options: ["Ռեկյավիկ", "Դուբլին", "Մանչեստեր", "Լոնդոն"],
        text: "Վորն է Անգլիայի մայրաքաղաքը", time: "0:40"
    },
]

let activetaskIndex = 0;

function updateTestDuration() {
    let score = 0;
    let timeleft = 0;
    let htlm = "";
    var interval;
    let timepart = test[activetaskIndex].time.split(":")
    const [minutes, secundes] = timepart
    const secund = parseInt(minutes) * 60 + parseInt(secundes);

    const checkTest = (element, index) => {
        if (test[activetaskIndex].true === index) {
            element.classList.add('correct')
            score++
        }
        else {
            document.querySelectorAll('.task-options .task-item').forEach((item, ind) => {
                if (test[activetaskIndex].true === item.innerHTML) {
                    item.classList.add('correct')
                }
                else {
                    element.classList.add('error')
                }
            })
        }
        setTimeout(() => {
            if (activetaskIndex >= test.length - 1) {
                activetaskIndex = 0
            }
            else {
                activetaskIndex++
            }
            progress.style.width = '0%'
            updateTestDuration()
        }, 2000);
        clearInterval(interval);
    }

    htlm += `
        <div class="curentTask">
            <div class="task-result">
                <div class="progress-task">
                <div class="progress"></div>
            </div>
            <div class="timeLeft">${test[activetaskIndex].time}</div>
            </div>
            <div class="test-task-content">
            <h1>${test[activetaskIndex].tilte}</h1>
            <p>${test[activetaskIndex].text}</p>
            <div class="task-options">
                <div class="task-item">${test[activetaskIndex].options[0]}</div>
                <div class="task-item">${test[activetaskIndex].options[1]}</div>
                <div class="task-item">${test[activetaskIndex].options[2]}</div>
                <div class="task-item">${test[activetaskIndex].options[3]}</div>
            </div>
            </div>
        </div>
    `
    taskcontent.innerHTML = htlm
    let progress = document.querySelector('.progress-task .progress')
    timeleft = secund;

    interval = setInterval(() => {
        timeleft--
        const progressWidth = (timeleft / secund) * 100;
        progress.style.width = `${progressWidth}%`;

        if (timeleft <= 0) {
            setTimeout(() => {
                progress.style.width = '0%'
                if (activetaskIndex >= test.length - 1) {
                    activetaskIndex = 0
                }
                else {
                    activetaskIndex++
                }
                updateTestDuration();
            }, 1000);
            clearInterval(interval)
        }
        const timer = `${Math.floor(timeleft / 60)} : ${String(timeleft % 60).padStart(2, "0")}`
        document.querySelector('.timeLeft').innerHTML = timer
    }, 800);

    document.querySelectorAll('.task-options .task-item').forEach((element, index) => {
        element.addEventListener("click", () => checkTest(element, test[activetaskIndex].options[index]));
    })
}
updateTestDuration()
