import { useQuery } from "@tanstack/react-query";


// custom hooks
const useMenu = () => {
    // const [catagoriesData, setcatagoriesData] = useState([])
    // const [loading, setLoading] = useState(true)
    // useEffect(() => {
    //     fetch('http://localhost:5000/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             setcatagoriesData(data)
    //             setLoading(false)
    //         })
    // }, [])
    // return [catagoriesData,loading]

    const {data : catagoriesData = [], isLoading : loading ,refetch} = useQuery({
        queryKey : ['catagoriesData'],
        queryFn : async ()=>{
            const data = await fetch('http://localhost:5000/menu')
            return data.json()
        }
    })
    return [catagoriesData,loading,refetch]
};

export default useMenu;