import React, { useEffect, useState } from 'react';
import './Activities.css'
import Activity from '../Activity/Activity';
import Cart from '../Cart/Cart';
// import { addToDb } from '../../utilities/fakedb';


const Activities = () => {

    const [activities, setActivities] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('activities.json')
            .then(res => res.json())
            .then(data => {
                setActivities(data);
            })
    }, [])

    const handleAddToList = (activity) => {
        // addToDb(activity.id)
        console.log(activity);

        let newCart = [...cart, activity];
        setCart(newCart)

    }
    return (
        <div className='container'>
            <p className='fs-4 fw-bold'>Select Today's Activities</p>
            <div className='activities-container'>

                <div className="activity-container">
                    {
                        activities.map(activity => <Activity
                            key={activity.id}
                            activity={activity}
                            handleAddToList={handleAddToList}
                        ></Activity>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>

            <div>
                <section className="faq container mt-5" id="faq">
                    <div className="faq-header text-center">
                        <h1 className="display-5 fw-bold">Frequently Asked Questions
                        </h1>
                        <p className="fs-5 text-secondary text-wrap text-center">Here is the list of most commonly asked web
                            development interview questions for freshers and experienced candidates.</p>
                    </div>
                    <section className="faq-body mt-5">
                        <div className="accordion" id="accordionPanelsStayOpenExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                    <button className="accordion-button fw-bold text-black fs-4" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne"
                                        aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                        How does React Works?
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show"
                                    aria-labelledby="panelsStayOpen-headingOne">
                                    <div className="accordion-body">
                                        <h6 className="text-muted">
                                            Flexbox was designed specifically for one-dimensional layouts, while CSS Grid is
                                            engineered to enable two-dimensional layouts.
                                            Flexbox offers greater control over alignment and space distribution between
                                            items. Being one-dimensional, Flexbox only deals with either columns or
                                            rows.Grid has two-dimension layout capabilities which allow flexible widths as a
                                            unit of length. This compensates for the limitations in Flex.
                                            Flexbox is content based,it listens to the content and adjusts to it.
                                            Grid is container based and operates more on the layout level.
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                    <button className="accordion-button fw-bold text-black fs-4 collapsed" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo"
                                        aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                        What is the difference between props and states?
                                    </button>

                                </h2>
                                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse"
                                    aria-labelledby="panelsStayOpen-headingTwo">
                                    <div className="accordion-body">
                                        <h6 className="text-muted">
                                            The Bootstrap framework can best be described as a component-based framework.
                                            Component-based CSS frameworks are made up of predefined components, or parts,
                                            that can be used to style HTML, making responsive website development faster and
                                            easier.
                                            On the other hand, Tailwind CSS can best be described as a “utility-first”
                                            framework. Utility-first
                                            frameworks are composed of small, simple classes that can be applied to elements
                                            to create a user interface or UI. On the surface, using Tailwind doesn’t look
                                            too different from writing inline styles. However, what this framework offers is
                                            customizability. Instead of being restrained by the premade components from
                                            Bootstrap, we can essentially create our own UI with Tailwind to meet our
                                            project’s needs
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                    <button className="accordion-button fw-bold text-black fs-4 collapsed" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree"
                                        aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                        What else does UseEffect without data loading through API?
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse"
                                    aria-labelledby="panelsStayOpen-headingThree">
                                    <div className="accordion-body">
                                        <h6 className="text-muted">
                                            In CSS, the term "box model" is used when talking about design and layout.
                                            The CSS box model is essentially a box that wraps around every HTML element. It
                                            consists of: margins, borders, padding, and the actual content.
                                            <ul>
                                                <li><b>Content - </b>The content of the box, where text and images appear
                                                </li>
                                                <li><b>Padding -</b>Clears an area around the content. The padding is
                                                    transparent
                                                </li>
                                                <li><b>Border -</b> A border that goes around the padding and content
                                                </li>
                                                <li><b>Margin - </b>Clears an area outside the border. The margin is
                                                    transparent
                                                </li>
                                            </ul>

                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>

            </div>
        </div>
    );
};

export default Activities;