import Header from './Components/Header';
import FormPages from './Components/Header/FormPages';
import "./index.scss";
import RenderValue from './Components/Header/ContainerValue';
import RenderSalary from './Components/Header/SectionSalary';
import { useState } from 'react';

function App() {

  const [listValues, setListValues] = useState([]);

  const addValue = (formValues) => {
  const newValues = { ...formValues};
      setListValues([...listValues, newValues]);
  }

  const removeValue = (removeId) => {
  const newListValues = listValues.filter((elem, i) =>  i !== removeId)
    setListValues(newListValues);
  }

  return (
    <>
     <Header/>
     <main>
        <div className="div__app">
          <FormPages addValue={addValue}/>
          <RenderSalary listValues={listValues} removeValue={removeValue}/>
        </div>
        
        <RenderValue listValues={listValues}/>
     </main>
    </>
  )
}

export default App
