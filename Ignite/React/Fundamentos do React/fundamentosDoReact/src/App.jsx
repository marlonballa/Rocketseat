import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './Post'

import './global.css'
import appStyles from './App.module.css'

function App() {
  return (
    <div>
      <Header />
      <div className={appStyles.appStyles}>
        <Sidebar />
        <main>
          <Post 
            author="Marlon Balla"
            content="Eu tenho que pensar melhor nas coisas que faço da minha vida"
          />
        </main>
      </div>
    </div>
  )
}

export default App
