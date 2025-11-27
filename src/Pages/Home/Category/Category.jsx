import "./Category.css"
import CarpenterImg from"../../../assets/categories/Carpenter.png"
import PlumberImg from "../../../assets/categories/Plumber.png"
import ElectricianImg from "../../../assets/categories/Electrician.png"
import PainterImg from "../../../assets/categories/Painter.png"
import LandscaperImg from "../../../assets/categories/Landscaper.png"
import MechanicImg from "../../../assets/categories/Mechanic.png"
import TailorImg from "../../../assets/categories/Tailor.png"
import ChefImg from "../../../assets/categories/Chef.png"

export default function Category() {
    const data = [
        { title: "Carpenter", image: CarpenterImg },
        { title: "Plumber", image: PlumberImg },
        { title: "Electrician", image: ElectricianImg },
        { title: "Painter", image: PainterImg },
        { title: "Landscaper", image: LandscaperImg },
        { title: "Mechanic", image: MechanicImg },
        { title: "Tailor", image: TailorImg },
        { title: "Chef", image: ChefImg },
    ];
    return (
        <section className="category-section container py-5  ">
            <div className="text-center py-5 title">
                <h2 class="display-5 fw-bolder text-center pb-4 w-50 mx-auto ">
                    <span class="text-gradient">Explore Services</span>
                </h2>
            </div>
            <div className="row g-4 ">
                {data.map((ele, index) => (
                <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div className="card text-bg-dark category-card ">
                        <img
                            src={ele.image}
                            className="card-img"
                            alt={`${ele.title} Image`}
                        />
                        <div className="card-img-overlay d-flex flex-column justify-content-center text-center bg-dark bg-opacity-50 rounded  ">
                            <h5 className="card-title">{ele.title}</h5>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </section>
    )
}
