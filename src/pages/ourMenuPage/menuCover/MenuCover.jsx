import React from 'react';
import CoverForMenu from '../../../component/coverFormenu/CoverForMenu';
import image from '../../../assets/menu/banner3.jpg'

const MenuCover = () => {
    return (
        <div>
            <CoverForMenu heading={'our Menu'} subheading={'Would you like to try a dish?'} maxwidth={'1196px'} height={'800px'} image={image} margin = {'230px'} headingSize={'88px'}></CoverForMenu>
        </div>
    );
};

export default MenuCover;