import React, {Component} from 'react'

const initialState = {
  text: ''
}

class ReviewInput extends Component {

  state = initialState

  handleOnChange = event => {
    this.setState({
      text: event.target.value,
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId})
    this.setState(initialState)
  }

  render() {
    return (
     <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Add Review</label>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleOnChange}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default ReviewInput