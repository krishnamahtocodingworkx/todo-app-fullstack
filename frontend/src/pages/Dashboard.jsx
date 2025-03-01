import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { Avatar, Box, Button } from "@mui/material";

const Dashboard = () => {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) {
      toast.error("Please select a file before uploading.");
      return;
    }

    const formData = new FormData();
    formData.append("profileImage", file);

    try {
      const response = await axios.post(
        "http://localhost:9000/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      toast.success("File uploaded successfully!");
      console.log("response:", response);
    } catch (error) {
      toast.error("Upload failed. Try again.");
      console.error("Upload error:", error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
        height: "100vh",
      }}
    >
      <h1>Dashboard Page</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="file"
          name="profileImage"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <Button variant="contained" onClick={handleUpload}>
          Upload
        </Button>
      </form>
      {file && <Avatar src={URL.createObjectURL(file)} alt="Profile icon" />}
    </Box>
  );
};

export default Dashboard;
