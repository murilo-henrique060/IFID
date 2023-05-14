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

    const cursos = [
        "Técnico em Agente Comunitário de Saúde",
        "Técnico em Agrimensura",
        "Técnico em Aquicultura",
        "Técnico em Desenvolvimento de Sistemas",
        "Técnico em Design de Móveis e Interiores",
        "Técnico em Edificações",
        "Técnico em Eletrônica",
        "Técnico em Eletrotécnica",
        "Técnico em Estradas",
        "Técnico em Eventos",
        "Técnico em Geodésia e Cartografia",
        "Técnico em Hospedagem",
        "Técnico em Mecânica",
        "Técnico em Metalurgia",
        "Técnico em Mineração",
        "Técnico em Pesca",
        "Técnico em Química",
        "Técnico em Saneamento",
        "Técnico em Segurança do Trabalho",
        "Técnico em Telecomunicação",
        "Técnico em Turismo"
    ]

    var curso = document.createElement("select");
    curso.name = "curso[]";
    curso.required = true;

    for (var option of cursos) {
        var o = document.createElement("option");
        o.text = option;
        curso.options.add(o);
    }

    row.insertCell(3).appendChild(curso);

    var botao = document.createElement("label");
    botao.className = "file-btn";

    var texto = document.createElement("span");
    texto.innerText = "Selecione uma imagem";
    botao.appendChild(texto);

    var foto = document.createElement("input");
    foto.type = "file";
    foto.name = "foto[]";
    foto.accept = "image/*";

    botao.appendChild(foto);
    row.insertCell(4).appendChild(botao);

    foto.addEventListener("change", ()=>{
        let nome = "Selecione uma imagem";

        if (foto.files.length > 0) {
            nome = foto.files[0].name;
        }

        foto.parentElement.getElementsByTagName("span")[0].innerText = nome;
    })
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