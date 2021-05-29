import { useRouter } from 'next/router';
import Head from 'next/head'

export default function FilmDetay({ params, movie }){
    console.log(movie);
    const router = useRouter();
    const { url } = router.query;

    return (
        <>
            <Head><title>{movie.title}</title></Head>
        <div className="cover" style={{ width: '100%', height: '550px',backgroundSize: 'cover', backgroundImage: `url(https://www.themoviedb.org/t/p/original${movie.backdrop_path})` }}></div>
        <p>{movie.overview}</p>
        </>
    )
}

export async function getServerSideProps({ params}){
    const request = await fetch(`https://api.themoviedb.org/3/movie/${params.url}?api_key=969a902bed6aa7ea1e78401d7330c552&language=tr-TR`);
    const response = await request.json();
    return {
        props: {
            params,
            movie: response,
            title: response.title
        }
    }
}