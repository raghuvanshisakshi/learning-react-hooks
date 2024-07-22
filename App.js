// import Card from './Card.js'
import {useState} from 'react';

function App(){
 //here counter is first index and setcounter is function
//     let [counter,setCounter] = useState(15);
// //hooks control ui updation
//     //let counter = 5;
//     //it update all the counter no need tight documnet by id
//     const addValue = ()=>{
//       counter  = counter +1;
//       setCounter(counter);
//       // console.log("clicked", counter);
//     }
//     const removeValue = ()=>{
//       setCounter(counter-1);
//     }




// hooks by thapa
// let newTime = new Date().toLocaleTimeString();
// const[ctime,setctime] = useState(newTime);

// const UpdateTime = ()=>{
//   newTime = new Date().toLocaleTimeString();
//   setctime(newTime);
// };
//   setInterval(UpdateTime,1000)


// event
// const purple = "#8e44ad";
// const [bg,setbg] = useState(purple);
// const [name,setName] = useState("click Me");
// const bgChange = ()=>{
//   // console.log("clicked");
//   let newBg =  '#34495e';
//   setbg(newBg);
//   setName("Ouch!!");
// };
// const bgBack = () =>{
//   setbg(purple);
//   setName("Aiyo!!");
// };


  // forms
  // const[fullName,setFullName] = useState({
  //   fname: "",
  //   lname: "",
  // });
  // // const [fullName,setFullName] = useState();
  // const inputEvent = (event)=>{
  //   // setName(event.target.value);
  //   console.log(event.target.value);
  //   console.log(event.target.name);
  //   console.log(event.target.placeholder);

  //   const value = event.target.value;
  //   const name =  event.target.name;
  // };
  // const onSubmits = (event) =>{
  //   event.preventDefault();
  //   alert("form submitted");
  //   // setFullName(name);
  // }

  // setFullName((preValue)=>{
  //   // console.log(preValue);
  //   if(name === 'fname'){
  //     return {
  //     fname: value,
  //     lname: preValue.lname,
  //     }
  //   }
  // })



  // spread operator
  // const fullname = ['sakshi','Raghuvanshi'];
  // const biodata =  [1,...fullname,26,'male'];
  // console.log(fullname);
  // console.log(biodata);

  // let shooterGames = ['Call of Duty','Far Cry', 'Resident Evil'];
  // let racingGames = ['Need For Speed', 'Gran Turismo','Burnout'];
  // let games  = [...shooterGames,...racingGames];
  // console.log(games);


  // destructuring of array
  // let shooterGames = ['Call of Duty','Far Cry', 'Resident Evil'];
  // let [first,...remaining] = shooterGames;
  // console.log(first);//call of duty
  // console.log(remaining);// this g9ives all remaining

  const fullName = {
    fname: "Sakshi",
    lname: "thapa",
  };
  const biodata= {
    id: 1,
    ...fullName,
    age: 26,
    gender: 'male'
  };
  console.log(biodata);
  
      return (
        <>
      {/* <h1>hello</h1>
      <h2>Counter value: {counter}</h2>
    
      <button onClick = {addValue}>Add value</button>
      <br />
      <h2>remove value</h2>
      <button onClick = {removeValue}>remove Value</button> */}



      {/* //tailwind and props */}


      {/* props is used when we have to use same thing multiple time but change the things of internal like name */}
      {/* <h1 className = 'bg-green-400 text-black rounded-xl'>Tailwind</h1>
      <Card channel = "chaiaurcode" someObj = {myObj}/> */}



      {/* new project using useefect usecallback useref */}
        {/* <h1>{ctime}</h1> */}
        {/* <button onClick = {UpdateTime}>get time</button> */}


        {/* event */}
        {/* <div style = {{backgroundColor: bg}}>
          <button onClick = {bgChange} onDoubleClick = {bgBack}>{name}</button>
        </div> */}



        {/* forms */}
        {/* <form onSubmit ={onSubmits}>
        <div>
          <h1>Hello {fullName.fname}{fullName.lname}</h1>
          <input type="text" placeholder = "Enter Your First Name" name = 'fName' onChange = {inputEvent} value = {fullName.fname}/>
          <br />
          {/* <h1>Hello {fullName}</h1> */}
          {/* <input type="text" placeholder = "Enter Your  Last Name" name = 'lName' onChange = {inputEvent} value = {fullName.lname}/>
          <button onClick = {onSubmits}>Click Me</button>
        </div>
        </form> */}
    </>
      );
    }
                      
    export default App;
