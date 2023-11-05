
import BlogComponentOne from './../components/blog/BlogComponentOne';
import BlogComponentTwo from './../components/blog/BlogComponentTwo';
import BlogComponentThree from './../components/blog/BlogComponentThree';
import BlogComponentFour from './../components/blog/BlogComponentFour';
const Blog = () => {
    return (
        <div>
            <h1>Blog Page</h1>
            <BlogComponentOne/>
            <BlogComponentTwo/>
            <BlogComponentThree/>
            <BlogComponentFour/>
        </div>
    );
};

export default Blog;