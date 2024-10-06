import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [restaurants, setRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    searchApi("");
  }, []);

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "sao paulo",
        },
      });
      setRestaurants(response.data.businesses);
    } catch (err) {
      setErrorMessage("Deu ruim");
    }
  };
  return [searchApi, restaurants, errorMessage];
};
