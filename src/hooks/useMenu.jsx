import { useQuery } from "@tanstack/react-query";


// custom hooks
const useMenu = () => {
    // const [catagoriesData, setcatagoriesData] = useState([])
    // const [loading, setLoading] = useState(true)
    // useEffect(() => {
    //     fetch('https://bistro-boss-server-mauve-nine.vercel.app/menu')
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
            const data = await fetch('https://bistro-boss-server-mauve-nine.vercel.app/menu')
            return data.json()
        }
    })
    return [catagoriesData,loading,refetch]
};

export default useMenu;