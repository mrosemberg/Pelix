import Link from "next/link";
import fetch from 'isomorphic-unfetch';
// import Header from "../components/Header";
// import Movies from '../components/Movies';

const Index = props => (
   <div>
      <h1>Series</h1>
      
      <div>
        {props.movies.map(movie => (
            <span key={movie.id}>
                <Link href="/m/[id].js" as={`/m/${movie.id}`}>
                    {/* <a>{movie.name}</a> */}
                    <img src={movie.image.medium}/>
                </Link>
            </span>
        ))} 
      </div>
   </div>
);

Index.getInitialProps = async function () {
  const res   = await fetch('http://api.tvmaze.com/shows');
  const data  = await res.json();

  console.log(`Fetched. Total: ${data.length}`);
  
  return {
      movies : data
  };
};

export default Index;