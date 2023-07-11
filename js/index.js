alunos = [];

function adicionar() {
    document.getElementById("body").innerHTML += 
        "<div id='adicionar-background' class='container-fluid position-fixed top-0 start-0 vw-100 vh-100' style='background-color: rgba(0, 0, 0, 0.5);z-index:1' onClick='fecharAdicionar()'></div>"+
        "<div id='adicionar' class='position-fixed top-50 start-50 translate-middle px-3 py-4 rounded-4 bg-body' style='z-index:2;min-width:75%;'>"+
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
                        "<input type='text' class='form-control' id='matricula' maxlength='11' onInput='validateMatricula()'>" +
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

function validateNome(id="") {
    var nome = document.getElementById("nome" + id);

    if (nome.value.length > 0) {
        nome.classList.add("is-valid");
        nome.classList.remove("is-invalid");

        document.getElementById("nome-feedback" + id).hidden = true;

        return true;

    } else {
        nome.classList.remove("is-valid");
        nome.classList.add("is-invalid");

        document.getElementById("nome-feedback" + id).hidden = false;

        return false;
    }
}

function validateMatricula(id="") {
    var matricula = document.getElementById("matricula" + id);

    if (matricula.value.length == 0) {
        matricula.classList.remove("is-valid");
        matricula.classList.add("is-invalid");

        document.getElementById("matricula-feedback-empty" + id).hidden = false;
        document.getElementById("matricula-feedback-format" + id).hidden = true;

        return false;

    } else if (!/[0-9]{11}/.test(matricula.value) || matricula.value.length != 11) {
        matricula.classList.remove("is-valid");
        matricula.classList.add("is-invalid");

        document.getElementById("matricula-feedback-empty" + id).hidden = true;
        document.getElementById("matricula-feedback-format" + id).hidden = false;

        return false;
        
    } else {
        matricula.classList.add("is-valid");
        matricula.classList.remove("is-invalid");

        document.getElementById("matricula-feedback-empty" + id).hidden = true;
        document.getElementById("matricula-feedback-format" + id).hidden = true;

        return true;
    }
}

function validateCurso(id="") {
    var curso = document.getElementById("curso" + id);

    if (curso.value == "Selecione...") {
        curso.classList.remove("is-valid");
        curso.classList.add("is-invalid");

        document.getElementById("curso-feedback" + id).hidden = false;

        return false;

    } else {
        curso.classList.add("is-valid");
        curso.classList.remove("is-invalid");

        document.getElementById("curso-feedback" + id).hidden = true;

        return true;
    }
}

function validate(id="") {
    var nome = validateNome(id);
    var matricula = validateMatricula(id);
    var curso = validateCurso(id);

    return nome && matricula && curso;
}

function validateForm() {
    if (validate()) {
        addRow();
        genRows();
        fecharAdicionar();
    }
}

function validateSelected() {
    valid = true;

    for (row of document.querySelectorAll("tbody tr.table-active")) {
        valid = valid && validate(row.id);
    }

    if (valid) {
        //editRow();
        genRows();
        fecharEditar();
    }
}

function addRow() {
    alunos.push({
        id: (alunos.length == 0) ? 0 : alunos[alunos.length - 1].id + 1,
        nome: document.getElementById("nome").value,
        matricula: document.getElementById("matricula").value,
        curso: document.getElementById("curso").value,
        foto: document.getElementById("foto").files,
        filename: (document.getElementById("foto").value == "") ? "Nenhum arquivo selecionado" : document.getElementById("foto").files[0].name

    });
}

function editRows() {
    for (row of document.querySelectorAll("tbody tr.table-active")) {
        for (i in alunos) {
            if (alunos[i].id == row.id) {
                alunos[i].nome = document.getElementById("nome" + row.id).value;
                alunos[i].matricula = document.getElementById("matricula" + row.id).value;
                alunos[i].curso = document.getElementById("curso" + row.id).value;
                alunos[i].foto = document.getElementById("foto" + row.id).files;
                alunos[i].filename = (document.getElementById("foto" + row.id).value == "") ? "Nenhum arquivo selecionado" : document.getElementById("foto" + row.id).files[0].name;
            }
        }
    }
}

function genRows() {
    tbody = document.getElementById("alunos");

    if (alunos.length == 0) {
        tbody.innerHTML = 
            "<tr onClick='adicionar()'>" +
                "<td class='text-center text-secondary' colspan='4'>Nenhum aluno encontrado, clique em 'adicionar' para adicionar um aluno.</td>" +
            "</tr>";
    } else {
        tbody.innerHTML = "";

        for (i = 0; i < alunos.length; i++) {
            tbody.innerHTML +=
                "<tr id='" + alunos[i].id + "' onClick='check(" + alunos[i].id + ")' onDblClick='dbClickEditar(" + alunos[i].id + ")'>" +
                    "<td class='text-center'>" + alunos[i].nome + "</td>" +
                    "<td class='text-center'>" + alunos[i].matricula + "</td>" +
                    "<td class='text-center'>" + alunos[i].curso + "</td>" +
                    "<td class='text-center'>" + alunos[i].filename + "</td>" +
                "</tr>";
        }
    }

    buttonCheck();
}

function check(i) {
    document.getElementById(i).classList.toggle("table-active");

    buttonCheck();
}

function dbClickEditar(i) {
    document.getElementById(i).classList.add("table-active");
    mostrarEditar();
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
            "<a class='link-secondary link-underline link-underline-opacity-0 link-underline-opacity-75-hover' onClick='removerSelecao()'>remover seleção</a>";
    }
}

function selecionarTodos() {
    for (row of document.querySelectorAll("tbody tr")) {
        row.classList.add("table-active");
    }

    buttonCheck();
}

