import { Grid, FlexCol } from 'pivotal-ui/react/flex-grids';
import { hashtags } from '../source/hashtags';
import { hashtagsNew } from '../source/hashtagsNew';
import LeftCopyButton from './LeftCopyButton';
import RightCopyButton from './RightCopyButton';

const TwoCopyButtons = () => {
    const leftButton = (index, element) => {
        return <LeftCopyButton buttonNumber={index} copyText={element} key={`left-${index.toString()}`} />
    };

    const rightButton = (index, element) => {
        return <RightCopyButton buttonNumber={index} copyText={element} key={`right-${index.toString()}`} />
    };

    const getCopyButtons = () => {
        let arr = [];
        for (let index = 0; index < (hashtags.length > hashtagsNew.length ? hashtags.length : hashtagsNew.length); index++) {
            arr.push(
                <Grid justifyContent="center" key={index.toString()}>
                    <FlexCol>
                        {index < hashtags.length ? leftButton(index, hashtags[index]) : ''}
                    </FlexCol>
                    <FlexCol>
                        {index < hashtagsNew.length ? rightButton(index, hashtagsNew[index]) : ''}
                    </FlexCol>
                </Grid>
            );
        }
        return arr;
    }

    return (
        <div className="App-button">
            {getCopyButtons()}
        </div>
    );
}

export default TwoCopyButtons;