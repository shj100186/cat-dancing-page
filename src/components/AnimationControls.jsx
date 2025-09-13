function AnimationControls({ isAnimating, onToggle, speed, onSpeedChange }) {
  return (
    <div className="animation-controls">
      <button 
        className="control-button main-control"
        onClick={onToggle}
        aria-label={isAnimating ? '애니메이션 멈추기' : '애니메이션 시작하기'}
      >
        {isAnimating ? '🛑 멈추기' : '💃 춤추기'}
      </button>
      
      <div className="speed-controls">
        <label htmlFor="speed-slider" className="speed-label">
          속도: {speed}x
        </label>
        <input 
          id="speed-slider"
          type="range" 
          min="0.5" 
          max="3" 
          step="0.5"
          value={speed}
          onChange={(e) => onSpeedChange(parseFloat(e.target.value))}
          className="speed-slider"
          aria-label="애니메이션 속도 조절"
        />
        <div className="speed-marks">
          <span>느림</span>
          <span>보통</span>
          <span>빠름</span>
        </div>
      </div>
    </div>
  )
}

export default AnimationControls