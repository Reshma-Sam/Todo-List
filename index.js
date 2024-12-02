// Assigning value to Variables

const taskInput = document.getElementById("taskInput")
const taskList = document.getElementById("taskList")

//Adding function for inputting task

function addTask() {
    if (taskInput.value === "" || taskInput.value === " ") {
        alert("You must write something")                   // If we enter nothing or space it shows some alert
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = taskInput.value
        taskList.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    taskInput.value = ""
    saveData()
}

taskList.addEventListener("click", function (evt) {
    if (evt.target.tagName === "LI") {
        evt.target.classList.toggle("checked")
        saveData()
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
}, false)

// Storing the data into browser

function saveData() {
    localStorage.setItem("data", taskList.innerHTML)
}

// Displaying the saved data

function showTask() {
    taskList.innerHTML = localStorage.getItem("data")
}
//showTask()

// Function for Filter tasks

function showAll() {
    showTask()
}
function showActive() {

    showTask()
    const checked = document.getElementsByClassName("checked")
    var i = 0;
    while(checked.length > 0) {
      checked[i].remove()
    }
}

    // showTask()
    // var complete = document.getElementsByTagName("li")
    // var completeLength = complete.length-1
    // for (i = 0; i <= completeLength; i++) {
    //     if (complete[i].classList.contains("checked")) {
    //         complete[i].remove()
    //     }
    // }

function showComplete() {

    showTask()
    const all = document.getElementsByTagName("li")
    i = 0
    while(all.length > 0) {
      if(all[i].classList.contains("checked")){
        i++
      } else {
        all[i].remove()
      }
    }
}


// const complete=document.getElementsByClassName("checked")
// taskList.appendChild(li)

// showTask()
// var compv= document.getElementsByTagName("li")
// console.log(compv)

// console.log(compv.innerHTML)
// for(let i=0;i<=compv.length;i++) {
//     if (!compv.classList.contains("checked")) {
//         compv.remove()
//     }
// }

// //showTask()
// var completeTask=document.getElementsByClassName("checked")
// //console.log(a)

// for(let i=0;i<=completeTask.length-1;i++) {
//     //console.log(completeTask[i])
//     console.log(completeTask[i].innerHTML)
//     let completed=completeTask[i].innerHTML
//     let li = document.createElement("li")
//     taskList.appendChild(li)
// }


