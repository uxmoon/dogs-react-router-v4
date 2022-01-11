import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./DogsList.css";

export const DogDetails = ({ dog }) => {
  return (
    <>
      <Helmet>
        <title>{dog.name} - Dog App</title>
      </Helmet>
      <div className="container pt-4">
        <div className="row">
          <div className="col-lg-3">
            <Link to="/dogs" className="btn btn-primary mb-4">
              Go back
            </Link>
          </div>
          <div className="col-lg-9">
            <div className="row">
              <div className="col-lg-4">
                <div className="DogsList-thumbnail">
                  <img
                    src={`../src/images/${dog.src}.jpg`}
                    alt={dog.name}
                    className="card-img-top"
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="card">
                  <div className="card-body">
                    <h1 class="DogsList-name card-title h3">{dog.name}</h1>
                    <h2 class="card-subtitle mb-2 text-muted h6">
                      Age: {dog.age}
                    </h2>
                  </div>
                  <ul className="list-group list-group-flush">
                    {dog.facts.map((item) => (
                      <li key={item} className="list-group-item">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
