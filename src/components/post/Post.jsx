import "./post.css"
export default function Post() {
    return (
        <div className='post'>
            <img src="https://images.unsplash.com/photo-1633113216317-d0bb16e34e3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet.
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <div className="postDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt non in quod minus impedit, illum atque nisi voluptatum esse unde natus, temporibus quibusdam cupiditate aliquid, expedita consectetur numquam perspiciatis dolore?
            </div>
        </div>
    )
}
