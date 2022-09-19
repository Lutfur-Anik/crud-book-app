import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBook } from './BookSlice';

const ShowBook = () => {
    const books=useSelector(state=>state.booksReducer.books)
    const dispatch=useDispatch()
    const handleDelete=(id)=>{
     dispatch(deleteBook(id))
    }
    return (
        <div>
            <h2>List Books</h2>
            <table>
            <thead>
                <tr>
                    
                    <th>Title</th>
                    <th>Author</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
             {books && books.map((book)=>{
                const{id,title,author}=book;
                return <tr>
                    
                    <td>{title}</td>
                    <td>{author}</td>
                    <td>
                       <Link to={"/edit-book"} state={{id,title,author}}><button>Edit</button></Link>
                        <button onClick={()=>handleDelete(id)}>Delete</button>
                    </td>
                </tr>
             })}
            </tbody>
            </table>
        </div>
    );
};

export default ShowBook;