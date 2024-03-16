import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
articles = [
    {
       "source": {
    "id": "fox-news",
    "name": "Fox News"
    },
    "author": "Louis Casiano",
    "title": "Boeing plane missing external panel lands in Oregon airport, United Airlines says - Fox News",
    "description": "A United Airlines plane landed at an Oregon airport on Friday missing an external panel, the airline said.",
    "url": "https://www.foxnews.com/us/boeing-plane-missing-external-panel-lands-oregon-airport-united-airlines-say",
    "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2021/01/iStock-1166416423.jpg",
    "publishedAt": "2024-03-15T23:43:00Z",
    "content": "Join Fox News for access to this content\r\nPlus special access to select articles and other premium content with your account - free of charge.\r\nPlease enter a valid email address.\r\nBy entering your e… [+3055 chars]"
    },
    {
       "source": {
    "id": null,
    "name": "9News.com KUSA"
    },
    "author": "Sahar Chmais and Brent Wistrom (Denver Business Journal)",
    "title": "Outdoor retailer to close Denver store as company takes business online - 9News.com KUSA",
    "description": "The company opened a 2,000-square-foot location in the River North Art District in 2021.",
    "url": "https://www.9news.com/article/money/business/denver-store-close-outdoor-voices-retailer/73-7c94c6ab-37c9-4a09-93c2-e74a5c43e8a9",
    "urlToImage": "https://media.9news.com/assets/KUSA/images/c274c049-cec4-432c-877c-9c840940edc4/c274c049-cec4-432c-877c-9c840940edc4_1140x641.jpg",
    "publishedAt": "2024-03-15T22:48:00Z",
    "content": "DENVER Austin, Texas-based athleisure outfitter Outdoor Voices Inc. will be closing all of its stores on March 17, a Texas store employee confirmed.\r\nThe company opened a 2,000-square-foot location a… [+1521 chars]"
    },
    {
       "source": {
    "id": null,
    "name": "Fox Business"
    },
    "author": "Brie Stimson",
    "title": "Federal government wants McDonald's broken-down ice cream machines fixed - Fox Business",
    "description": "The government is scrutinizing a law that allows the company that exclusively makes McDonald's ice cream machines to also have the exclusive right to repairs.",
    "url": "https://www.foxbusiness.com/politics/federal-government-wants-mcdonalds-broken-down-ice-cream-machines-fixed",
    "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2024/03/0/0/mcflurry.jpg?ve=1&tl=1",
    "publishedAt": "2024-03-15T22:14:00Z",
    "content": "The U.S. government is demanding that constantly broken-down soft serve ice cream machines at McDonald’s and other fast-food restaurants be more easily fixable. \r\nIn a letter to the U.S. Copyright Of… [+2457 chars]"
    },
    {
        "source": {
     "id": "cnn",
     "name": "CNN"
     },
     "author": "Nathaniel Meyersohn",
     "title": "Family Dollar stores are closing. These city officials are happy about it - CNN",
     "description": "When Vanessa Hall-Harper, a city councilor in Tulsa, Oklahoma, learned that Family Dollar was closing nearly 1,000 stores Wednesday, she had a surprising reaction.",
     "url": "https://www.cnn.com/2024/03/15/business/family-dollar-closure-city-leaders-reactions/index.html",
     "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2074378419.jpg?c=16x9&q=w_800,c_fill",
     "publishedAt": "2024-03-15T19:29:58Z",
     "content": "When Vanessa Hall-Harper, a city councilor in Tulsa, Oklahoma, learned this week that Family Dollar was closing nearly 1,000 stores, she had a surprising reaction.\r\nFor communities that have been neg… [+7247 chars]"
     },
     {
        "source": {
     "id": null,
     "name": "CNBC"
     },
     "author": "Rohan Goswami",
     "title": "Tesla to pay $42 million for employee crash that injured motorcyclist - CNBC",
     "description": "Tesla and an employee were found partially liable for a 2017 crash involving a company-owned truck, which led to a motorcyclist's traumatic brain injury.",
     "url": "https://www.cnbc.com/2024/03/15/tesla-to-pay-42-million-for-employee-crash-that-injured-motorcyclist.html",
     "urlToImage": "https://image.cnbcfm.com/api/v1/image/107332903-1699890865128-gettyimages-1779696244-cros-notitle231113_npkAD.jpeg?v=1710533535&w=1920&h=1080",
     "publishedAt": "2024-03-15T19:15:30Z",
     "content": "An Indiana jury found that electric vehicle maker Tesla and one of its employees were partially liable in a 2017 crash between a company-owned Ford truck and a motorcycle that left the motorcyclist w… [+1793 chars]"
     }
]

    constructor() {
        super();
        console.log("hello I'm constructor from news component.")
        this.state = {
            articles : this.articles,
            loading : false
        }
    }

  render() {
    return (
      <div className="container my-3">
        <h2>News Monkey top headlines...</h2>
        
            <div className="row">
                {this.state.articles.map((element)=> {
                    return <div className="col-md-4" key={element.url}>
                        <NewsItem  title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl= {element.url}/>
                    </div>
                })}
            </div>
        
      </div>
    )
  }
}

export default News