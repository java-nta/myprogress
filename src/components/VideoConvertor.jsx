import { useState } from "react";
import axios from "axios";

const VideoConvertor = () => {
  const [videoUrl, setVideoUrl] = useState("");

  const handleDownload = async () => {
    try {
      const response = await axios.get(videoUrl, { responseType: "blob" });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "video.mp4"); // Set the desired file name and extension
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error("Error downloading video:", error);
    }
  };

  return (
    <div className="container">
      <h3 className="title">React Js Download Video From Url | Link</h3>
      <input
        className="input-field"
        type="text"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
        placeholder="Enter video URL"
      />
      <button onClick={handleDownload}>Download Video</button>
    </div>
  );
};

export default VideoConvertor;
