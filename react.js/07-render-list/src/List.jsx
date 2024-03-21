import PropTypes from 'prop-types'

function List(props) {
  /*
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 150 },
    { id: 3, name: "banana", calories: 60 },
    { id: 4, name: "coconut", calories: 55 },
    { id: 5, name: "pineapple", calories: 195 }
  ];

  fruits.sort((a, b) => a.name.localeCompare(b.name)); // ALPHABETICAL
  fruits.sort((a, b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL
  fruits.sort((a, b) => a.calories - b.calories); // NUMERIC
  fruits.sort((a, b) => b.calories - a.calories); // REVERSE NUMERIC
 

  const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
  const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

   */

  const category = props.category;
  const itemList = props.items;
  const listItems = itemList.map(item =>
    <li key={item.id}>{item.name} : &nbsp; <b>{item.calories}</b></li>);

  return (
    <>
      <div className="list-container">
        <h3>{category}</h3>
        <ul>{listItems}</ul>
      </div>
    </>
  )
}
List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                            name: PropTypes.string,
                                            calories: PropTypes.number}))
}

List.defaultProps = {
  category: "Category",
  items: []
}

export default List