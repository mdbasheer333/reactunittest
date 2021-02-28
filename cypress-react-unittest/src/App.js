
import AliasComponent from './AliasComponent';

function App() {

  const data={
    "fname":"baheer",
    "lname":"mohammad"
  }

  return (
    <div className="App">
      <AliasComponent props={data}></AliasComponent>
    </div>
  );
}

export default App;
