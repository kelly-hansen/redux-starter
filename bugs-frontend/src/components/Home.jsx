import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Link to="/bugs">Bugs List</Link>
    </>
  )
}

export default Home;
