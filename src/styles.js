import styled from 'styled-components';


export const Container = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-height: 100%;
    height: 500px;
    list-style: none;

    li{
        margin-top: 10px;
    }

`;

export const Input = styled.input`
    height: 28px;
    width: 200px;
    margin-right: 5px;
    padding-left: 4px;
    border: 0.5px solid #eee;
    border-radius: 4px;
`;

export const Button = styled.button`
    margin-left: 5px;
    border: 0;
    border-radius: 5%;
    background: ${props=> props.backgroundColor};
    height: 30px;
    width: 70px;
    color: #333;
    cursor: pointer;
`;


export const AddUser = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    width: 300px;
    height: 50px;

`;