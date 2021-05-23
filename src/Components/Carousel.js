// * React: //
import React, { Component, useRef, useState } from 'react';
// * Styles: //
import './main-style.scss';
// * God, forgive me for what I'm about to do! //
import { useSwipeable } from 'react-swipeable';
// * Arrow images: // 
import leftArrow from './Images/left-arrow.png'
import rightArrow from './Images/right-arrow.png'

// ! Carousel photo component //
export const CarouselPhoto = ({ children, width }) => {
  return (
    <div className="carousel-photo" style={{ width: width }} >
      { children }
    </div>
  )
}
// ! === Carousel photo component === ! //


// ! Main carousel component //
export const Carousel = ({ children }) => {
  const [activeIndx, setActiveIndx] = useState(0);
  // * Update the photo's index: //
  const updateIndex = (newIndex) => {
    // * Make an infinite carousel: //
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    }
    else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    } 
    setActiveIndx(newIndex);
  }

  // ! Make a finger-swipe //
    // * P.S. I know that using third-party libraries is prohibited, but I honestly don't know how to make finger-following slides... Perhaps I'm too inexperienced for the internship?  //
    const handlers = useSwipeable({
      onSwipedLeft: () => updateIndex(activeIndx + 1),
      onSwipedRight: () => updateIndex(activeIndx - 1)
    })     
  // ! === Make a finger-swipe ===  ! //

    return (
      <div { ...handlers } className="carousel">
        <div id="test" className="inner" style={{transform: `translateX(-${activeIndx * 100}%)`}}>
          {React.Children.map(children, (child, indx) =>{
            return React.cloneElement(child, { width: "100%" })
          })}
        </div>
  {/* ! Buttons */}
          {/* Move Left: */}
        <div className="move-bttns">
          <div className="moveLeft" onClick={() => {
            updateIndex(activeIndx - 1)
          }}>
            <img id="prevSlide" className="left-arrow" src={ leftArrow }></img>
          </div>
          

        {/* Photo Labels: */}
          {React.Children.map(children, (child, indx) => {
            return (
              <button className={`${indx === activeIndx ? "active" : 'label'}`} onClick={() => {updateIndex(indx)}}></button>
            )
          })}
        {/* === Photo Labels === */}

            {/* Move Right */}
          <div className="moveRight" onClick={() => {
            updateIndex(activeIndx + 1)
          }}>
             <img id="nextSlide" className="right-arrow" src={ rightArrow }></img>
          </div>
      </div>
  {/* === Buttons ===  */}
      </div>
    )

  }

export default Carousel;  