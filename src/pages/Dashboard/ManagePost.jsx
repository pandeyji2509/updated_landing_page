import { useEffect, useState } from "react";

const ManagePost = () => {
  const [newses, setNewses] = useState([]);
  
  useEffect(() => {
    fetch(`${import.meta.env.VITE_LOCAL_URL}/api/v1/news/`)
      .then((res) => res.json())
      .then((data) => setNewses(data.results));
  }, []);

  console.log(newses)

  return (
    <div className="my-5">
      <div className="px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
        {newses.map((news) => (
          <div
            key={news.id}
            className="card card-compact w-64 bg-base-100 shadow-xl"
          >
            <figure>
              <img className="w-64 h-40" src={news.cover_image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="text-xl font-bold">{news.title}</h2>
              <p className="text-base font-medium">{news.author}</p>
              <p>
                {news.content} <span className="text-primary">...See more</span>
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-ghost btn-xs">Edit post</button>
                <button className="btn btn-ghost btn-xs">Show Post</button>
              </div>
            </div>
          </div>
        ))}
        <div className="card card-compact w-64 bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-64 h-40"
              src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?w=996&t=st=1687638366~exp=1687638966~hmac=988570e261d14138dd801dba1dfde39afc40280e2cf2dce715ad58c0fa929872"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-bold">Title Here</h2>
            <p className="text-base font-medium">Author Name</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore officia, facere hic laudantium tempora architecto?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-ghost btn-xs">Edit post</button>
              <button className="btn btn-ghost btn-xs">Show Post</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagePost;
