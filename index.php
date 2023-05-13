<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IFID</title>
</head>
<body>
    <form action="generate-card.php" enctype="multipart/form-data" method="post">
        <label for="name">Nome:</label> <br>
        <input type="text" name="name" id="name" placeholder="Nome" required/> <br>
        <br>
        <label for="school_id">Matrícula:</label> <br>
        <input type="text" name="school_id" id="school_id" placeholder="Matrícula" pattern="[0-9]{11}" title="A matrícula é formada por 11 números" required/> <br>
        <br>
        <label for="course">Curso:</label> <br>
        <select name="course" id="course" required>
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
        </select> <br>
        <br>
        <label for="state">Estado:</label> <br>
        <input type="text" name="state" id="state" placeholder="Campus" value="Pará" required/> <br>
        <br>
        <label for="type">Tipo:</label> <br>
        <input type="radio" id="tecnico" name="type" value="Técnico" checked/>
        <label for="tecnico">Técnico</label><br>
        <input type="radio" id="graduacao" name="type" value="Graduação">
        <label for="graduacao">Graduação</label><br>
        <br>

        <label for="image">Imagem:</label> <br>
        <input type="file" name="imageUpload" id="imageUpload" accept="image/*"/> <br>

        <input type="submit" value="Gerar Cartões"> <br>
    </form>
</body>
</html>