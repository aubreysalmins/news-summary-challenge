// The Model is the Data and contains the Data Logic

class NewsModel {
  constructor() {
    this.articleHeadlines = []
  }

    getArticleHeadline() {
      return this.articleHeadlines;
    }

    setArticleHeadline(headlines) {
      this.articleHeadlines = headlines;
    }

}

module.exports = NewsModel;