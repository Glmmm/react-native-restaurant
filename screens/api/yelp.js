import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer I9zwwfBBsexR5vtJ2op4Z-4HTKGowNeXKBQz6eqEzVFhUfYcA7AWzXEp1PL3QxwZv9bP8T2Wrl166_do0Q2G08HXDdSgOkt9gK7nNcGgR9VV5QGjWb9M3RLz0BzOZnYx",
  },
});



