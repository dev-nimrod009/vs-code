const BlogList = ( {shope }) => {
  return (
    <div className="blog-list">
      {shope.map((item) => (
        <div className="blog-preview" key={item.id}>
          <h2>{item.name}</h2>
          <p>Type: {item.type}</p>
        </div>
      ))}
    </div>
  );
};


export default BlogList;