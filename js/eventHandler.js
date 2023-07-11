function selectStudent(studentId) {
    var tr = document.getElementById(studentId);

    tr.classList.add("table-active");
    selecteds.add(parseInt(studentId));

    verifySelecteds();
}

function selectAllStudents() {
    var students = document.getElementById("students").children;

    for (student of students) {
        student.classList.add("table-active");
        selecteds.add(parseInt(student.id));
    }

    verifySelecteds();
}

function unselectAllStudents() {
    var students = document.getElementById("students").children;

    for (student of students) {
        student.classList.remove("table-active");
        selecteds.delete(parseInt(student.id));
    }

    verifySelecteds();
}

function checkStudent(studentId) {
    var tr = document.getElementById(studentId);

    if (selecteds.has(studentId)) {
        tr.classList.remove("table-active");
        selecteds.delete(parseInt(studentId));
    } else {
        tr.classList.add("table-active");
        selecteds.add(parseInt(studentId));
    }

    verifySelecteds();
}

function verifySelecteds() {
    if (selecteds.size == 0) {
        document.getElementById("selecteds-count").classList.add("invisible");
        document.getElementById("selecteds-number").innerHTML = "";

        document.getElementById("btn-remove-selected").classList.add("disabled");
        document.getElementById("btn-edit-selected").classList.add("disabled");

    } else {
        document.getElementById("selecteds-count").classList.remove("invisible");
        document.getElementById("selecteds-number").innerHTML = selecteds.size;
        
        document.getElementById("btn-remove-selected").classList.remove("disabled");
        document.getElementById("btn-edit-selected").classList.remove("disabled");
    }
}