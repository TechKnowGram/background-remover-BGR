import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Pricing.css'

const Pricing = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const plans = [
    {
      id: "pay-as-you-go",
      title: "Pay As You Go",
      options: [
        { credits: "1 Credit", price: "$1.99", rate: "$1.99 / image" },
        { credits: "10 Credits", price: "$9", rate: "$0.90 / image" },
        { credits: "75 Credits", price: "$49", rate: "$0.65 / image" },
        { credits: "200 Credits", price: "$99", rate: "$0.50 / image" },
        { credits: "500 Credits", price: "$199", rate: "$0.40 / image" },
      ],
      footer: "Credits available for use anytime within two years of purchase.",
    },
    {
      id: "subscription-plan",
      title: "Subscription Plan",
      options: [
        { credits: "40 Credits/Month", price: "$9", rate: "$0.23 / image" },
        { credits: "200 Credits/Month", price: "$39", rate: "$0.20 / image" },
        { credits: "500 Credits/Month", price: "$89", rate: "$0.18 / image" },
        { credits: "1,200 Credits/Month", price: "$189", rate: "$0.16 / image" },
        { credits: "2,800 Credits/Month", price: "$389", rate: "$0.14 / image" },
      ],
      footer:
        "Risk free: 14 Days Money Back Guarantee. Flexible: Downgrade, upgrade or cancel anytime.",
    },
    {
      id: "high-volume-solutions",
      title: "High-Volume Solutions",
      options: [
        { credits: "100,000+ Images/Year", price: "Custom", rate: "Contact us" },
      ],
      footer: "Learn more about custom solutions and pricing.",
    },
  ];

  const handleSelect = (planId, optionIndex) => {
    setSelectedOption({ planId, optionIndex });
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Download Full HD images</h1>
      <h5 className="text-center mb-5">
        1 image = 1 credit or 0.20 credit per image
        <img
          src="static/images/icon-info.svg"
          alt="info"
          className="ms-2"
          style={{ width: "16px", cursor: "pointer" }}
        />
      </h5>


      <section id="pricing" class="pricing-content section-padding">
        <div class="container">

          <div class="row text-center">
            <div class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset="0" style={{ visibility: 'visible', animationDuration: '1s', animationDelay: '0.1s', animationName: "fadeInUp" }}>
              <div class="pricing_design ">
                {plans.map((plan) => (
                  <div class="single-pricing">
                    <div class="price-head">
                      <h2>{plan.title}</h2>
                      <h1>$0</h1>
                      <span>/Monthly</span>
                    </div>
                    <ul className="list-group mb-4">
                      {plan.options.map((option, index) => (
                        <li
                          key={index}

                        >
                          <div className="form-check d-flex justify-content-between">
                            <input
                              type="radio"
                              className="form-check-input"
                              name="pricingOption"
                              id={`${plan.id}-${index}`}
                              checked={
                                selectedOption?.planId === plan.id &&
                                selectedOption?.optionIndex === index
                              }
                              onChange={() => handleSelect(plan.id, index)}
                            />

                            <p>{option.credits}</p>
                            <p className="ms-2 text-muted">
                              {option.price}
                            </p>
                            <p className="text-primary">{option.rate}</p>

                            {/* <label
                              className="form-check-label"
                              htmlFor={`${plan.id}-${index}`}
                            >
                              <div className="d-flex justify-content-between align-items-center">
                                <p>{option.credits}</p>
                                <p className="ms-2 text-muted">
                                  {option.price}
                                </p>
                                <p className="text-primary">{option.rate}</p>
                              </div>
                            </label> */}
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div class="pricing-price">

                    </div>
                    <a href="#" class="price_btn">Bye Now</a>
                  </div>

                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
