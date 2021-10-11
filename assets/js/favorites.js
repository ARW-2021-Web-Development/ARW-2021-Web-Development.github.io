function getFavorites() {
  return new Map(Object.entries(JSON.parse(localStorage.getItem('favorites'))))
}

function setFavorites(favs) {
  console.log(favs)
  localStorage.setItem('favorites', JSON.stringify(Object.fromEntries(favs)))
}
