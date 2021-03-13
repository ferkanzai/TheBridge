-- 1
SELECT yr,
  subject,
  winner
FROM nobel
WHERE yr = 1950;
-- 2
SELECT winner
FROM nobel
WHERE yr = 1962
  AND subject = 'Literature';
-- 3
SELECT yr,
  subject
FROM nobel
WHERE winner = 'Albert Einstein';
-- 4
SELECT winner
FROM nobel
WHERE subject = 'Peace'
  AND yr > 1999;
-- 5
SELECT yr,
  subject,
  winner
FROM nobel
WHERE subject LIKE 'Literature'
  AND yr BETWEEN 1980 AND 1989;
-- 6
SELECT *
FROM nobel
WHERE winner IN (
    'Theodore Roosevelt',
    'Woodrow Wilson',
    'Jimmy Carter',
    'Barack Obama'
  ) -- 7
SELECT winner
FROM nobel
WHERE winner LIKE 'John%';
-- 8
SELECT *
FROM nobel
WHERE (
    subject = 'Physics'
    AND yr = 1980
  )
  OR (
    subject = 'Chemistry'
    AND yr = 1984
  );
-- 9
SELECT *
FROM nobel
WHERE subject NOT IN ('Chemistry', 'Medicine')
  AND yr = 1980;
-- 10
SELECT *
FROM nobel
WHERE (
    subject = 'Medicine'
    AND yr < 1910
  )
  OR (
    subject = 'Literature'
    AND yr > 2003
  );
-- 11
SELECT *
FROM nobel
WHERE winner LIKE 'Peter Grünberg' -- 12
SELECT *
FROM nobel
WHERE winner LIKE 'Eugene O''Neill';
-- 13
SELECT winner,
  yr,
  subject
FROM nobel
WHERE winner LIKE 'Sir%'
ORDER BY yr DESC,
  winner ASC;
-- 14
SELECT winner,
  subject
FROM nobel
WHERE yr = 1984
ORDER BY CASE
    WHEN subject IN ('Physics', 'Chemistry') THEN 1
    ELSE 0
  END,
  subject,
  winner;
-- Este da error pero según el vídeo que hay debería funcionar
SELECT winner,
  subject
FROM nobel
WHERE yr = 1984
ORDER BY subject IN ('Physics', 'Chemistry'),
  subject,
  winner;