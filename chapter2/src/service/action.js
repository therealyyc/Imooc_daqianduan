import axios from "axios";

export function fetchData(pageNumber, pageSize) {
  return Promise.resolve(
    axios({
      url: `/api?pageNumber=${pageNumber}&pageSize=${pageSize}`,
      method: 'GET',
    }))
}