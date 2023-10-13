import Person from "./Person"

const Persons = ({persons, query}) => (
    <>
        {persons
        .filter(persons => persons.name.toLowerCase().includes(query))
        .map(({name, number}) => (
            <Person key={name} name={name} number={number} />
        )
            )
        }
    </>  
)
export default Persons