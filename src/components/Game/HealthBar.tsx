import styled from 'styled-components';

type HealthBarType = {
    width: number
}

const HealthBarContainer = styled.div`
width: 80%;
position: absolute;
bottom: 0;
left: 10%;
height: 50px;
`;

const HealthBarDiv = styled.div`
    position: absolute;
    bottom: 10%;
    left: 0;
    height: 80%;
    transition: 0.5s;
    background: #f46652;
`;

const Title = styled.p`
    position: absolute;
    left: 50%;
    top: -10%;
    transform: translate(-50%, -50%);
    font-size: 30px;
`;

const HealthBar = ({width}:HealthBarType) => {
    const style = {
        width: width + '%',
    };
    return (<HealthBarContainer>
        <HealthBarDiv style={style} />
        <Title>Health</Title>
    </HealthBarContainer>)
}

export default HealthBar