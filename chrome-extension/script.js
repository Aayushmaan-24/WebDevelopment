let myLeads = []
const inputEl = document.getElementById('input-element')
const inputBtn = document.getElementById('input-btn')
const ulElement = document.getElementById('ul-element')
const deleteBtn = document.getElementById('delete-btn')
const saveBtn = document.getElementById('save-btn')
const leadsFromStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromStorage) {
    myLeads = leadsFromStorage
    render(myLeads)
}

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

inputBtn.addEventListener('click', () => {
    myLeads.push(inputEl.value)
    inputEl.value = ''
    localStorage.setItem("myLeads" , JSON.stringify(myLeads))
    render(myLeads)
})

deleteBtn.addEventListener('dblclick', () => {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

saveBtn.addEventListener("click", () => {

    chrome.tabs.query({active: true, currentWindow: true}, (tabs)=>{
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
    
    
})