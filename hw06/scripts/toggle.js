// ------------------------------------
// PART 1
// ------------------------------------
const toggleLike = () => {
  if (document.querySelector('#like').classList.contains('active')) {
    document.querySelector('#like').classList.remove('active')
  } else document.querySelector('#like').classList.add('active')
}

// ------------------------------------
// PART 2
// ------------------------------------
  const toggle = () => {
  document.querySelector('#likes').classList.toggle('active')
}
