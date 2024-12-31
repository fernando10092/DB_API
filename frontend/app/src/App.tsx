import './App.css'
import chamada from './scripts/api'

function App() {

  return (
    <>
      <div>
          <form onSubmit={chamada}>
              <input placeholder='Nome...' type="text" name='nomehtml' />
              <br/>
              <input placeholder='Email..' type="text" name='emailhtml' />
              <br/>
              <button type='submit'>ENVIAR</button>
          </form>
      </div>
  
    </>
  )
}

export default App
