import Blogs from "./Blogs"
import useFetch from "../hooks/useFetch"

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8100/blogs')

    return (
        <div className="home">
            {error && <div>Error : {error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <Blogs blogs={blogs} title='All Blogs!' />}
        </div>
    )
}

export default Home
