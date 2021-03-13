const { sql } = require('slonik')

// Movies-related queries

// Devuelve el título de todas las películas cuyo contenido no sea null
// SELECT title FROM movies WHERE title <> '';
// Devuelve el título y el mpaa_rating de todas las películas cuya valoración mpaa no sea null
// SELECT title, mpaa_rating FROM movies WHERE mpaa_rating <> '';
// Devuelve el título, production_budget y distribuidora de todas aquellas películas cuyos costes (production_budget) hayan sido inferiores a 500000$
// SELECT title, production_budget, distributor FROM movies WHERE production_budget < '500000';
// Devuelve el título, major_genre y production_budget de las 10 películas más costosas
// SELECT title, major_genre, production_budget FROM movies WHERE production_budget IS NOT NULL ORDER BY production_budget DESC LIMIT 10;
// Devuelve el título y el orígen (source) de todas las películas cuyo source sea remake
// SELECT title, source FROM movies WHERE source = 'Remake';
// Devuelve el título, la distribuidora y el rating imdb de todas las películas cuyo imdb_rating no sea null
// SELECT title, distributor, imdb_rating FROM movies WHERE imdb_rating IS NOT NULL;
// Devuelve el título y rotten_tomatoes_rating de las 100 películas menor valoradas según este campo.
// SELECT title, rotten_tomatoes_rating FROM movies ORDER BY rotten_tomatoes_rating LIMIT 100;
// Devuelve el título, major_genre, imdb_rating e imdb_votes de las 20 películas mejor valoradas y a la vez con más votos de todas
// SELECT title, major_genre, imdb_rating, imdb_votes FROM movies WHERE imdb_rating IS NOT NULL AND imdb_votes IS NOT NULL ORDER BY imdb_rating DESC, imdb_votes DESC LIMIT 20;
// Devuelve la suma del campo production_budget cuyo mpaa_rating sea Not Rated y el campo título no sea null
// SELECT SUM(production_budget) FROM movies WHERE mpaa_rating = 'Not Rated' AND title IS NOT NULL;
// Devuelve el título y la fecha de todas aquellas películas que serán lanzadas en el futuro
// SELECT title, release_date FROM movies WHERE release_date > NOW();
// Devuelve el título, us_gross y fecha de todas aquellas películas lanzadas entre 1950 y 1980
// SELECT title, us_gross, release_date FROM movies WHERE extract(year from release_date) BETWEEN '1950' AND '1980' ORDER BY release_date; 
// Devuelve el título, us_gross y worldwide_gross de todas aquellas películas donde us_gross o worldwide_gross sea 0
// SELECT title, us_gross, worldwide_gross FROM movies WHERE us_gross = 0 OR worldwide_gross = 0; 
// Devuelve el título y el us_gross de las 50 películas con la recaudación en Estados Unidos (us_gross) más pobre
// SELECT title, us_gross FROM movies ORDER BY us_gross LIMIT 50; 
// Devuelve el título y source de aquellas películas cuyo título empiece por F
// SELECT title, source FROM movies WHERE title LIKE 'F%'; 
// Devuelve distribuidor, production_budget, creative_type, major_genre de aquellas películas cuyo production_budget es superior a 10000000 y el distribuidor es Sony Pictures
// SELECT distributor, production_budget, creative_type, major_genre FROM movies WHERE production_budget > 10000000 AND distributor = 'Sony Pictures'; 

module.exports = {}