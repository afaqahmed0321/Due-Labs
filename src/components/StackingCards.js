import React from 'react'
import '../Assets/css/StackingCard.css'
import port4 from '../Assets/images/port4.jpg'

function StackingCards() {
    return (
        <div>
            <main>
                <ul id="cards m-5">
                    <li className="card" id="card_1">
                        <div className="card__content">
                            <div>
                                <h1 className='fw-bolder text-justify'>Love what you do and where you do it.</h1>
                                <p className='text-justify'>
                                    Stipend for your home office
                                    Stipend for a coworking space
                                    Expense tech like hardware wallets
                                    An HQ in NYC whenever you need it
                                    Remote since day one
                                </p>
                            </div>
                            <figure>
                                <img src={port4} alt="description" />
                            </figure>
                        </div>
                    </li>
                    <li className="card" id="card_2">
                        <div className="card__content">
                            <div>
                                <h1 className='fw-bolder text-justify'>
                                    (And top ApeCoin, top equity, top… you get it)</h1>
                                <p className='text-justify'>
                                    Competitive salary
                                    Equity
                                    ApeCoin
                                    401k matching
                                    Employee referral bonus
                                </p>
                            </div>
                            <figure>
                                <img src={port4} alt="description" />
                            </figure>
                        </div>
                    </li>
                    <li className="card" id="card_3">
                        <div className="card__content">
                            <div>
                                <h1 className='fw-bolder text-justify'>The good health insurance. And then some.</h1>
                                <p className='text-justify'>
                                    Health insurance
                                    Dental insurance
                                    Vision insurance
                                    Life insurance
                                    Disability insurance
                                    FSA
                                    Monthly wellness stipend
                                </p>
                            </div>
                            <figure>
                                <img src={port4} alt="description" />
                            </figure>
                        </div>
                    </li>
                    <li className="card" id="card_4">
                        <div className="card__content">
                            <div>
                                <h1 className='fw-bolder text-justify'>Thrive at work and beyond.</h1>
                                <p className='text-justify'>
                                    Education Stipend
                                    Employee discount program
                                </p>
                            </div>
                            <figure>
                                <img src={port4} alt="description" />
                            </figure>
                        </div>
                    </li>
                </ul>
            </main>
        </div>



    )
}

export default StackingCards
