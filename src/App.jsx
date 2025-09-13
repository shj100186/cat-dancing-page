import './App.css'
import './styles/global.css'
import DancingCat from './components/DancingCat'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>고양이 댄싱 페이지</h1>
        <p>귀여운 고양이가 춤을 춥니다!</p>
      </header>
      <main>
        <DancingCat />
      </main>
    </div>
  )
}

export default App
