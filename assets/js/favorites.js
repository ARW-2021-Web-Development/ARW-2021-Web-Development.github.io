function getFavorites() {
  const data = JSON.parse(localStorage.getItem('favorites'))
  return new Map(data ? Object.entries(data) : data)
}

function setFavorites(favs) {
  localStorage.setItem('favorites', JSON.stringify(Object.fromEntries(favs)))
}
