import catSvg from '../assets/images/cat.svg'
import AnimationControls from './AnimationControls'
import useAnimation from '../hooks/useAnimation'
import '../styles/animations.css'

function DancingCat() {
  const { isAnimating, speed, toggleAnimation, changeSpeed } = useAnimation()

  return (
    <div className="dancing-cat-container">
      <div 
        className={`cat-wrapper ${isAnimating ? 'dancing' : ''}`}
        style={{
          '--dance-duration': `${3 / speed}s`,
          '--spin-duration': `${1.5 / speed}s`,
          '--bounce-duration': `${0.8 / speed}s`,
          '--wiggle-duration': `${0.6 / speed}s`
        }}
      >
        <img 
          src={catSvg} 
          alt="춤추는 귀여운 고양이" 
          className="cat-image"
          role="img"
          aria-label="춤추는 고양이 캐릭터"
        />
      </div>
      
      <AnimationControls 
        isAnimating={isAnimating}
        onToggle={toggleAnimation}
        speed={speed}
        onSpeedChange={changeSpeed}
      />
      
      <div className="keyboard-hint">
        <small>💡 스페이스바를 눌러서도 조작할 수 있어요!</small>
      </div>
    </div>
  )
}

export default DancingCat