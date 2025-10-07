import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

const useApps=()=>{
    const [Apps,setApps]=useState([])
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(null)

    useEffect(()=>{
       setLoading(true)
 axios('../appdata.json')
 .then(data=>setApps(data.data))
 .catch(err=>setError(err))
.finally(()=>setLoading(false))
    },[])

    return {Apps,loading,error}
}

export default useApps