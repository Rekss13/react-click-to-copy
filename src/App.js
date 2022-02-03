import './App.css';
import TwoCopyButtons from './components/TwoCopyButtons';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Click buttons to copy</h1>
            </header>
            <main className="App-main">
                <TwoCopyButtons />
            </main>
        </div>
    );
}

export default App;