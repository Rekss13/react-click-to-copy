import './App.css';
import { hashtags } from './hashtags';
import CopyButton from './CopyButton';

const copyButtons = hashtags.map((element, index) => {
    return <CopyButton buttonNumber={index} copyText={element} key={index.toString()}/>
});

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Click buttons to copy</h1>
            </header>
            <main className="App-main">
                {copyButtons}
            </main>
        </div>
    );
}

export default App;