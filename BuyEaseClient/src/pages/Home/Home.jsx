import FeaturedProducts from '../../components/Home/FeaturedProducts'
import Hero from '../../components/Home/Hero'
import Testimonials from '../../components/Home/Testimonials'

const Home = () => {
  return (
    <>
      <Hero />
      <div className="mt-24">
        <h2 className="font-bold text-Dark_1 text-4xl mb-8 text-center">
          Featured Products
        </h2>
        <FeaturedProducts />
      </div>
      <div className="my-24">
        <h2 className="font-bold text-Dark_1 text-4xl mb-8 text-center">
          Testimonials
        </h2>
        <Testimonials />
      </div>
    </>
  )
}

export default Home
