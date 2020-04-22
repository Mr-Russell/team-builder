import React from 'react';
import styled from 'styled-components';

const FormStyle = styled.div`
    border: 2px soild grey;
    margin-top: 5px;
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