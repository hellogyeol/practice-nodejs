console.log('test')
const h3 = document.querySelector('.h3')
h3.style.color = 'red'

const btn = document.querySelector('.btn')
btn.addEventListener('click', async () => {
  let res = await fetch('http://localhost:3000/test2')
  let wow = await res.text()
  console.log(wow)
})