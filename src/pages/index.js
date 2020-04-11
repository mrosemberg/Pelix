import Link from "next/link";
import fetch from 'isomorphic-unfetch';
import Layout from "../components/Layout";

const Index = props => (
  <Layout>
     <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Noto+Sans&display=swap');

        body {
            background-color: #181818;
            background-image: linear-gradient(to bottom right, #b30077, #ff470f);
            background-image: none;
            color: #fff;
            height: 100%;
            margin: 0;
            font-family: 'Noto Sans', sans-serif;
        }

        .navbar{
            background: #000;
            display: block;
            padding: 12px 0;
            z-index: 500;
        }

        .navbar img{
            width: 120px;
            align-items: center;
            margin: 0;
            padding: 0;
        }

        .content{
            background-image: url("https://assets.nflxext.com/ffe/siteui/vlv3/3b48f428-24ed-4692-bb04-bc7771854131/9150ecb7-5e45-4460-a05e-187e84695eac/PY-es-20200302-popsignuptwoweeks-perspective_alpha_website_medium.jpg");
            background-attachment: fixed;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }

        .basic-grid{
            background-color: rgba(0, 0, 0, 0.55);
            display: grid;
            gap: 3rem;
            grid-template-columns: repeat(auto-fit, minmax(220px, 2fr));
        }

        .card {
            margin-top: 10px;
            margin-left: 5px;
            margin-right: 5px;
            padding: 1px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 3rem;
            color: #fff;
            background-color: rgba(0, 0, 0, 0.65);
            box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem, rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;
            height: 100%;
            border-radius: 4px;
            transition: all 500ms;
            overflow: hidden;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }
          
        .card:hover {
            box-shadow: rgba(2, 8, 20, 0.1) 0px 0.35em 1.175em, rgba(2, 8, 20, 0.08) 0px 0.175em 0.5em;
            transform: translateY(-3px) scale(1.0);
        }
     `}</style>

     <div className="basic-grid">
        {props.movies.map(movie => (
            <div key={movie.id} className="card">
                <Link href="/m/[id].js" as={`/m/${movie.id}`}>
                    {/* <a>{movie.name}</a> */}
                    <img src={movie.image.medium}/>
                </Link>
            </div>
        ))} 
      </div>      
  </Layout>
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