import { useEffect } from "react"

const Home = (props) => {

    const arr = ['C', 'React', 'C#', 'Node', 'Java Script']
    const obj = {Name:'seema', Designation:'developer', Phone:'77677565765'}

    useEffect(()=> {
        props.event(arr, obj)
    },[props.data])
    return(<h2>Welcome {props.data}
        {/* <button onClick={()=>props.event(arr, obj)}>Submit</button> */}
    </h2>)
}

export default Home