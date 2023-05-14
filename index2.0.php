<!DOCTYPE html>
<html lang="pt-br">
<head>
    <script src="js/dinamic_table.js"></script>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Criar Cartão</title>
</head>
<body>
    <datalist id="modalidade">
        <option value="Técnico">
        <option value="Graduação">
    </datalist>

    <datalist id="cursos">
        <option value="Técnico em Agente Comunitário de Saúde">
        <option value="Técnico em Agrimensura">
        <option value="Técnico em Aquicultura">
        <option value="Técnico em Desenvolvimento de Sistemas">
        <option value="Técnico em Design de Móveis e Interiores">
        <option value="Técnico em Edificações">
        <option value="Técnico em Eletrônica">
        <option value="Técnico em Eletrotécnica">
        <option value="Técnico em Estradas">
        <option value="Técnico em Eventos">
        <option value="Técnico em Geodésia e Cartografia">
        <option value="Técnico em Hospedagem">
        <option value="Técnico em Mecânica">
        <option value="Técnico em Metalurgia">
        <option value="Técnico em Mineração">
        <option value="Técnico em Pesca">
        <option value="Técnico em Química">
        <option value="Técnico em Saneamento">
        <option value="Técnico em Segurança do Trabalho">
        <option value="Técnico em Telecomunicação">
        <option value="Técnico em Turismo">
    </datalist>

    <form action="generate-card.php" method="post" enctype="multipart/form-data">
        <table id="form">
            <tr>
                <th></th>
                <th>Nome</th>
                <th>Matrícula</th>
                <th>Curso</th>
                <th>Modalidade</th>
                <th>Foto</th>
            </tr>
            <script>addRow("form")</script>
        </table>
        <button type="button" onclick="addRow('form')">Adicionar</button>
        <button type="button" onclick="deleteRow('form')">Remover</button><br>
        <input type="submit" value="Gerar Cartão">
    </form>
</body>
</html>