"use client";
import { backend_url } from "@/newLayout";
import { setAllblog } from "@/redux/blogSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAllApplicants = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllApplicants = async () => {
      try {
        const res = await axios.get(`${backend_url}/api/v1/blogs/all`, { withCredentials: true });
        console.log(res);  

        if (res.data.success) {
          dispatch(setAllblog(res.data.blogs));  
        }
      } catch (error) {
        console.error("Error fetching Messages:", error);  
      }
    };
    fetchAllApplicants();  
  }, [dispatch]); 

};

export default useGetAllApplicants;