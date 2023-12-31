// JavaScript to handle form submission and clearing the form
document.getElementById("registration-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const website = document.getElementById("website").value;
    const imageLink = document.getElementById("image-link").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const skills = Array.from(document.querySelectorAll('input[name="skills"]:checked')).map(skill => skill.value);

    // Create a student object
    const student = {
        name,
        email,
        website,
        imageLink,
        gender,
        skills
    };

    // Add student to the list
    addStudentToList(student);

    // Clear the form
    clearForm();
});

function addStudentToList(student) {
    const studentList = document.getElementById("student-list");
    const studentDiv = document.createElement("div");
    studentDiv.className = "student-box";
    
    studentDiv.innerHTML = `
        <div class="student-details">
            <h3>${student.name}</h3>
            <p>Email: ${student.email}</p>
            <p>Website: <a href="${student.website}">${student.website}<a/></p>
            <p>Gender: ${student.gender}</p>
            <p>Skills: ${student.skills.join(", ")}</p>
        </div>
        <div class="student-image">
            <img src="${student.imageLink}" alt="${student.name}">
        </div>
    `;
    studentList.appendChild(studentDiv);
}

function clearForm() {
    document.getElementById("registration-form").reset();
}