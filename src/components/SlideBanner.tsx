import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

export function SlideBanner(){
    return(
        <Carousel>
            <div>
            <img src="images/Banner.png" alt="Banner"/>
            </div>

            <div>
            <img src="images/Banner2.png"  alt="Banner"/>
            </div>
        </Carousel>
    )
}