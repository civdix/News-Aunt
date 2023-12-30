import React, { Component } from "react";
import Newsitem from "./Newsitem";
import PropTypes from "prop-types";
import Loading from "./loading";
export class newsfeed extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
    q:0,
    myurl:0,
   
  };
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  };
  constructor() {
    super();
    this.state = { result: 0, articles: [], page: 1, loading: false };
  }
  async componentDidMount() {
    let pathname=window.location.pathname.slice(1);
    console.log(pathname);
    const myurll=this.props.myurl.replace("${pathname}",pathname)
    const date = new Date();
    console.log('i am CDM');
    let day = date.getDate();
    let month = date.getMonth() ;
    let year = date.getFullYear();
    let currentDate = `${year}-${month}-${day}`;
    
    const url = (this.props.myurl!==0)?`${myurll}`:`https://newsapi.org/v2/top-headlines?q=${this.props.q}&country=${this.props.country}&pageSize=30&page=${this.state.page}&from=${currentDate}&category=${this.props.category}&sortBy=publishedAt&apiKey=51ec3cf349aa4946b1cace6a46e42873`;
   console.log("this is url: "+url);
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      loading: false,
      articles: parsedData.articles,
    });
  }
  update = async () => {
    console.log('i am Update');
    const url = (this.props.myurl!==0)?`${this.props.myurl}`:`https://newsapi.org/v2/top-headlines?q=${this.props.q}&country=${this.props.country}&pageSize=30&page=${this.state.page}&from=${this.props.country}&sortBy=publishedAt&category=${this.props.category}&apiKey=51ec3cf349aa4946b1cace6a46e42873`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      loading: false,
      result: parsedData.totalResults,
    });
  };
  handleNext = async () => {
    this.setState({ page: this.state.page + 1 });
    this.update();
    // let url = `https://newsapi.org/v2/top-headlines?q=country=${
    //   this.props.country
    // }&pageSize=30&page=${
    //   this.state.page + 1
    // }&from=${this.props.country}&sortBy=publishedAt&category=${
    //   this.props.category
    // }&apiKey=51ec3cf349aa4946b1cace6a46e42873`;

    // let data = await fetch(url);
    // console.log("url =", url);

    // let parsedData = await data.json();
    // this.setState({ articles: parsedData.articles, page: this.state.page + 1 });
  };
  handlePrev = async () => {
    this.setState({ page: this.state.page - 1 });
    this.update();
    // let url = `https://newsapi.org/v2/top-headlines?q=country=${
    //   this.props.country
    // }&pageSize=30&page=${
    //   this.state.page - 1
    // }&from=${this.props.country}&sortBy=publishedAt&category=${
    //   this.props.category
    // }&apiKey=51ec3cf349aa4946b1cace6a46e42873`;
    // let data = await fetch(url);
    // console.log("url =", url);
    // console.log(url);
    // let parsedData = await data.json();
    // this.setState({ articles: parsedData.articles, page: this.state.page - 1 });
  };
  render() {
    return (
      <div className="container my-3 ">
        <hr />
        <h2 className="text-center my-3 d-block ">
          News-Aunt : {this.props.category}
        </h2>
        <hr />
        <center>{this.state.loading && <Loading />}</center>
        <div className="row d-flex justify-content-between ">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  imgUrl={element.urlToImage}
                  title={element.title}
                  newsUrl={element.url}
                  description={element.description}
                  date={element.publishedAt}
                  author={element.author}
                  source={element.source.name}
                />
              </div>
            );
          })}
          <div className="w-100 d-flex justify-content-between">
            <button
              className={
                this.state.page - 1 !== 0
                  ? "btn btn-dark"
                  : "btn btn-dark disabled"
              }
              onClick={this.handlePrev}
              type="submit"
            >
              ❮ Previous
            </button>
            <h2>Articles {this.state.result}</h2>
            <button
              className={
                this.state.result / (9 * this.state.page) > 1
                  ? "btn btn-dark"
                  : "btn btn-dark"
              }
              onClick={this.handleNext}
              type="submit"
            >
              Next ❯
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default newsfeed;
