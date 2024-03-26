import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

export class News extends Component {

    static defaultProps = {
      country : 'in',
      pageSize : 8,
      category : 'General'
    }

    static propTypes = {
      country : PropTypes.string,
      pageSize : PropTypes.number,
      category : PropTypes.string
    }

    constructor() {
        super();
        console.log("hello I'm constructor from news component.")
        this.state = {
            articles : [],
            loading : true,
            page : 1,
            totalResults : 0
        }
    }

    async componentDidMount() {
      console.log("CDM")
      this.props.setProgress(0)
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading : false})
      let data = await fetch(url);
      this.props.setProgress(25)
      let parsedData = await data.json()
      this.props.setProgress(50)
      console.log("parsed date : ", parsedData)
      this.setState({
        articles : parsedData.articles,
        totalResults : parsedData.totalResults,
        loading : false
      })
      this.props.setProgress(100)
    }

    // handlePrevClick = async () => {
    //   console.log("previous clicked")
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=db927250299d449c83d67e1683b1adcc&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    //   this.setState({loading : false})
    //   let data = await fetch(url);
    //   let parsedData = await data.json()
    //   console.log("parsed date : ", parsedData)
    //   this.setState({
    //     page : this.state.page - 1,
    //     articles : parsedData.articles,
    //     loading : false})
    // }

    handleNextClick = async () => {
      console.log("next clicked")
      if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))) {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading : false})
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log("parsed date : ", parsedData)
        this.setState({
          page : this.state.page + 1,
          articles : parsedData.articles,
        loading : false})
      }
    }

    fetchMoreData = async () => {
      this.setState({page: this.state.page + 1})
      this.handleNextClick()
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log("parsed date : ", parsedData)
      this.setState({
        page : this.state.page - 1,
        articles : this.state.articles.concat(parsedData.articles)
      })
    }

    render() {
      return (
        <>
          <h1 className="text-center">News Monkey top headlines</h1>
          {this.state.loading && <Spinner/>}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner/>}
          >
            <div className="container">
              <div className="row">
                {/* {!this.state.loading && this.state.articles.map((element)=> { */}
                {!this.state.loading && this.state.articles.map((element)=> {
                  return <div className="col-md-4" key={element.url}>
                    <NewsItem  
                      title={element.title?element.title:""} 
                      description={element.description?element.description:""} 
                      imageUrl={element.urlToImage} 
                      newsUrl={element.url} 
                      author={element.author} date={element.publishedAt}
                    />
                  </div>
                })}
              </div>
            </div>
          </InfiniteScroll>
          
          {/* <div className="container d-flex justify-content-between">
            <button type="button" disabled={this.state.page <=1} className="&larr; btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
            <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark &rarr;" onClick={this.handleNextClick}>Next &rarr;</button>
          </div> */}
        </>
      )
    }
}

export default News