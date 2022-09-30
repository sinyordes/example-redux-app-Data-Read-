import {useSelector} from "react-redux";

export default function Test(){
const items = useSelector(state=>state.veriAl.data)
    console.log(items)
    return (

        <div>{
            items.map(
                (item)=>(<h2 id={item.number}>{item.name}</h2>)
            )

        }</div>
    )

}