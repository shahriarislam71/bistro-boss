import '../coverFormenu/CoverForMenu.css'

const CoverForMenu = ({ heading, subheading, height, maxwidth, image, margin, headingSize, category }) => {
    console.log(category)
    return (
        <div style={{
            backgroundImage: `url(${image}`,
            backgroundColor: 'lightgray',
            backgroundPosition: '50%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: `${height}`
        }} className={`${category?'bg-fixed':""}`}>
            <div style={{paddingTop: `${margin}` }} >
                <div style={{ maxWidth: `${maxwidth}`}} className={`coverTitle mx-auto`}>
                    <h1 style={{fontSize : headingSize}} className='text-center pt-[130px] text-white uppercase'>{heading}</h1>
                    <p className='text-center text-[20px] text-white pb-[130px] px-[128px]'>{subheading}</p>
                </div>
            </div>
        </div>
    );
};

export default CoverForMenu;