function removerSelecao() {
    for (row of document.querySelectorAll("tbody tr")) {
        row.classList.remove("table-active");
    }

    buttonCheck();
}

function mostrarDeletar() {
    document.getElementById("body").innerHTML += 
        "<div id='deletar-background' class='container-fluid position-fixed top-0 start-0 vw-100 vh-100' style='background-color: rgba(0, 0, 0, 0.5);z-index:1' onClick='fecharDeletar()'></div>"+
        "<div id='deletar-container' class='position-fixed top-50 start-50 translate-middle px-3 py-4 rounded-4 bg-body' style='z-index:2; min-widht:50%;'>"+
            "<button type='button' class='btn-close mb-2' aria-label='Close' onClick='fecharDeletar()'></button>" +
            "<h1 class='ms-3 mb-4'>Deletar</h1>" +
            "<div class='mx-4'>" +
                "Você tem certeza que deseja deletar " + document.querySelectorAll("tr.table-active").length + " aluno(s)?" +
                "<div class='d-flex mt-3 justify-content-end'>" +
                    "<button class='btn btn-danger me-2' onClick='deletar()'>Deletar</button>" +
                    "<button class='btn btn-secondary' onClick='fecharDeletar()'>Cancelar</button>" +
                "</div>" +
            "</div>" +
        "</div>";
}

function fecharDeletar() {
    document.getElementById("deletar-background").remove();
    document.getElementById("deletar-container").remove();
}

function deletar() {
    for (row of document.querySelectorAll("tbody tr.table-active")) {
        for (i in alunos) {
            if (alunos[i].id == row.id) {
                alunos.splice(i, 1);
                break;
            }
        }
    }

    genRows();
    buttonCheck();
    fecharDeletar();
}

function mostrarEditar() {
    content = ""

    content +=
        "<div id='editar-background' class='container-fluid position-fixed top-0 start-0 vw-100 vh-100' style='background-color: rgba(0, 0, 0, 0.5);z-index:1' onClick='fecharEditar()'></div>" +
        "<div id='editar-container' class='position-fixed overflow-y-auto top-50 start-50 translate-middle px-3 py-4 rounded-4 bg-body' style='z-index:2; min-width:75%; max-height:90%;'>" +
            "<button type='button' class='btn-close mb-2' aria-label='Close' onClick='fecharEditar()'></button>" +
            "<h1 class='ms-3 mb-4'>Editar</h1>" +
            "<div class='mx-4'>";

    for (row of document.querySelectorAll("tbody tr.table-active")) {
        for (i in alunos) {
            console.log(alunos[i]);
            if (alunos[i].id == row.id) {
                content +=
                    "<div class='mb-4'>" +
                        "<h2 class='ms-3 mb-4'>" + alunos[i].nome + "</h2>" +
                        "<div class='row ms-3 mb-4'>" +
                            "<label class='col-sm-2 col-form-label'>Nome<span class='text-danger'>*</span></label>" +
                            "<div class='col-sm-10'>" +
                                "<input type='text' class='form-control' id='nome" + alunos[i].id + "' onInput='validateNome(" + alunos[i].id + ")' value='" + alunos[i].nome + "' required>" +
                                "<span id='nome-feedback" + alunos[i].id + "' class='invalid-feedback' hidden>Preencha este campo</span>" +
                            "</div>" +
                        "</div>" +
                        "<div class='row ms-3 mb-4'>" +
                            "<label class='col-sm-2 col-form-label'>Matricula<span class='text-danger'>*</span></label>" +
                            "<div class='col-sm-10'>" +
                                "<input type='text' class='form-control' id='matricula" + alunos[i].id + "' maxlength='11' onInput='validateMatricula(" + alunos[i].id + ")' value=" + alunos[i].matricula + ">" +
                                "<span id='matricula-feedback-empty" + alunos[i].id + "' class='invalid-feedback' hidden>Preencha este campo</span>" +
                                "<span id='matricula-feedback-format" + alunos[i].id + "' class='invalid-feedback' hidden>A matrícula deve conter 11 caracteres numéricos</span>" +
                            "</div>" +
                        "</div>" +
                        "<div class='row ms-3 mb-4'>" +
                            "<label class='col-sm-2 col-form-label'>Curso<span class='text-danger'>*</span></label>" +
                            "<div class='col-sm-10'>" +
                                "<select class='form-select' id='curso" + alunos[i].id + "' onInput='validateCurso(curso" + i + ")'>" +
                                    "<option selected disabled>" + alunos[i].curso + "</option>" +
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
                                "<span id='curso-feedback" + alunos[i].id + "' class='invalid-feedback' hidden>Selecione uma opção</span>" +
                            "</div>" +
                        "</div>" +
                        "<div class='row ms-3 mb-4'>" +
                            "<label class='col-sm-2 col-form-label'>Foto</label>" +
                            "<div class='col-sm-10'>" +
                                "<input class='form-control' type='file' accept='image/*' id='foto" + alunos[i].id + "' value='" + alunos[i].filename + "'>" +
                            "</div>" +
                        "</div>" +
                    "</div>";
                break;
            }
        }
    }

    content +=
                "<div class='d-flex justify-content-end mb-3'>" +
                    "<button class='btn btn-success me-2' onClick='validateSelected()'>Concluir</button>" +
                    "<button class='btn btn-secondary' onClick='fecharEditar()'>Cancelar</button>" +
                "</div>" +
            "</div>" +
        "</div>";
    
    document.getElementById("body").innerHTML += content;
}

function fecharEditar() {
    document.getElementById("editar-background").remove();
    document.getElementById("editar-container").remove();
}
