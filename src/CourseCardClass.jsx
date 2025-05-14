import './CourseCard.css'
import { Component } from 'react';

class CourseCardClass extends Component{
  constructor(props) {
    super(props)
  }
  render() {
    const {imageUrl, name, isNew, price, language, duration, location, introduction} = this.props.data
    return (
      <div className='coursecard'>
        <img src={imageUrl}/>
        <div className='coursecard__overlay'>
          <div className='header'>
            <h2 className='title'>{name}</h2>
            {isNew ? <img className='badge' src='src/images/badge.png'/> : ''}
          </div>
          <div className='content'>
            <p>{`Price: ${price}`}</p>
            <p>{`Language: ${language}`}</p>
            <p>{`Duration: ${duration}`}</p>
            <p>{`Location: ${location}`}</p>
            <p>{`Introduction: ${introduction}`}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CourseCardClass