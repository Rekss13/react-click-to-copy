import './App.css';
import {CopyToClipboard} from 'pivotal-ui/react/copy-to-clipboard';
import {PrimaryButton} from 'pivotal-ui/react/buttons';
import {Icon} from 'pivotal-ui/react/iconography';
import { hashtags } from './hashtags';

const copyButtons = hashtags.map((element, index) => {
    const indexString = index > 99 ? `${index + 1}` : index < 9 ? `00${index + 1}` : `0${index + 1}`;
    const text = `Hashtags part ${indexString}, it's copied!`
    return (
        <div className="App-button">
            <CopyToClipboard text={element} tooltip={text}>
                <PrimaryButton large icon={<Icon src="copy" />} iconPosition="right">Part of # number {indexString}</PrimaryButton>
            </CopyToClipboard>
        </div>
    );
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