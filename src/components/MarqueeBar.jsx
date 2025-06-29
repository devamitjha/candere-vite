import Marquee from "react-fast-marquee";

const marqueeItems = [ 
    {
        title: "Certified Jewellery",
        description: "All pieces are certified for authenticity and quality by trusted gemological labs.",
    },
    {
        title: "Lifetime Exchange",
        description: "Exchange jewellery anytime for lifetime value assurance and flexibility.",
    },
    {
        title: "100% Refund*",
        description: "Full refund available as per return policy for peace of mind.",
    },
    {
        title: "International Shipping",
        description: "We ship securely worldwide, delivering to your doorstep.",
    },
    {
        title: "15 Day Return",
        description: "Return within 15 days for a hassle-free refund process.",
    },
];

const MarqueeBar = () => (
    <div className="primary-gradient py-5">
        <Marquee gradient={false} speed={80}>
            {marqueeItems.map((item, index) => (
                <div  key={index} className="font-body text-base text-white font-bold">                    
                    {item.title} : <span className="font-normal">{item.description}</span>                    
                </div>
            ))}
        </Marquee>
    </div>
);

export default MarqueeBar;
