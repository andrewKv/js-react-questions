import { SetStateAction, useState } from 'react';
import './App.css';

export default function SortArrays() {

  const [array1Value, setArray1Value] = useState<string>("");
  const [array2Value, setArray2Value] = useState<string>(""); 


  const setArray1 = (e: { target: { value: SetStateAction<string>; }; }) =>{
    setArray1Value(e.target.value);
  }
  const setArray2 = (e: { target: { value: SetStateAction<string>; }; }) =>{
    setArray2Value(e.target.value);
  }
  
  const IsJsonString = (str: string) => {
    try {
      JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
  }
  
  const sortArrays = () => {
    if (IsJsonString(array1Value) && IsJsonString(array2Value)){
    const array1 = JSON.parse(array1Value)
    const array2 = JSON.parse(array2Value)
    const sortedArray: string[] = array1.concat(array2).sort((a:number, b:number) => a-b)
    console.log(sortedArray)
    }
    else {
      console.log('Incorrect array values')
    }
    
  }

  return (
    <div className="Task1-container">
      <div>
        <input className="Task1-input1" type="text" id="a1" placeholder='Array 1' onChange={setArray1}/>
        <input className="Task1-input" type="text" id="a2" placeholder='Array 2' onChange={setArray2}/>
      </div>
      <button className="Submit-arrays" onClick={sortArrays}>Submit</button>
    </div>
  );
}
