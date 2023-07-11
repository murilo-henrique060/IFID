function addStudent() {
    var name = document.getElementById("name").value;
        var school_id = document.getElementById("school-id").value;
        var course = document.getElementById("course").value;
        var file = document.getElementById("photo").files[0];
        var filename = document.getElementById("photo").value;

        var student = {
            id: max_id++,
            name: name,
            school_id: school_id,
            course: course,
            file: file,
            filename: filename == "" ? "Nenhum arquivo selecionado" : filename
        };

        students.set(student.id, student);
}

function removeStudents() {
    for (id of selecteds.values()) {
        students.delete(id);
    }

    selecteds.clear();
}