function PostCard({ title, body, onClick }:
    { title: string; body: string, onClick: () => void }) {

        return(
      <div className="post-card" 
      onClick={onClick}>
      <h3>{title}</h3>
      <p>{body}</p>
      </div>
        );
    }

    export default PostCard;