function loadUsers() {
    fetch("https://randomuser.me/api/?results=12")
        .then((res) => res.json())
        .then((data) => displayData(data.results));
}

loadUsers();

function displayData(users) {
    // Get the container
    const userContainer = document.getElementById("users-container");

    for (const user of users) {
        // Create single item div
        const userDiv = document.createElement("div");
        userDiv.classList.add("user");
        // Set the data
        userDiv.innerHTML = `
            <div class="image">
                <img src="${user.picture.large}" alt="" />
            </div>
            <div class="content">
                <p><b>Name:</b> ${user.name.title} ${user.name.first} ${user.name.last}</p>
                <p><b>Email:</b> ${user.email}</p>
                <p><b>Phone:</b> ${user.phone}</p>
                <p><b>City:</b> ${user.location.city}</p>
                <p><b>Country:</b> ${user.location.country}</p>
            </div>
        `;

        // appendChild
        userContainer.appendChild(userDiv);
    }
}