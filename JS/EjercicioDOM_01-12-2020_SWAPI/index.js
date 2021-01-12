filmsUrl = 'https://swapi.dev/api/films/'
peopleUrl = 'https://swapi.dev/api/people/'

const getFilms = async () => {

  const res = await fetch(filmsUrl)
  const data = await res.json()

  // console.log(data.results)

  const formattedFilms = data.results.map((film) => ({
    title: film.title,
    release_date: film.release_date.split('-')[0]
  }))

  const dates = formattedFilms.map(el => el.release_date)
  const movies = formattedFilms.map(el => el.title)
  // console.log(formattedFilms)
  // console.log(dates)

  const filmData = {
    labels: movies,
    series: [dates]
  }

  const filmOptions = {
    lineSmooth: false,
    showLine: false,
    axisY: {
      scaleMinSpace: 10,
      onlyInteger: true
    },
    low: 1976,
    high: 2006
  }

  new Chartist.Line('#film-chart', filmData, filmOptions);


  const ctx = document.getElementById('myChart').getContext('2d');
  const chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: movies,
        datasets: [{
            label: 'Release date',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: dates
        }]
    },

    // Configuration options go here
    options: {}
  });
}

const getPeople = async () => {

  const res = await fetch(peopleUrl)
  const data = await res.json()

  // console.log(data.results)

  const formattedPeople = data.results.map((person) => ({
    name: person.name,
    number_of_films: person.films.length
  }))

  // console.log(formattedPeople)

  const names = formattedPeople.map(el => el.name)
  const filmsNumber = formattedPeople.map(el => el.number_of_films)

  const peopleData = {
    labels: names,
    series: [filmsNumber]
  }

  const peopleOptions = {
    axisX: {
      showGrid: false
    },
    axisY: {
      scaleMinSpace: 50,
      onlyInteger: true
    },
    high: 7
  }

  new Chartist.Bar('#people-chart', peopleData, peopleOptions)

  const pieData = {
    labels: names,
    series: filmsNumber
  };
  
  const pieOptions = {
    labelInterpolationFnc: function(value) {
      return value[0]
    }
  };

  new Chartist.Pie('#pie-chart', pieData, {donut: true}, pieOptions)
}

const start = async () => {
  await getFilms()
  await getPeople()
}

start()