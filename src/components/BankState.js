// import React from 'react'
import React,{useState,useEffect} from 'react'


function Bankstate() {
    const [from, setfrom] = useState("")
    const [to, setto] = useState("")
    const [err, seterr] = useState({fromerr:"",toerr:"",state:"",s:false})

    const fromDate=(event)=>{
        setfrom(event.target.value)
        console.log(from);
    }
    const toDate=(event)=>{
        setto(event.target.value)
        console.log(to);
    }
useEffect(() => {
    const fromDate=new Date(from)
    console.log(fromDate);
    const toDate=new Date(to)
    console.log(toDate);
    const today=new Date()
    console.log(today);
    console.log(fromDate>today);
    console.log(fromDate>toDate);
    console.log(fromDate.getFullYear());
    if(fromDate==''&& toDate==''){
        seterr({...err,toerr:"Enter Valid Date",fromerr:"Enter Valid Date",s:false})
    } 
    else if(fromDate>toDate)
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

}, [from,to])

const statement=()=>{
    if(from==="" && to==="" ){
        seterr({...err,s:true,fromerr:"from date cannot be empty",toerr:"to date cannot be empty"})
    }
    else if(err.fromerr===""&&err.toerr==="")
    {
        seterr({...err,s:true,state:"statement successful"})
    }
    
}


    return (
        <div style={{marginTop:"30px",marginBottom:"50px",height:"400px",backgroundColor:""}} className="division">
            <h1 style={{color:"black",backgroundColor:"gray",color:"white"}}>Date Validation</h1>
            <div style={{justifyContent:"space-around",marginTop:"70px"}}>
            <div>
           <label><b>From Date:</b></label> <input type="date" onChange={(event)=>{fromDate(event)}}/><br></br>
           <span style={{color:"red"}}>{err.fromerr}</span>
           </div><br />
           <div>

           <label><b>To Date:</b></label> <input type="date"  onChange={(event)=>{toDate(event)}}/><br></br>
           <span style={{color:"red"}}>{err.toerr}</span>
           </div>
           </div><br />
            <button  onClick={statement} style={{color:"white"}}>Click Here</button>
            {err.s?<p>{err.state}</p>:""}

        </div>
    )
}

export default Bankstate