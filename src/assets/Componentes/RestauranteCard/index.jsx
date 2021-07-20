import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';

import restaurante from '../../../assets/restaurante-fake.png';
import Skeleton from '../Skeleton';

import { Restaurant, RestauranteInfo, Title, Address, RestaurantPhoto } from './styles'

const RestauranteCard = ({ restaurant, onClick }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (

        <Restaurant onClick={onClick}>
            <RestauranteInfo>

                <Title>{restaurant.name}</Title>
                <ReactStars count={5} isHalf value={restaurant.rating} edit={false} activeColor='#e7711c' />
                <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>

            </RestauranteInfo>

            <RestaurantPhoto imageLoaded={imageLoaded} src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante} alt="Foto do Restaurante" onLoad={() => setImageLoaded(true)} />
            {!imageLoaded && <Skeleton width="100px" height="100px" />}
        </Restaurant>
    );



};

export default RestauranteCard;