import  styled from 'styled-components';

const Container = styled.div`
    display: flex;
`;

const Pane = styled.div`
    flex: ${props => props.weight};
`;

export const SplitScreen = ({
    children,
    leftWeight = 1,
    rightWeight = 1,
    middleWeight = 1,
}) => {
    const [left, middle, right] = children;
    return (
        <Container className='test'>
            <Pane weight={leftWeight}>
                {left}
            </Pane>
            <Pane weight={middleWeight}>
                {middle}
            </Pane>
            <Pane weight={rightWeight}>
                {right}
            </Pane>
        </Container>
    )
}