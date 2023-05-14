function addRow(tableID) {
    var table = document.getElementById(tableID);

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "check[]";
    row.insertCell(0).appendChild(checkbox);

    var name = document.createElement("input");
    name.type = "text";
    name.name = "name[]";
    name.required = true;
    row.insertCell(1).appendChild(name);

    var matricula = document.createElement("input");
    matricula.type = "text";
    matricula.name = "matricula[]";
    matricula.pattern = "[0-9]{11}";
    matricula.title = "A matrícula é formada por 11 números";
    matricula.required = true;
    row.insertCell(2).appendChild(matricula);

    var curso = document.createElement("input");
    curso.setAttribute("list", "cursos");
    curso.name = "curso[]";
    curso.required = true;
    row.insertCell(3).appendChild(curso);

    var modalidade = document.createElement("input");
    modalidade.setAttribute("list", "modalidade");
    modalidade.name = "modalidade[]";
    modalidade.required = true;
    row.insertCell(4).appendChild(modalidade);

    var foto = document.createElement("input");
    foto.type = "file";
    foto.name = "foto[]";
    foto.accept = "image/*";
    row.insertCell(5).appendChild(foto);
}

function deleteRow(tableID) {
    var table = document.getElementById(tableID);
	var rowCount = table.rows.length;

    for(var i = 1; i<rowCount; i++) {
        var row = table.rows[i];
        var chkbox = row.cells[0].childNodes[0];

        if(null != chkbox && true == chkbox.checked) {
            if(rowCount <= 2) {
                alert("Você não pode deletar todas as linhas da tabela!");
                break;
            }
            table.deleteRow(i);
            rowCount--;
            i--;
        }
    }
}