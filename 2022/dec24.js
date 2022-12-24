const player = document.getElementById("player")

function playSong(id) {
  return player.src = `https://www.youtube.com/embed/${id}?autoplay=1`
}