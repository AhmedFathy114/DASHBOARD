import React from 'react'
import ServiceDesc from '../../../Components/ServiceDesc/ServiceDesc'
import ServiceReview from '../../../Components/ServiceReview/ServiceReview'
// import ServiceImage from '../../../assets/ServiceDetails/craftimg.png';
import WDoneservice from '../WDoneServicePage/WDoneservice'
import ServiceOffers from '../../../Components/ServiceOffers/ServiceOffers'


export default function ServicesDetails() {
    return (
        <>
            <ServiceDesc/>
            <ServiceReview/>
            <ServiceOffers/>
        </>
    )
}
