import react, { useState } from 'react';
import { TextDrop, WrapText, Icon, Text, FlexBox } from './DropMessage.styles';
const DropMessage = () => {
    const [active, setActive] = useState(true);
    return (
        <>
            {active &&
                (< WrapText >
                    <Icon onClick={() => { setActive(!active) }}> x</Icon>
                    <FlexBox>
                        <Text>Suggestion</Text>
                        <TextDrop>Please Clear Cache In Your browser To optimize the performance</TextDrop>
                    </FlexBox>
                </WrapText >)}
        </>)
}
export default DropMessage;