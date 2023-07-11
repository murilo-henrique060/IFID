<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">

    <link rel="shortcut icon" href="./img/favicon.png" type="image/x-icon">

    <script src="./js/validateForm.js"></script>
    <script src="./js/eventHandler.js"></script>
    <script src="./js/students.js"></script>
    <script src="./js/script.js"></script>

    <title>IFID - Criador de crachás do IFPA</title>
</head>
<body class="container" data-bs-theme="dark">
    <header class="navbar d-flex align-items-center py-3 mb-4 border-bottom">
        <a class="navbar-brand" href="#">
            <img src="./img/brand.png" alt="IFID" height="50">
        </a>

        <nav class="nav nav-pills">
            <a class="nav-link active" href="#">Início<a>
            <a class="nav-link disabled" href="#">CSV</a>
            <a class="nav-link disabled" href="#">Excel</a>
        </nav>
    </header>
    
    <main>
        <h1 class="mb-4">
            Gerar Cartões
        </h1>

        <form action="#" method="post">
            <fieldset class="mb-3">
                <legend class="col-form-label d-flex align-items-center pt-0">
                    Tamanho:
                </legend>

                <div class="btn-group ms-2">
                    <input class="btn-check" type="radio" id="default" name="size" value="default" checked>
                    <label class="btn btn-outline-primary" for="default">Padrão (7cm x 10cm)</label>

                    <input class="btn-check" type="radio" id="card" name="size" value="card">
                    <label class="btn btn-outline-primary" for="card">Cartão (5.5cm x 8.5cm)</label>
                </div>
            </fieldset>

            <div class="mb-3">
                <label class="col-form-label d-flex align-items-center pt-0" for="theme">Tema:</label>
                <select class="form-select ms-2" id="theme" name="theme">
                    <option value="default" selected>Padrão</option>
                    <option value="other" disabled>Outro</option>
                </select>
            </div>

            <h2 class="mb-4">Alunos</h2>

            <table class="table table-hover mb-0">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Matrícula</th>
                        <th>Curso</th>
                        <th>Foto</th>
                    </tr>
                </thead>

                <template id="row-empty-template">
                    <tr onclick="showAddStudent()">
                        <td class="text-center text-secondary" colspan="4">
                            Nenhum aluno adicionado, clique aqui para adicionar um novo aluno
                        </td>
                    </tr>
                </template>

                <template id="row-template">
                    <tr id="" onclick="checkStudent(this.id)" ondbclick="selectStudent(this.id); editStudent(this.id)">
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                    </tr>
                </template>

                <tbody id="students">
                    <script>showStudents()</script>
                </tbody>
            </table>

            <template id="add-student-template">
                <div id="add-student-background" class="container-fluid position-fixed top-0 start-0 vw-100 vh-100" style="background-color: rgba(0, 0, 0, 0.5); z-index: 1;" onclick="closeAddStudent()"></div>

                <div id="add-student" class="position-fixed top-50 start-50 translate-middle px-3 py-4 rounded-4 bg-body" style="z-index: 2; min-width: 75%;">        
                    <button type="button" class="btn-close mb-2" aria-label="fechar" onclick="closeAddStudent()"></button>

                    <h1 class="ms-3 mb-4">Adicionar</h1>

                    <div class="mx-4">
                        <div class="row mb-4">
                            <label class="col-sm-2 col-form-label">Nome<span class="text-danger">*</span></label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="name" oninput="validateName()" required>
                                <span id="name-feedback" class="invalid-feedback" hidden></span>
                            </div>
                        </div>

                        <div class="row mb-4">
                            <label class="col-sm-2 col-form-label">Matrícula<span class="text-danger">*</span></label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="school-id" maxlength="11" oninput="validateSchoolId()">
                                <span id="school-id-feedback" class="invalid-feedback" hidden></span>
                            </div>
                        </div>

                        <div class="row mb-4">
                            <label class="col-sm-2 col-form-label">Curso<span class="text-danger">*</span></label>
                            <div class="col-sm-10">
                                <select class="form-select" id="course" oninput="validateCourse()">
                                    <option selected disabled>Selecione...</option>
                                    <option value="Técnico em Agente Comunitário de Saúde">Técnico em Agente Comunitário de Saúde</option>
                                    <option value="Técnico em Agrimensura">Técnico em Agrimensura</option>
                                    <option value="Técnico em Aquicultura">Técnico em Aquicultura</option>
                                    <option value="Técnico em Desenvolvimento de Sistemas">Técnico em Desenvolvimento de Sistemas</option>
                                    <option value="Técnico em Design de Móveis e Interiores">Técnico em Design de Móveis e Interiores</option>
                                    <option value="Técnico em Edificações">Técnico em Edificações</option>
                                    <option value="Técnico em Eletrônica">Técnico em Eletrônica</option>
                                    <option value="Técnico em Eletrotécnica">Técnico em Eletrotécnica</option>
                                    <option value="Técnico em Estradas">Técnico em Estradas</option>
                                    <option value="Técnico em Eventos">Técnico em Eventos</option>
                                    <option value="Técnico em Geodésia e Cartografia">Técnico em Geodésia e Cartografia</option>
                                    <option value="Técnico em Hospedagem">Técnico em Hospedagem</option>
                                    <option value="Técnico em Mecânica">Técnico em Mecânica</option>
                                    <option value="Técnico em Metalurgia">Técnico em Metalurgia</option>
                                    <option value="Técnico em Mineração">Técnico em Mineração</option>
                                    <option value="Técnico em Pesca">Técnico em Pesca</option>
                                    <option value="Técnico em Química">Técnico em Química</option>
                                    <option value="Técnico em Saneamento">Técnico em Saneamento</option>
                                    <option value="Técnico em Segurança do Trabalho">Técnico em Segurança do Trabalho</option>
                                    <option value="Técnico em Telecomunicação">Técnico em Telecomunicação</option>
                                    <option value="Técnico em Turismo">Técnico em Turismo</option>
                                </select>
                                <span id="course-feedback" class="invalid-feedback" hidden>Selecione uma opção</span>
                            </div>
                        </div>
                        <div class="row mb-4">
                            <label class="col-sm-2 col-form-label">Foto</label>
                            <div class="col-sm-10">
                                <input class="form-control" type="file" accept="image/*" id="photo">
                            </div>
                        </div>
                        
                        <div class="d-flex justify-content-end">
                            <button class="btn btn-success me-2" onclick="submitAddStudent()">Concluir</button>
                            <button class="btn btn-secondary" onclick="closeAddStudent()">Cancelar</button>
                        </div>
                    </div>
                </div>
            </template>

            <template id="remove-students-template">
                <div id="remove-students-background" class="container-fluid position-fixed top-0 start-0 vw-100 vh-100" style="background-color: rgba(0, 0, 0, 0.5); z-index:1" onclick="closeRemoveStudents()"></div>

                <div id="remove-students" class="position-fixed top-50 start-50 translate-middle px-3 py-4 rounded-4 bg-body" style="z-index:2; min-widht:50%;">
                    <button type="button" class="btn-close mb-2" aria-label="fechar" onclick="closeRemoveStudents()"></button>

                    <h1 class="ms-3 mb-4">Remover</h1>
                    <div class="mx-4">
                        Você tem certeza que deseja deletar <span id="remove-students-selected-number"></span> aluno(s)?
                        <div class="d-flex mt-3 justify-content-end">
                            <button class="btn btn-danger me-2" onclick="submitRemoveStudents()">Remover</button>
                            <button class="btn btn-secondary" onclick="closeRemoveStudents()">Cancelar</button>
                        </div>
                    </div>
                </div>
            </template>

            <div id="selecteds-count" class="ms-3 mt-1 mb-2 text-secondary lh-1 invisible">
                <span class="me-2"><span id="selecteds-number"></span> aluno(s) selecionado(s)</span>
                <a class="me-2 link-secondary link-underline link-underline-opacity-0 link-underline-opacity-75-hover" onclick="selectAllStudents()">selecionar todos</a>
                <a class="link-secondary link-underline link-underline-opacity-0 link-underline-opacity-75-hover" onclick="unselectAllStudents()">remover seleção</a>
            </div>

            <div class="d-flex justify-content-end mb-3">
                <button type="button" class="btn btn-primary me-2" onclick="showAddStudent()">Adicionar</button>
                <button type="button" id="btn-remove-selected" class="btn btn-danger me-2 disabled" onclick="showRemoveStudents()">Remover</button>
                <button type="button" id="btn-edit-selected" class="btn btn-warning disabled" onclick="showEditStudents()">Editar</button>
            </div>

            <div class="d-flex justify-content-center">
                <button id="btn-submit" type="button" class="btn btn-outline-success btn-lg disabled">Gerar Crachás</button>
            </div>
        </form>
    </main>
</body>
</html>
