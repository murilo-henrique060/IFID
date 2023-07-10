students = new Map();
selecteds = new Set();

function showAddStudent() {
    body = document.querySelector("body");

    template = document.getElementById("add-student-template").content.cloneNode(true);

    body.appendChild(template);
}

function closeAddStudent() {
    body = document.querySelector("body");

    add_student_background = document.getElementById("add-student-background");
    add_student_background.remove();

    add_student = document.getElementById("add-student");
    add_student.remove();
}

function showStudents() {
    var studentsTbody = document.getElementById("students");
    studentsTbody.innerHTML = "";

    if (students.size == 0) {
        template = document.getElementById("row-empty-template").content.cloneNode(true);
        studentsTbody.appendChild(template);
        return;
    }

    var template = document.getElementById("row-template");

    for (student of students.values()) {
        var tr = template.content.querySelector("tr");
        tr.id = student.id;

        tr.onclick = "checkStudent(" + student.id + ")";
        tr.ondblclick = "selectStudent(" + student.id + "); editStudent(" + student.id + ");";
        
        var td = template.content.querySelectorAll("td");

        td[0].innerHTML = student.name;
        td[1].innerHTML = student.school_id;
        td[2].innerHTML = student.course;
        td[3].innerHTML = student.filename;

        var clone = document.importNode(template.content, true);
        studentsTbody.appendChild(clone);
    }
}