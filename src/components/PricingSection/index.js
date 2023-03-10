import React from 'react';
import Section from '../Section';
import SectionHeader from '../SectionHeader';
import Pricing from '../Pricing';
import './style.scss';

function PricingSection(props) {
  return (
    <Section
      id="pricing"
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="PricingSection__container container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <Pricing
          buttonText="Choose"
          onChoosePlan={planId => {
            // Add your own payments logic here
            alert(`You chose the plan "${planId}"`);
          }}
          items={[
            {
              id: 'monthly',
              timespan: 'Monthly',
              price: '29',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam.'
            },
            {
              id: 'yearly',
              timespan: 'Yearly',
              price: '19',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae.'
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default PricingSection;
