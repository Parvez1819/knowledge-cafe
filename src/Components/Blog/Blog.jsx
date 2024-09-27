import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({ blog ,handleBookmarks,handleMarkAsRead}) => {
    const { id,title, cover_pic, author, posted_date,reading_time, hashtags } = blog;
    return (
        <div className='mb-10 space-y-3'>
            <img src={cover_pic} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex items-center mt-8 mb-4'>
                    <img className='w-16 h-16' src={author.img} alt="" />
                    <div className='ml-4'>
                        <h4 className='text-2xl font-bold'>{author.name}</h4>
                        <p className='text-base font-normal'>{posted_date}</p>
                    </div>
                       
                </div>
                
                <div ><p className='flex items-center '> <span className='font-medium text-xl'>{reading_time} min read</span> <button
                onClick={()=>handleBookmarks(blog)}
                 className='ml-2 text-2xl text-cyan-600'><FaBookmark></FaBookmark></button></p></div>
            </div>
            <h2 className='text-4xl font-bold'>Title : {title}</h2>
            <p className='mt-4 text-xl font-medium'>
                {
                    hashtags.map((hash, idx) => <span className='mr-2' key={idx}><a href="">{hash}</a></span>)
                }
            </p>
            <button className='mt5 font-semibold underline text-blue-800' onClick={()=>handleMarkAsRead(reading_time,id)}>Mark as read</button>
        </div>
    );
};

export default Blog;

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarks: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}