import React from 'react';
import cat_img from '../../images/cat_img.png';
import home_styles from '../../styles/home_styles.scss';


const Home = () => {
		return(
			<div className="main-content"> <img className="cat-img" src={cat_img} alt="cat"/>  </div>
		);
	

};



export default Home;