const Hero = () => {
  return (
    <div
      className="hero min-h-screen mt-12"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1527097779402-4a4b213307fc?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
      }}
    >
      <div className="hero-overlay bg-Dark_2 bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Welcome to <span className="text-Red font-Secondary">Buy</span>
            <span className="text-gray-50 font-Secondary">Ease</span>
          </h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
