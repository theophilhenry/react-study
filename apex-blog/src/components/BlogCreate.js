import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('mario')
    const [isPending, setIsPending] = useState(false)

    const navigate = useNavigate()

    const onSubmitCreate = (e) => {
        e.preventDefault()
        const blog = { title, body, author }
        setIsPending(true)

        fetch('http://localhost:8100/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog),
        }).then(() => {
            console.log('New Blog Added')
            setIsPending(false)
            navigate('/')
        })

    }

    return (
        <div>
            <div className="create">
                <h2>Add a New Blog</h2>
                <form action='/blogs' method='POST' onSubmit={onSubmitCreate}>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" required value={title} onChange={(e) => setTitle(e.target.value)} />

                    <label htmlFor="body">Body</label>
                    <textarea name="body" id="" cols="30" rows="10" required onChange={(e) => setBody(e.target.value)} >{body}</textarea>

                    <label htmlFor="author">Author</label>
                    <select name="author" id="author" value={author} onChange={(e) => setAuthor(e.target.value)}>
                        <option value="mario">Mario</option>
                        <option value="yoshi">Yoshi</option>
                    </select>

                    {!isPending && <button>Add Blog</button>}
                    {isPending && <button disabled>Loading...</button>}
                </form>
            </div>
        </div>
    )
}

export default Create
