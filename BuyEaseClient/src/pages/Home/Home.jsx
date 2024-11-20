import FeaturedProducts from '../../components/Home/FeaturedProducts'
import Hero from '../../components/Home/Hero'

const Home = () => {
  return (
    <>
      <Hero />
      <div className="my-24">
        <h2 className="font-bold text-Dark_1 text-4xl mb-8 text-center">
          Featured Products
        </h2>
        <FeaturedProducts />
      </div>
    </>
  )
}

export default Home
