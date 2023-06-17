import React, { Component } from "react";
import NewsItem from "./NewsItem";
import loading from "./friends-loading.gif";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  /*articles = [
    {
      source: {
        id: "the-verge",
        name: "The Verge",
      },
      author: "Emma Roth",
      title:
        "Mt. Gox: all the news on Bitcoin’s original biggest bankruptcy scandal",
      description:
        "One of the strangest stories in crypto still isn’t over. Mt. Gox went bankrupt in 2014 after losing track of more than 650,000 Bitcoins through theft or mismanagement and its CEO was arrested. But the story didn’t end there.",
      url: "https://www.theverge.com/2014/3/21/5533272/mt-gox-missing-bitcoins",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/cT46bayUXzTSLryuplguioQYo78=/0x0:560x372/1200x628/filters:focal(280x186:281x187)/cdn.vox-cdn.com/uploads/chorus_asset/file/10987061/mt-gox-hq.0.0.jpg",
      publishedAt: "2023-06-09T17:28:51Z",
      content:
        "Filed under:\r\nByJacob Kastrenakes, a deputy editor who oversees tech and news coverage. Since joining The Verge in 2012, hes published 5,000+ stories and is the founding editor of the creators desk. … [+17914 chars]",
    },
    {
      source: {
        id: "engadget",
        name: "Engadget",
      },
      author: "Will Shanklin",
      title:
        "DOJ charges Russian nationals with laundering bitcoin in 2011 Mt. Gox hack",
      description:
        "The US Department of Justice announced today that it charged two Russian nationals for crimes related to the 2011 hacking of Mt. Gox, the now-defunct crypto exchange that was one of the world’s largest at the time. Alexey Bilyuchenko and Aleksandr Verner are …",
      url: "https://www.engadget.com/doj-charges-russian-nationals-with-laundering-bitcoin-in-2011-mt-gox-hack-184052373.html",
      urlToImage:
        "https://s.yimg.com/uu/api/res/1.2/7bRYHMiKYEn9M7nv8_ZwoQ--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-06/6946e120-06ee-11ee-bb69-ade65ccf4c1c.cf.jpg",
      publishedAt: "2023-06-09T18:40:52Z",
      content:
        "The US Department of Justice announced today that it charged two Russian nationals for crimes related to the 2011 hacking of Mt. Gox, the now-defunct crypto exchange that was one of the worlds larges… [+2217 chars]",
    },
    {
      source: {
        id: "wired",
        name: "Wired",
      },
      author: "Jessica Maddox",
      title: "The Hidden Dangers of the Decentralized Web",
      description:
        "From social networks to crypto, independently run servers are being touted as a solution to the internet’s problems. But they’re far from a magic bullet.",
      url: "https://www.wired.com/story/the-hidden-dangers-of-the-decentralized-web/",
      urlToImage:
        "https://media.wired.com/photos/6466a28c9ec11a2433532a66/191:100/w_1280,c_limit/Cons_Social.jpg",
      publishedAt: "2023-05-19T12:00:00Z",
      content:
        "When Elon Musk took over Twitter last year, many users migrated to the free and open-source platform Mastodon. Mastodon, like other decentralized social media, isnt owned by one of the major players … [+4331 chars]",
    },
  ]*/

  captializeLetter=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
  constructor(props) {
    super();
    //console.log("hello i am a constructor from  news component!!");
    this.state = {
      articles: [],
      loading: true,
      page:1,
      totalResults:0

    }
    //document.title=`${this.props.category}:NewsVishal`
  }
  async updateNews()
  {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?${this.props.country}&category=${this.props.category}&apiKey=4226c5a7c6104ade86c6fa113c053c93&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100)
  }
  async componentDidMount() {
    /*let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4226c5a7c6104ade86c6fa113c053c93&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });*/
    this.updateNews();
  }
  handlePrevClick = async () => {
    //console.log("previous");
    /*let url = `https://newsapi.org/v2/top-headlines?${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=4226c5a7c6104ade86c6fa113c053c93&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.apge - 1,
      articles: parsedData.articles,
      loading: false,
    });*/
    this.setState({page:this.state.page-1})
    this.updateNews()
  };

  handleNextClick = async () => {
    //console.log("next");
    /*if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalResults / this.props.pageSize)
      )
    ) {
      let url = `https://newsapi.org/v2/top-headlines?${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=4226c5a7c6104ade86c6fa113c053c93&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      //console.log(parsedData);

      this.setState({
        page: this.state.apge + 1,
        articles: parsedData.articles,
        loading: false,
      });
    }*/
    this.setState({page:this.state.page+1})
    this.updateNews()
  };
  fetchMoreData = async () => {
    this.setState({page:this.state.page+1});
    const url = `https://newsapi.org/v2/top-headlines?${this.props.country}&category=${this.props.category}&apiKey=4226c5a7c6104ade86c6fa113c053c93&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    //this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };
  render() {
    return (
      <>
        <h1 class="text-center" style={{margin: "35px 0px"}}>
        {this.state.loading && <img src={loading} alt="loading"/>}
          Top  {this.captializeLetter(this.props.category)} Headlines!!
        </h1>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<h4><img src={loading} alt="loading"/></h4>}
        >
        <div class="container">
            
        <div class="row">
          {this.state.articles.map((element) => {
              return (
                <div class="col md-4" key={element.url}>
                  <NewsItem
                    title={element.title?element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  ></NewsItem>
                </div>
              );
            })}
        </div>
        </div>
        </InfiniteScroll>
        </>
    );
  }
}

export default News;
