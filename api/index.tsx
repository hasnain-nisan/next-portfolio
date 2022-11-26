import axios from "axios";

export const url = "http://127.0.0.1:8000/api";

// export const fetchData = () =>
//   axios.post(`${url}/get-all-data`, {
//     token: "f240ad10-2d42-4d20-b361-4f4dc419b360",
//   });

//drive.google.com/file/d/14x2fNthWAWt1E99CfQxQydLrFnDi6mff/view?usp=share_link

export const fetchData = () => axios.get(`https://api.npoint.io/b183f1e2a539ae76eb39`);

export const submitContactMessge = (formData: any) => {
  formData.append("token", "f240ad10-2d42-4d20-b361-4f4dc419b360");
  return axios.post(`${url}/add-contact-message`, formData);
};