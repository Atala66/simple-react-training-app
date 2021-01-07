import React from "react";
import {  Link } from "react-router-dom";
import cat_one from '../../images/cats/cat_one.png';
import cat_two from '../../images/cats/cat_two.png';
import home_styles from "../../styles/home_styles.scss";

export const CatImages = [
  {
    id: 1,
    name: "cat_one",
	src: cat_one,
	link: ''
  },
  {
    id: 2,
    name: "cat_one",
	src: cat_one,
	link: ''
  },
  {
    id: 3,
    name: "cat_one",
	src: cat_one,
	link: ''
  },
  {
    id: 4,
    name: "cat_one",
	src: cat_one,
	link: ''
  },
  {
    id: 5,
    name: "cat_one",
	src: cat_one,
	link: ''
  },
  {
    id: 6,
    name: "cat_one",
	src: cat_one,
	link: ''
  },
];

const Home = () => {
  return (
    <div className="main-content">
		<Link to="/1">
		{ CatImages.map(cat => {
			return  <img key={cat.id} src={cat.src} alt="Cat_image" className="cat-img"/>;
		})}
     </Link>
    </div>
  );
};

export default Home;
