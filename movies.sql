CREATE TABLE movies (
  id INT PRIMARY KEY,
  title VARCHAR(255),
  up_votes INT,
  down_votes INT
);

INSERT INTO movies (id, title, up_votes, down_votes)
VALUES
  (1, 'Movie 1', 10, 2),
  (2, 'Movie 2', 20, 5),
  (3, 'Movie 3', 5, 1),
  (4, 'Movie 4', 15, 3);