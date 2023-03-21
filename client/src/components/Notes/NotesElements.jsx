import styled from 'styled-components';

export const NotesMain = styled.div`
    background: #414141;
    height: calc(100vh - 80px);
`;

export const NotesContainer = styled.div`
    background: #414141;
    margin: 80px auto 0px;
    padding: 24px 24px;
    max-width: 800px;

    @media screen and (max-width: 960px) {
        padding: 24px 24px;
    }
`

export const Title = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 6px 6px 12px 6px;
    padding-bottom: 12px;
    border-bottom: 1px solid white;
`