import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date} = this.props
    return (
      <div className="my-3">
        <div className="card">
            <img src={!imageUrl?"https://assets1.cbsnewsstatic.com/hub/i/r/2024/03/14/5f076666-0607-4206-bba5-cc58ef554e8f/thumbnail/1200x630/2634dad5774b04dcaec0c001962586c6/gettyimages-1412380301.jpg?v=d1d78866939020fc1f2607ef7298e4ec":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text" ><small className="text-muted">By {!author ? "Unknown" : author} at {new Date(date).toGMTString()}</small></p>
              <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read more</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
