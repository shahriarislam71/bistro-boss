import React from 'react';
import { Helmet } from 'react-helmet-async';
import MenuCover from '../menuCover/MenuCover';
import FoodItems from '../../../component/foodItems/FoodItems';
import TItle from '../../../component/title/TItle';
import CoverForMenu from '../../../component/coverFormenu/CoverForMenu';
import dessertImage from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImage from '../../../assets/menu/pizza-bg.jpg'
import saladsImaze from '../../../assets/menu/salad-bg.jpg'
import soupImaze from '../../../assets/menu/soup-bg.jpg'
 
const OurMenu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <MenuCover></MenuCover>
            <h1>Our Menu Page</h1>
            {/* Todays offer section  */}
            <TItle subheading={"Don't miss"} heading={"TODAY'S OFFER"}></TItle>
            <FoodItems itemsType={'drinks'}></FoodItems>
            {/* dessert section  */}
            <CoverForMenu heading={'Dessert'} subheading={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} maxwidth={'1084px'} height={'700px'} image={dessertImage} margin = {'175px'} headingSize={'45px'} category = {'dessert'}></CoverForMenu>
            <FoodItems itemsType={'dessert'}></FoodItems>

            {/* pizza section  */}
            <CoverForMenu heading={'Pizza'} subheading={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} maxwidth={'1084px'} height={'700px'} image={pizzaImage} margin = {'175px'} headingSize={'45px'} category = {'pizza'}></CoverForMenu>
            <FoodItems itemsType={'pizza'}></FoodItems>

            {/* salad section  */}
            <CoverForMenu heading={'salad'} subheading={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} maxwidth={'1084px'} height={'700px'} image={saladsImaze} margin = {'175px'} headingSize={'45px'} category = {'salads'}></CoverForMenu>
            <FoodItems itemsType={'salad'}></FoodItems>

            {/* soup section  */}
            <CoverForMenu heading={'soup'} subheading={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} maxwidth={'1084px'} height={'700px'} image={soupImaze} margin = {'175px'} headingSize={'45px'} category = {'soup'}></CoverForMenu>
            <FoodItems itemsType={'soup'}></FoodItems>
        </div>
    );
};

export default OurMenu;