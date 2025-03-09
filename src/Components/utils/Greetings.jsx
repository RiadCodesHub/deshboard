import React from 'react'
import PropTypes from 'prop-types'

const Greetings = ({name}) => {
  const greetingTime = () => {
    let time = new Date().getHours();
    if (time >= 12 && time < 18) {
      return 'Good Afternoon,'; 
    }
    else if (time >= 18 && time < 24) {
      return "Good Evening,";
    }
    else if(time >= 0 && time < 4){
      return 'Good Night,';
    }
    else {
      return 'Good Morning,';
    }
  }
  return (
    <div>
      <h1>{greetingTime()} {name}</h1>
    </div>
  )
}

Greetings.propTypes = {
  name: PropTypes.string.isRequired
}

export default Greetings