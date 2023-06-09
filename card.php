<head>
    <link rel="shortcut icon" href="img/favicon.png" type="image/x-icon">

    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.min.js"></script>
    <script type="text/javascript" src="https://html2canvas.hertzen.com/dist/html2canvas.js"></script>
    <script src="//code.jquery.com/jquery-latest.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/jsbarcode@3.8.0/dist/JsBarcode.all.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/jsbarcode@3.11.5/dist/barcodes/JsBarcode.code128.min.js"></script>
    <script src="js/script.js"></script>

    <link rel="stylesheet" href="css\card-padrao.css" media="all">
    <link rel="stylesheet" href="css\card-cartao.css" media="all">
    <link rel="stylesheet" href="css\card.css" media="all">

    <title>Cartões</title>

<?php
    function genCard($id, $formato, $primaryColor, $secondaryColor, $nome, $matricula, $curso, $foto) {
        echo "
        <div class='$formato'>
            <div class='topnav'></div>
            <div class='content-box'>
                <div class='content-info'>
                    <div class='logo-and-institute'>
                        <div class='logo'>
                            <img src='img/logo.svg'>
                        </div>
                        <div class='institute'>
                            <div class='name'>INSTITUTO<br>FEDERAL</div>
                            <div class='campus'>Pará</div>
                        </div>
                    </div>
                    <div class='course-type'>
                        Técnico
                    </div>
                </div>
                <div class='content-image'>
                    <img src='$foto'>
                </div>
            </div>
            <div class='container'>
                <div class='title'>Nome</div>
                <div class='content'><p>$nome</p></div>
            </div>
            <div class='container'>
                <div class='title'>Curso</div>
                <div class='content'><p>$curso</p></div>
            </div>
            
            <div class='barcode'>
                <img id='barcode-$id'/>
            </div>

            <script>
                genBarcode('barcode-$id', '$matricula');
            </script>

            <div class='footer'>
                <div class='title'>
                    Matrícula
                </div>
                <div class='content'>
                    $matricula
                </div>
            </div>
        </div>";
    }
?>
