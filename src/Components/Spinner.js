import React, { Component } from 'react'
import loading from '../loading.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className="container text-center my-3">
        <img src={loading} alt="Loading...." width="40px" height="40px" />
      </div>
    )
  }
}
