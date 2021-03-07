import React,{useState,useEffect} from 'react'
import axios from 'axios'

function ApiComponent() {

        const [state, setstate] = useState([])

        useEffect(() => {
            axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
                setstate(response.data)
            }).catch(()=>{
                
            })
        }, [])

    return (
        <>
            {
                state.map((data)=>{
                    return (<p id="abc" key={data.id}>{data.title}</p>)
                })
            }

        </>
    )
}

export default ApiComponent
