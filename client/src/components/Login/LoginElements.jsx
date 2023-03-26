import styled from 'styled-components';

export const LoginMain = styled.div`
    background: #414141;
    height: calc(100vh - 80px);
`;

export const LoginContainer = styled.div`
    background: #414141;
    margin: 80px auto;
    padding: 24px 24px;
    max-width: 800px;

    @media screen and (max-width: 960px) {
        padding: 24px 24px;
    }
`