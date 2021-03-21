import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    min-width: 414px;
    min-height: 71px;
    position: absolute;
    bottom: 0px;
    border:1px solid red;
    // background-color:white;
    button {
        min-width: 55px;
        min-height: 40px;
        border-radius: 16px;
        border: none;
        background-color: #54BAF3;
        color: white;
        box-sizing: border-box;
        margin-left: 6px;
        cursor: pointer;
    }
`;

const Comment = styled.div`
    display: flex;
    align-items: center;
    input {
        min-width: 300px;
        min-height: 40px;
        border: none;
        box-sizing: border-box;
        box-shadow: 0px 0px 5px #C4C4C4;
        border-radius: 16px;
        padding-left: 10px;
    }
`;

const CmtInput = ({onChange, onClick}) => {
    return <Container>
        <Comment>
            <input type="text" onChange={onChange}/>
        </Comment>
        <button onClick={onClick}><h5>Send</h5></button>
    </Container>
}

CmtInput.defaultProps = {
    onChange:()=>{},
    onClick:()=>{}
};

export default CmtInput;