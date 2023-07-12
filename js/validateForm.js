function validName(id="name") {
    var name = document.getElementById(id).value;
    
    if (name.length == 0) {
        return [false, "Preencha este campo."];
    } else {
        return [true, ""];
    }
}

function validSchoolId(id="school_id") {
    var school_id = document.getElementById(id).value;
    
    if (school_id.length == 0) {
        return [false, "Preencha este campo."];

    } else if (school_id.length < 11) {
        return [false, "O número de matrícula deve ter 11 números."];

    } else {
        return [true, ""];
    }
}

function validCourse(id="course") {
    var course = document.getElementById(id).value;

    if (course == "Selecione...") {
        return [false, "Selecione uma opção."];

    } else {
        return [true, ""];
    }
}

function validateName(id="name") {
    var valid = validName(id);
    var name = document.getElementById(id);
    var feedback = name.nextElementSibling;

    if (valid[0]) {
        name.classList.remove("is-invalid");
        name.classList.add("is-valid");
        
        feedback.innerHTML = "";
        feedback.hidden = true;

        return true;

    } else {
        name.classList.add("is-invalid");
        name.classList.remove("is-valid");
        
        feedback.innerHTML = valid[1];
        feedback.hidden = false;
        
        return false;
    }
}

function validateSchoolId(id="school-id") {
    var valid = validSchoolId(id);
    var school_id = document.getElementById(id);
    var feedback = school_id.nextElementSibling;

    if (valid[0]) {
        school_id.classList.remove("is-invalid");
        school_id.classList.add("is-valid");
        
        feedback.innerHTML = "";
        feedback.hidden = true;

        return true;

    } else {
        school_id.classList.add("is-invalid");
        school_id.classList.remove("is-valid");
        
        feedback.innerHTML = valid[1];
        feedback.hidden = false;
        
        return false;
    }
}

function validateCourse(id="course") {
    var valid = validCourse(id);
    var course = document.getElementById(id);
    var feedback = course.nextElementSibling;

    if (valid[0]) {
        course.classList.remove("is-invalid");
        course.classList.add("is-valid");
        
        feedback.innerHTML = "";
        feedback.hidden = true;

        return true;

    } else {
        course.classList.add("is-invalid");
        course.classList.remove("is-valid");
        
        feedback.innerHTML = valid[1];
        feedback.hidden = false;
        
        return false;
    }
}

function validateForm(id=[""]) {
    var valid = true;
    
    for (i of id) {
        valid = validateName("name" + i) && valid;
        valid = validateSchoolId("school-id" + i) && valid;
        valid = validateCourse("course" + i) && valid;
    }

    return valid;
}