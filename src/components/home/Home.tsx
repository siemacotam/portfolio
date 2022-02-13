import me from '../../images/me.jpg'

const Home = () => {
  return (
    <div className="home">
      <div className="home__imgWrapper">
        <img className="home__img" src={me} alt="" />
      </div>
    </div>
  )
}

export default Home
