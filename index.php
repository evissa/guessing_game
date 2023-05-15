<?php
session_start();
$min = 1;
$max = 100;

if (isset($_POST['guess'])) {
    $guess = intval($_POST['guess']);
    $number = $_SESSION['number'];
    if ($guess == $number) {
        $result = 'correct';
    } else if ($guess < $number) {
        $result = 'higher';
    } else {
        $result = 'lower';
    }
    $response = ['result' => $result];
    echo json_encode($response);
    return $response;
} else {
    $_SESSION['number'] = rand($min, $max);
}
?>




<!DOCTYPE html>
<html>
<head>
    <title>Number Guessing Game</title>
    <link rel="stylesheet" href="style.css">
    
</head>

<body>
    <div class="card">
        <div class="card-content">
            <div id="card-container">
                <h1 id="h1">Number Guessing Game</h1>
                <p id="p1">Guess a number between 1 and 100:</p>
                <form id="guess-form">
                    <input type="number" id="guess-input" name="guess" min="<?php echo $min ?>" max="<?php echo $max ?>">
                    <input type="submit" value="Submit" id="submit">
                </form>
                <div id="result"></div>
                <button id="new-game">New Game</button>
            </div>
     </div>
    </div>
</body>
<script src="script.js"></script>

</html>