import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import blogBg from "../../assets/home/bg/2.jpg";
import b1 from "../../assets/home/blog/1.jpg";
import b2 from "../../assets/home/blog/2.jpg";
import b3 from "../../assets/home/blog/3.jpg";
import b4 from "../../assets/home/blog/4.jpg";

const Blog = () => {
  return (
    <div>
      <Helmet>
        <title>Car Dealership | Blog</title>
      </Helmet>
      <Cover
        img={blogBg}
        title="Car Blog"
        pra="Car Blog is your go-to source for informative and engaging automotive content. Discover car reviews, industry news, and tips to enhance your driving experience. Stay connected with us!"
      ></Cover>
      
      <div className="mt-8 mb-8 space-y-4">
        <div className="bg-white rounded-lg shadow-md p-4">
            <img src={b1} alt="" className="mb-2 w-auto h-52" /> {/* Adjust width and height as needed */}
            <h2 className="text-2xl font-bold mb-2">Top 10 Sports Cars of 2023</h2>
            <p className="text-gray-600">
                Check out our list of the top 10 sports cars of 2023. These cars are
                designed for speed and performance, and they will make your heart race!
            </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
            <img src={b2} alt="" className="mb-2 w-auto h-52" /> {/* Adjust width and height as needed */}
            <h2 className="text-2xl font-bold mb-2">The Future of Electric Vehicles</h2>
            <p className="text-gray-600">
                Learn about the latest innovations in electric vehicle technology.
                Electric vehicles are the future of transportation, and we have the
                scoop on what is coming next.
            </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
            <img src={b3} alt="" className="mb-2 w-auto h-52" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Advancements in Car Safety Features</h2>
            <p className="text-gray-600">
                Discover the latest advancements in car safety features that can help protect you and your loved ones on the road.
            </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
            <img src={b4} alt="" className="mb-2 w-auto h-52" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">The Art of Car Maintenance</h2>
            <p className="text-gray-600">
                Learn how to maintain your car like a pro. We provide tips and insights on keeping your vehicle in top shape.
            </p>
        </div>


        {/* Add more blog content as needed */}
      </div>
    </div>
  );
};

export default Blog;
