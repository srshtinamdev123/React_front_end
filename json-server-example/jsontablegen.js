
function jsonTableGeneration(){
    // Use fetch API to get the data from JSON Server
    fetch("http://localhost:3000/users")
    .then(response => response.json())
    .then(data => {
        // Get the table body element
        let tbody = document.getElementById("usertable")
                    .getElementsByTagName("tbody")[0];
        // Loop through the data array
        for(let user of data){
            // Create a new table row element
            let tr = document.createElement('tr');
            // Create four table cell elements for each user property
            let td_id = document.createElement('td');
            let td_name = document.createElement('td');
            let td_email = document.createElement('td');
            let td_phone = document.createElement('td');
            // Set the text content of each table cell to the user property value
            td_id.textContent = user.id;
            td_name.textContent = user.name;
            td_email.textContent = user.email;
            td_phone.textContent = user.phone;
            // Append the table cells to the table row
            tr.appendChild(td_id);
            tr.appendChild(td_name);
            tr.appendChild(td_email);
            tr.appendChild(td_phone);
            // Append the table row to the table body
            tbody.appendChild(tr);
        }
    })
    .catch(error => {
        // Handle any errors
        console.error(error);
    })
}
