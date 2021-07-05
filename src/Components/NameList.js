import Person from './Person'
import React from 'react'

function NameList() {
    const persons =[
        {
            'name' : 'A',
            'age' : 29,
            
        },
        {
            'name' : 'B',
            'age' : 23,
            
        }
    ]
    const Namelist= persons.map(person => <Person key={person.name} person={person}/>)
    return (
        <div>
            {
               Namelist
            }            
        </div>
    )
}

export default NameList
