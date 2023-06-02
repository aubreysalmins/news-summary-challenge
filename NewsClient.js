// The Client is the Controller or Brain of the application. It controls and decides how data is displayed. The controller is the link between the view and model. The controller gets the data from the API. 

class NewsClient {
  constructor() {}

  fetchNewsStories(url) {
    return fetch(`${url}`)
      .then((response) => {
        return response.json();
      }).then((data) => {
          console.log(data);
          const newsStories = {
            webTitles: data.response.results.map(item => item.webTitle)
          }
          return newsStories
      })
  }

  
}

module.exports = NewsClient;