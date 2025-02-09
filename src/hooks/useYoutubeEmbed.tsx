import { useEffect, useState } from "react";

const useYoutubeEmbed = (url: string) => {
  const [embedUrl, setEmbedUrl] = useState(url);

  useEffect(() => {
    if (url.includes("/embed/")) {
      // If "/embed/" is already present, return the same URL
      setEmbedUrl(url);
    } else if (url.includes("youtube.com/watch?v=")) {
      // If it's a regular YouTube watch URL, convert it to embed URL
      const videoId = url.split("v=")[1];
      setEmbedUrl(`https://www.youtube.com/embed/${videoId}`);
    }
  }, [url]);

  return embedUrl;
};

export default useYoutubeEmbed;
