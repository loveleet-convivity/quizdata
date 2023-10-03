"use client";
import axios from "axios";
export function getQuiz(id: number): any {
  //   let config = {
  //     method: "get",
  //     maxBodyLength: Infinity,
  //     url: `https://myfavoritetutor.com/wp-json/ldlms/v2/sfwd-question/?quiz=${id}`,
  //     headers: {
  //       Authorization:
  //         "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL215ZmF2b3JpdGV0dXRvci5jb20iLCJpYXQiOjE2OTI0MjY3NDksIm5iZiI6MTY5MjQyNjc0OSwiZXhwIjoxNjkzMDMxNTQ5LCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxMiJ9fX0.9i8R21EaYTl2ocFtvTAghZ8vYh7W2FW38bdSVPw1snE",
  //     },
  //   };

  //   axios
  //     .request(config)
  //     .then((response) => {
  //       return response.data;
  //     })
  //     .catch((error) => {
  //       throw error;
  //     });
  return axios
    .get(
      `https://myfavoritetutor.com/wp-json/ldlms/v2/sfwd-question/?quiz=${id}`,
      {
        headers: {
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL215ZmF2b3JpdGV0dXRvci5jb20iLCJpYXQiOjE2OTI0MjY3NDksIm5iZiI6MTY5MjQyNjc0OSwiZXhwIjoxNjkzMDMxNTQ5LCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxMiJ9fX0.9i8R21EaYTl2ocFtvTAghZ8vYh7W2FW38bdSVPw1snE",
        },
      }
    )
    .then((res) => res.data);
}
