import { useState } from 'react';
import { CopyToClipboard } from 'pivotal-ui/react/copy-to-clipboard';
import { BrandButton } from 'pivotal-ui/react/buttons';
import { Icon } from 'pivotal-ui/react/iconography';

const RightCopyButton = ({ buttonNumber, copyText }) => {
    const [isFlat, setFlat] = useState(false);

    const indexString = buttonNumber > 99 ? `${buttonNumber + 1}` : buttonNumber < 9 ? `00${buttonNumber + 1}` : `0${buttonNumber + 1}`;
    const tooltipText = `New hashtags part ${buttonNumber + 1}, it's copied!`;

    const getCountry = buttonNumber < 175 ? "🇷🇺" : "🇧🇾";

    return (
        <div className="App-button">
            <CopyToClipboard text={copyText} tooltip={tooltipText}>
                <BrandButton
                    large
                    icon={<Icon src="copy" />}
                    iconPosition="right"
                    flat={isFlat}
                    onClick={() => setFlat(!isFlat)}
                >{getCountry} #{indexString}</BrandButton>
            </CopyToClipboard>
        </div>
    );
}

export default RightCopyButton;