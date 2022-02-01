import { useState } from 'react';
import { CopyToClipboard } from 'pivotal-ui/react/copy-to-clipboard';
import { PrimaryButton } from 'pivotal-ui/react/buttons';
import { Icon } from 'pivotal-ui/react/iconography';

const CopyButton = ({ buttonNumber, copyText }) => {
    const [isFlat, setFlat] = useState(false);

    const indexString = buttonNumber > 99 ? `${buttonNumber + 1}` : buttonNumber < 9 ? `00${buttonNumber + 1}` : `0${buttonNumber + 1}`;
    const tooltipText = `Hashtags part ${buttonNumber}, it's copied!`;

    return (
        <div className="App-button">
            <CopyToClipboard text={copyText} tooltip={tooltipText}>
                <PrimaryButton
                    large icon={<Icon src="copy" />}
                    iconPosition="right"
                    flat={isFlat}
                    onClick={() => setFlat(!isFlat)}
                >Part of # number {indexString}</PrimaryButton>
            </CopyToClipboard>
        </div>
    );
}

export default CopyButton;