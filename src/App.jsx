import { useState } from 'react'


import './App.css'
import { Button, Stack, TextField } from '@mui/material'

function App() {
  const [interest,setInterest] = useState(0)

  const [principle, setprinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)

  const [isPrincipleInvalid,setIsPrinipleInvalid] = useState(false)
  const [isRateInvalid,setIsRateInvalid] = useState(false)
  const [isYearInvalid,setIsYearInvalid] = useState(false)
  const userInputValidation = (inputTag)=>{
    //ued to validate user inputs

    //used to validate user inputs

    const {name,value}=inputTag
    console.log(name,value);
    //number patern in value
console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
console.log(!!value.match(/^\d*\.?\d+$/));

if(name=="principle"){
  setprinciple(value)
  !!value.match(/^\d*\.?\d+$/) ? setIsPrinipleInvalid(false):setIsPrinipleInvalid(true)
  
}
else if(name=="rate"){
  setRate(value)
  !!value.match(/^\d*\.?\d+$/) ? setIsRateInvalid(false):setIsRateInvalid(true)
  
}
else if(name=="year"){
  setYear(value)
  !!value.match(/^\d*\.?\d+$/) ? setIsYearInvalid(false):setIsYearInvalid(true)
  
}


  }


  const handleCalculate = ()=>{
    if(principle && rate && year){
      setInterest(principle*rate*year/100)

    }
    else{
      alert("please fill the form completely!!!")
    }
  }

  const handleReset =()=>{
    setprinciple(0)
    setInterest(0)
    setRate(0)
    setYear(0)
    setIsPrinipleInvalid(false)
    setIsRateInvalid(false)
    setIsYearInvalid(false)
  }
  return (
    <div style={{ minHeight:'100vh' }}className='d-flex justify-content-center align-items-center bg-dark'>
     <div style={{ width:"600px" }}className='bg-light rounded p-5'>
      <h3>Simple Interest Calculator</h3>
      <p>Calcuate your simple Interest Easily!</p>
      <div className='d-flex flex-column justify-content-center align-items-center bg-warning shadow p-3 rounded text-light'>

   
      <h1>₹ {interest}</h1>

     <p className='fw-bolder'>Total Simple Interest</p> 
          </div>
        
          {/* form */}

          <form className='mt-3'>
            {/* principle */}

            <div className='mb-3'>
            <TextField value={principle || ""} onChange={e=>userInputValidation(e.target)}name="principle" className="w-100"
             id="Outlined-principle"label="₹ Principle Amount" variant="outlined" />
            </div>
            {
isPrincipleInvalid && <div className='mb-3 fw-bolder text-danger'>*Invalid Principle Amount</div>
            }

            <div className='mb-3'>
            <TextField value={rate || ""} onChange={e=>userInputValidation(e.target)}name="rate" className="w-100"
               id="Outlined-rate"label="Rate of Interest (%)" variant="outlined" />
            </div>

           
            {
isRateInvalid && <div className='mb-3 fw-bolder text-danger'>*Invalid Rate </div>
            }
           
         

<div className='mb-3'>
  <TextField value={year || "" } onChange={e=>userInputValidation(e.target)}name="year" className='w-100'
  id='Outlined-year' label='Time period (yr)' variant='outlined'/>
</div>



            {
isYearInvalid && <div className='mb-3 fw-bolder text-danger'>*Invalid year </div>
            }

            <Stack direction="row" spacing={2}>
            <Button onClick={handleCalculate} disabled={isPrincipleInvalid || isRateInvalid ||isYearInvalid}style={{ width:'50%',height:'70px' }}className='bg-dark' variant="contained">Calculate</Button>
            <Button onClick={handleReset} style={{ width:'50%',height:'70px' }}className="border border-dark text-dark" variant="outlined">Reset</Button>
</Stack>
          </form>
    </div>
    </div>
  )
}




export default App
