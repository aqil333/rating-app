<?php
class MovieDB {
  private $conn;
  function __construct() {
    $this->conn = mysqli_connect("localhost", "root", "", "movies");
  }
  function getMovies() {
    $query = "SELECT * FROM movies";
    $result = mysqli_query($this->conn, $query);
    return mysqli_fetch_all($result, MYSQLI_ASSOC);
  }
  function updateVotes($id, $up_votes, $down_votes) {
    $query = "UPDATE movies SET up_votes = '$up_votes', down_votes = '$down_votes' WHERE id = '$id'";
    mysqli_query($this->conn, $query);
  }
}
?>