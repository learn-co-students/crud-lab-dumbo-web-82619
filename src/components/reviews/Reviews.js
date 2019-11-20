import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    // console.log(this.props)
    const { deleteReview } = this.props
    return (
      <ul>
        {this.props.reviews.map(review => {
          return <Review key={review.id} review={review} deleteReview={deleteReview} />
        })}
      </ul>
    );
  }
};

export default Reviews;