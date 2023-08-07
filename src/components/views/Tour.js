import React, { useEffect, useState } from "react";

import "./././../../App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Searchbar } from "../Searchbar";
import { Subrise } from "../Subrise";
import Container from "react-bootstrap/esm/Container";
import tourApi from "../../api/tourApi";
import Card from "react-bootstrap/Card";

function Tour() {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await tourApi.getAll();
        setDataList(response.data); // Giả sử response trả về dữ liệu trong property 'data'
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="tour_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 style={{ color: "white", fontSize: "2.5rem" }}>All Tours</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <Searchbar />
      </div>

      <Container className="mt-5">
        <div className="row">
          {dataList.map((item) => (
            <div className="mb-4 col-sm-6 col-md-4 col-lg-3" key={item.id}>
              <Card>
                <div className="tour__img">
                  <Card.Img variant="top" src={`..${item.photo}`} />
                  <span>Featured</span>
                </div>
                <Card.Body>
                  <div className="card__top d-flex align-items-center justify-content-between">
                    <span className="tour__location d-flex align-items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="red"
                        class="bi bi-geo-alt"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      </svg>
                      {item.city}
                    </span>
                    <span className="tour__rating d-flex align-items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="red"
                        class="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      {item.rating}
                    </span>
                  </div>
                  <Card.Title>{item.title}</Card.Title>
                  <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
                    <h5>
                      <span style={{ color: "#faa935" }}>$ {item.price}</span>
                      <span style={{ opacity: 0.3 }}> /per person</span>
                    </h5>
                    <a href="/">
                      <button className="booking__btn">Book now</button>
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </Container>
      <Container>
        <Subrise />
      </Container>
    </div>
  );
}
export default Tour;
