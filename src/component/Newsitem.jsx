import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, date, author, source } =
      this.props;
    return (
      <div className="card my-2">
        <span className="position-absolute top-0 start-50 bg-primary badge translate-middle">
          {source}
        </span>
        <img
          className="card-img-top"
          src={
            imgUrl == null
              ? "https://i1.sndcdn.com/artworks-000104833612-z2icw6-t500x500.jpg"
              : imgUrl
          }
          alt="Card_cap"
        />
        <div className="card-body">
          <h5 className="card-title">
            {title == null ? "No-Authur" : title.slice(0, 65) + "..."}
          </h5>
          <p className="card-text">
            {description == null
              ? "No-description"
              : description.slice(0, 150) + "..."}
          </p>
          <p className="text-muted">By-{author == null ? "Unknown" : author}</p>
          <div className="d-flex justify-content-between">
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className={
                newsUrl != null ? "btn btn-primary" : "btn btn-light Disabled"
              }
            >
              Read More
            </a>
            <p style={{ "fontSize": "13px" }}>
              {new Date(date).toGMTString()}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
