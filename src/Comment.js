import React,{useState,useEffect} from 'react'
import axios from 'axios'
function Comment() {
    const [comments,setComments]=useState([])
    const [commentLength,setCommentLength]=useState(0)
    const [comment,setComment]=useState('')
    useEffect(()=>{
        const dataApi=axios.get('https://jsonplaceholder.typicode.com/comments?postId=1')
             .then(json => 
              { 
                 setComments(json.data)
                 setCommentLength(Object.keys(json.data).length)
            })
    },[],setCommentLength,setComments)
    console.log(comments)

    const postComment=(event)=>{
         event.preventDefault()
        setComment('')
    }
    return (
        <div>
            <h2 className="commentLength">{commentLength} comments</h2>
            {comments.map(data =>( 
                     <div>
                         <div className="row">
                             <div className="col image">
                                <img src="https://img.freepik.com/free-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?size=626&ext=jpg" />
                             </div>
                             <div className="col comment">
                                <p key={data.id}>{data.name}<br/><strong>{data.body}</strong></p>
                             </div>
                         </div>
                     </div>
                    ))}
            <form>
                <input type="text" placeholder="Enter your comment" value={comment}
                onChange={e=>setComment(e.target.value)}></input>
                <button className="button"type="submit" onClick={postComment}>Enter</button>
            </form>
        </div>
    )
}

export default Comment
