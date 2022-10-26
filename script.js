const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=66fb5a0f6be58af8ed9d35947c071023&page=1"

const IMAGE_PATH ="https://image.tmdb.org/t/p/w500/"

const SEARCH_URL ='https://api.themoviedb.org/3/search/movie?api_key=66fb5a0f6be58af8ed9d35947c071023&query="'


getMovies(API_URL);
  const form = document.getElementById("form")
  const search = document.getElementById("search")
  const main = document.getElementById("main")

 async function getMovies(url){
const res =await fetch(url)
const data = await res.json()
displayMovies(data.results)
 
  }

  function displayMovies(movies){
main.innerHTML=''
movies.forEach((movie)=> {
    const {title,poster_path,vote_average,overview} =movie
    const moviesele = document.createElement("div")
    moviesele.classList.add("movie")
    moviesele.innerHTML=`
    <img src="${IMAGE_PATH + poster_path}" alt="${title}" >
    <div class ="movie-info">
    <h3>${title}</h3>
    <span>${vote_average}</span>
    <div class="overview">
    <h3>Overview</h3>
    ${overview}
    </div>
    </div>
    `
    main.appendChild(moviesele)
})
  }

form.addEventListener("submit" ,(e)=> {
    e.preventDefault()
    const searchVal =search.value
    if(searchVal && searchVal !==''){
        getMovies(SEARCH_URL+searchVal)
        searchVal=''
    }
    else{
        window.location.reload()
    }
  })


