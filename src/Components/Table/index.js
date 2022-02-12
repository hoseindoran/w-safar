import { memo, useState, useEffect } from "react";
import {orderBy, isEmpty} from "lodash";

const Table = ({data, handleSearch}) => {

    
    const [posts, setPosts] = useState([]);
    const [sortBy, setSortBy] = useState("title");

    useEffect(()=> {
       setPosts(data);
    },[data])

    useEffect(() => {
        if(sortBy !== "") {
            const sortPost = [...data];
            setPosts(orderBy(sortPost,[sortBy],["asc"]))
        }
    },[sortBy])


    const handleFilter = (e) => {
        const post = [...data];
        const value = e.target.value.toLowerCase();
        if(value !== "") {
            switch(e.target.name) {
                case "title" : {
                    const filteredPost = post.filter(item => item.title.toLowerCase().includes(value));
                    setPosts(filteredPost);
                    break;
                }
                case "content" : {
                    const filteredPost = post.filter(item => item.content.toLowerCase().includes(value));
                    setPosts(filteredPost);
                    break;
                }
                case "status" : {
                    const filteredPost = post.filter(item => item.status.toString().includes(value));
                    setPosts(filteredPost);
                    break;
                }
                case "updated_at" : {
                    const filteredPost = post.filter(item => item.updated_at !== null && item.updated_at.includes(value));
                    setPosts(filteredPost);
                    break;
                }
                case "created_at" : {
                    const filteredPost = post.filter(item => item.created_at.includes(value));
                    setPosts(filteredPost);
                    break;
                }
                default : 
                    setPosts(data)
                    break;
            }
        } else {
            setPosts(data)
        }

    }

    return (
        <>
            <div className="row mt-4">
                <div className="col-3 d-flex align-items-center">
                    <span className="text-nowrap pe-3">sort by :</span>
                    <select className="form-select" onChange={e => setSortBy(e.target.value)} defaultValue="sort By">
                        <option value="title">title</option>
                        <option value="content">content</option>
                        <option value="status">status</option>
                        <option value="created_at">created at</option>
                    </select>
                </div>
                <div className="col-4">
                <input type="text" placeholder="search by title" className="form-control" onChange={e => handleSearch(e)} name="title"/>
                </div>
                <div className="col-4">
                <input type="text" placeholder="search by content" className="form-control" onChange={e => handleSearch(e)} name="content"/>
                </div>
            </div>
            <table className="table mt-3">
                <thead>
                    <tr>
                        <th scope="col">title</th>
                        <th scope="col">content</th>
                        <th scope="col">status</th>
                        <th scope="col">updated at</th>
                        <th scope="col">created at</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts ? (
                            <tr>
                                <td><input type="text" className="form-control" placeholder="filter by title" onChange={e => handleFilter(e)} name="title"/></td>
                                <td><input type="text" className="form-control" placeholder="filter by content" onChange={e => handleFilter(e)} name="content"/></td>
                                <td>
                                    <select className="form-select"  onChange={e => handleFilter(e)} name="status" defaultValue="sort By">
                                        <option value="">all</option>
                                        <option value="1">active</option>
                                        <option value="0">deActive</option>
                                    </select>
                                </td>
                                <td><input type="text" className="form-control" placeholder="filter by updated at" onChange={e => handleFilter(e)} name="updated_at"/></td>
                                <td><input type="text" className="form-control" placeholder="filter by created at" onChange={e => handleFilter(e)} name="created_at"/></td>
                            </tr>
                        ) : null
                    }
                    {
                        posts?.map(item => (
                            <tr key={item.id}>
                                <td>{item.title}</td>
                                <td>{item.content}</td>
                                <td>{item.status}</td>
                                <td>{item.updated_at}</td>
                                <td>{item.created_at}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default memo(Table);