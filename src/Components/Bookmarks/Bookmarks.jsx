
import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks, readingTime }) => {

    return (
        <div className="md:w-1/3">
            <div className="mb-3 bg-[#1111110D] p-5 rounded-2xl">
                <h4 className="text-[#6047EC] text-2xl px-2 py-3 font-bold">Spent total time of read : {readingTime} minutes</h4>
            </div>
            <div className=" mb-4 bg-[#1111110D] p-5 rounded-2xl">\
            
            <h4 className="text-2xl font-bold mb-3">Bookmarked Blogs :  {bookmarks.length}</h4>
            {
                bookmarks.map((bookmark, idx) => <Bookmark
                    key={idx}
                    bookmark={bookmark}

                >

                </Bookmark>)
            }
        </div>
        </div>
    );
};

export default Bookmarks;
Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}