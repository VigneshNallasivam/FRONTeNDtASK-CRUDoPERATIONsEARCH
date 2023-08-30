//ARRAY OF DATA
const dataArray = [
    {
        "id": 1,
        "name": "Vignesh",
        "gender": "male",
        "company": {
            "name": "TCS",
            "location": "Bangalore"
        }
    },
    {
        "id": 2,
        "name": "Saranya",
        "gender": "female",
        "company": {
            "name": "Cognizant",
            "location": "Coimbatore"
        }
    },
    {
        "id": 3,
        "name": "Vinith",
        "gender": "male",
        "company": {
            "name": "Wipro",
            "location": "Pune"
        }
    },
    {
        "id": 4,
        "name": "Yamuna",
        "gender": "female",
        "company": {
            "name": "IZN",
            "location": "Hyderabad"
        }
    },
    {
        "id": 5,
        "name": "Sathish",
        "gender": "male",
        "company": {
            "name": "IZN",
            "location": "Bangalore"
        }
    },
    {
        "id": 6,
        "name": "Kumar",
        "gender": "male",
        "company": {
            "name": "Infosys",
            "location": "Chennai"
        }
    },
    {
        "id": 7,
        "name": "Padhmini",
        "gender": "female",
        "company": {
            "name": "HCL",
            "location": "Pune"
        }
    },
    {
        "id": 8,
        "name": "Raghav",
        "gender": "male",
        "company": {
            "name": "Accenture",
            "location": "Hyderabad"
        }
    },
    {
        "id": 9,
        "name": "Ramana",
        "gender": "male",
        "company": {
            "name": "Dell",
            "location": "Kolkata"
        }
    },
    {
        "id": 10,
        "name": "Priyadharshini",
        "gender": "female",
        "company": {
            "name": "Zoho",
            "location": "Mumbai"
        }
    },
];

//REFRESH PAGE
function refresh() {
    location.reload();
}

//DISPLAYING TABLE
function show(dataArray, checking) {
    document.querySelector("thead").innerHTML = `<tr>
                                                     <th>SELECT</th>
                                                     <th>ID</th>
                                                     <th>NAME</th>
                                                     <th>GENDER</th>
                                                     <th>COMPANY</th>
                                                     <th>LOCATION</th>
                                                </tr>`;

    const checkboxAttribute = checking ? "disabled" : "";
    console.log(typeof(checkboxAttribute));
    for (let num = 0; num < dataArray.length; num++) {
        document.querySelector("tbody").innerHTML += `<tr>
                                                       <td><input id="checker" type="checkbox" ${checkboxAttribute}></td>
                                                       <td>${dataArray[num].id} </td>
                                                       <td>${dataArray[num].name} </td>
                                                       <td>${dataArray[num].gender} </td>
                                                       <td>${dataArray[num].company.name}</td>
                                                       <td>${dataArray[num].company.location}</td>
                                                     </tr>`
    }
}
show(dataArray, true);

//ClEARENCE OF TABLE FOR EVERY UPDATE
function updateTable() {
    document.querySelector("tbody").innerHTML = "";
}

//COUNT FOR MALE
function maleCount(dataArray) {
    let count = 0;
    for (let i = 0; i < dataArray.length; i++) {
        if (dataArray[i].gender === "male") {
            count++;
        }
    }
    alert("Male Count Is : " + count);
}

//COUNT FOR FE-MALE
function femaleCount(dataArray) {
    let count = 0;
    for (let i = 0; i < dataArray.length; i++) {
        if (dataArray[i].gender === "female") {
            count++;
        }
    }
    alert("Female Count Is : " + count);
}

//SINGLE ID DELETION
function singleIdDeletion() {
    const targetIdStr = prompt("Enter the ID of the object you want to delete:");
    if (targetIdStr !== null) {
        const targetId = parseInt(targetIdStr);
        deleteById(dataArray, targetId);
    } else {
        console.log("Deletion cancelled.");
    }
}

function deleteById(dataArray, targetId) {
    const index = dataArray.findIndex(item => item.id === targetId);
    if (index !== -1) {
        dataArray.splice(index, 1);
    }
    else {
        console.error("Index is -1");
    }
    const updatedJson = JSON.stringify(dataArray, null, 2);
    console.log(updatedJson);
    updateTable();
    show(dataArray,true);
}



//SEARCH BY KEYWORD
function searching() {
    const keyword = prompt("Enter Content U Want To Search :");
    const maleKeyword = "male";
    const femaleKeyword = "female";
    const search = keyword || maleKeyword || femaleKeyword;
    searchByKeyword(search);
}

function searchByKeyword(search) {
    search = search.toLowerCase();
    const filteredData = dataArray.filter(item =>
        (item.name.toLowerCase().includes(search)) ||
        (item.id.toString() === search) ||
        (item.gender.toLowerCase() === search) ||
        (item.company.name.toLowerCase().includes(search)) ||
        (item.company.location.toLowerCase().includes(search))
    );
    console.log(filteredData);
    if (filteredData.length > 0) {
        updateTable();
        show(filteredData, true);
    } else {
        alert("Oops.. Name Is Unavailable");
    }
}


//CHECKBOX DELETE
// function deleteSelectedRows() {
//     const selectedCheckboxes = document.querySelectorAll('tbody input[type="checkbox"]:checked');

//     if (selectedCheckboxes.length === 0) {
//         console.log("No items selected for deletion.please click 'EDIT' for checkbox selection");
//     }

//     const deletedIds = Array.from(selectedCheckboxes).map(checkbox => parseInt(checkbox.parentElement.parentElement.querySelector('td:nth-child(2)').textContent));
//     for (const targetId of deletedIds) {
//         deleteById(targetId);
//     }
// }

// function deleteById(targetId) {
//     const index = dataArray.findIndex(item => item.id === targetId);
//     if (index !== -1) {
//         dataArray.splice(index,1);
//     }
//     const updatedJson = JSON.stringify(dataArray, null, 2);
//     console.log(updatedJson);
//     updateTable();
//     show(dataArray, false);
// }


//EDIT BUTTON FUNCTIONALITY
function checkBoxEnableOrDisable(checking) {
    // const checkboxAttribute = checking ? "disabled" : "";
    // document.getElementById("checker").disabled = checkboxAttribute;
    // updateTable();
    // show(dataArray, checkboxAttribute);
    // deleteSelectedRows();
    alert("Sry..! No Functionality Written Until now..!!")
}