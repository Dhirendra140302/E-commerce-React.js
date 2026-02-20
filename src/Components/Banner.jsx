import Carousel from 'react-bootstrap/Carousel';
import { carousel } from '../data';
import Cards from './Cards';
import { useLocation } from 'react-router-dom';
import About from './About';

const Banner = () => {
    const location=useLocation();
    // console.log(location.state)

    const searchText = location.state || "";
    return (
       <>
        <Carousel fade>
            {carousel.map((images,index)=> <Carousel.Item  key={index}>
                <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <img style={{height:"65vh", width:"98vw"}} 
                        src={images.url} alt="" />
                </div>
            </Carousel.Item>)}
        </Carousel>
        <Cards/>
        <About/>
       </>
    )
}
export default Banner;