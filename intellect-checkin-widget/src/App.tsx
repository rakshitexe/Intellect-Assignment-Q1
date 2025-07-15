
import EmojiCheckinWidget from './components/EmojiCheckinWidget'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 relative">
      {/* Main Content */}
      <div className="p-8">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to the App</h1>
        <p className="text-gray-600 mt-2">This is your dashboard or homepage content.</p>
      </div>

      {/* Centered Overlay Widget */}
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/20">
        <EmojiCheckinWidget />
      </div>
    </div>
  )
}

export default App