import { useState, useEffect } from "react";
import PostCard from "./PostCard";
import "./App.css";

function App() {
  const [posts, setPosts] = useState<
  { id: number; title: string; body: string }[]
  >([]);

   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<string | null>(null);
   const [search, setSearch]= useState("");
   const [selected, setSelected] = useState<Post | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => { 
      if (!response.ok) throw new
      Error("Failed to fetch");
         return response.json();
    })
    .then((data) => {setPosts(data);
        setLoading(false);
     })
       .catch((err) => {
        setError(err.message);
        setLoading(false);
       })
  }, []);
   
  const filteredPosts = posts.filter((post) => post.title.toLowerCase()
  .includes(search.toLowerCase()) ||
  post.body.toLocaleLowerCase().includes(search.toLocaleLowerCase())
);

 if (selected) {
  return (
    <div className="post-detail">
  <button className="back-button" onClick={() => setSelected(null)}>Back</button>
      <h1>{selected.title}</h1>
      <p>{selected.body}</p>
    </div>
  );
 }

  return (
        <div>
          <h1>Posts from API</h1>

          <div className="posts">
            <input
            className="search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
               placeholder="search posts..."/>
            {loading && <p>LOADING...</p>}
            {error && <p style={{ color: "red"}}>Error: {error}</p>}
              {!loading && !error && 
            filteredPosts.map((post) => ( 
          <PostCard key={post.id}
          title={post.title} body={post.body} onClick={() => 
            setSelected(post)}/>
          
      ))}
      </div>
    </div>
  );
}

export default App;