const axios = require("axios");

const getNews = async (req, res) => {
  try {
    const apiKey = "ed5918e659644e5cb3939a5794d24778";
    const newsApiUrl = `https://newsapi.org/v2/everything?q=sampah&apiKey=${apiKey}`;

    const response = await axios.get(newsApiUrl);
    const newsData = response.data;

    const formattedNews = {
      status: "ok",
      totalResults: newsData.totalResults,
      articles: newsData.articles.map((article) => ({
        source: {
          id: article.source?.id,
          name: article.source?.name,
        },
        author: article.author,
        title: article.title,
        description: article.description,
        url: article.url,
        urlToImage: article.urlToImage,
        publishedAt: article.publishedAt,
        content: article.content,
      })),
    };

    res.status(200).json(formattedNews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};

module.exports = { getNews };
