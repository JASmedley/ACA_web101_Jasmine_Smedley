const placeForResults = document.getElementById("results")

new URLSearchParams(window.location.search).forEach((value, name) => {
  placeForResults.append(`${name} : ${value}`)
  placeForResults.append(document.createElement("br"))
})

const ShopDropdownMenu = () => {
  const menus = document.querySelector(".menus")
  menus.classList.toggle("showMenu")
}