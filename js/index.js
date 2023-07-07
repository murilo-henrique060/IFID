alunos = [];

function adicionar() {
    document.getElementById("body").innerHTML += 
        "<div id='adicionar-background' class='container-fluid position-fixed top-0 start-0 vw-100 vh-100' style='background-color: rgba(0, 0, 0, 0.5);z-index:1' onClick='fecharAdicionar()'></div>"+
        "<div id='adicionar' class='position-fixed top-50 start-50 translate-middle w-75 px-3 py-4 rounded-4 bg-body' style='z-index:2'>"+
            "<button type='button' class='btn-close mb-2' aria-label='Close' onClick='fecharAdicionar()'></button>" +
            "<h1 class='ms-3 mb-4'>Adicionar</h1>" +
            "<div class='mx-4'>" +
                "<div class='row mb-4'>" +
                    "<label class='col-sm-2 col-form-label'>Nome<span class='text-danger'>*</span></label>" +
                    "<div class='col-sm-10'>" +
                        "<input type='text' class='form-control' id='nome' onInput='validateNome()' required>" +
                        "<span id='nome-feedback' class='invalid-feedback' hidden>Preencha este campo</span>" +
                    "</div>" +
                "</div>" +
                "<div class='row mb-4'>" +
                    "<label class='col-sm-2 col-form-label'>Matricula<span class='text-danger'>*</span></label>" +
                    "<div class='col-sm-10'>" +
                        "<input type='text' class='form-control' id='matricula' onInput='validateMatricula()'>" +
                        "<span id='matricula-feedback-empty' class='invalid-feedback' hidden>Preencha este campo</span>" +
                        "<span id='matricula-feedback-format' class='invalid-feedback' hidden>A matrícula deve conter 11 caracteres numéricos</span>" +
                    "</div>" +
                "</div>" +
                "<div class='row mb-4'>" +
                    "<label class='col-sm-2 col-form-label'>Curso<span class='text-danger'>*</span></label>" +
                    "<div class='col-sm-10'>" +
                        "<select class='form-select' id='curso' onInput='validateCurso()'>" +
                            "<option selected disabled>Selecione...</option>" +
                            "<option value='Técnico em Agente Comunitário de Saúde'>Técnico em Agente Comunitário de Saúde</option>" +
                            "<option value='Técnico em Agrimensura'>Técnico em Agrimensura</option>" +
                            "<option value='Técnico em Aquicultura'>Técnico em Aquicultura</option>" +
                            "<option value='Técnico em Desenvolvimento de Sistemas'>Técnico em Desenvolvimento de Sistemas</option>" +
                            "<option value='Técnico em Design de Móveis e Interiores'>Técnico em Design de Móveis e Interiores</option>" +
                            "<option value='Técnico em Edificações'>Técnico em Edificações</option>" +
                            "<option value='Técnico em Eletrônica'>Técnico em Eletrônica</option>" +
                            "<option value='Técnico em Eletrotécnica'>Técnico em Eletrotécnica</option>" +
                            "<option value='Técnico em Estradas'>Técnico em Estradas</option>" +
                            "<option value='Técnico em Eventos'>Técnico em Eventos</option>" +
                            "<option value='Técnico em Geodésia e Cartografia'>Técnico em Geodésia e Cartografia</option>" +
                            "<option value='Técnico em Hospedagem'>Técnico em Hospedagem</option>" +
                            "<option value='Técnico em Mecânica'>Técnico em Mecânica</option>" +
                            "<option value='Técnico em Metalurgia'>Técnico em Metalurgia</option>" +
                            "<option value='Técnico em Mineração'>Técnico em Mineração</option>" +
                            "<option value='Técnico em Pesca'>Técnico em Pesca</option>" +
                            "<option value='Técnico em Química'>Técnico em Química</option>" +
                            "<option value='Técnico em Saneamento'>Técnico em Saneamento</option>" +
                            "<option value='Técnico em Segurança do Trabalho'>Técnico em Segurança do Trabalho</option>" +
                            "<option value='Técnico em Telecomunicação'>Técnico em Telecomunicação</option>" +
                            "<option value='Técnico em Turismo'>Técnico em Turismo</option>" +
                        "</select>" +
                        "<span id='curso-feedback' class='invalid-feedback' hidden>Selecione uma opção</span>" +
                    "</div>" +
                "</div>" +
                "<div class='row mb-4'>" +
                    "<label class='col-sm-2 col-form-label'>Foto</label>" +
                    "<div class='col-sm-10'>" +
                        "<input class='form-control' type='file' accept='image/*' id='foto'>" +
                    "</div>" +
                "</div>" +
                "<div class='d-flex justify-content-end'>" +
                    "<button class='btn btn-success me-2' onClick='validateForm()'>Concluir</button>" +
                    "<button class='btn btn-secondary' onClick='fecharAdicionar()'>Cancelar</button>" +
                "</div>" +
            "</div>" +
        "</div>";
}

function fecharAdicionar() {
    document.getElementById("adicionar-background").remove();
    document.getElementById("adicionar").remove();
}

function validateNome() {
    var nome = document.getElementById("nome");

    if (nome.value.length > 0) {
        nome.classList.add("is-valid");
        nome.classList.remove("is-invalid");

        document.getElementById("nome-feedback").hidden = true;

        return true;

    } else {
        nome.classList.remove("is-valid");
        nome.classList.add("is-invalid");

        document.getElementById("nome-feedback").hidden = false;

        return false;
    }
}

