const apiKey = 'fbc548c48bb54a308f0e857ca9b041a3';

function getNews() {
  fetch(
    `https://newsapi.org/v2/everything?q=bitcoin&from=2019-09-17&sortBy=publishedAt&apiKey=fbc548c48bb54a308f0e857ca9b041a3`
  )
    .then(response => response.json())
    .then(news => console.log(news));
}

getNews();
