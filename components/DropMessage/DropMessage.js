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
                        <TextDrop>Please clear Cache to make it more optimized</TextDrop>
                    </FlexBox>
                </WrapText >)}
        </>)
}
export default DropMessage;