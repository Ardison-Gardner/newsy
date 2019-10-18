const apiKey = 'fbc548c48bb54a308f0e857ca9b041a3';

function getNews() {
  fetch(
    `https://newsapi.org/v2/everything?q=bitcoin&from=2019-09-17&sortBy=publishedAt&apiKey=${apiKey}`
  )
    .then(response => response.json())
    .then(result => renderNews({ news: result.articles }));
  c;
}

getNews();

function renderCard(title, imgLink, date) {
  return `
  <div class="card">
    <img src=${imgLink} alt="" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">
        <small class="text-muted">
          ${data}
        </small>
      </p>
    </div>
  </div>
  `;
}

function renderNews({ news }) {
  const cols = document.getElementById('cardContainer');
  news.map(
    article =>
      (cols.innerHTML += renderCard({
        title: article.title,
        imgLink: article.urlToImage,
        date: article.publishDate,
      }))
  );
}
