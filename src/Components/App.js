// * React: //
import React, { Component } from 'react'
// * Styles: //
import './main-style.scss'
//* Import new components here to render them in 'index.js' // 
import Carousel, { CarouselPhoto } from './Carousel'
import Header from './Header'
import Info from './Info'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Carousel>
          <CarouselPhoto>1</CarouselPhoto>
          <CarouselPhoto>2</CarouselPhoto>
          <CarouselPhoto>3</CarouselPhoto>
          <CarouselPhoto>4</CarouselPhoto>
          <CarouselPhoto>5</CarouselPhoto>
        </Carousel>
        <Info />
      </div>
    )
  }
}

export default App;