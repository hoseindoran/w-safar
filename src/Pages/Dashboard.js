import UnAuthenticated from "../HOC/UnAuthenticated";
import { useEffect, useState } from "react";
import { getPosts, getPaginate, search } from "../Api";
import Table from "../Components/Table";
import Pagination from "../Components/Pagination";
import { toast } from "react-toastify";

const Dashboard = () => {

    const [posts, setPosts] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [paginate, setPaginate] = useState({});

    useEffect(async () => {
        try {
            const {result : {items, _meta}} = await getPosts();
            setPosts(items)
            setPaginate(_meta);
        }
        catch(error) {
            toast.error("its wrong..!")
        }
    },[])

    useEffect(async () => {
        try {
            const {result : {items, _meta}} = await getPaginate(pageNumber);
            setPosts(items)
            setPaginate(_meta);
        }
        catch(error) {
            toast.error("its wrong..!")
        }
    },[pageNumber])

    const searchPost = async (event) => {
        if(event.target.value === "") {
            const {result : {items, _meta}} = await getPaginate(pageNumber);
            setPosts(items)
            setPaginate(_meta);
        } else {
            const value = {
                fieldName : event.target.name,
                userText : event.target.value,
            }
            const {result : {items, _meta}} = await search(value);
            setPosts(items)
            setPaginate(_meta);
        }
    }

    return (
        <>
            <div className="container">
                <Table data={posts} handleSearch={searchPost}/>
                <div className="row justify-content-center">
                    <div className="col-5">
                        {
                            paginate && <Pagination paginate={paginate} handlePaginate={setPageNumber} />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default UnAuthenticated(Dashboard);