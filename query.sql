CREATE USER adminmovie WITH PASSWORD 'password';
CREATE DATABASE movie OWNER adminmovie;
GRANT ALL PRIVILEGES ON DATABASE movie TO adminmovie;
ALTER USER adminmovie CREATEDB;

INSERT INTO "Director" VALUES (1, 'Steven Spielberg'), (2, 'Francis Ford Coppola');
INSERT INTO "Movie" VALUES (1, 'Jurassic Park', 'Science Fiction', 1),
(2, 'Indiana Jones and the Last Crusade', 'Adventure', 1),
(3, 'The Godfather: Part II', 'Crime', 2);