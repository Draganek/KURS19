import { useEffect } from "react";
import { initHotels } from "../../reducer";
import LoadingIcon from "../UI/LoadingIcon/LoadingIcon"
import Hotels from "../Hotels/Hotels";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";

export default function Home({state, dispatch}) {
    useWebsiteTitle('Home')
    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: "set-hotels", hotels: initHotels })
            dispatch({ type: 'set-visible-hotels', hotels: initHotels })
            dispatch({ type: "set-loading", isLoading: false })
        }, 500)
    }, [])

    if (state.loading) return <LoadingIcon /> 

    return (
        <Hotels hotels={state.visibleHotels} />
    )
}