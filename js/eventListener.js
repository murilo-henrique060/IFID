function selectStudent(studentId) {
    var tr = document.getElementById(studentId);

    tr.classList.remove("selected");
    selecteds.delete(studentId);
}

function checkStudent(studentId) {
    var tr = document.getElementById(studentId);

    if (selecteds.has(studentId)) {
        tr.classList.remove("selected");
        selecteds.delete(studentId);
    } else {
        tr.classList.add("selected");
        selecteds.add(studentId);
    }
}

function verifySelecteds() {
    if (selecteds.size == 0) {
        
    }
}