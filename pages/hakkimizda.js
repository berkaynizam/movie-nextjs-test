export default function About() {
  return (
    <>
        hakkımızda
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Hakkımızda'
    },
  }
}