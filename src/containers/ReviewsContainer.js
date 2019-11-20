import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from "react-redux"

class ReviewsContainer extends Component {

  render() {
    console.log(this.props)
    const { restaurantId } = this.props
    return (
      <div>
        <ReviewInput restaurantId={restaurantId} addReview={this.props.addReview} />
        <Reviews reviews={this.props.reviews.filter(review => review.restaurantId === restaurantId)} deleteReview={this.props.deleteReview} />
      </div>
    )
  }
}

const mapStateToProps = ({reviews}) => ({reviews})

const mapDispatchToProps = dispatch => ({
  addReview: review => dispatch({ type: 'ADD_REVIEW', review }),
  deleteReview: id => dispatch({type: 'DELETE_REVIEW', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
