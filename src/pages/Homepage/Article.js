import React from "react";
import { Link } from "react-router-dom";
import home1 from "../../assets/home1.jpg";
import home2 from "../../assets/home2.jpg";
import home3 from "../../assets/home3.jpg";

const BlogPost = () => {
  const articles = [
    {
      heading: "DATA & AUTOMATION",
      title: "Transforming Manufacturing Through Advance Analytics",
      date: "March, 2023",
      image: home1,
      link: "/article1",
    },
    {
      heading: "ARTIFICIAL INTELLIGENCE & ML",
      title:
        "A New Era of Artificial Intelligence: Meet ChatGPT, the OpenAI-Trained Language Model ",
      date: "October, 2023",
      image: home2,
      link: "/article2",
    },
    {
      heading: "ML, BUSINESS",
      title: "Transform Your Customer Experience with AI & Data",
      date: "October, 2023",
      image: home3,
      link: "/article3",
    },
  ];
  return (
    <div className="">
      <div className="max-w-screen-2xl mx-auto p-5 sm:p-10 md:p-16 md:pt-8">
        <div className="flex flex-wrap justify-center ">
          <div className="w-full">
            <div className="text-center mx-auto mb-[60px] lg:mb-12">
              <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-blue-shade-3 mb-4">
                Latest Articles
              </h2>
              <p className="text-md text-gray-700 md:text-lg tracking-wide">
                Get more insights about business, planning, analytics and
                technology.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
          {articles.map((article, key) => (
            <div
              key={key}
              className="border border-blue-shade-2/50 bg-white rounded-lg overflow-hidden"
            >
              <img src={article.image} alt="" className="w-full mb-3" />
              <div className="p-4 pt-2">
                <div className="text-sm text-gray-700 flex items-center mb-2">
                  {article.heading}
                </div>
                <Link
                  to={article.link}
                  onClick={() => {
                    window.scroll({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    });
                  }}
                  className="text-blue-shade-3 font-bold text-lg mb-2 hover:text-blue-shade-2 inline-block"
                >
                  {article.title}
                </Link>
                <p className="text-gray-700 mb-2">{article.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
