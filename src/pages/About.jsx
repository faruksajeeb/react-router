import AboutComponentOne from '../components/about/AboutComponentOne';
import AboutComponentTwo from '../components/about/AboutComponentTwo';
import AboutComponentThree from '../components/about/AboutComponentThree';
import AboutComponentFour from '../components/about/AboutComponentFour';
const About = () => {
    return (
        <div>
            <h1>About Page</h1>
            <AboutComponentOne/>
            <AboutComponentTwo/>
            <AboutComponentThree/>
            <AboutComponentFour/>
        </div>
    );
};

export default About;