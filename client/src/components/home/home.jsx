
import Navbar from "./navbar";
import Banner from "./banner";
import Slide from "./slide";
import {Box, styled} from '@mui/material';
import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { getProducts } from "../../redux/actions/productActions";
import MidSlide from "./MidSlide";
const Component = styled(Box)`
    padding: 10px 8px;
    background: #f2f2f2;
`
const Home = () =>{

    const {products} = useSelector(state => state.getProducts);
    //console.log(products);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getProducts())
    }, [dispatch]);

    return(
        <>
        <Navbar/>
        <Component>
         <Banner/>
                <MidSlide
                    data={products} 
                />
                <Slide
                    data={products} 
                    title='Discounts for You'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Suggested Items'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Top Selection'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Recommended Items'
                    timer={false} 
                    multi={true} 
                />

        </Component>
        </>
    )
}

export default Home;