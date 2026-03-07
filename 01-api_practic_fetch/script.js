let currentStart = 0

document.getElementById('loadPosts').addEventListener('click', () => {
  currentStart = 0 // Скидаємо старт до початку
  loadPosts(currentStart)
})

document.getElementById('loadMorePosts').addEventListener('click', () => {
  currentStart += 5 // Додаємо 5 до поточного значення старту
  loadPosts(currentStart)
})

function loadPosts(start) {
  const loadingElement = document.getElementById('loading')
  loadingElement.style.display = 'block'
  fetch('https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=5')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Сталася помилка')
      }
      return response.json()
    })
    .then((data) => {
      const postsList = document.querySelector('#posts')
      if (start === 0) postsList.innerHTML = ''
      data.forEach((post) => {
        const li = document.createElement('li')
        li.textContent = post.title
        postsList.appendChild(li)
      })
      loadingElement.style.display = 'none'
    })
    .catch((error) => {
      console.error('Помилка', error)
      loadingElement.style.display = 'none'
    })
}
