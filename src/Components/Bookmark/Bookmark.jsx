import PropTypes from "prop-types";
const Bookmark = ({bookmark}) => {
    const {title}=bookmark;
    return (
        <div className="bg-slate-200 p-4 rounded-xl mb-3">
            <h3 className="text-lg font-semibold">{title}</h3>
        </div>
    );
};

export default Bookmark;

Bookmark.propTypes={
    bookmark:PropTypes.object.isRequired
}