import { useEffect, useState } from 'react';
import '../Home/home.css'
import axios from 'axios'
import styled from 'styled-components';



 interface  Explore{
  title?:string ,
  id?: number,
  description?:string,
  dateTheft?: string,
  datereported?: string,
  location?: string,
  url?: any

}

const MainCon = styled.section`
text-align: center;
width: 140%;
padding-top: 80px;
margin: auto;
padding-left: 160px;

  @media screen and (max-width: 700px) {
    text-align: center;
    width: 100%;
    height:100%;
    padding-top: 60px;
    margin: auto;
    padding-left: 5px;
  }
`;

const Column = styled.div`
flex-basis: 44%;
border-radius: 10px;
margin-bottom: 5%;
text-align: left;
background:  rgb(247, 219, 218);
padding: 25px;
cursor: pointer;
display: flex;

  @media screen and (max-width: 700px) {
    flex-basis: 44%;
    border-radius: 10px;
    margin-bottom: 5%;
    text-align: left;
    background:  rgb(247, 219, 218);
    padding: 10px;
    cursor: pointer;
    display: flex;
  }
`;
const Img = styled.img`
height: 150px;
margin-left: 5px;
margin-right: 30px;
border-radius: 2%;
margin-top: 30px;

  @media screen and (max-width: 700px) {
    height: 80px;
    margin-left: 5px;
    margin-right: 30px;
    border-radius: 2%;
    margin-top: 60px;
    
  }
`;
const Para = styled.p`
padding: 0;

  @media screen and (max-width: 700px) {
    font-size: 10px;
  }
`;
const Head = styled.h3`
text-align: left;
margin-top: 15px;


  @media screen and (max-width: 700px) {
    font-size: 20px;
  }
`;
const FirstInput =styled.input`
padding: 4px;
width: 100%;
border: 3px solid black;
@media screen and (max-width: 700px) {
 width:100%;
}
`;




export const Home:React.FC = () => {
  const [bike, setBike] = useState<any>([]);
  const [query,setQuery]= useState<any>('');
 
  
  

  const getBikeData= async () =>{
    try{
      const data=await axios.get('http://localhost:8000/user')
      console.log(data.data);
      setBike(data.data);
     

    }
    catch{
console.log("hiii")
    }
  }
  useEffect(() => {
   getBikeData();
  }, []);





  return (
   <>

   
   <div className="container">
  <div className="row">
    <div className="col">
     

    <FirstInput  type="text" placeholder='search the title' onChange={e=>setQuery(e.target.value)}/>
     
    </div>
    <div className="col">
      <FirstInput type="text" placeholder='search the dateof Theft' onChange={e=>setQuery(e.target.value)}  />
      <i className="fa fa-calendar" ></i>
   
    </div>
    <div className="col">
      <FirstInput type="text" placeholder='search the location' onChange={e=>setQuery(e.target.value)} />
    </div>
  </div>
</div> 

  
  

  

  {bike.filter((item:any)=>{
    if(query ==""){
      return item
    }
    else if( item.title.toLowerCase().includes(query.toLowerCase())){
      return item
    }
    else if( item.dateTheft.toLowerCase().includes(query.toLowerCase())){
      return item
    }
   
    else if( item.location.toLowerCase().includes(query.toLowerCase())){
      return item

    }
    
  }
  
 ).map((item:any)=>{
    return(
      
  <MainCon key={item.id}>
    
    <div className="row">
    <Column>
        <Img src={item.url} alt=""/>
        <div>
          <Head>{item.title}</Head>
            <Para>{item.description}</Para>
            <Para><b>Date of the theft:{item.dateTheft}</b></Para>
            <Para><b>Date of the reported:{item.datereported}</b></Para>
            <span><b>location:</b>{item.location}</span>
          
            
        </div>

    </Column>
  
  
</div>

</MainCon>
      
    )
  })}
   
  
 

 
    

    

        </>

  );
}
