import React,{useState,useEffect} from 'react';



function BankState1() {
    const [from,setFrom]=useState('');
    const [to,setTo]=useState('');
    const [err,seterr]=useState({fromerr:'',toerr:'',state:'',s:false});

    const fromDate=(e)=>{
        
        
        setFrom(e.target.value);
        console.log(from);
    }

    const toDate=(e)=>{
     
        
        setTo(e.target.value);
        console.log(to);
        
    }
   
    useEffect=(()=>{
        const fromDate=new Date(from)
        console.log(fromDate);
        const toDate=new Date(to)
        console.log(toDate);
        const today=new Date()
        console.log(today);
        console.log(fromDate>today);
        console.log(fromDate>toDate);
        if(fromDate>toDate)
    {
        seterr({...err,fromerr:"from date cannot be greater than to date",
        toerr:"to date cannot be lesser than from date",s:false})
    }
    else if((fromDate.getFullYear())>(today.getFullYear())||(fromDate.getMonth())>(today.getMonth())||(fromDate.getDate())>(today.getDate()))
    {
        seterr({...err,fromerr:"from date cannot be the future date",s:false})
    }
    else if((toDate.getFullYear())>(today.getFullYear())||(toDate.getMonth())>(today.getMonth())||(toDate.getDate())>(today.getDate()))
    {
        seterr({...err,toerr:"to date cannot be the future date",s:false})
    }else if((toDate.getFullYear())===''&&(fromDate.getFullYear()))
    {
        seterr({...err,toerr:"to date cannot be the future date",s:false})
    }
    else
    {
        seterr({...err,fromerr:"", toerr:"",s:false})
    }
    },[from,to])

    const statement=()=>{
        if(err.fromerr===""&&err.toerr==="")
        {
            seterr({...err,s:true})
        }
        
    }
    

  return <div style={{marginTop:"30px",marginBottom:"50px"}}>
  <h1>Date Verification</h1>
  <div style={{display:"flex",justifyContent:"space-around",marginTop:"70px"}}>
  <div>
 <label>from date:</label> <input type="date" onClick={(event)=>{fromDate(event)}}/><br></br>
 <span style={{color:"red",marginRight:"150px",marginTop:"20px"}}>{err.fromerr}</span>
 </div>
 <div>

 <label>to date:</label> <input type="date"  onChange={(event)=>{toDate(event)}}/><br></br>
 <span style={{color:"red"}}>{err.toerr}</span>
 </div>
 </div>
  <button  onClick={statement}>confirm</button>
  {err.s?<p>{err.state}</p>:""}

</div>
}

export default BankState1;

