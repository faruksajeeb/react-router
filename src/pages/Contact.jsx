
import ContactComponentFour from '../components/contact/ContactComponentFour';
import ContactComponentThree from '../components/contact/ContactComponentThree';
import ContactComponentTwo from '../components/contact/ContactComponentTwo';
import ContactComponentOne from './../components/contact/ContactComponentOne';
const Contact = () => {
    return (
        <div>
            <h1>Contact Page</h1>
            <ContactComponentOne/>
            <ContactComponentTwo/>
            <ContactComponentThree/>
            <ContactComponentFour/>
        </div>
    );
};

export default Contact;