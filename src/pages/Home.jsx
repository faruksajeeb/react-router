import HomeComponentFour from "../components/home/HomeComponentFour";
import HomeComponentOne from "../components/home/HomeComponentOne";
import HomeComponentThree from "../components/home/HomeComponentThree";
import HomeComponentTwo from "../components/home/HomeComponentTwo";

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <HomeComponentOne/>
            <HomeComponentTwo/>
            <HomeComponentThree/>
            <HomeComponentFour/>
        </div>
    );
};

export default Home;