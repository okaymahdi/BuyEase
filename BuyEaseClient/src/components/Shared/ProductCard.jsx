import { Link } from 'react-router-dom'

const ProductCard = () => {
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-md">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <Link to="/login">
            <button
              type="submit"
              className="font-bold bg-gray-50 text-Red py-2 px-4 rounded-md border border-Red hover:border-Red outline-none hover:bg-Red hover:text-gray-50 transition-all duration-1000 delay-75 ease-in-out"
            >
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
