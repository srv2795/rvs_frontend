import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

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
            loading : false,
            page : 1
        }
    }

    async componentDidMount() {
      console.log("CDM")
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=db927250299d449c83d67e1683b1adcc&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading : true})
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log("parsed date : ", parsedData)
      this.setState({
        articles : parsedData.articles,
        totalResults : parsedData.totalResults,
        loading : false
      })
    }

    handlePrevClick = async () => {
      console.log("previous clicked")
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=db927250299d449c83d67e1683b1adcc&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading : true})
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log("parsed date : ", parsedData)
      this.setState({
        page : this.state.page - 1,
        articles : parsedData.articles,
        loading : false})
    }

    handleNextClick = async () => {
      console.log("next clicked")
      if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))) {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=db927250299d449c83d67e1683b1adcc&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading : true})
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log("parsed date : ", parsedData)
        this.setState({
          page : this.state.page + 1,
          articles : parsedData.articles,
        loading : false})
      }
    }

    render() {
      return (
        <div className="container my-3">
          <h1 className="text-center">News Monkey top headlines</h1>
          {this.state.loading && <Spinner/>}
          <div className="row">
            {!this.state.loading && this.state.articles.map((element)=> {
              return <div className="col-md-4" key={element.url}>
                <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl= {element.url}/>
              </div>
            })}
          </div>
          <div className="container d-flex justify-content-between">
            <button type="button" disabled={this.state.page <=1} className="&larr; btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
            <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark &rarr;" onClick={this.handleNextClick}>Next &rarr;</button>
          </div>
        </div>
      )
    }
}

export default News