<?php
    include("card.php");

    $formato = $_POST["formato"];
    $primaryColor = $_POST["primary-color"];
    $secondaryColor = $_POST["secondary-color"];
    $names = $_POST["name"];
    $matriculas = $_POST["matricula"];
    $cursos = $_POST["curso"];
    $photos = array();

    for ($i = 0; $i < count($_FILES["foto"]["tmp_name"]); $i++) {
        if ($_FILES["foto"]["size"][$i] == 0) {
            array_push($photos, "img/placeholder.svg");
        } else {
            array_push($photos, 'data:' . $_FILES["foto"]["type"][$i] . ';base64,' . base64_encode(file_get_contents($_FILES["foto"]["tmp_name"][$i])));
        }
    }

    echo "
        <style>
            :root {
                --primary-color: $primaryColor;
                --secondary-color: $secondaryColor;
            }
        </style></head>";

    $count = 0;
    echo "<body>";
    for ($i = 0; $i < count($names); $i++) {
        genCard($i, $formato, $primaryColor, $secondaryColor, $names[$i], $matriculas[$i], $cursos[$i], $photos[$i]);
    }
    echo "</body>";
?>

<script>
    window.print();
</script>
