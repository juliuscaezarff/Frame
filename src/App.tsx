import Editor  from './components/Editor'
import  Header from './components/Header'

function App() {
  return (
    <div className="min-h-screen p-8 text-zinc-50 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
      <div className="bg-zinc-800 w-[1100px] mx-auto rounded-xl min-h-[720px] shadow-sm border-black/20 overflow-hidden grid grid-cols-[16rem_1fr]">
        <Header />
        <main className="p-4">
          <Editor />
        </main>
      </div>
    </div>
  )
}

export default App
