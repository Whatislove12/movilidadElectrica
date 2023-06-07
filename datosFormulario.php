<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Procesar Formulario</title>

    <link rel="stylesheet" href="/styles/formularios.css">
</head>
<body>
    <h1>PROCESAMIENTO DE FORMULARIOS</h1>
    <table>
        <caption>DATOS RECIBIDOS</caption>
        <thead>
            <tr>
                <th>Nombre</th>
                <td>Datos</td>
            </tr>
        </thead>
        <tbody>
        <?php
                foreach ($_REQUEST as $name=>$value) {
                    echo '<tr>';
                    echo '<th>'.$name.'</th>';
                    echo '<td>';
                    if (is_array($value))
                        print_r($value);
                    else
                        echo $value;
                    echo '</td>';
                    echo '</tr>';
                }   
                foreach ($_FILES as $name=>$file) {
                    echo '<tr>';
                    echo '<th>'.$name.'</th>';
                    echo '<td>';
                    echo $file['name'];
                    echo '</td>';
                    echo '</tr>';
                }

            ?>
        </tbody>

    </table>
    <a href="/">Volver a inicio</a>

</body>
</html>