
import AliasComponent from './AliasComponent';
import ApiComponent from './ApiComponent';

function App() {

  const data={
    "fname":"baheer",
    "lname":"mohammad"
  }

  return (
    <div className="App">
      
      {/* <AliasComponent props={data}></AliasComponent> */}
    <ApiComponent></ApiComponent>

    </div>
  );
}

export default App;
