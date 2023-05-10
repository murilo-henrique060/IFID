<!DOCTYPE html>
<html lang="pt-br">
<head>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.min.js"></script>
<script type="text/javascript" src="https://html2canvas.hertzen.com/dist/html2canvas.js"></script>
    <script src="//code.jquery.com/jquery-latest.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/jsbarcode@3.8.0/dist/JsBarcode.all.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/jsbarcode@3.11.5/dist/barcodes/JsBarcode.code128.min.js"></script>
    <script src="js/script.js"></script>
    <link rel="stylesheet" href="css\style.css" media="all">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IFID</title>
</head>
<body>
    <div class="card">
        <div class="topnav"></div>
        <div class="content-box">
            <div class="content-info">
                <div class="logo-and-institute">
                    <div class="logo">
                        <img src="img/logo.svg" alt="">
                    </div>
                    <div class="institute">
                        <div class="name">INSTITUTO<br>FEDERAL</div>
                        <div class="campus"><?php echo $_POST["state"] ?></div>
                    </div>
                </div>
                <div class="course-type">
                    <?php echo $_POST["type"] ?>
                </div>
            </div>
            <div class="content-image">
                <img src="img/user.png" alt="">
            </div>
        </div>
        <div class="container">
            <div class="title">Nome</div>
            <div class="content"><p><?php echo $_POST["name"] ?></p></div>
        </div>
        <div class="container">
            <div class="title">Curso</div>
            <div class="content"><p><?php echo $_POST["course"] ?></p></div>
        </div>
        
        <div class="barcode">
            <img id="barcode"/>
        </div>

        <script>
            genBarcode("barcode", <?php echo $_POST["school_id"] ?>);
        </script>

        <div class="footer">
            <div class="title">
                Matrícula
            </div>
            <div class="content">
                <?php echo $_POST["school_id"] ?>
            </div>
        </div>
    </div>
</body>
</html>
