import React, { Component } from 'react'
import { GoogleAPiWrapper } from 'google-maps-react'

export class CanvasBook extends Component {

  componentDidMount() {
    window.google.books.load({"language": "es"})

    const initialize = () => {
      var viewer = new window.google.books.DefaultViewer(document.getElementById('canvas-book'))
      viewer.load(this.props.id, bookNotFound)
    }

    const bookNotFound = () => {
      document.getElementById('canvas-book').innerHTML="<h1>No Preview! :(</h1>";
    }       

    window.google.books.setOnLoadCallback(initialize)
  }

  render() {
    return (
      <>
       <div className="mx-auto mt-5" id="canvas-book" style={{width: "500px", height: '800px'}}></div> 
      </>
    )
  }
}

export default CanvasBook
