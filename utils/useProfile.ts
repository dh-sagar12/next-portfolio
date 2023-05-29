import useSWR from "swr"

const fetcher = (...args: any ) => fetch(args[0]).then(res => res.json())

const  useProfile =   ()=> {
    const { data, error, isLoading } = useSWR(`/api/profile`, fetcher)
    console.log('data', data );
    
    return {
      profile: data,
      isLoading,
      isError: error
    }
  }
  

export default useProfile;
  