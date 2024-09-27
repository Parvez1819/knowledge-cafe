
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";



const BLogs = ({ handleBookmarks, handleMarkAsRead }) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    // console.log(setBlogs)
    return (

        <div className="md:w-2/3 p-5 ">
            <h4>Blogs {blogs.length}</h4>

            {
                blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    handleBookmarks={handleBookmarks}
                    handleMarkAsRead={handleMarkAsRead}
                ></Blog>)
            }

        </div>
    );
};

BLogs.propTypes = {
    handleBookmarks: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default BLogs;