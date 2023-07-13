function submitForm() {
    const form = document.createElement("form");
    form.method = "POST";
    form.action = "./generateCards.php";

    const size = document.createElement("input");
    size.type = "hidden";
    size.name = "size";
    size.value = document.querySelector("input[name='size']:checked").value;
    form.appendChild(size);

    const theme = document.createElement("input");
    theme.type = "hidden";
    theme.name = "theme";
    theme.value = document.querySelector("select[name='theme']").value;
    form.appendChild(theme);

    var name = document.createElement("input");
    name.type = "hidden";
    name.name = "name[]";

    var school_id = document.createElement("input");
    school_id.type = "hidden";
    school_id.name = "school-id[]";

    var course = document.createElement("input");
    course.type = "hidden";
    course.name = "course[]";

    var photo = document.createElement("input");
    photo.type = "hidden";
    photo.name = "photo[]";

    for (student of students.values()) {
        nameClone = name.cloneNode();
        nameClone.value = student.name;
        form.appendChild(nameClone);

        school_idClone = school_id.cloneNode();
        school_idClone.value = student.school_id;
        form.appendChild(school_idClone);

        courseClone = course.cloneNode();
        courseClone.value = student.course;
        form.appendChild(courseClone);

        photoClone = photo.cloneNode();
        photoClone.value = student.file;
        form.appendChild(photoClone);
    }

    document.body.appendChild(form);
    form.submit();
}