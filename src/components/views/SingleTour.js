import tourApi from "../../api/tourApi";
import React, { useEffect, useState } from "react";

function TourDetail({ tourId }) {
  const [tourDetail, setTourDetail] = useState(null);

  useEffect(() => {
    fetchTourDetail();
  }, []);

  const fetchTourDetail = async () => {
    try {
      const response = await tourApi.get();
      setTourDetail(response.data);
    } catch (error) {
      console.error("Error fetching tour detail:", error);
    }
  };

  if (!tourDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Tour Detail</h1>
      <p>Name: {tourDetail.name}</p>
      <p>Description: {tourDetail.description}</p>
      {/* Các thông tin khác về tour */}
    </div>
  );
}

export default TourDetail;
