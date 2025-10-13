import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-database.js"

const firebaseConfig = {
    databaseURL : "https://leads-tracker-app-f054d-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const referenceInDB = ref(database, "leads")
const inputEl = document.getElementById('input-element')
const inputBtn = document.getElementById('input-btn')
const ulElement = document.getElementById('ul-element')
const deleteBtn = document.getElementById('delete-btn')


function render(leads) {
    let listItems = ""

    for (let i = 0; i < leads.length; i++){

        listItems += `
        <li>
            <a target = '_blank' href='${leads[i]}'>
                ${leads[i]} 
            </a>
        </li>`
    }
    ulElement.innerHTML = listItems
}

onValue(referenceInDB, (snapshot) => {
    const doesSnapshotExist = snapshot.exists()
    if (doesSnapshotExist) {
        const snapshotValues = snapshot.val()
        const leads = Object.values(snapshotValues)
        render(leads)
    }
})

inputBtn.addEventListener('click', () => {
    push(referenceInDB , inputEl.value)
    inputEl.value = ''
})

deleteBtn.addEventListener('dblclick', () => {
    remove(referenceInDB)
    ulElement.innerHTML = ""
})
