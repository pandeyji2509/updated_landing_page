

const AddUser = () => {
  const handleCreateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const contact_number = form.number.value;
    const identity_proof = form.identity.value;
    const address = form.address.value;
    const zip = form.zip.value;
    const password = form.password.value;
    const confirmpass = form.confirmpass.value;
    const user = {
      name,
      email,
      contact_number,
      identity_proof,
      address,
      zip,
      password,
    };
    if (password === confirmpass) {
      fetch(`http://localhost:8000/users`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  };

  return (
    <dialog id="my_modal_3" className="modal">
      <div method="dialog" className="modal-box w-11/12 max-w-5xl">
        <form>
          <button className="btn btn-sm btn-circle btn-ghost text-2xl absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h1 className="text-2xl font-bold text-center mt-2 ">
          Let&apos;s set up your user profile with some basic information
        </h1>
        <form onSubmit={handleCreateUser} className="w-full">
          <div className="grid grid-cols-2 gap-5 mt-12 mb-3">
            <div>
              <input
                type="text"
                name="name"
                placeholder="User Full Name"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                name="email"
                placeholder="Email ID"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="number"
                placeholder="Conatct Number"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="identity"
                placeholder="Identity Proof"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="address"
                placeholder="Address Lane 1"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="zip"
                placeholder="Zip Code"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                name="password"
                placeholder="Create Password*"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                name="confirmpass"
                placeholder="Confirm Password"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="flex justify-center mt-7">
            <input
              className="btn btn-primary px-12"
              type="submit"
              value="Add User"
            />
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default AddUser;
