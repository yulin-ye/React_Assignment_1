import './CourseCard.css'

const CourseCard = ({data}) => {
  const {imageUrl, name, introduction, price, language, duration, location, isNew} = data

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
};

export default CourseCard;
