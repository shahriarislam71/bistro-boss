import { StarRatingInput } from 'react-star-rating-input';

const TestimonialData = ({ items }) => {
    return (
        <div>
            <StarRatingInput
                size={5}
                value={items.rating}
            />

            <br />
            <p>{items.details}</p>
            <h1 className='text-[#CD9003] text-xl font-normal'>{items.name}</h1>
        </div>
    );
};

export default TestimonialData;