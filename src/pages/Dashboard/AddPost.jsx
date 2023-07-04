import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const AddPost = () => {
  const [time, setTime] = useState(new Date());
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);

  const onSubmit = (data) => {
    console.log(data);
    const postDetails = {
      title: data.title,
      cover_image: data.img,
      author: data.author,
      content: data.content
    }
    console.log(import.meta.env.VITE_BASE_URL)
    fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/news/add/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(postDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <dialog id="my_modal_2" className="modal">
      <div method="dialog" className="modal-box w-11/12 max-w-5xl">
        <form>
          <button className="btn btn-sm btn-circle btn-ghost text-2xl absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h1 className="text-2xl font-bold text-center mt-2 ">
          Let&apos;s add a new post
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="grid grid-cols-2 gap-5 mt-8 mb-3">
            <div>
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="input input-bordered w-full"
                {...register("title", { required: true })}
              />
              {errors.title && (
                <span className="text-red-600">Title is required</span>
              )}
            </div>
            <div>
              <input
                type="text"
                name="author"
                placeholder="Author"
                className="input input-bordered w-full"
                {...register("author", { required: true })}
              />
              {errors.author && (
                <span className="text-red-600">Author is required</span>
              )}
            </div>
            <div>
              <input
                type="text"
                name="tags"
                placeholder="Tags"
                className="input input-bordered w-full"
                {...register("tags", { required: true })}
              />
              {errors.tags && (
                <span className="text-red-600">Tags is required</span>
              )}
            </div>
            <div>
              <input
                type="text"
                name="image"
                placeholder="Image"
                className="input input-bordered w-full"
                {...register("img", { required: true })}
              />
              {errors.img && (
                <span className="text-red-600">Image is required</span>
              )}
            </div>
            <div>
              <input
                type="text"
                name="category"
                placeholder="Categories"
                className="input input-bordered w-full"
                {...register("core_categories", { required: true })}
              />
              {errors.core_categories && (
                <span className="text-red-600">Category is required</span>
              )}
            </div>
            <div>
              <input
                type="text"
                name="currenttime"
                placeholder={`${time.toLocaleDateString()} ${time.toLocaleTimeString()}`}
                className="input input-bordered w-full"
                disabled
                {...register("created_at", { required: false })}
              />
            </div>
            <div className="col-span-2 w-full">
              <textarea
                {...register("content", { required: true })}
                className="textarea textarea-bordered textarea-sm w-full max-w-6xl"
                placeholder="Content"
              ></textarea>
              {errors.content && (
                <span className="text-red-600">Content is required</span>
              )}
            </div>
          </div>
          <div className="modal-action justify-center">
            <button className="btn btn-primary px-12">Add New Post</button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default AddPost;
