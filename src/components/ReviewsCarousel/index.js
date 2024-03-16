import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    currentReviewIndex: 0,
  }

  onClickLeftArrowBtn = () => {
    const {currentReviewIndex} = this.state
    if (currentReviewIndex > 0) {
      this.setState(prevState => ({
        currentReviewIndex: prevState.currentReviewIndex - 1,
      }))
    }
  }

  onClickRightArrowBtn = () => {
    const {currentReviewIndex} = this.state
    const {reviewsList} = this.props

    if (currentReviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        currentReviewIndex: prevState.currentReviewIndex + 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {currentReviewIndex} = this.state
    const currentReview = reviewsList[currentReviewIndex]
    const {imgUrl, username, companyName, description} = currentReview

    return (
      <div className="app-container">
        <h1 className="heading">Reviews</h1>
        <div className="reviews-container">
          <button
            type="button"
            className="arrow-button"
            data-testid="leftArrow"
            onClick={this.onClickLeftArrowBtn}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>

          <div className="review-list-item">
            <img src={imgUrl} alt={username} />
            <p className="username">{username}</p>
            <p className="company">{companyName}</p>
            <p className="description">{description}</p>
          </div>

          <button
            type="button"
            className="arrow-button"
            data-testid="rightArrow"
            onClick={this.onClickRightArrowBtn}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
