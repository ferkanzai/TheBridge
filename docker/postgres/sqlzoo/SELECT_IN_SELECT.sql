-- 1
SELECT name
FROM world
WHERE population > (
    SELECT population
    FROM world
    WHERE name = 'Russia'
  );
-- 2
SELECT name
FROM world
WHERE continent LIKE 'Europe'
  AND gdp / population > (
    SELECT gdp / population
    FROM world
    WHERE name = 'United Kingdom'
  );
-- 3
SELECT name,
  continent
FROM world
WHERE continent IN (
    SELECT continent
    FROM world
    WHERE name IN ('Argentina', 'Australia')
  )
ORDER BY name;
-- 4
SELECT name,
  population
FROM world
WHERE population > (
    SELECT population
    FROM world
    WHERE name = 'Canada'
  )
  AND population < (
    SELECT population
    FROM world
    WHERE name = 'Poland'
  );
-- 5
SELECT name,
  CONCAT(
    CAST(
      ROUND(
        100 * population /(
          SELECT population
          FROM world
          WHERE name = 'Germany'
        ),
        0
      ) AS int
    ),
    '%'
  ) AS percentage
FROM world
WHERE continent = 'Europe';
-- 6
SELECT name
FROM world
WHERE gdp > ALL(
    SELECT gdp
    FROM world
    WHERE continent = 'Europe'
      AND gdp > 0
  );
-- 7
SELECT continent,
  name,
  area
FROM world x
WHERE area >= ALL (
    SELECT area
    FROM world y
    WHERE y.continent = x.continent
      AND area > 0
  );
-- 8
SELECT continent,
  name
FROM world x
WHERE x.name <= ALL(
    SELECT y.name
    FROM world y
    WHERE x.continent = y.continent
  )
ORDER BY continent;
-- 9
SELECT name,
  continent,
  population
FROM world
WHERE continent IN(
    SELECT continent
    FROM world
    GROUP BY continent
    HAVING SUM(population) < 50000000
  );
-- 10
SELECT x.name,
  x.continent
FROM world AS x
WHERE x.population / 3 > ALL (
    SELECT y.population
    FROM world AS y
    WHERE x.continent = y.continent
      AND x.name != y.name
  );
