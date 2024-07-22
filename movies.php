<?php
require_once "MovieDB.php";
$db = new MovieDB();
$movies = $db->getMovies();
echo json_encode($movies);
?>