import React from 'react';
import styled from 'styled-components';

const FormStyle = styled.div`
    border: 5px solid gray;
    width: 300px;
    margin-top: 50px;
    justify-content: center;
    padding: 0 2% 2% 2%;
`;


function Form(props){
    return(
        <FormStyle>
            <h2>New Team Member</h2>

            <label>Name:
                <input
                    value={props.values.name}
                    onChange={props.onInputChange}
                    name='name'
                    type='text'
                ></input>
            </label>

            <br />

            <label>Email:
                <input
                    value={props.values.email}
                    onChange={props.onInputChange}
                    name='email'
                    type='text'
                ></input>
            </label>

            <br />

            <label>Role:
                <input
                    value={props.values.role}
                    onChange={props.onInputChange}
                    name='role'
                    type='text'
                ></input>
            </label>

            <br />

            <button onClick={props.onSubmit}>Submit</button>
        </FormStyle>
    )
}

export default Form