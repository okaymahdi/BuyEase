import ProductCard from '../Shared/ProductCard'

const FeaturedProducts = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 space-y-4">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  )
}

export default FeaturedProducts
