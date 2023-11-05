import ServiceComponentFour from "../components/service/ServiceComponentFour";
import ServiceComponentOne from "../components/service/ServiceComponentOne";
import ServiceComponentThree from "../components/service/ServiceComponentThree";
import ServiceComponentTwo from "../components/service/ServiceComponentTwo";

const Service = () => {
    return (
        <div>
            <h1>Service Page</h1>
            <ServiceComponentOne/>
            <ServiceComponentTwo/>
            <ServiceComponentThree/>
            <ServiceComponentFour/>
        </div>
    );
};

export default Service;