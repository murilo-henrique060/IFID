function submitForm() {
    var xhr = new XMLHttpRequest();

    var formData = new FormData();

    for (student of students.values()) {
        formData.append("name[]", student.name);
        formData.append("school-id[]", student.school_id);
        formData.append("course[]", student.course);
        formData.append("photo[]", student.file);
    }

    xhr.open("POST", "response.php", true);
    xhr.send(formData);
}