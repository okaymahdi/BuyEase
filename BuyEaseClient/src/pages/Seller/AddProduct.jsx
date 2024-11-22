import axios from 'axios'
import { useForm } from 'react-hook-form'
import useAuth from '../../Hooks/useAuth'

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const { user } = useAuth()
  const handleForm = (data) => {
    const title = data.title
    const brand = data.brand
    const price = parseFloat(data.price)
    const stock = parseInt(data.stock)
    const category = data.category
    const imageURL = data.imageURL
    const description = data.description
    const sellerEmail = user.email

    const product = {
      title,
      brand,
      price,
      stock,
      category,
      imageURL,
      description,
      sellerEmail,
    }

    const token = localStorage.getItem('access-token')
    console.log(product)

    axios
      .post('http://localhost:4000/add-product', product, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response)
      })
  }
  return (
    <div>
      <h1 className="text-2xl font-bold text-center font-Secondary mb-12">
        Add product
      </h1>
      <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
        <form onSubmit={handleSubmit(handleForm)}>
          <div className="space-y-4">
            <div className="w-full flex flex-col lg:flex-row gap-8">
              <div className="space-y-2 w-full">
                <label htmlFor="title" className="block text-sm px-2">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Product Title"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-Dark_1 focus:dark:border-Red"
                  {...register('title', { required: true })}
                />
                {errors.title && (
                  <p className="text-sm font-light text-red-500">
                    Title is Required...!
                  </p>
                )}
              </div>
              <div className="space-y-2 w-full">
                <label htmlFor="brand" className="block text-sm px-2">
                  Brand
                </label>
                <input
                  type="text"
                  name="brand"
                  id="brand"
                  placeholder="Product Brand"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-Dark_1 focus:dark:border-Red"
                  {...register('brand', { required: true })}
                />
                {errors.title && (
                  <p className="text-sm font-light text-red-500">
                    Brand is Required...!
                  </p>
                )}
              </div>
            </div>
            <div className="w-full lg:flex gap-8">
              <div className="space-y-2 w-full">
                <label htmlFor="price" className="block text-sm px-2">
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  placeholder="Product Price"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-Dark_1 focus:dark:border-Red"
                  {...register('price', { required: true })}
                />
                {errors.price && (
                  <p className="text-sm font-light text-red-500">
                    Price is Required...!
                  </p>
                )}
              </div>
              <div className="space-y-2 w-full">
                <label htmlFor="stock" className="block text-sm px-2">
                  Stock Quantity
                </label>
                <input
                  type="number"
                  name="stock"
                  id="stock"
                  placeholder="Stock Quantity"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-Dark_1 focus:dark:border-Red"
                  {...register('stock', { required: true })}
                />
                {errors.stock && (
                  <p className="text-sm font-light text-red-500">
                    Stock is Required...!
                  </p>
                )}
              </div>
              <div className="space-y-2 w-full">
                <label htmlFor="category" className="block text-sm px-2">
                  Product Category
                </label>
                <input
                  type="text"
                  name="category"
                  id="category"
                  placeholder="Product Category"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-Dark_1 focus:dark:border-Red"
                  {...register('category', { required: true })}
                />
                {errors.category && (
                  <p className="text-sm font-light text-red-500">
                    Category is Required...!
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2 w-full">
              <label htmlFor="imageURL" className="block text-sm px-2">
                Product ImageURL
              </label>
              <input
                type="text"
                name="imageURL"
                id="imageURL"
                placeholder="Product ImageURL"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-Dark_1 focus:dark:border-Red"
                {...register('imageURL', { required: true })}
              />
              {errors.imageURL && (
                <p className="text-sm font-light text-red-500">
                  ImageURL is Required...!
                </p>
              )}
            </div>
            <div className="space-y-2 w-full">
              <label htmlFor="description" className="block text-sm px-2">
                Product Description
              </label>
              <textarea
                name="description"
                id="description"
                placeholder="Write Product Description"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-Dark_1 focus:dark:border-Red"
                {...register('description', { required: true })}
              />
              {errors.description && (
                <p className="text-sm font-light text-red-500">
                  Description is Required...!
                </p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full px-8 py-3 mt-4 font-semibold rounded-md dark:bg-Dark_1 dark:text-gray-50 btn bg-Dark_1 text-white border border-Dark_1 hover:border-Dark_1 outline-none hover:bg-gray-50 hover:text-Dark_1 transition-all duration-1000 delay-75 ease-in-out"
            >
              Add Product
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default AddProduct
