card1 = document.getElementById('c1')
card2 = document.getElementById('c2')
card3 = document.getElementById('c3')

card1.addEventListener('click', e => {
    console.log(e)
    card1.style.color = 'white'
    card1.style.backgroundColor = 'black'
    card2.style.color = 'black'
    card2.style.backgroundColor = 'white'
    card3.style.color = 'black'
    card3.style.backgroundColor = 'white'
})

card2.addEventListener('click', e => {
    console.log(e)
    card2.style.color = 'white'
    card2.style.backgroundColor = 'black'
    card1.style.color = 'black'
    card1.style.backgroundColor = 'white'
    card3.style.color = 'black'
    card3.style.backgroundColor = 'white'
})

card3.addEventListener('click', e => {
    console.log(e)
    card3.style.color = 'white'
    card3.style.backgroundColor = 'black'
    card1.style.color = 'black'
    card1.style.backgroundColor = 'white'
    card2.style.color = 'black'
    card2.style.backgroundColor = 'white'
})
