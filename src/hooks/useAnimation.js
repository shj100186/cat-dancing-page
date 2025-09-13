import { useState, useEffect } from 'react'

function useAnimation() {
  const [isAnimating, setIsAnimating] = useState(true)
  const [speed, setSpeed] = useState(1)

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating)
  }

  const changeSpeed = (newSpeed) => {
    setSpeed(newSpeed)
  }

  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--animation-speed', `${speed}s`)
  }, [speed])

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === 'Space') {
        event.preventDefault()
        toggleAnimation()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [isAnimating])

  return {
    isAnimating,
    speed,
    toggleAnimation,
    changeSpeed
  }
}

export default useAnimation