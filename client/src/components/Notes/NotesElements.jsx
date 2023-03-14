import styled from 'styled-components';

export const NotesMain = styled.div`
    background: #414141;
    height: calc(100vh - 80px);
`;

export const NotesContainer = styled.div`
    background: #414141;
    margin: 80px auto 0px;
    padding: 24px 24px;
    max-width: 1100px;

    @media screen and (max-width: 960px) {
        padding: 24px 24px;
    }
`

export const AddBtn = styled.span`
    color: white;
`;