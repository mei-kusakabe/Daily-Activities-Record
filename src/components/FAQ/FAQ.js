import React from 'react';

const FAQ = () => {
    return (
        <div className='container'>
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
                                        ReactJS divides the UI into isolated reusable pieces of code known as components.
                                        React components work similarly to JavaScript functions as they accept arbitrary inputs
                                        called properties or props. It's possible to have as many components as necessary without
                                        cluttering your code.
                                        Returned React elements determine how the UI will look at the client end.
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                <button className="accordion-button fw-bold text-black fs-4 collapsed" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo"
                                    aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                    What is the difference between props and state?
                                </button>

                            </h2>
                            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingTwo">
                                <div className="accordion-body">
                                    <h6 className="text-muted">
                                        The key difference between props and state is that state is internal and controlled by the component
                                        itself while props are external and controlled by whatever renders the component.
                                        <ul>
                                            <li>Props- The Data is passed from one component to another. And
                                                State-  The Data is passed within the component only.</li>
                                            <li>Props-It is Immutable (cannot be modified).
                                                State- It is Mutable ( can be modified).</li>
                                            <li>Props can be used with state and functional components.And
                                                State can be used only with the state components/class component (Before 16.0).</li>
                                            <li>Props are read-only. And State is both read and write.</li>
                                        </ul>
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                <button className="accordion-button fw-bold text-black fs-4 collapsed" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree"
                                    aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                    What else does UseEffect do  except data loading through API?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingThree">
                                <div className="accordion-body">
                                    <h6 className="text-muted">
                                        <ul>
                                            <li> Running on state change: validating input field.</li>
                                            <li> Running on state change: live filtering.</li>
                                            <li>Running on state change: trigger animation on new array value.</li>
                                            <li>Running on props change: update paragraph list on fetched API data update.</li>
                                        </ul>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

        </div>
    );
};

export default FAQ;