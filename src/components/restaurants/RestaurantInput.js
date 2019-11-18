import React, {Component} from 'react'

const initialState = {
  text: ''
}

class RestaurantInput extends Component {

  state = initialState

  handleOnChange = (event) => {
    this.setState({
      text: event.target.value
    })  
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState(initialState)
  }

  render() {
    return (
      <div>
        Restaurant Input
        <form onSubmit={this.handleOnSubmit}>
          <input
            type='text'
            value={this.state.text}
            onChange={this.handleOnChange}
          />
          <input type='submit'/>
        </form>
      </div>
    )
  }
}

export default RestaurantInput
