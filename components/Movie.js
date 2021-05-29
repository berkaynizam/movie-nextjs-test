// posts will be populated at build time by getStaticProps()
function Movie({ movies }) {
  console.log(movies);
    return (
      <div>test</div>
    )
  }
  
  // This function gets called at build time on server-side.
  // It won't be called on client-side, so you can even do
  // direct database queries. See the "Technical details" section.
  export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=969a902bed6aa7ea1e78401d7330c552&language=en-US&page=1`);
    const movies = await res.json();
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        movies
      },
    }
  }

  
  
  export default Movie