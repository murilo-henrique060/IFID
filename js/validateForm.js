function validName(id="") {
    var name = document.getElementById("name" + id).value;
    
    if (name.length == 0) {
        return [false, "Preencha este campo."];
    } else {
        return [true, ""];
    }
}

function validSchoolId(id="") {
    var school_id = document.getElementById("school-id" + id).value;
    
    if (school_id.length == 0) {
        return [false, "Preencha este campo."];

    } else if (school_id.length < 11) {
        return [false, "O número de matrícula deve ter 11 números."];

    } else {
        return [true, ""];
    }
}

function validCourse(id="") {
    var course = document.getElementById("course" + id).value;

    if (course == "Selecione...") {
        return [false, "Selecione uma opção."];

    } else {
        return [true, ""];
    }
}

function validateName(id="") {
    var valid = validName(id);
    var name = document.getElementById("name" + id);
    var feedback = document.getElementById("name-feedback" + id);

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

function validateSchoolId(id="") {
    var valid = validSchoolId(id);
    var school_id = document.getElementById("school-id" + id);
    var feedback = document.getElementById("school-id-feedback" + id);

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

function validateCourse(id="") {
    var valid = validCourse(id);
    var course = document.getElementById("course" + id);
    var feedback = document.getElementById("course-feedback" + id);

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
        valid = validateName(i) && valid;
        valid = validateSchoolId(i) && valid;
        valid = validateCourse(i) && valid;
    }

    return valid;
}