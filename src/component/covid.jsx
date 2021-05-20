import React,{useState,useEffect}  from "react";
import axios from 'axios';
import "../css/covid.css"
const Covid = () => {
    const url="https://api.covid19india.org/data.json"
    const [data,setData] =useState([]);
    useEffect(
      ()=>{
        axios.get(url).then((res)=>{setData(res.data.statewise)})    
      },[])
    return(
    <div>
        <div className="container-fluid mt-5">
        <h1 className="text-center my-4 text-light font-weight-bold cg"><span className="thead-black">India</span> Covid Cases</h1>
        <div className="table-responsive">
        <table className="table table-striped table-hover mx-4 Aman">
  <thead style={{backgroundColor:"#202224"}}>
    <tr>
      <th scope="col" className="text-light">Serial</th>
      <th scope="col" className="text-light">State</th>
      <th scope="col" className="text-light">Active</th>
      <th scope="col" className="text-light">confirmed</th>
      <th scope="col" className="text-light">Deaths</th>
      <th scope="col" className="text-light">Last Updated Time</th>
      <th scope="col" className="text-light">Recovered</th>
    </tr>
  </thead>

            {
                  data.map((current,index)=>(
                    <tbody className="table-dark">
                    <tr >
                          <td>{index}</td>
                          <th scope="row" className="text-light">{current.state}</th>
                          <td >{current.active}</td>
                          <td>{current.confirmed}</td>
                          <td className="">{current.deaths}</td>
                          <td>{current.lastupdatedtime}</td>
                          <td>{current.recovered}</td>
                    </tr>
                  </tbody>


                  ))

            }

</table>
</div>
    </div>
    </div>
    );
}
export default Covid;