import { useDispatch } from "react-redux"
import { setProducts } from "../store/slices/productsSlice"

const useFetchProducts = () => {
    const dispatch = useDispatch()
    const fetchProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products').catch((err) => {
            console.log( "errss",err )
        })
        const data = await response.json()
       
        dispatch(setProducts(data))
    }

    
  return (
   {
    fetchProducts
   }
  )
}

export default useFetchProducts