import React from "react";
import { toast } from "react-toastify";

const AddTool = () => {
  const handleAddTool = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const price = e.target.price.value;
    const available_quantity = parseInt(e.target.available_quantity.value);
    const minimum_order_quantity = parseInt(
      e.target.minimum_order_quantity.value
    );
    const img = e.target.img.value;
    let description = e.target.description.value;
    description = [description];

    const tool = {
      name,
      img,
      description,
      minimum_order_quantity,
      available_quantity,
      price,
    };

    fetch(`https://immense-/demo/waters-78864.herokuapp.com/tools`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(tool),
    })
      .then((res) => res.json())
      .then((data) => toast.success("Tool successfully added."));
    e.target.reset();
  };
  return (
    <div>
      <div>
        <h3
          className="text-xl md:px-20 mt-5 text-center "
          style={{ fontFamily: "Teko" }}
        >
          Add a new tool
        </h3>
      </div>
      <hr className="mb-5" />
      <div className="flex justify-center my-10 px-5">
        <div className="card shadow-2xl bg-base-100 w-full max-w-sm">
          <div className="card-body">
            <form action="" onSubmit={handleAddTool}>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  class="input input-bordered input-sm"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Price</span>
                </label>
                <input
                  type="text"
                  placeholder="Price"
                  name="price"
                  class="input input-bordered input-sm"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Available Quantity</span>
                </label>
                <input
                  type="text"
                  name="available_quantity"
                  placeholder="avaiable quantity"
                  class="input input-bordered input-sm"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Minimum Order Quantity</span>
                </label>
                <input
                  type="text"
                  name="minimum_order_quantity"
                  placeholder="avaiable quantity"
                  class="input input-bordered input-sm"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Image</span>
                </label>
                <input
                  type="text"
                  name="img"
                  placeholder="image url"
                  class="input input-bordered input-sm"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Description</span>
                </label>
                <textarea
                  class="textarea textarea-bordered"
                  name="description"
                  placeholder="Description"
                ></textarea>
              </div>
              <div class="form-control mt-6">
                <button type="submit" class="btn btn-primary">
                  Add tool
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTool;