function validateMatricula() {
    var matricula = document.getElementById("matricula");

    if (matricula.value.length == 0) {
        matricula.classList.remove("is-valid");
        matricula.classList.add("is-invalid");

        document.getElementById("matricula-feedback-empty").hidden = false;
        document.getElementById("matricula-feedback-format").hidden = true;

        return false;

    } else if (!/[0-9]{11}/.test(matricula.value) || matricula.value.length != 11) {
        matricula.classList.remove("is-valid");
        matricula.classList.add("is-invalid");

        document.getElementById("matricula-feedback-empty").hidden = true;
        document.getElementById("matricula-feedback-format").hidden = false;

        return false;
        
    } else {
        matricula.classList.add("is-valid");
        matricula.classList.remove("is-invalid");

        document.getElementById("matricula-feedback-empty").hidden = true;
        document.getElementById("matricula-feedback-format").hidden = true;

        return true;
    }
}

function validateCurso() {
    var curso = document.getElementById("curso");

    if (curso.value == "Selecione...") {
        curso.classList.remove("is-valid");
        curso.classList.add("is-invalid");

        document.getElementById("curso-feedback").hidden = false;

        return false;

    } else {
        curso.classList.add("is-valid");
        curso.classList.remove("is-invalid");

        document.getElementById("curso-feedback").hidden = true;

        return true;
    }
}

function validateForm() {
    var nome = validateNome();
    var matricula = validateMatricula();
    var curso = validateCurso();

    if (nome && matricula && curso) {
        addRow();
        genRows();
        fecharAdicionar();
    }
}

function addRow() {
    alunos.push({
        nome: document.getElementById("nome").value,
        matricula: document.getElementById("matricula").value,
        curso: document.getElementById("curso").value,
        foto: document.getElementById("foto").files,
        filename: (document.getElementById("foto").value == "") ? "Nenhum arquivo selecionado" : document.getElementById("foto").files[0].name

    });
}

function genRows() {
    tbody = document.getElementById("alunos");

    if (alunos.length == 0) {
        tbody.innerHTML = 
            "<tr>" +
                "<td class='text-center text-secondary' colspan='4'>Nenhum aluno encontrado, clique em 'adicionar' para adicionar um aluno.</td>" +
            "</tr>";
    } else {
        tbody.innerHTML = "";

        for (i = 0; i < alunos.length; i++) {
            tbody.innerHTML +=
                "<tr id='aluno-" + i + "' onClick='check(" + i + ")'>" +
                    "<td class='text-center'>" + alunos[i].nome + "</td>" +
                    "<td class='text-center'>" + alunos[i].matricula + "</td>" +
                    "<td class='text-center'>" + alunos[i].curso + "</td>" +
                    "<td class='text-center'>" + alunos[i].filename + "</td>" +
                "</tr>";
        }
    }
}

function check(i) {
    document.getElementById("aluno-" + i).classList.toggle("table-active");

    buttonCheck();
}

function buttonCheck() {
    if (document.querySelectorAll("tr.table-active").length == 0) {
        document.getElementById("deletar").classList.add("disabled");
        document.getElementById("editar").classList.add("disabled");

        document.getElementById("deletar").disabled = true;
        document.getElementById("editar").disabled = true;

        document.getElementById("selecionados").innerHTML = "";

    } else {
        document.getElementById("deletar").classList.remove("disabled");
        document.getElementById("editar").classList.remove("disabled");

        document.getElementById("deletar").disabled = false;
        document.getElementById("editar").disabled = false;
        
        document.getElementById("selecionados").innerHTML = 
            "<span class='me-2'>" + document.querySelectorAll("tr.table-active").length + " aluno(s) selecionado(s)</span>" +
            "<a class='me-2 link-secondary link-underline link-underline-opacity-0 link-underline-opacity-75-hover' onClick='selecionarTodos()'>selecionar todos</a>" +
            "<a class='link-secondary link-underline link-underline-opacity-0 link-underline-opacity-75-hover' onClick='removerSeleção()'>remover seleção</a>";
    }
}

function selecionarTodos() {
    for (i = 0; i < alunos.length; i++) {
        document.getElementById("aluno-" + i).classList.add("table-active");
    }

    buttonCheck();
}

function removerSeleção() {
    for (i = 0; i < alunos.length; i++) {
        document.getElementById("aluno-" + i).classList.remove("table-active");
    }

    buttonCheck();
}

function mostrarDeletar() {
    selecteds = document.querySelectorAll("tr.table-active");
    selectedIds = [];

    for (i = 0; i < selecteds.length; i++) {
        selectedIds.push(selecteds[i].id[6]);
    }

    document.getElementById("body").innerHTML += 
        "<div id='deletar-background' class='container-fluid position-fixed top-0 start-0 vw-100 vh-100' style='background-color: rgba(0, 0, 0, 0.5);z-index:1' onClick='fecharDeletar()'></div>"+
        "<div id='deletar-container' class='position-fixed top-50 start-50 translate-middle w-50 px-3 py-4 rounded-4 bg-body' style='z-index:2'>"+
            "<button type='button' class='btn-close mb-2' aria-label='Close' onClick='fecharDeletar()'></button>" +
            "<h1 class='ms-3 mb-4'>Deletar</h1>" +
            "<div class='mx-4'>" +
                "Você tem certeza que deseja deletar " + document.querySelectorAll("tr.table-active").length + " aluno(s)?" +
                "<div class='d-flex justify-content-end'>" +
                    "<button class='btn btn-success me-2' onClick='deletar([" + selectedIds.join(", ") + "])'>Concluir</button>" +
                    "<button class='btn btn-secondary' onClick='fecharDeletar()'>Cancelar</button>" +
                "</div>" +
            "</div>" +
        "</div>";
}

function fecharDeletar() {
    document.getElementById("deletar-background").remove();
    document.getElementById("deletar-container").remove();
}

function deletar(selectedIds) {
    for (i = 0; i < alunos.length; i++) {
        alunos.splice(i, 1);
        i--;
    }

    genRows();
    fecharDeletar();
}