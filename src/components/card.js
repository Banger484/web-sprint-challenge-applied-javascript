/* eslint-disable no-unused-vars */
const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const card = document.createElement('div');
  const cardHeadline = document.createElement('div');
  const cardAuthor = document.createElement('div');
  const cardImg = document.createElement('div');
  const authorImg = document.createElement('img');
  const authorName = document.createElement('span');

  card.appendChild(cardHeadline);
  card.appendChild(cardAuthor);
  cardAuthor.appendChild(cardImg);
  cardAuthor.appendChild(authorName);
  cardImg.appendChild(authorImg);

  card.classList.add('card');
  cardHeadline.classList.add('headline');
  cardAuthor.classList.add('author');
  cardImg.classList.add('img-container');
  
  cardHeadline.textContent = `${article.headline}`;
  authorImg.src = `${article.authorPhoto}`;
  authorName.textContent = `${article.authorName}`

  card.addEventListener('click', console.log(`${article.headline}`))

  return card
  
}
import axios from "axios";
const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  
  axios.get(`http://localhost:5000/api/articles`)
  .then(response => {
    const newObj = response.data.articles
    Object.values(newObj).forEach(section => {
      section.forEach(element => {
        const newCard = Card(element);
        document.querySelector(selector).appendChild(newCard)
    })
    })
  }).catch(error => {
    console.error(error)
  })
}

export { Card, cardAppender }
