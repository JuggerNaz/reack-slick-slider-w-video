import React from 'react';
import Slider from 'react-slick';

export default ({settings}) => {
  return(
  <Slider { ...settings }>
  
    <div><img src='http://placekitten.com/g/400/200' /></div>
    <div><img src='http://placekitten.com/g/400/200' /></div>
    <div><img src='http://placekitten.com/g/400/200' /></div>
    <div><img src='http://placekitten.com/g/400/200' /></div>
  
  </Slider>
  )
}