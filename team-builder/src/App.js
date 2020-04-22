import React, {useState} from 'react';
import TeamMember from './components/TeamMember.js';
import Form from './components/Form.js'
import './App.css';

const ogMembers = [
  {
    name: 'Aang',
    email: 'aang@airnomads.com',
    role: 'Team Leader'
  },
  {
    name: 'Katara',
    email: 'katara@watertribe.com',
    role: 'Project Manager'
  },
  {
    name: 'Sokka',
    email: 'sokka@watertribe.com',
    role: 'Morale Officer'
  }
];

const blankFormValues ={
  name: '',
  email: '',
  role: '',
}


function App() {
  const [members, setMembers] = useState(ogMembers);

  const [formValues, setFormValues] = useState(blankFormValues)

  const onInputChange = evt =>{
    
    setFormValues({
      ...formValues, 
      [evt.target.name]: evt.target.value
    })
  }

  const onSubmit = evt =>{
    
    evt.preventDefault()
  
    const newMember = {
      name: formValues.name,
      email: formValues.email,
      role: formValues.role,
    }

    setMembers([...ogMembers, newMember])

    setFormValues(blankFormValues)
  }

  return (
    <div className="App">
      <h1>Team Member Generator</h1>
      {
        members.map(person =>{
          return(
          <TeamMember details={person} />
          )
        })
      }
      <Form 
      onInputChange={onInputChange} 
      onSubmit={onSubmit} 
      values={formValues}
      />
    </div>
  );
}

export default App;
