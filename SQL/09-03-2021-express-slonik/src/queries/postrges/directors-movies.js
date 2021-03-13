const { sql } = require('slonik')

// Directors-movies-related queries

// Devuelve query_name, production_budget y distribuidora de los que trabajen juntos y cuya distribuidora no sea null
// SELECT query_name, production_budget, distributor FROM directors JOIN movies ON directors.id = director WHERE distributor IS NOT NULL;
// Devuelve query_name y el total de películas que cada director ha dirigido
// SELECT query_name, COUNT(*) FROM directors JOIN movies ON directors.id = director GROUP BY query_name;
// Devuelve query_name, título e imdb_votes de las 50 películas menos votadas según imdb_votes
// SELECT query_name, title, imdb_votes FROM directors JOIN movies ON directors.id = director WHERE imdb_votes IS NOT NULL ORDER BY imdb_votes LIMIT 50;
// Devuelve query_name y distribuidora donde el director sea Christopher Nolan
// SELECT query_name, distributor FROM directors JOIN movies ON directors.id = director WHERE query_name = 'Christopher_Nolan';
// Devuelve el nombre y la recaudación en Estados Unidos del director que más ha recaudado en Estados Unidos
// SELECT query_name, us_gross FROM directors JOIN movies ON directors.id = director WHERE us_gross IS NOT NULL ORDER BY us_gross DESC LIMIT 1;
// Devuelve el nombre y fecha del director que más películas haya lanzado desde el año 2000 hasta la actualidad
// SELECT name FROM directors JOIN movies ON directors.id = director WHERE extract(year from release_date) BETWEEN 2000 AND EXTRACT(year FROM NOW()) GROUP BY name ORDER BY COUNT(name) DESC LIMIT 1;
// Devuelve el nombre, major_genre y rotten_tomatoes_rating de todos los directores que hayan hecho películas de drama y cuya puntuación en rotten_tomatoes_rating sea mayor de 70
// SELECT name, major_genre, rotten_tomatoes_rating FROM directors JOIN movies ON directors.id = director WHERE major_genre = 'Drama' AND rotten_tomatoes_rating > 70;
// Devuelve el nombre de los directores australianos que hayan dirigido alguna película antes de 1995
// SELECT name FROM directors JOIN movies ON directors.id = director WHERE nationality = 'Australiana' AND EXTRACT(year FROM release_date) > 1950;
// Devuelve el nombre de los directores, título, fecha y mpaa_rating de las películas cuyo mpaa_rating sea PG-13
// SELECT name, title, release_date, mpaa_rating FROM directors JOIN movies ON directors.id = director WHERE mpaa_rating = 'PG-13';
// Devuelve el quinto mejor director canadiense que haya obtenido la mejor media de imdb_rating
// SELECT AVG(imdb_rating), name FROM directors JOIN movies ON directors.id = director WHERE nationality = 'Canadiense' GROUP BY name ORDER BY AVG(imdb_rating) DESC OFFSET 4 LIMIT 1;
// Devuelve la media de las 20 mejores películas de ficción contemporánea entre 1990 y el 2000 según rotten_tomatoes_rating e imdb_rating
// SELECT AVG(imdb_rating), AVG(rotten_tomatoes_rating) FROM movies WHERE imdb_rating IN (SELECT imdb_rating FROM movies WHERE EXTRACT(year FROM release_date) BETWEEN 1990 AND 2000 AND creative_type = 'Contemporary Fiction' AND (imdb_rating IS NOT NULL) ORDER BY imdb_rating DESC LIMIT 20) AND rotten_tomatoes_rating IN (SELECT rotten_tomatoes_rating FROM movies WHERE EXTRACT(year FROM release_date) BETWEEN 1990 AND 2000 AND creative_type = 'Contemporary Fiction' AND (rotten_tomatoes_rating IS NOT NULL) ORDER BY rotten_tomatoes_rating DESC LIMIT 20);
// Devuelve los nombre de los directores y las fechas solo en años basadas en juegos que hayan recaudado menos de 500000$
// SELECT name, EXTRACT(year FROM release_date) FROM directors JOIN movies ON director = directors.id WHERE (us_gross < 500000 OR worldwide_gross < 500000) AND source = 'Based on Game';

module.exports = {}