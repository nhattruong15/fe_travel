import axiosClient from "./axiosClient";

const tourApi = {
  getAll(params) {
    const url = "/tours";
    return axiosClient.get(url, { params });
  },

  get(id) {
    const url = "/tours/{id}";
    return axiosClient.get(url);
  },
  add(data) {
    const url = "/tours";
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = "/tours/${data.id}";
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = "/tours/${id}";
    return axiosClient.delete(url);
  },
};
export default tourApi;
