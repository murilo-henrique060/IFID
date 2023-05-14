<?php
    include("card.php");

    $names = $_POST["name"];
    $matriculas = $_POST["matricula"];
    $cursos = $_POST["curso"];
    $modalidades = $_POST["modalidade"];
    $photos = array();

    for ($i = 0; $i < count($_FILES["foto"]["tmp_name"]); $i++) {
        if ($_FILES["foto"]["size"][$i] == 0) {
            array_push($photos, "img/placeholder.png");
        } else {
            array_push($photos, 'data:' . $_FILES["foto"]["type"][$i] . ';base64,' . base64_encode(file_get_contents($_FILES["foto"]["tmp_name"][$i])));
        }
    }

    echo "<body>";

    $count = 0;

    for ($i = 0; $i < count($names); $i++) {
        genCard($names[$i], $matriculas[$i], $cursos[$i], $modalidades[$i], $photos[$i]);
    }
    echo "</body>";
?>

<script>
    window.print();
</script>