const people = [
  { id: 0, name: 'Creola Katherine Johnson', profession: 'mathematician' },
  { id: 1, name: 'Mario José Molina-Pasquel Henríquez', profession: 'chemist', accomplishment: 'tst' },
  { id: 2, name: 'Mohammad Abdus Salam', profession: 'physicist' },
  { name: 'Percy Lavon Julian', profession: 'chemist' },
  { name: 'Subrahmanyan Chandrasekhar', profession: 'astrophysicist' },
];

function List() {
  const chemists = people.filter(person => person.profession === 'chemist');
  const Everyone = people.filter(person => person.profession !== 'chemist');

  return (
    <>
      <section>
        <h1>Scientists</h1>
        <h2>Chemists</h2>
        <hr></hr>
        <ul>
          {chemists.map(person =>
            <li key={person.id}>
              <p>
                <b>{person.name}:</b>
                {' ' + person.profession}

              </p>
            </li>
          )}
        </ul>
        <hr></hr>
        <h2>Everyone Else</h2>
        <ol>
          {Everyone.map(person =>
            <li key={person.id}>
              <p>
                <b>{person.name}:</b>
                {' ' + person.profession}

              </p>
            </li>)}
        </ol>
      </section>
    </>
  )
}

export default List;
