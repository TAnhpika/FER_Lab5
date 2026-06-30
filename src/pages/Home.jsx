import { Carousel } from "react-bootstrap";

const slides = [
    "/images/slide1.jpg", 
    "/images/slide2.jpg",
    "/images/slide3.jpg",
];

const categories = [
    "/images/menu-01.jpg",
    "/images/menu-02.jpg",
    "/images/menu-03.jpg",
    "/images/menu-04.jpg",
    "/images/menu-05.jpg",
    "/images/menu-06.jpg",
];

function Home() {
    return (
        <div className="home-page">
            <div className="home-carousel">
                <Carousel>
                    {slides.map((src, index) => (
                        <Carousel.Item key={index}>
                            <img className="d-block w-100" src={src} alt={`Slide ${index + 1}`} />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
            <div className="category-row">
                {categories.map((src, index) => (
                    <img key={index} src={src} alt="" className="category-img" />
                ))}
            </div>

            <h1 className="page-title">This is Home Page</h1>
        </div>
    );
}

export default Home;
