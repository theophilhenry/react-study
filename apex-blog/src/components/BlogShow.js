import { useNavigate, useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"

const BlogShow = () => {
    const { id } = useParams()
    const { data: blog, isPending, error } = useFetch(`http://localhost:8100/blogs/${id}`)
    const navigate = useNavigate()


    const destroyBlog = (id) => {
        fetch(`http://localhost:8100/blogs/${id}`, {
            method: 'DELETE'
        }).then(() => {
            navigate('/')
        })
    }

    return (
        <div className="blog-details">
            { error && <div>{error}</div> }
            { isPending && <div>Loading...</div> }
            { blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>{blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={() => destroyBlog(blog.id)}>Delete</button>
                </article>
            ) }
        </div>
    )
}

export default BlogShow
