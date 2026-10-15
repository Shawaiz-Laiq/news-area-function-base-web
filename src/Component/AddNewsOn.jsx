import React, { useState } from "react";

function AddNewsOn(props) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    url: "",
    urlToImage: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const news = {
      author: props.username || "Admin",
      title: formData.title,
      description: formData.description,
      url: formData.url,
      urlToImage: formData.urlToImage,
      publishedAt: new Date().toISOString(),
      content: formData.content,
    };

    props.onPublish(news);
    props.closeLogin();
  };

  return (
    <div className="container py-5" style={{ height: "500px" }}>
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <div className="card border-0 shadow-lg rounded-4">
            <div className="card-header bg-primary text-white p-4 position-relative">
              <span
                style={{
                  position: "absolute",
                  top: "5px",
                  right: "15px",
                  cursor: "pointer",
                  fontSize: "20px",
                  color: "white",
                }}
                onClick={props.closeLogin}
              >
                &times;
              </span>

              <h3 className="mb-1">Create News Article</h3>
              <p className="mb-0">
                Enter all required news details.
              </p>
            </div>

            <div className="card-body p-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    News Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    className="form-control form-control-lg"
                    placeholder="Enter news title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    maxLength={55}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Description *
                  </label>
                  <textarea
                    name="description"
                    className="form-control"
                    rows="3"
                    placeholder="Write a short description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    News URL *
                  </label>
                  <input
                    type="url"
                    name="url"
                    className="form-control"
                    placeholder="https://example.com/news"
                    value={formData.url}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Image URL *
                  </label>
                  <input
                    type="url"
                    name="urlToImage"
                    className="form-control"
                    placeholder="https://example.com/image.jpg"
                    value={formData.urlToImage}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    News Content *
                  </label>
                  <textarea
                    name="content"
                    className="form-control"
                    rows="6"
                    placeholder="Write full news content"
                    value={formData.content}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg w-100"
                >
                  Publish News
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNewsOn;