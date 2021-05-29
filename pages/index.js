import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function Home({ movies }) {
  console.log(movies);
  return (
    <>
    <Head><title>Anasayfa</title></Head>
    <div className={styles.container}>
        <div className="grid md:grid-cols-5 sm:grid-cols-3  grid-cols-2 gap-5">

            {movies.results.map((movie) => (
              <div className={styles.movie}>
                <Link href={`/film/${movie.id}`}>
                  <a>
                    <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} alt="" />
                    <h3>{movie.title}</h3>
                  </a>
                </Link>
              </div>
            ))}

        </div>
        
      
    </div>
    </>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=969a902bed6aa7ea1e78401d7330c552&language=tr-TR&page=1`);
  const movies = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      movies,
      title: 'Anasayfa'
    },
  }
}
