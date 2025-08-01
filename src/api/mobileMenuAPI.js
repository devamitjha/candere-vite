import AllImages from "@/constant/AllImages";

const MobileMenuAPI = [
  {
    type: "featured",
    title: "Featured",
    items: [
      {
        id: "4",
        image: AllImages.featured.DealOfTheDay,
        title: "Limited Deals",
        url: "/jewellery/lightning-deals.html",
        identifier: "Limited Deals"
      },
      {
        id: "1",
        image: AllImages.featured.BestSellers,
        title: "Bestsellers",
        url: "/trending/best-seller.html",
        identifier: "Bestsellers"
      },
      {
        id: "2",
        image: AllImages.featured.ExpressDelivery,
        title: "Express Delivery",
        url: "/trending/express-delivery.html",
        identifier: "Express Delivery"
      },
      {
        id: "3",
        image: AllImages.featured.NewArivals,
        title: "New Arrivals",
        url: "/trending/new-arrivals.html",
        identifier: "New Arrivals"
      },      
      {
        id: "5",
        image: AllImages.featured.OfferTag,
        title: "Offers",
        url: "/offers-terms-and-conditions.html",
        identifier: "Offers"
      },
      {
        id: "6",
        image: AllImages.featured.Trending,
        title: "Trending",
        url: "/trending/hot.html",
        identifier: "Trending"
      },
      {
        id: "7",
        image: AllImages.featured.OurPicks,
        title: "Our Picks",
        url: "/trending/our-picks-for-you.html",
        identifier: "Our Picks"
      }
    ],
  },
  {
    type: "category",
    category: "Women",
    identifier: "Women",
    subCat: [
      {
        title: "Rings",
        image: AllImages.women.Ring,
        filter_category: "women_ring",
        identifier: "Women Rings"
      },
      {
        title: "Earrings",
        image: AllImages.women.Earring,
        filter_category: "women_earring",
        identifier: "Women Earrings"
      },
      {
        title: "Necklace",
        image: AllImages.women.Necklace,
        filter_category: "women_necklace",
        identifier: "Women Necklace"
      },
      {
        title: "Bangles",
        image: AllImages.women.Bangle,
        filter_category: "women_bangle",
        identifier: "Women Bangles"
      },
      {
        title: "Bracelet",
        image: AllImages.women.Bracelet,
        filter_category: "women_bracelet",
        identifier: "Women Bracelet"
      },
      {
        title: "Pendants",
        image: AllImages.women.Pendant,
        filter_category: "women_pendant",
        identifier: "Women Pendants"
      },
      {
        title: "Chains",
        image: AllImages.women.Chains,
        filter_category: "women_chains",
        identifier: "Women Chains"
      },
      {
        title: "Mangalsutra",
        image: AllImages.women.Mangalsutra,
        filter_category: "women_mangalsutra",
        identifier: "Women Mangalsutra"
      }
    ],
  },
  {
    type: "category",
    category: "Men",
    identifier: "Men",
    redirect: "yes",
    onlyCategory: "yes",
    subCat: [
      {
        title: "Rings",
        image: AllImages.men.Ring,
        url: "/jewellery/rings-for-men.html",
        identifier: "Men Rings"
      },
      {
        title: "Bracelets",
        image: AllImages.men.Bracelets,
        url: "/jewellery/mens-bracelet.html",
        identifier: "Men Bracelets"
      },
      {
        title: "Earrings",
        image: AllImages.men.Earrings,
        url: "/jewellery/earrings-for-men.html",
        identifier: "Men Earrings"
      },
      {
        title: "Pendants",
        image: AllImages.men.Pendants,
        url: "/jewellery/pendants/men.html",
        identifier: "Men Pendants"
      },
      {
        title: "Chains",
        image: AllImages.men.Chains,
        url: "/jewellery/mens-chain.html",
        identifier: "Men Chains"
      },
      {
        title: "Kadas",
        image: AllImages.men.Kada,
        url: "/jewellery/mens-kada.html",
        identifier: "Men Kadas"
      }
    ],
  },
  {
    type: "category",
    category: "Kids",
    identifier: "Kids",
    redirect: "yes",
    onlyCategory: "yes",
    subCat: [
      {
        title: "Bracelets",
        image: AllImages.kids.Bracelets,
        url: "/jewellery/kids-bracelets.html",
        identifier: "Kids Bracelets"
      },
      {
        title: "Earrings",
        image: AllImages.kids.Earrings,
        url: "/jewellery/earrings-for-kids.html",
        identifier: "Kids Earrings"
      },
      {
        title: "Pendants",
        image: AllImages.kids.Pendants,
        url: "/jewellery/kids-pendant.html",
        identifier: "Kids Pendants"
      },
      {
        title: "Kadas",
        image: AllImages.kids.Kada,
        url: "/jewellery/kids-kada.html",
        identifier: "Kids Kadas"
      }
    ],
  },
  {
    type: "banner",
    image: AllImages.banner.ShippingMenu,
    offer_url: "/trending/readily-available.html",
    identifier: "Banner 1",
  },
  {
    type: "category",
    category: "Solitaire Jewellery",
    identifier: "Solitaire Jewellery",
    filter_category: "solitaire_jewellery",
    subCat:[]
  },
  {
    type: "category",
    category: "Accessories",
    identifier: "Accessories",
    redirect: "yes",
    onlyCategory: "yes",
    subCat: [
      {
        title: "Nose pins",
        image: AllImages.accessories.NosePins,
        url: "/jewellery/nose-pin.html",
      },
      {
        title: "For Watch",
        image: AllImages.accessories.WatchAccessories,
        url: "/jewellery/watch-accessories.html",
      },
    ],
  },
  {
    type: "category",
    category: "Collections",
    identifier: "Collections",
    filter_category: "collections",
    subCat:[]
  },
  {
    type: "banner",
    image: AllImages.banner.CoinsMenu,
    offer_url: "/gifts/investment-coins.html",
    identifier: "Banner 2",
  },
  {
    type: "category",
    category: "Gifting",
    identifier: "Gifting",
    filter_category: "gifting",
    subCat:[]
  },
];

// Split first item as FeaturedMenu and rest as OtherMenus
const [FeaturedMenu, ...OtherMenus] = MobileMenuAPI;

// Named Exports
export { FeaturedMenu, OtherMenus };

// Default Export (full array)
export default MobileMenuAPI;
