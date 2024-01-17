import PropTypes from 'prop-types';

const Blog = ({ blog, handleAddToBookmark }) => {
    console.log(blog?.id);
    // const {cover}=blog;
    // console.log(cover);
    const { cover, author, title, author_img, posted_data, reading_time, hashtags } = blog || {};
    return (
        <div>
            <img src={cover} alt={`cover picture of the title `} />
            <div className='flex justify-between'>
                <div className='flex gap-4'>
                    <img className='w-16' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_data}</p>
                    </div>
                </div>
                <div>
                    <span>
                        {reading_time} min read
                    </span>
                    <button onClick={handleAddToBookmark} className='ml-2 text-2xl text-red-600'>
                        
                    </button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags?.map((hash, idx) => <span key={idx}><a href=''>#{hash}</a></span>)
                }
            </p>

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}


export default Blog;