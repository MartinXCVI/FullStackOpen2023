const PersonForm = ({name, number, handleChangeName, handleChangeNumber, handleAddPerson}) => (
    <form onSubmit={handleAddPerson}>
        <div>
          Name: <input value={name} onChange={handleChangeName} />
        </div>
        <div>
          Number:{' '}
          <input value={number} onChange={handleChangeNumber} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
)
export default PersonForm