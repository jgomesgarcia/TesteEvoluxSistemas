import styled from  'styled-components';

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 0 20%;
    overflow: auto;
    padding-bottom: 50px;
`;

export const Title = styled.h1`
    font-size: 40px;
    color: #201a16;
    text-align: center;
`;



export const SubTitle = styled.h1`
    font-size: 25px;
    color: #201a16;
    text-align: left;
`;

export const Table = styled.table`
    width: 100%;
    font-size: 16px;
    
    & > tr:nth-child(odd) {
        padding-left: 10px;
        background-color: #eee
    }
`;
export const TableRow = styled.tr`

    &:hover{
        color: white;
        background-color: #0078d4
    }
    table > &:nth-child(odd):hover{
        color: white;
        background-color: #0078d4
    }
`;
export const TableHeader = styled.tr`

`;

export const TableHeaderCell = styled.th`
    padding: 10px 20px;
    
`;

export const TableCell = styled.td`
    padding: 10px 20px;
`;

export const TableControlsContainer = styled.div`
    width: 100%;
`;


export const TablePaginationContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0 10px;
`;
