import BarChart from '../Charts.js/BarGraph';
import CovidAll from '../Charts.js/CovidAll'
import DatesChart from '../Charts.js/Dates'

const Maps=()=>{
    return(
        <>
        <div className='flex flex-wrap m-10 p-2'>
        <BarChart/>
        <DatesChart/> 
        <CovidAll/>
        </div>
        </>
    )
}
export default Maps;