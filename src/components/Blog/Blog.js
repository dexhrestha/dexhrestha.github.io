import { useParams } from 'react-router-dom';

const Blog = () => {
  // Accessing the blogSlug parameter
  const { blogSlug } = useParams();
  console.log(blogSlug)
  // Now you can use blogSlug in your component
  return (
    <div>
      <h2>Blog</h2>
      <p>Blog Slug: {blogSlug}</p>
    </div>
  );
}


export default Blog;
