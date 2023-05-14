<!DOCTYPE html>
<html lang="pt-br">
<head>
    <script src="js/dinamic_table.js"></script>

    <link rel="stylesheet" href="css/index-style.css">

    <meta charset="UTF-8">

    c

    <title>IFID</title>
</head>
<body>
    <header>
        <a href="index.php"><img src="img/favicon2.svg" alt="Logo do Site"></a>

        <nav>
            <a href="index.php">Gerar Cartões</a>
            <a href="#">CSV</a>
            <a href="#">Excel</a>
            </ul>
        </nav>
    </header>

    <section>
        <h1>Gerar Cartões</h1>

        <form action="generate-card.php" method="post" enctype="multipart/form-data">

        <label for="formato">Formato:</label>
        <select name="formato" id="formato">
            <option value="padrao">Padrão (7cm x 10cm)</option>
            <option value="cartao">Cartão (5.5cm x 8.5cm)</option>
        </select>

        <h2>Insira os dados dos alunos</h2>

            <table id="form">
                 <tr>
                    <th></th>
                    <th>Nome</th>
                    <th>Matrícula</th>
                    <th>Curso</th>
                    <th>Foto</th>
                </tr>
                <script>addRow("form")</script>
            </table>
            <div id="add-remove-buttons">
                <button id="add-btn" type="button" onclick="addRow('form')">Adicionar</button>
                <button id="remove-btn" type="button" onclick="deleteRow('form')">Remover</button>
            </div>

            <input type="submit" value="Gerar Cartões">
        </form>
    </section>

    <footer>
        <p>Desenvolvido por <a href="https://github.com/murilo-henrique060">Murilo Henrique</a></p>
        <p>2021</p>
    </footer>
</body>
</html>