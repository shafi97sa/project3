import React from 'react'
import e1 from '../images/trainers1.jpg'
import e2 from '../images/trainers2.jpg'
import e3 from '../images/trainers3.jpg'
import e4 from '../images/trainers4.jpg'
import e5 from '../images/trainers5.jpg'
import e6 from '../images/trainers6.jpg'
import '../css/Gallery.css'
function Gallery() {
  return (
    <div className="container">
            <div className="gallery">
                <figure className="gallery__item gallery__item--1">
                    <img src={e1} alt="Gallery image 1" class="gallery__img"/>
                </figure>
                <figure className="gallery__item gallery__item--2">
                    <img src={e2} alt="Gallery image 2" class="gallery__img"/>
                </figure>
                <figure className="gallery__item gallery__item--3">
                    <img src={e3} alt="Gallery image 3" class="gallery__img"/>
                </figure>
                <figure className="gallery__item gallery__item--4">
                    <img src={e4} alt="Gallery image 4" class="gallery__img"/>
                </figure>
                <figure className="gallery__item gallery__item--5">
                    <img src={e5} alt="Gallery image 5" class="gallery__img"/>
                </figure>
                <figure className="gallery__item gallery__item--6">
                    <img src={e6} alt="Gallery image 6" class="gallery__img"/>
                </figure>
            </div>
        </div>
  )
}

export default Gallery