import React from 'react';
import "../../css/Home.css";
import {Link} from 'react-router-dom';

const Card = ({image,name,address, price}) =>{
    return(
        <>
        <figure className='property'>
            <Link to={'/propertylist/${id}'}>
            <img src={image} alt='Propertyimg'/></Link>
            <h4>{name}</h4>
            <figcaption>
                <main className='propertydetails'>
                    <h5>{name}</h5>
                    <h6>
                        <span className='material-symbols-outlined houseicon'>
                            home_pin
                        </span>
                        {address}
                    </h6>
                    <p>
                        <span className='price'>
                            ${price}

                        </span>
                        per night
                    </p>
                </main>
            </figcaption>
            </figure></>
    )
}
const PropertyList = () => {
    const properties =[
        {
            _id: "1",
            image:[{url: "/assets/property2.webp"}],
            propertyName: "Cozy Villa",
            address:{city:"Mumbai",
                state:"MH",pincode:"4000001"
            },
            price:2500
        },

        {
            _id: "2",
            image:[{url: "/assets/property3.webp"}],
            propertyName: "Modern Apartment",
            address:{city:"Mumbai",
                state:"MH",pincode:"4000001"
            },
            price:2500
        },

        {
            _id: "3",
            image:[{url: "/assets/property4.webp"}],
            propertyName: "Modern Apartment",
            address:{city:"Mumbai",
                state:"MH",pincode:"4000001"
            },
            price:2500
        },

        {
            _id: "4",
            image:[{url: "/assets/property5.webp"}],
            propertyName: "Modern Apartment",
            address:{city:"Mumbai",
                state:"MH",pincode:"4000001"
            },
            price:2500
        },

        {
            _id: "5",
            image:[{url: "/assets/property6.webp"}],
            propertyName: "Modern Apartment",
            address:{city:"Mumbai",
                state:"MH",pincode:"4000001"
            },
            price:2500
        },

        {
            _id: "6",
            image:[{url: "/assets/property7.webp"}],
            propertyName: "Modern Apartment",
            address:{city:"Mumbai",
                state:"MH",pincode:"4000001"
            },
            price:2500
        },
    ]
  return (
    <>
    {properties.length === 0 ? (<p className='not_found'> Property not found</p>):
    (
        <div className='propertyList'>
            {properties.map((property) => (
                <Card
                key={property._id}
                id={property._id}
                image={property.image[0].url}
                name={property.propertyName}
                address={`${property.address.city}, ${property.address.state}, ${property.address.pincode}`}
                price = {property.price}
                />
            ))}
        </div>
    )}
    </>
  )
}

export default PropertyList
