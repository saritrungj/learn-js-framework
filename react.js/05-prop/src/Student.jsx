import PropTypes from 'prop-types'

function Student(props) {
  return (
    <div className="container">
      <div className="student">
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>isStudent: {props.isStudent ? "Yes" : "No"}</p>
      </div>
    </div>
  )
}

// validate types of value
Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool
}

Student.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false
}

export default Student