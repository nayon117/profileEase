import { useRef, useState } from "react";

const GallarySection = () => {
  const [images, setImages] = useState([
    "/image.png",
    "/image.png",
    "/image.png",
  ]);

  const galleryRef = useRef(null);

  // Function to add a new image from local files
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Convert file to a URL
      setImages([...images, imageUrl]);
    }
  };

  // Scroll gallery to the left
  const scrollLeft = () => {
    galleryRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  // Scroll gallery to the right
  const scrollRight = () => {
    galleryRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="p-10 bg-[#363C43] rounded-lg shadow-md relative">
      {/* Left-side icons */}
      <div className="absolute left-2 top-1/4 transform -translate-y-1/2 space-y-20 ">
        <img src="/question.svg" alt="Help" className="h-6 w-6" />
        <img src="/menu.svg" alt="Menu" className="h-6 w-6" />
      </div>

      {/* Gallery Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg bg-black px-4 text-white py-3 font-semibold rounded-2xl">
          Gallery
        </h3>
        <div className="flex items-center gap-6">
          <label className="text-white bg-[#364249] font-medium rounded-full px-2 py-1 lg:px-4 lg:py-2 cursor-pointer text-sm sm:text-base">
            + Add Image
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollLeft}
              className="bg-[#272a2e] p-2 lg:p-4 rounded-full shadow-lg"
            >
              <img
                src="/left.svg"
                alt="Left"
                className="h-3 w-3 lg:h-4 lg:w-4 rounded-full shadow-md"
              />
            </button>
            <button
              onClick={scrollRight}
              className="bg-[#272a2e] p-2 lg:p-4 rounded-full shadow-lg"
            >
              <img
                src="/right.svg"
                alt="Right"
                className="h-3 w-3 lg:h-4 lg:w-4 rounded-full shadow-md"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div ref={galleryRef} className="relative flex space-x-4 overflow-x-auto">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery ${index + 1}`}
            className="h-32 w-32 sm:h-40 sm:w-40 rounded-lg shadow-md"
          />
        ))}
      </div>
    </div>
  );
};

export default GallarySection;
