students = new Map();
selecteds = new Set();
max_id = 0;

function showAddStudent() {
    body = document.querySelector("body");

    template = document.getElementById("add-student-template").content.cloneNode(true);

    body.appendChild(template);
}

function submitAddStudent() {
    var valid = validateForm();

    if (valid) {
        addStudent();

        showStudents();

        closeAddStudent();
    }
}

function closeAddStudent() {
    add_student_background = document.getElementById("add-student-background");
    add_student_background.remove();

    add_student = document.getElementById("add-student");
    add_student.remove();
}

function showRemoveStudents() {
    body = document.querySelector("body");

    template = document.getElementById("remove-students-template");

    template.content.getElementById("remove-students-selected-number").innerHTML = selecteds.size;

    body.appendChild(template.content.cloneNode(true));
}

function submitRemoveStudents() {
    removeStudents();

    showStudents();

    closeRemoveStudents();
}

function closeRemoveStudents() {
    remove_students_background = document.getElementById("remove-students-background");
    remove_students_background.remove();

    remove_students = document.getElementById("remove-students");
    remove_students.remove();
}

function showStudents() {
    var studentsTbody = document.getElementById("students");
    studentsTbody.innerHTML = "";

    if (students.size == 0) {
        template = document.getElementById("row-empty-template").content.cloneNode(true);
        studentsTbody.appendChild(template);
    } else {
        var template = document.getElementById("row-template");

        for (student of students.values()) {
            tr = template.content.querySelector("tr");

            tr.id = student.id;

            if (selecteds.has(student.id)) {
                tr.classList.add("table-active");
            } else {
                tr.classList.remove("table-active");
            }
            
            var td = template.content.querySelectorAll("td");

            td[0].innerHTML = student.name;
            td[1].innerHTML = student.school_id;
            td[2].innerHTML = student.course;
            td[3].innerHTML = student.filename;

            studentsTbody.appendChild(template.content.cloneNode(true));
        }

        verifySelecteds();
    }
}