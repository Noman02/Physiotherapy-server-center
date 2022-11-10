import React from "react";
import { Link } from "react-router-dom";
import mainImg from "../../../assets/blog-images/main.jpg";
import img1 from "../../../assets/blog-images/img1.jpg";
import img2 from "../../../assets/blog-images/img2.jpg";
import img3 from "../../../assets/blog-images/img3.png";
import img4 from "../../../assets/blog-images/img4.png";

const Blog = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <Link
          rel="noopener noreferrer"
          href="#"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group lg:grid lg:grid-cols-12 dark:bg-gray-900"
        >
          <img
            src={mainImg}
            alt=""
            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl text-cyan-600 ">
              Here is few FAQ. question blow
            </h3>

            <p>A some questions to back-end development including articles</p>
          </div>
        </Link>
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Link
            rel="noopener noreferrer"
            href="#"
            className="max-w-sm mx-auto group dark:bg-gray-900"
          >
            <img
              alt=""
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              src={img1}
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold">
                In usu laoreet repudiare legendos
              </h3>
              <span className="text-xs dark:text-gray-400">
                January 21, 2021
              </span>
              <p>
                Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                neglegentur, ex has tantas percipit perfecto. At per tempor
                albucius perfecto, ei probatus consulatu patrioque mea, ei
                vocent delicata indoctum pri.
              </p>
            </div>
          </Link>
          <Link
            rel="noopener noreferrer"
            href="#"
            className="max-w-sm mx-auto group dark:bg-gray-900"
          >
            <img
              alt=""
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              src={img2}
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold">
                In usu laoreet repudiare legendos
              </h3>
              <span className="text-xs dark:text-gray-400">
                January 22, 2021
              </span>
              <p>
                Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                neglegentur, ex has tantas percipit perfecto. At per tempor
                albucius perfecto, ei probatus consulatu patrioque mea, ei
                vocent delicata indoctum pri.
              </p>
            </div>
          </Link>
          <Link
            rel="noopener noreferrer"
            href="#"
            className="max-w-sm mx-auto dark:bg-gray-900"
          >
            <img
              alt=""
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              src={img3}
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold">
                In usu laoreet repudiare legendos
              </h3>
              <span className="text-xs dark:text-gray-400">
                January 23, 2021
              </span>
              <p>
                Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                neglegentur, ex has tantas percipit perfecto. At per tempor
                albucius perfecto, ei probatus consulatu patrioque mea, ei
                vocent delicata indoctum pri.
              </p>
            </div>
          </Link>
          <Link
            rel="noopener noreferrer"
            href="#"
            className="max-w-sm mx-auto group dark:bg-gray-900"
          >
            <img
              alt=""
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              src={img4}
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold">
                In usu laoreet repudiare legendos
              </h3>
              <span className="text-xs dark:text-gray-400">
                January 23, 2021
              </span>
              <p>
                Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                neglegentur, ex has tantas percipit perfecto. At per tempor
                albucius perfecto, ei probatus consulatu patrioque mea, ei
                vocent delicata indoctum pri.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
