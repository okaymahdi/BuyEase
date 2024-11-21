import { useEffect, useState } from 'react'
import { CircleLoader } from 'react-spinners'

const Loading = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 10000)
    return () => clearTimeout(timer)
  }, [])
  return (
    <div className="sweet-loading flex justify-center items-center min-h-screen">
      {loading && (
        <CircleLoader
          color={'#FF3811'}
          loading={true}
          size={100}
          speedMultiplier={1}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
    </div>
  )
}

export default Loading
