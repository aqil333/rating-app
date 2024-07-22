<?php
require_once "MovieDB.php";
$db = new MovieDB();
$id = $_POST["id"];
$up_votes = $_POST["up_votes"];
$down_votes = $_POST["down_votes"];
$db->updateVotes($id, $up_votes, $down_votes);
echo "Votes updated successfully!";
?>