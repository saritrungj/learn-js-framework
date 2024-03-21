function Button() {

  /*
  const handleClick = () => console.log('OUCH!');
  const handleClick_2 = (name) => console.log(`${name} Stop clicking me!`);
 
  let count = 0;
  const handleClick = (name) => {
    if(count < 3) {
      count++;
      console.log(`${name} you clicking me ${count} time/s.`);
    } else {
      console.log(`${name} stop clicking me!`);
    }
  }
   */

  const handleClick = (e) => {
    e.target.textContent = "OUCH! 😡"
  }

  return(
    <button onDoubleClick={(e) => handleClick(e)}>Click me 😁</button>
  )
}

export default Button