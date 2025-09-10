import { useEffect } from "react";

const Post = ({ data, setPageNo }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (param) => {
        if (param[0].isIntersecting) {
          setPageNo((prev) => prev + 1);
          observer.unobserve(lastImg);
        }
      },
      {
        threshold: 0.5, // after 50% of the image is visible, load the next page
      }
    );
    const lastImg = document.querySelector(".infinite-scroll:last-child");
    if (!lastImg) return;
    observer.observe(lastImg);

    return () => {
      if (lastImg) {
        observer.unobserve(lastImg);
      }
      observer.disconnect();
    };
  }, [data]);

  return data?.map((imgData) => (
    <div key={imgData.id} className="infinite-scroll">
      <img src={imgData.download_url} />
    </div>
  ));
};

export default Post;
