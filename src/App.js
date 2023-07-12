
import './App.css';


function App() {
 

  const style1={
   padding:'6px 6px 6px 6px',
   backgroundColor:'blue',
   display:'flex',
  justifyContent:'center',
  alignItem:'center'
  }
  const style2={
    marginLeft:'25vw',
  }
  const stylecss={
   color:'black',
  }
  
  let curDate=new Date(2023,5,5,10);
  curDate=curDate.getHours();
  let greeding="";
  if(curDate>=1 && curDate<=12){
    greeding="Good morning";
    stylecss.color='red';
    
  }
  else if(curDate>=12 && curDate<=16){
    greeding="Good Afternoon";
    stylecss.color='blue';
  }
  else{
    greeding="Good night";
    stylecss.color='white';
  }


  return (
    <>

   <h1 style={style1}>Hello sir,<span style={stylecss}>{greeding}</span></h1>
   <img style={style2} src="https://img.freepik.com/free-photo/modern-business-buildings-financial-district_1359-346.jpg?w=900&t=st=1689161033~exp=1689161633~hmac=a2bd58c36a30c11037b91560085f1c111f6219d5ca095b9dae6b5224f8be93ab" alt="hellw"/>
   </>
  );
}

export default App;
