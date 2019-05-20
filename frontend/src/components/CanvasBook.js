import React, { Component } from 'react'

class CanvasBook extends Component {

  componentDidMount = () => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/books/jsapi.js"
    script.async = true;
    script.onload = () => this.scriptLoaded()
    document.body.appendChild(script);
  }

  scriptLoaded = () => {
    window.google.books.load({"language": "es"})
    const initialize = () => {
      var viewer = new window.google.books.DefaultViewer(document.getElementById(this.props.id))
      viewer.load(this.props.id)
    }
    window.google.books.setOnLoadCallback(initialize)
    
  }

  render() {
    const { id } = this.props
    return (
      <>
       <div id={id} style={{width: "100px", height: '100px'}}></div> 
      </>
    )
  }
}

export default CanvasBook
