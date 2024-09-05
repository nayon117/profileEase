import { useState, useRef } from 'react';

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [images, setImages] = useState([
    '/image.png',
    '/image.png',
    '/image.png'
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
    galleryRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  // Scroll gallery to the right
  const scrollRight = () => {
    galleryRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex justify-end p-6">
      
      {/* Left half screen empty */}
      <div className="w-1/2 hidden lg:block"></div>
      
      {/* Right half with two widgets */}
      <div className="w-full lg:w-1/2 flex flex-col space-y-6 ">
        
        {/* First Widget: Tabs Section */}
        <div className="p-10 bg-[#363C43] rounded-lg shadow-md relative">
          {/* Left-side icons */}
          <div className="absolute left-2 top-1/4 transform -translate-y-1/2 space-y-20">
            <img src="/question.svg" alt="Help" className="h-6 w-6" />
            <img src="/menu.svg" alt="Menu" className="h-6 w-6 " />
          </div>

          {/* Tabs */}
          <div className="flex justify-between bg-black p-2 mb-4 rounded-full">
            <button 
              className={`py-2 px-4 ${activeTab === 'about' ? 'border-2 border-[#28292F] bg-[#28292F] text-white rounded-full' : 'text-[#A3ADB2]'}`}
              onClick={() => setActiveTab('about')}
            >
              About Me
            </button>
            <button 
              className={`py-2 px-4 ${activeTab === 'experience' ? 'border-2 border-[#28292F] bg-[#28292F] text-white rounded-full' : 'text-[#A3ADB2]'}`}
              onClick={() => setActiveTab('experience')}
            >
              Experiences
            </button>
            <button 
              className={`py-2 px-4 ${activeTab === 'recommended' ? 'border-2 border-[#28292F] bg-[#28292F] text-white rounded-full' : 'text-[#A3ADB2]'}`}
              onClick={() => setActiveTab('recommended')}
            >
              Recommended
            </button>
          </div>

          {/* Content based on active tab */}
          {activeTab === 'about' && (
            <div>
              <p className="text-[#969696]">
                Hello! I&apos;m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
              </p>
              <p className="text-[#969696] mt-2">
                I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4-year-old twin daughters—Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...
              </p>
            </div>
          )}
          {activeTab === 'experience' && (
            <div>
              <p className="text-[#969696]">
                I have a wealth of experience in sales and customer relationship management, which spans over 5 years.
              </p>
              <p className="text-[#969696] mt-2">
              I’ve been in sales for over 5 years, focusing on customer relationships and personalized solutions. Currently, at Salesforce, I manage a large client portfolio and consistently exceed targets by leveraging CRM tools
              </p>
            </div>
          )}
          {activeTab === 'recommended' && (
            <div>
              <p className="text-[#969696] mt-2">
                I&apos;m recommended by many customers for my attention to detail and customer service excellence.
              </p>
              <p className="text-[#969696]">
              Highly recommended by my clients and colleagues for delivering exceptional service and consistently exceeding expectations. I’m known for my dedication, problem-solving skills, and ability to build long-lasting relationships.
              </p>
            </div>
          )}
        </div>

        {/* Second Widget: Gallery Section */}
        <div className="p-10 bg-[#363C43] rounded-lg shadow-md relative">
          {/* Left-side icons */}
          <div className="absolute left-2 top-1/4 transform -translate-y-1/2 space-y-20 ">
            <img src="/question.svg" alt="Help" className="h-6 w-6" />
            <img src="/menu.svg" alt="Menu" className="h-6 w-6" />
          </div>

          {/* Gallery Header */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg bg-black px-4 text-white py-3 font-semibold rounded-2xl">Gallery</h3>
            <div className='flex items-center gap-6'>
              <label 
                className="text-white bg-[#364249] font-medium rounded-full px-4 py-2 cursor-pointer"
              >
                + Add Image
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>

              <div className='flex items-center gap-4'>
                <button onClick={scrollLeft} className='bg-[#272a2e] p-3 rounded-full shadow-lg'>
                  <img src="/left.svg" alt="Left" className="h-4 w-4 rounded-full shadow-md" />
                </button>
                <button onClick={scrollRight} className='bg-[#272a2e] p-3 rounded-full shadow-lg'>
                  <img src="/right.svg" alt="Right" className="h-4 w-4 rounded-full shadow-md" />
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
                className="h-40 w-40 rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default UserProfile;
