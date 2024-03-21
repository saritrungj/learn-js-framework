function ProfilePicture() {
  const imageUrl = 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403'

  const handleClick = (e) => {
    e.target.style.display = "none";
  }
  return (
    <img onClick={(e) => handleClick(e)} src={imageUrl}/>
  )
}

export default ProfilePicture