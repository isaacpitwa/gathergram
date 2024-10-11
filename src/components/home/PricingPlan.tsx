import React from "react";
import {ReactComponent as CheckIcon} from '../../assets/icons/check.svg'

interface PricingPlanProps {
  label: string;
  price: number;
  description: string;
  features_label: string;
  features: string[];
  period: string;
  isPopular: boolean | undefined;
}

const PricingPlan: React.FC<PricingPlanProps> = ({
  label,
  price,
  description,
  features_label,
  features,
  period,
  isPopular,
}) => {
  const splitFeatures = (arr: string[]) => {
    const evenItems: string[] = [];
    const oddItems: string[] = [];

    arr.forEach((item, index) => {
      if (index % 2 === 0) {
        evenItems.push(item);
      } else {
        oddItems.push(item);
      }
    });

    return { evenItems, oddItems };
  };
  const {evenItems, oddItems} = splitFeatures(features);
  return (
    <div className="border rounded-lg border-[#EAECF0] shadow-md">
      <div className="flex p-8 border-b border-[#EAECF0] gap-x-16  items-end">
        <div>
          <h5 className="text-xl font-bold">{label} Plan {isPopular &&<span className="text-xs text-purple bg-gray p-1 rounded-full">Popular</span>}</h5>
          <p className=" text-sm  text-secondary">{description}</p>
        </div>
        <div className="flex">
          <span>$</span>
          <h6 className="text-5xl font-bold">{price}</h6>
          <p className="mt-6  text-secondary text-sm text-semibold">per {period}</p>
        </div>
      </div>
      <div className="p-8 border-b border-[#EAECF0]">
        <h5 className="text-base font-semibold">FEATURES</h5>
        <p className="text-sm  text-secondary" dangerouslySetInnerHTML={{ __html: features_label }}></p>
        <div className="flex justify-between gap-x-8">
          <ul className="mt-4  list-image-checkmark">
            {evenItems.map((feature, index) => (
               <li key={index} className="text-secondary text-sm flex  gap-x-2 my-2">
               <CheckIcon/>
               <p>{feature}</p>
            </li>
            ))}
          </ul>
          <ul className="mt-4 ">
            {oddItems.map((feature, index) => (
              <li key={index} className="text-secondary text-sm flex  gap-x-2 my-2">
                 <CheckIcon/>
                 <p>{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="p-8">
        <button className="bg-primary rounded-lg w-full p-2 text-white text-sm font-bold">
          Get started
        </button>
      </div>
    </div>
  );
};

export default PricingPlan;
