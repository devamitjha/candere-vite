import InnerMenuImage from "@/constant/InnerMenuImage";
const innerMain_cat = [
        {
            filter_category: "women_ring",
            type: "row",
            children_cat: {
                mainTitle: {
                title: "Rings",
                viewAll_url: "/jewellery/rings.html",
                identifier: "Women Rings ViewAll"
                },
                recommended: {
                recommend: "Recommended for you",
                recommend_img: "./assets/images/recommend/Women-Rings.jpg",
                url: "/jewellery/rings.html",
                identifier: "Women Rings Recommended Banner"
                },
                shopByStyle: [
                {
                    shopByStyleTitle: "shop by style"
                },
                {
                    cat_title: "Engagement",
                    cat_subTitle: "Discover a symbol of forever to seal your love.",
                    cat_img: "./assets/images/sub_category/rings/Enagagement-rings.jpg",
                    url: "/jewellery/diamond-engagement-rings.html",
                    identifier: "Women Engagement Rings"
                },
                {
                    cat_title: "Couple Bands",
                    cat_subTitle: "Stunning bands to express your everlasting love!",
                    cat_img: "./assets/images/sub_category/rings/Couple-bands.jpg",
                    url: "/jewellery/diamond-bands.html",
                    identifier: "Women Couple Bands Rings"
                },
                {
                    cat_title: "Religious",
                    cat_subTitle: "Mesmerizing Rings with Sacred Beauty",
                    cat_img: "./assets/images/sub_category/rings/Religious.jpg",
                    url: "/collections/spiritual/ring.html",
                    identifier: "Women Religious Rings"
                },
                {
                    cat_title: "Eternity",
                    cat_subTitle: "Exquisite Rings to symbolize your everlasting commitment!",
                    cat_img: "./assets/images/sub_category/rings/Eternity.jpg",
                    url: "/jewellery/eternity-ring.html",
                    identifier: "Women Eternity Rings"
                },
                {
                    cat_title: "Casual",
                    cat_subTitle: "Statement Rings that can not go unnoticed",
                    cat_img: "./assets/images/sub_category/rings/Casual.jpg",
                    url: "/jewellery/diamond-casual-rings.html",
                    identifier: "Women Casual Rings"
                },
                {
                    cat_title: "Flexi/Adjustable",
                    cat_subTitle: "Wrap Your Finger in a Harmony of Beauty and Comfort.",
                    cat_img: "./assets/images/sub_category/rings/Flexible-rings.jpg",
                    url: "/jewellery/flexi-rings.html",
                    identifier: "Women Flexi/Adjustable Rings"
                },
                {
                    cat_title: "V rings/Chevron",
                    cat_subTitle: "Sharp and Fashionable Rings to elevate your style!",
                    cat_img: "./assets/images/sub_category/rings/V-rings.jpg",
                    url: "/jewellery/v-rings.html",
                    identifier: "Women V rings/Chevron Rings"
                },
                {
                    cat_title: "Navratna",
                    cat_subTitle: "Unveil the Spiritual Energy of Nine Gemstones!",
                    cat_img: "./assets/images/sub_category/rings/Navratna.jpg",
                    url: "/jewellery/gemstone-navratna-rings.html",
                    identifier: "Women Navratna Rings"
                },
                {
                    cat_title: "Stackable",
                    cat_subTitle: "Why style one when you can stack more?",
                    cat_img: "./assets/images/sub_category/rings/Stackable.jpg",
                    url: "/jewellery/stackable-ring.html",
                    identifier: "Women Stackable Rings"
                },
                {
                    cat_title: "Mangalsutra",
                    cat_subTitle: "Contemporary expressions of class and charm.",
                    cat_img: "./assets/images/sub_category/rings/mangalsutra1.jpg",
                    url: "/jewellery/mangalsutra-ring.html",
                    identifier: "Women Mangalsutra Rings"
                }
                ],
                shopByMaterial: [
                {
                    shopByMaterialTitle: "shop by Material"
                },
                {
                    cat_title: "Diamond",
                    cat_img: "./assets/images/Solitaire.svg",
                    url: "/jewellery/diamond-rings.html",
                    identifier: "Women Diamond Material Rings"
                },
                {
                    cat_title: "Platinum",
                    cat_img: "./assets/images/multi_color_platinum.svg",
                    url: "/jewellery/platinum-rings.html",
                    identifier: "Women Platinum Material Rings"
                },
                {
                    cat_title: "Gemstone",
                    cat_img: "./assets/images/Gemstone.svg",
                    url: "/jewellery/gemstone-rings.html",
                    identifier: "Women Gemstone Material Rings"
                },
                {
                    cat_title: "Gold",
                    cat_img: "./assets/images/multi_color_gold.svg",
                    url: "/jewellery/gold-rings/for+women.html",
                    identifier: "Women Gold Material Rings"
                }
                ],
                shopByPrice: [
                {
                    shopByPriceTitle: "shop by price"
                },
                {
                    cat_title: "Under ₹10K",
                    url: "/jewellery/rings/below+rs+10000.html",
                    identifier: "Women Ring Shop By Price Under ₹10K"
                },
                {
                    cat_title: "₹10K - ₹20K",
                    url: "/jewellery/rings/under+15k-under+20k.html",
                    identifier: "Women Ring Shop By Price ₹10K - ₹20K"
                },
                {
                    cat_title: "₹20K - ₹30K",
                    url: "/jewellery/rings/under+25k-under+30k.html",
                    identifier: "Women Ring Shop By Price ₹20K - ₹30K"
                },
                {
                    cat_title: "₹30K - ₹50K",
                    url: "/jewellery/rings/under+50k.html",
                    identifier: "Women Ring Shop By Price ₹30K - ₹50K"
                },
                {
                    cat_title: "₹50K - ₹75K",
                    url: "/jewellery/rings/under+75k.html",
                    identifier: "Women Ring Shop By Price ₹50K - ₹75K"
                },
                {
                    cat_title: "Above ₹75K",
                    url: "/jewellery/rings/under+100k-above+100k.html",
                    identifier: "Women Ring Shop By Price Above ₹75K"
                }
                ],
                shopByOcassion: [
                {
                    shopByOcassionTitle: "shop by occasion"
                },
                {
                    cat_title: "Daily wear",
                    cat_img: "./assets/images/sub_category/rings/daily_wear_rings.jpg",
                    url: "/jewellery/rings/daily+wear.html",
                    identifier: "Women Daily wear Rings"
                },
                {
                    cat_title: "Casual Outings",
                    cat_img: "./assets/images/sub_category/rings/casual_outings_rings.jpg",
                    url: "/jewellery/rings/casual+outings.html",
                    identifier: "Women Casual Outings Rings"
                },
                {
                    cat_title: "Anniversary",
                    cat_img: "./assets/images/sub_category/rings/anniversary_rings.jpg",
                    url: "/jewellery/rings/anniversary.html",
                    identifier: "Women Anniversary Rings"
                },
                {
                    cat_title: "Festive",
                    cat_img: "./assets/images/sub_category/rings/festive_rings.jpg",
                    url: "/jewellery/rings/festive.html",
                    identifier: "Women Festive Rings"
                },
                {
                    cat_title: "Wedding",
                    cat_img: "./assets/images/sub_category/rings/wedding_rings.jpg",
                    url: "/jewellery/rings/wedding.html",
                    identifier: "Women Wedding Rings"
                }
                ]
            }
        },

        {
            filter_category: "women_earring",
            type: "row",
            children_cat: {
                mainTitle: {
                title: "Earrings",
                viewAll_url: "/jewellery/earrings.html",
                identifier: "Women Earrings ViewAll"
                },
                recommended: {
                recommend: "Recommended for you",
                recommend_img: "./assets/images/recommend/Women-EARRINGS.jpg",
                url: "/jewellery/earrings.html",
                identifier: "Women Earrings Recommended Banner"
                },
                shopByStyle: [
                {
                    shopByStyleTitle: "shop by style"
                },
                {
                    cat_title: "Studs",
                    cat_subTitle: "Subtle and glamorous earrings to complete your outfit!",
                    cat_img: "./assets/images/sub_category/earring/Studs.jpg",
                    url: "/jewellery/stud-earrings.html",
                    identifier: "Women Studs Earrings"
                },
                {
                    cat_title: "Drops & Dangles",
                    cat_subTitle: "Charming earrings with an elegant sway!",
                    cat_img: "./assets/images/sub_category/earring/Drops-Dangles.jpg",
                    url: "/jewellery/dangle-earrings.html",
                    identifier: "Women Drops & Dangles Earrings"
                },
                {
                    cat_title: "Hoops & Huggies",
                    cat_subTitle: "Glamorous loops and hoops for the daily!",
                    cat_img: "./assets/images/sub_category/earring/Hoops-Huggies.jpg",
                    url: "/jewellery/hoop-earrings.html",
                    identifier: "Women Hoops & Huggies Earrings"
                },
                {
                    cat_title: "Jhumkas",
                    cat_subTitle: "Traditional earrings with mesmerizing intricate beauty!",
                    cat_img: "./assets/images/sub_category/earring/Jhumkas.jpg",
                    url: "/jewellery/jhumkas.html",
                    identifier: "Women Jhumkas Earrings"
                },
                {
                    cat_title: "Sui Dhaga",
                    cat_subTitle: "Dainty yet fashionable earrings to steal the show!",
                    cat_img: "./assets/images/sub_category/earring/Sui-Dhaga.jpg",
                    url: "/jewellery/sui-dhaga-earrings.html",
                    identifier: "Women Sui Dhaga Earrings"
                },
                {
                    cat_title: "Detachables",
                    cat_subTitle: "Versatile Rings with endless styling possibilities!",
                    cat_img: "./assets/images/sub_category/earring/Detachables.jpg",
                    url: "/collections/detachables/earrings.html",
                    identifier: "Women Detachables Earrings"
                },
                {
                    cat_title: "Navratna",
                    cat_subTitle: "Elevate your style with spiritual energy from the 9 Ratnas",
                    cat_img: "./assets/images/sub_category/earring/Navratna.jpg",
                    url: "/jewellery/gemstone-navratna-earrings.html",
                    identifier: "Women Navratna Earrings"
                },
                {
                    cat_title: "Solitaire",
                    cat_subTitle: "Sophisticated earrings with the classy charm of Solitaires",
                    cat_img: "./assets/images/sub_category/earring/Solitaire.jpg",
                    url: "/jewellery/solitaire-earrings.html",
                    identifier: "Women Solitaire Earrings"
                }
                ],
                shopByMaterial: [
                {
                    shopByMaterialTitle: "shop by Material"
                },
                {
                    cat_title: "Diamond",
                    cat_img: "./assets/images/Solitaire.svg",
                    url: "/jewellery/diamond-earrings.html",
                    identifier: "Women Diamond Material Earrings"
                },
                {
                    cat_title: "Platinum",
                    cat_img: "./assets/images/multi_color_platinum.svg",
                    url: "/jewellery/platinum-earrings.html",
                    identifier: "Women Platinum Material Earrings"
                },
                {
                    cat_title: "Gemstone",
                    cat_img: "./assets/images/Gemstone.svg",
                    url: "/jewellery/gemstone-earrings.html",
                    identifier: "Women Gemstone Material Earrings"
                },
                {
                    cat_title: "Gold",
                    cat_img: "./assets/images/multi_color_gold.svg",
                    url: "/jewellery/gold-earrings/for+women.html",
                    identifier: "Women Gold Material Earrings"
                }
                ],
                shopByPrice: [
                {
                    shopByPriceTitle: "shop by price"
                },
                {
                    cat_title: "Under ₹10K",
                    url: "/jewellery/earrings/below+rs+10000.html",
                    identifier: "Women Earrings Shop By Price Under ₹10K"
                },
                {
                    cat_title: "₹10K - ₹20K",
                    url: "/jewellery/earrings/under+15k-under+20k.html",
                    identifier: "Women Earrings Shop By Price ₹10K - ₹20K"
                },
                {
                    cat_title: "₹20K - ₹30K",
                    url: "/jewellery/earrings/under+25k-under+30k.html",
                    identifier: "Women Earrings Shop By Price ₹20K - ₹30K"
                },
                {
                    cat_title: "₹30K - ₹50K",
                    url: "/jewellery/earrings/under+50k.html",
                    identifier: "Women Earrings Shop By Price ₹30K - ₹50K"
                },
                {
                    cat_title: "₹50K - ₹75K",
                    url: "/jewellery/earrings/under+75k.html",
                    identifier: "Women Earrings Shop By Price ₹50K - ₹75K"
                },
                {
                    cat_title: "Above ₹75K",
                    url: "/jewellery/earrings/under+100k-above+100k.html",
                    identifier: "Women Earrings Shop By Price Above ₹75K"
                }
                ],
                shopByOcassion: [
                {
                    shopByOcassionTitle: "shop by occasion"
                },
                {
                    cat_title: "Daily wear",
                    cat_img: "./assets/images/sub_category/earring/daily_wear_earring.jpg",
                    url: "/jewellery/earrings/daily+wear.html",
                    identifier: "Women Daily wear Earrings"
                },
                {
                    cat_title: "Casual Outings",
                    cat_img: "./assets/images/sub_category/earring/casual_outings_earring.jpg",
                    url: "/jewellery/earrings/casual+outings.html",
                    identifier: "Women Casual Outings Earrings"
                },
                {
                    cat_title: "Anniversary",
                    cat_img: "./assets/images/sub_category/earring/anniversary_earring.jpg",
                    url: "/jewellery/earrings/anniversary.html",
                    identifier: "Women Anniversary Earrings"
                },
                {
                    cat_title: "Festive",
                    cat_img: "./assets/images/sub_category/earring/festive_earring.jpg",
                    url: "/jewellery/earrings/festive.html",
                    identifier: "Women Festive Earrings"
                },
                {
                    cat_title: "Wedding",
                    cat_img: "./assets/images/sub_category/earring/wedding_earring.jpg",
                    url: "/jewellery/earrings/wedding.html",
                    identifier: "Women Wedding Earrings"
                }
                ]
            }
        },
        {
            filter_category: "women_necklace",
            type: "row",
            children_cat: {
                mainTitle: {
                title: "Necklace",
                viewAll_url: "/jewellery/necklaces.html",
                identifier: "Women Necklace ViewAll"
                },
                recommended: {
                recommend: "Recommended for you",
                recommend_img: "./assets/images/recommend/Women-NECKLACE.jpg",
                url: "/jewellery/necklaces.html",
                identifier: "Women Necklace Recommended Banner"
                },
                shopByStyle: [
                {
                    shopByStyleTitle: "shop by style"
                },
                {
                    cat_title: "Layered",
                    cat_subTitle: "Layers of style to help you ace all your looks!",
                    cat_img: "./assets/images/sub_category/necklace/Layered.jpg",
                    url: "/jewellery/layered-necklace.html",
                    identifier: "Women Layered Necklace"
                },
                {
                    cat_title: "Charm",
                    cat_subTitle: "Dazzling traditional necklaces to accentuate your beauty",
                    cat_img: "./assets/images/sub_category/necklace/charm_250624.jpg",
                    url: "/jewellery/charm-necklace.html",
                    identifier: "Women Charm Necklace"
                },
                {
                    cat_title: "Collar",
                    cat_subTitle: "Regal and striking necklaces you can make a statement with",
                    cat_img: "./assets/images/sub_category/necklace/Collar.jpg",
                    url: "/jewellery/collar-necklace.html",
                    identifier: "Women Collar Necklace"
                },
                {
                    cat_title: "Larait",
                    cat_subTitle: "Regal necklaces with an alluring dangle",
                    cat_img: "./assets/images/sub_category/necklace/Larait.jpg",
                    url: "/jewellery/lariat-necklace.html",
                    identifier: "Women Larait Necklace"
                },
                {
                    cat_title: "Pendant Necklace",
                    cat_subTitle: "Subtle and classy accessories to enhance your look!",
                    cat_img: "./assets/images/sub_category/necklace/Pendant-Necklace.jpg",
                    url: "/jewellery/pendant-necklaces.html",
                    identifier: "Women Pendant Necklace"
                }
                ],
                shopByMaterial: [
                {
                    shopByMaterialTitle: "shop by Material"
                },
                {
                    cat_title: "Diamond",
                    cat_img: "./assets/images/Solitaire.svg",
                    url: "/jewellery/diamond-necklace.html",
                    identifier: "Women Diamond Material Necklace"
                },
                {
                    cat_title: "Gemstone",
                    cat_img: "./assets/images/Gemstone.svg",
                    url: "/jewellery/gemstone-necklace.html",
                    identifier: "Women Gold Gemstone Necklace"
                },
                {
                    cat_title: "Gold",
                    cat_img: "./assets/images/multi_color_gold.svg",
                    url: "/jewellery/gold-necklaces/for+women.html",
                    identifier: "Women Gold Material Necklace"
                }
                ],
                shopByPrice: [
                {
                    shopByPriceTitle: "shop by price"
                },
                {
                    cat_title: "Under ₹20K",
                    url: "/jewellery/necklaces/below+rs+10000-under+15k-under+20k.html",
                    identifier: "Women Necklaces Shop By Price Under ₹20K"
                },
                {
                    cat_title: "₹20K - ₹30K",
                    url: "/jewellery/necklaces/under+25k-under+30k.html",
                    identifier: "Women Necklaces Shop By Price ₹20K - ₹30K"
                },
                {
                    cat_title: "₹30K - ₹50K",
                    url: "/jewellery/necklaces/under+50k.html",
                    identifier: "Women Necklaces Shop By Price ₹30K - ₹50K"
                },
                {
                    cat_title: "₹50K - ₹75K",
                    url: "/jewellery/necklaces/under+75k.html",
                    identifier: "Women Necklaces Shop By Price ₹50K - ₹75K"
                },
                {
                    cat_title: "₹75K - ₹100K",
                    url: "/jewellery/necklaces/under+100k.html",
                    identifier: "Women Necklaces Shop By Price ₹75K - ₹100K"
                },
                {
                    cat_title: "Above ₹100K",
                    url: "/jewellery/necklaces/above+100k.html",
                    identifier: "Women Necklaces Shop By Price Above ₹100K"
                }
                ],
                shopByOcassion: [
                {
                    shopByOcassionTitle: "shop by occasion"
                },
                {
                    cat_title: "Daily wear",
                    cat_img: "./assets/images/sub_category/necklace/daily_wear_necklace.jpg",
                    url: "/jewellery/necklaces/daily+wear.html",
                    identifier: "Women Daily wear Necklace"
                },
                {
                    cat_title: "Casual Outings",
                    cat_img: "./assets/images/sub_category/necklace/casual_outings_necklace.jpg",
                    url: "/jewellery/necklaces/casual+outings.html",
                    identifier: "Women Casual Outings Necklace"
                },
                {
                    cat_title: "Anniversary",
                    cat_img: "./assets/images/sub_category/necklace/anniversary_necklace.jpg",
                    url: "/jewellery/necklaces/anniversary.html",
                    identifier: "Women Anniversary Necklace"
                },
                {
                    cat_title: "Festive",
                    cat_img: "./assets/images/sub_category/necklace/festive_necklace.jpg",
                    url: "/jewellery/necklaces/festive.html",
                    identifier: "Women Festive Necklace"
                },
                {
                    cat_title: "Wedding",
                    cat_img: "./assets/images/sub_category/necklace/wedding_necklace.jpg",
                    url: "/jewellery/necklaces/wedding.html",
                    identifier: "Women Wedding Necklace"
                }
                ]
            }
        },
        {
            filter_category: "women_bangle",
            type: "row",
            children_cat: {
            mainTitle: {
                title: "Bangles",
                viewAll_url: "/jewellery/bangles.html",
                identifier: "Women Bangles ViewAll"
            },
            recommended: {
                recommend: "Recommended for you",
                recommend_img: "./assets/images/recommend/Women-BANGLES.jpg",
                url: "/jewellery/bangles.html",
                identifier: "Women Bangles Recommended Banner"
            },
            shopByStyle: [
                {
                shopByStyleTitle: "shop by style"
                },
                {
                cat_title: "Delicate Bangles",
                cat_subTitle: "Subtle and dainty beauties to accentuate your wrists",
                cat_img: "./assets/images/sub_category/bangles/Delicate-bangles.jpg",
                url: "/jewellery/delicate-bangles.html",
                identifier: "Women Delicate Bangles"
                },
                {
                cat_title: "Eternity Bangles",
                cat_subTitle: "Exquisite rings to help celebrate your eternal connection!",
                cat_img: "./assets/images/sub_category/bangles/Eternity-Bangles.jpg",
                url: "/jewellery/diamond-eternity-bangles.html",
                identifier: "Women Eternity Bangles"
                }
            ],
            shopByMaterial: [
                {
                shopByMaterialTitle: "shop by Material"
                },
                {
                cat_title: "Diamond",
                cat_img: "./assets/images/Solitaire.svg",
                url: "/jewellery/diamond-bangles.html",
                identifier: "Women Diamond Material Bangles"
                },
                {
                cat_title: "Gold",
                cat_img: "./assets/images/multi_color_gold.svg",
                url: "/jewellery/gold-bangles.html",
                identifier: "Women Gold Material Bangles"
                }
            ],
            shopByPrice: [
                {
                shopByPriceTitle: "shop by price"
                },
                {
                cat_title: "₹15K - ₹20K",
                url: "/jewellery/bangles/under+20k.html",
                identifier: "Women Bangle Shop By Price ₹15K - ₹20K"
                },
                {
                cat_title: "₹20K - ₹25K",
                url: "/jewellery/bangles/under+25k.html",
                identifier: "Women Bangle Shop By Price ₹20K - ₹25K"
                },
                {
                cat_title: "₹50K - ₹75K",
                url: "/jewellery/bangles/under+75k.html",
                identifier: "Women Bangle Shop By Price ₹50K - ₹75K"
                },
                {
                cat_title: "₹75K - ₹100K",
                url: "/jewellery/bangles/under+100k.html",
                identifier: "Women Bangle Shop By Price ₹75K - ₹100K"
                },
                {
                cat_title: "Above ₹100K",
                url: "/jewellery/bangles/above+100k.html",
                identifier: "Women Bangle Shop By Price Above ₹100K"
                }
            ],
            shopByOcassion: [
                {
                shopByOcassionTitle: "shop by occasion"
                },
                {
                cat_title: "Daily wear",
                cat_img: "./assets/images/sub_category/bangles/daily_wear_bangle.jpg",
                url: "/jewellery/bangles/daily+wear.html",
                identifier: "Women Daily wear Bangles"
                },
                {
                cat_title: "Casual Outings",
                cat_img: "./assets/images/sub_category/bangles/casual_outings_bangle.jpg",
                url: "/jewellery/bangles/casual+outings.html",
                identifier: "Women Casual Outings Bangles"
                },
                {
                cat_title: "Anniversary",
                cat_img: "./assets/images/sub_category/bangles/anniversary_bangle.jpg",
                url: "/jewellery/bangles/anniversary.html",
                identifier: "Women Anniversary Bangles"
                },
                {
                cat_title: "Festive",
                cat_img: "./assets/images/sub_category/bangles/festive_bangle.jpg",
                url: "/jewellery/bangles/festive.html",
                identifier: "Women Festive Bangles"
                },
                {
                cat_title: "Wedding",
                cat_img: "./assets/images/sub_category/bangles/wedding_bangle.jpg",
                url: "/jewellery/bangles/wedding.html",
                identifier: "Women Wedding Bangles"
                }
            ]
            }
        },
        {
            filter_category: "women_bracelet",
            type: "row",
            children_cat: {
            mainTitle: {
                title: "Bracelet",
                viewAll_url: "/jewellery/bracelets.html",
                identifier: "Women Bracelet ViewAll"
            },
            recommended: {
                recommend: "Recommended for you",
                recommend_img: "./assets/images/recommend/Women-BRACELETS.jpg",
                url: "/jewellery/bracelets.html",
                identifier: "Women Bracelet Recommended Banner"
            },
            shopByStyle: [
                {
                shopByStyleTitle: "shop by style"
                },
                {
                cat_title: "Chain Bracelets",
                cat_subTitle: "Stylish Bracelets to help you ace the Wrist game!",
                cat_img: "./assets/images/sub_category/bracelets/Chain-bracelets.jpg",
                url: "/jewellery/chain-bracelets/for+women.html",
                identifier: "Women Chain Bracelets"
                },
                {
                cat_title: "Flexi Bracelets",
                cat_subTitle: "Stand out from the crowd when you style these bracelets!",
                cat_img: "./assets/images/sub_category/bracelets/Flexi-Bracelets.jpg",
                url: "/jewellery/flexi-bracelets/for+women.html",
                identifier: "Women Flexi Bracelets"
                },
                {
                cat_title: "Oval Bracelets",
                cat_subTitle: "Dainty accents to accentuate your wrist!",
                cat_img: "./assets/images/sub_category/bracelets/Oval-bracelets.jpg",
                url: "/jewellery/oval-bracelets.html",
                identifier: "Women Oval Bracelets"
                },
                {
                cat_title: "Tennis Bracelets",
                cat_subTitle: "Bracelets for timeless style and sophistication.",
                cat_img: "./assets/images/sub_category/bracelets/Tennis-bracelets.jpg",
                url: "/jewellery/tennis-bracelets.html",
                identifier: "Women Tennis Bracelets"
                }
            ],
            shopByMaterial: [
                {
                shopByMaterialTitle: "shop by Material"
                },
                {
                cat_title: "Diamond",
                cat_img: "./assets/images/Solitaire.svg",
                url: "/jewellery/diamond-bracelets/for+women.html",
                identifier: "Women Diamond Material Bracelets"
                },
                {
                cat_title: "Platinum",
                cat_img: "./assets/images/multi_color_platinum.svg",
                url: "/jewellery/platinum-bracelet/for+women.html",
                identifier: "Women Platinum Material Bracelets"
                },
                {
                cat_title: "Gemstone",
                cat_img: "./assets/images/Gemstone.svg",
                url: "/jewellery/gemstone-bracelet/for+women.html",
                identifier: "Women Gemstone Material Bracelets"
                },
                {
                cat_title: "Gold",
                cat_img: "./assets/images/multi_color_gold.svg",
                url: "/jewellery/gold-bracelets.html",
                identifier: "Women Gold Material Bracelets"
                }
            ],
            shopByPrice: [
                {
                shopByPriceTitle: "shop by price"
                },
                {
                cat_title: "Under ₹20K",
                url: "/jewellery/bracelets/below+rs+10000-under+15k-under+20k.html",
                identifier: "Women Bracelet Shop By Price Under ₹20K"
                },
                {
                cat_title: "₹20K - ₹30K",
                url: "/jewellery/bracelets/in-stock-under+25k-under+30k.html",
                identifier: "Women Bracelet Shop By Price ₹20K - ₹30K"
                },
                {
                cat_title: "₹30K - ₹50K",
                url: "/jewellery/bracelets/in-stock-under+50k.html",
                identifier: "Women Bracelet Shop By Price ₹30K - ₹50K"
                },
                {
                cat_title: "₹50K - ₹75K",
                url: "/jewellery/bracelets/in-stock-under+75k.html",
                identifier: "Women Bracelet Shop By Price ₹50K - ₹75K"
                },
                {
                cat_title: "₹75K - ₹100K",
                url: "/jewellery/bracelets/in-stock-under+100k.html",
                identifier: "Women Bracelet Shop By Price ₹75K - ₹100K"
                },
                {
                cat_title: "Above ₹100K",
                url: "/jewellery/bracelets/in-stock-above+100k.html",
                identifier: "Women Bracelet Shop By Price Above ₹100K"
                }
            ],
            shopByOcassion: [
                {
                shopByOcassionTitle: "shop by occasion"
                },
                {
                cat_title: "Daily wear",
                cat_img: "./assets/images/sub_category/bracelets/daily_wear_bracelet.jpg",
                url: "/jewellery/bracelets/daily+wear.html",
                identifier: "Women Daily wear Bracelets"
                },
                {
                cat_title: "Casual Outings",
                cat_img: "./assets/images/sub_category/bracelets/casual_outings_bracelet.jpg",
                url: "/jewellery/bracelets/casual+outings.html",
                identifier: "Women Casual Outings Bracelets"
                },
                {
                cat_title: "Anniversary",
                cat_img: "./assets/images/sub_category/bracelets/anniversary_bracelet.jpg",
                url: "/jewellery/bracelets/anniversary.html",
                identifier: "Women Anniversary Bracelets"
                },
                {
                cat_title: "Festive",
                cat_img: "./assets/images/sub_category/bracelets/festive_bracelet.jpg",
                url: "/jewellery/bracelets/festive.html",
                identifier: "Women Festive Bracelets"
                },
                {
                cat_title: "Wedding",
                cat_img: "./assets/images/sub_category/bracelets/wedding_bracelet.jpg",
                url: "/jewellery/bracelets/wedding.html",
                identifier: "Women Wedding Bracelets"
                }
            ]
            }
        },        
        
       {
            filter_category: "women_pendant",
            type: "row",
            children_cat: {
                mainTitle: {
                title: "Pendants",
                viewAll_url: "/jewellery/pendants.html",
                identifier: "Women Pendants ViewAll"
                },
                recommended: {
                recommend: "Recommended for you",
                recommend_img: "./assets/images/wysiwyg/mobileMenu/recommend/Women-PENDANTS.jpg",
                url: "/jewellery/pendants.html",
                identifier: "Women Pendants Recommended Banner"
                },
                shopByStyle: [
                {
                    shopByStyleTitle: "shop by style"
                },
                {
                    cat_title: "Initials Pendants",
                    cat_subTitle: "Personalized pendants for your favourite person.",
                    cat_img: "./assets/images/wysiwyg/mobileMenu/sub_category/pendants/Initials-pendants.jpg",
                    url: "/jewellery/initials-pendant.html",
                    identifier: "Women Initials Pendants"
                },
                {
                    cat_title: "Solitaire Pendants",
                    cat_subTitle: "Pendants featuring regal class and charm.",
                    cat_img: "./assets/images/wysiwyg/mobileMenu/sub_category/pendants/Solitaire-pendants.jpg",
                    url: "/jewellery/solitaire-pendants.html",
                    identifier: "Women Solitaire Pendants"
                },
                {
                    cat_title: "Pendant With Chain",
                    cat_subTitle: "Charming Accessories to help you stand out!",
                    cat_img: "./assets/images/wysiwyg/mobileMenu/sub_category/pendants/Pendant-with-chain.jpg",
                    url: "/jewellery/pendant-with-chain.html",
                    identifier: "Women Pendant With Chain"
                },
                {
                    cat_title: "Casual Pendants",
                    cat_subTitle: "Stunning pendants to make your everyday stylish.",
                    cat_img: "./assets/images/wysiwyg/mobileMenu/sub_category/pendants/Casual-pendants.jpg",
                    url: "/jewellery/casual-pendant.html",
                    identifier: "Women Casual Pendants"
                },
                {
                    cat_title: "Religious Pendants",
                    cat_subTitle: "Pendants to express your religious devotion!",
                    cat_img: "./assets/images/wysiwyg/mobileMenu/sub_category/pendants/Religious-pendants.jpg",
                    url: "/jewellery/religious-pendants.html",
                    identifier: "Women Religious Pendants"
                }
                ],
                shopByMaterial: [
                {
                    shopByMaterialTitle: "shop by Material"
                },
                {
                    cat_title: "Diamond",
                    cat_img: "./assets/images/wysiwyg/mobileMenu/Solitaire.svg",
                    url: "/jewellery/diamond-pendant.html",
                    identifier: "Women Diamond Material Pendants"
                },
                {
                    cat_title: "Platinum",
                    cat_img: "./assets/images/wysiwyg/mobileMenu/multi_color_platinum.svg",
                    url: "/jewellery/platinum-pendant.html",
                    identifier: "Women Platinum Material Pendants"
                },
                {
                    cat_title: "Gemstone",
                    cat_img: "./assets/images/wysiwyg/mobileMenu/Gemstone.svg",
                    url: "/jewellery/gemstone-pendant.html",
                    identifier: "Women Gemstone Material Pendants"
                },
                {
                    cat_title: "Gold",
                    cat_img: "./assets/images/wysiwyg/mobileMenu/multi_color_gold.svg",
                    url: "/jewellery/gold-pendant.html",
                    identifier: "Women Gold Material Pendants"
                }
                ],
                shopByPrice: [
                {
                    shopByPriceTitle: "shop by price"
                },
                {
                    cat_title: "Under ₹20K",
                    url: "/jewellery/pendants/below+rs+10000-under+15k-under+20k.html",
                    identifier: "Women Pendant Shop By Price Under ₹20K"
                },
                {
                    cat_title: "₹20K - ₹30K",
                    url: "/jewellery/pendants/under+25k-under+30k.html",
                    identifier: "Women Pendant Shop By Price ₹20K - ₹30K"
                },
                {
                    cat_title: "₹30K - ₹50K",
                    url: "/jewellery/pendants/under+50k.html",
                    identifier: "Women Pendant Shop By Price ₹30K - ₹50K"
                },
                {
                    cat_title: "₹50K - ₹75K",
                    url: "/jewellery/pendants/under+75k.html",
                    identifier: "Women Pendant Shop By Price ₹50K - ₹75K"
                },
                {
                    cat_title: "₹75K - ₹100K",
                    url: "/jewellery/pendants/under+100k.html",
                    identifier: "Women Pendant Shop By Price ₹75K - ₹100K"
                },
                {
                    cat_title: "Above ₹100K",
                    url: "/jewellery/pendants/above+100k.html",
                    identifier: "Women Pendant Shop By Price Above ₹100K"
                }
                ],
                shopByOcassion: [
                {
                    shopByOcassionTitle: "shop by occasion"
                },
                {
                    cat_title: "Daily Wear",
                    cat_img: "./assets/images/wysiwyg/mobileMenu/sub_category/pendants/daily_wear_pendant.jpg",
                    url: "/jewellery/pendants/daily+wear.html",
                    identifier: "Women Daily Wear Pendants"
                },
                {
                    cat_title: "Casual Outings",
                    cat_img: "./assets/images/wysiwyg/mobileMenu/sub_category/pendants/casual_outings_pendant.jpg",
                    url: "/jewellery/pendants/casual+outings.html",
                    identifier: "Women Casual Outings Pendants"
                },
                {
                    cat_title: "Anniversary",
                    cat_img: "./assets/images/wysiwyg/mobileMenu/sub_category/pendants/anniversary_pendant.jpg",
                    url: "/jewellery/pendants/anniversary.html",
                    identifier: "Women Anniversary Pendants"
                },
                {
                    cat_title: "Festive",
                    cat_img: "./assets/images/wysiwyg/mobileMenu/sub_category/pendants/festive_pendant.jpg",
                    url: "/jewellery/pendants/festive.html",
                    identifier: "Women Festive Pendants"
                }
                ]
            }
        },

        {
            filter_category: "women_chains",
            type: "row",
            children_cat: {
                mainTitle: {
                title: "Chains",
                viewAll_url: "/jewellery/chains.html",
                identifier: "Women Chains ViewAll"
                },
                recommended: {
                recommend: "Recommended for you",
                recommend_img: "./assets/images/wysiwyg/mobileMenu/recommend/Women-CHAINS.jpg",
                url: "/jewellery/chains.html",
                identifier: "Women Chains Recommended Banner"
                },
                shopByStyle: [
                {
                    shopByStyleTitle: "shop by style"
                },
                {
                    cat_title: "Daily Wear",
                    cat_subTitle: "Uplift your everyday look with versatile chains.",
                    cat_img: "./assets/images/wysiwyg/mobileMenu/sub_category/chains/Daily-wear.jpg",
                    url: "/jewellery/gold-dailywear-chains.html",
                    identifier: "Women Daily Wear Chains"
                },
                {
                    cat_title: "Mangalsutra Chains",
                    cat_subTitle: "Versatile Chains to make you look even more stunning!",
                    cat_img: "./assets/images/wysiwyg/mobileMenu/sub_category/chains/Mangalsutra-chains.jpg",
                    url: "/jewellery/mangalsutra-chain.html",
                    identifier: "Women Mangalsutra Chains"
                },
                {
                    cat_title: "Fancy Chains",
                    cat_subTitle: "Captivating Chains to accentuate your neckline!",
                    cat_img: "./assets/images/wysiwyg/mobileMenu/sub_category/chains/Fancy-chains.jpg",
                    url: "/jewellery/gold-fancy-chains.html",
                    identifier: "Women Fancy Chains"
                }
                ],
                shopByMaterial: [
                {
                    shopByMaterialTitle: "shop by Material"
                },
                {
                    cat_title: "Platinum",
                    cat_img: "./assets/images/wysiwyg/mobileMenu/multi_color_platinum.svg",
                    url: "/jewellery/platinum-chains.html",
                    identifier: "Women Platinum Material Chains"
                },
                {
                    cat_title: "Gold",
                    cat_img: "./assets/images/wysiwyg/mobileMenu/multi_color_gold.svg",
                    url: "/jewellery/gold-chains.html",
                    identifier: "Women Gold Material Chains"
                }
                ],
                shopByPrice: [
                {
                    shopByPriceTitle: "shop by price"
                },
                {
                    cat_title: "Under ₹20K",
                    url: "/jewellery/chains/under+15k-under+20k.html",
                    identifier: "Women Chains Shop By Price Under ₹20K"
                },
                {
                    cat_title: "₹20K - ₹30K",
                    url: "/jewellery/chains/under+25k-under+30k.html",
                    identifier: "Women Chains Shop By Price ₹20K - ₹30K"
                },
                {
                    cat_title: "₹30K - ₹50K",
                    url: "/jewellery/chains/under+50k.html",
                    identifier: "Women Chains Shop By Price ₹30K - ₹50K"
                },
                {
                    cat_title: "₹50K - ₹75K",
                    url: "/jewellery/chains/under+75k.html",
                    identifier: "Women Chains Shop By Price ₹50K - ₹75K"
                },
                {
                    cat_title: "₹75K - ₹100K",
                    url: "/jewellery/chains/under+100k-above+100k.html",
                    identifier: "Women Chains Shop By Price ₹75K - ₹100K"
                }
                ],
                shopByOcassion: [
                {
                    shopByOcassionTitle: "shop by occasion"
                },
                {
                    cat_title: "Daily wear",
                    cat_img: "./assets/images/wysiwyg/mobileMenu/sub_category/chains/daily_wear_chains.jpg",
                    url: "/jewellery/chains/daily+wear.html",
                    identifier: "Women Daily Wear Chains"
                },
                {
                    cat_title: "Casual Outings",
                    cat_img: "./assets/images/wysiwyg/mobileMenu/sub_category/chains/casual_outings_chains.jpg",
                    url: "/jewellery/chains/casual+outings.html",
                    identifier: "Women Casual Outings Chains"
                },
                {
                    cat_title: "Anniversary",
                    cat_img: "./assets/images/wysiwyg/mobileMenu/sub_category/chains/anniversary_chains.jpg",
                    url: "/jewellery/chains/anniversary.html",
                    identifier: "Women Anniversary Chains"
                },
                {
                    cat_title: "Festive",
                    cat_img: "./assets/images/wysiwyg/mobileMenu/sub_category/chains/festive_chains.jpg",
                    url: "/jewellery/chains/festive.html",
                    identifier: "Women Festive Chains"
                },
                {
                    cat_title: "Wedding",
                    cat_img: "./assets/images/wysiwyg/mobileMenu/sub_category/chains/wedding_chains.jpg",
                    url: "/jewellery/chains/wedding.html",
                    identifier: "Women Wedding Chains"
                }
                ]
            }
        },
        {
            filter_category: "women_mangalsutra",
            type: "row",
            children_cat: {
                mainTitle: {
                title: "Mangalsutra",
                viewAll_url: "/jewellery/mangalsutra.html",
                identifier: "Women Mangalsutra ViewAll"
                },
                recommended: {
                recommend: "Recommended for you",
                recommend_img: "./assets/images/wysiwyg/mobileMenu/recommend/Women-MANGALSUTRA.jpg",
                url: "/jewellery/mangalsutra.html",
                identifier: "Women Mangalsutra Recommended Banner"
                },
                shopByStyle: [
                { shopByStyleTitle: "shop by style" },
                {
                    cat_title: "Mangalsutra With Chain",
                    cat_subTitle: "Versatile designs to up your everyday look!",
                    cat_img: "./assets/images/wysiwyg/mobileMenu/sub_category/mangalsutras/Mangalsutra-with-chain.jpg",
                    url: "/jewellery/mangalsutra-with-chain.html",
                    identifier: "Women Mangalsutra With Chain"
                },
                {
                    cat_title: "Mangalsutra Bracelets",
                    cat_subTitle: "Versatile wrist accessories for the modern woman!",
                    cat_img: "./assets/images/wysiwyg/mobileMenu/sub_category/mangalsutras/Mangalsutra-bracelets.jpg",
                    url: "/jewellery/mangalsutra-bracelet.html",
                    identifier: "Women Mangalsutra Bracelets"
                },
                {
                    cat_title: "Mangalsutra Chains",
                    cat_subTitle: "Versatile Designs to enhance your daily look!",
                    cat_img: "./assets/images/wysiwyg/mobileMenu/sub_category/mangalsutras/Mangalsutra-chains.jpg",
                    url: "/jewellery/mangalsutra-chain.html",
                    identifier: "Women Mangalsutra Chains"
                },
                {
                    cat_title: "Mangalsutra Rings",
                    cat_subTitle: "Contemporary expressions of class and charm.",
                    cat_img: "./assets/images/wysiwyg/mobileMenu/sub_category/mangalsutras/Mangalsutra-rings.jpg",
                    url: "/jewellery/mangalsutra-rings.html",
                    identifier: "Women Mangalsutra Rings"
                },
                {
                    cat_title: "Solitaire",
                    cat_subTitle: "Versatile Mangalsutras with the allure of solitaires!",
                    cat_img: "./assets/images/wysiwyg/mobileMenu/sub_category/mangalsutras/Solitaire.jpg",
                    url: "/jewellery/solitaire-mangalsutra.html",
                    identifier: "Women Solitaire Mangalsutra"
                }
                ],
                shopByMaterial: [
                { shopByMaterialTitle: "shop by Material" },
                {
                    cat_title: "Diamond",
                    cat_img: "./assets/images/wysiwyg/mobileMenu/Solitaire.svg",
                    url: "/jewellery/pendant-mangalsutra_1-diamond_jewellery.html",
                    identifier: "Women Diamond Material Mangalsutra"
                },
                {
                    cat_title: "Gold",
                    cat_img: "./assets/images/wysiwyg/mobileMenu/multi_color_gold.svg",
                    url: "/jewellery/pendant-mangalsutra_1-gold_jewellery.html",
                    identifier: "Women Gold Material Mangalsutra"
                }
                ],
                shopByPrice: [
                { shopByPriceTitle: "shop by price" },
                {
                    cat_title: "Under ₹20K",
                    url: "/jewellery/mangalsutra/under+15k-under+20k.html",
                    identifier: "Women Mangalsutra Shop By Price Under ₹20K"
                },
                {
                    cat_title: "₹20K - ₹30K",
                    url: "/jewellery/mangalsutra/under+25k-under+30k.html",
                    identifier: "Women Mangalsutra Shop By Price ₹20K - ₹30K"
                },
                {
                    cat_title: "₹30K - ₹50K",
                    url: "/jewellery/mangalsutra/under+50k.html",
                    identifier: "Women Mangalsutra Shop By Price ₹30K - ₹50K"
                },
                {
                    cat_title: "₹50K - ₹75K",
                    url: "/jewellery/mangalsutra/under+75k.html",
                    identifier: "Women Mangalsutra Shop By Price ₹50K - ₹75K"
                },
                {
                    cat_title: "₹75K - ₹100K",
                    url: "/jewellery/mangalsutra/under+100k.html",
                    identifier: "Women Mangalsutra Shop By Price ₹75K - ₹100K"
                },
                {
                    cat_title: "Above ₹100K",
                    url: "/jewellery/mangalsutra/above+100k.html",
                    identifier: "Women Mangalsutra Shop By Price Above ₹100K"
                }
                ],
                shopByOcassion: []
            }
        },      

        {
            filter_category: "solitaire_jewellery",
            type: "row",
            children_cat: {
                mainTitle: {
                title: "Solitaire Jewellery",
                viewAll_url: "/jewellery/just-solitaires.html",
                identifier: "Solitaire Jewellery ViewAll"
                },
                recommended: {
                recommend: "Recommended for you",
                recommend_img: "./assets/images/wysiwyg/mobileMenu/recommend/SOLITAIRE.jpg",
                url: "/jewellery/just-solitaires.html",
                identifier: "Solitaire Jewellery Recommended Banner"
                },
                shopByStyle: [
                { shopByStyleTitle: "shop by category" },
                {
                    cat_title: "Rings",
                    cat_subTitle: "Statement accents that will not go unnoticed!",
                    cat_img: "./assets/images/wysiwyg/mobileMenu/sub_category/solitaire/Ring.jpg",
                    url: "/jewellery/solitaire-rings.html",
                    identifier: "Solitaire Jewellery Rings"
                },
                {
                    cat_title: "Earrings",
                    cat_subTitle: "Stunning Earrings that will catch everyone’s eyes.",
                    cat_img: "./assets/images/wysiwyg/mobileMenu/sub_category/solitaire/Earring.jpg",
                    url: "/jewellery/solitaire-earrings.html",
                    identifier: "Solitaire Jewellery Earrings"
                },
                {
                    cat_title: "Pendants",
                    cat_subTitle: "Charming accents with the captivating allure of Solitaires!",
                    cat_img: "./assets/images/wysiwyg/mobileMenu/sub_category/solitaire/Pendant.jpg",
                    url: "/jewellery/solitaire-pendants.html",
                    identifier: "Solitaire Jewellery Pendants"
                },
                {
                    cat_title: "Necklaces",
                    cat_subTitle: "Timeless charming necklaces with captivating allure.",
                    cat_img: "./assets/images/wysiwyg/mobileMenu/sub_category/solitaire/Necklace.jpg",
                    url: "/jewellery/solitaire-necklace.html",
                    identifier: "Solitaire Jewellery Necklaces"
                },
                {
                    cat_title: "Nose pins",
                    cat_subTitle: "Elegant adornments featuring the allure of solitaires!",
                    cat_img: "./assets/images/wysiwyg/mobileMenu/sub_category/solitaire/Nose-pins.jpg",
                    url: "/jewellery/solitaire-nose-pins.html",
                    identifier: "Solitaire Jewellery Nose Pins"
                }
                ],
                shopByMaterial: [
                { shopByMaterialTitle: "shop loose solitaire" },
                {
                    cat_title: "Round",
                    cat_img: "./assets/images/wysiwyg/mobileMenu/sub_category/loose-solitaire/Round.jpg",
                    url: "/loose-solitaire?shape=Round",
                    identifier: "Loose Solitaire Shape Round"
                },
                {
                    cat_title: "Princess",
                    cat_img: "./assets/images/wysiwyg/mobileMenu/sub_category/loose-solitaire/Princess.jpg",
                    url: "/loose-solitaire?shape=Princess",
                    identifier: "Loose Solitaire Shape Princess"
                },
                {
                    cat_title: "Heart",
                    cat_img: "./assets/images/wysiwyg/mobileMenu/sub_category/loose-solitaire/Heart.jpg",
                    url: "/loose-solitaire?shape=Heart",
                    identifier: "Loose Solitaire Shape Heart"
                },
                {
                    cat_title: "Pear",
                    cat_img: "./assets/images/wysiwyg/mobileMenu/sub_category/loose-solitaire/Pear.jpg",
                    url: "/loose-solitaire?shape=Pear",
                    identifier: "Loose Solitaire Shape Pear"
                },
                {
                    cat_title: "Marquise",
                    cat_img: "./assets/images/wysiwyg/mobileMenu/sub_category/loose-solitaire/Marquise.jpg",
                    url: "/loose-solitaire?shape=Marquise",
                    identifier: "Loose Solitaire Shape Marquise"
                },
                {
                    cat_title: "Emerald",
                    cat_img: "./assets/images/wysiwyg/mobileMenu/sub_category/loose-solitaire/Emerald.jpg",
                    url: "/loose-solitaire?shape=Emerald",
                    identifier: "Loose Solitaire Shape Emerald"
                },
                {
                    view_all: "View All Loose Solitaire",
                    url: "/loose-solitaire",
                    identifier: "Loose Solitaire ViewAll"
                }
                ],
                shopByPrice: [
                { shopByPriceTitle: "shop by price" },
                {
                    cat_title: "Under ₹20K",
                    url: "/jewellery/just-solitaires/under+15k-under+20k.html",
                    identifier: "Women Solitaire Jewellery Shop By Price Under ₹20K"
                },
                {
                    cat_title: "₹20K - ₹30K",
                    url: "/jewellery/just-solitaires/under+25k-under+30k.html",
                    identifier: "Women Solitaire Jewellery Shop By Price ₹20K - ₹30K"
                },
                {
                    cat_title: "₹30K - ₹50K",
                    url: "/jewellery/just-solitaires/under+50k.html",
                    identifier: "Women Solitaire Jewellery Shop By Price ₹30K - ₹50K"
                },
                {
                    cat_title: "₹50K - ₹75K",
                    url: "/jewellery/just-solitaires/under+75k.html",
                    identifier: "Women Solitaire Jewellery Shop By Price ₹50K - ₹75K"
                },
                {
                    cat_title: "Above ₹75K",
                    url: "/jewellery/just-solitaires/under+100k-above+100k.html",
                    identifier: "Women Solitaire Jewellery Shop By Price Above ₹75K"
                }
                ],
                shopByOcassion: []
            }
        },  
        {
            filter_category: "gifting",
            type: "grid",
            children_cat: {
                mainTitle: {
                title: "Gifting",
                viewAll_url: "/candere-collections.html",
                identifier: "Gifting ViewAll"
                },
                recommended: {
                recommend: "Recommended for you",
                recommend_img: "./assets/images/wysiwyg/mobileMenu/recommend/Gifting.jpg",
                url: "/gifts.html",
                identifier: "Gifting Recommended Banner"
                },
                collList: [
                {
                    title: "Anniversary gifts",
                    starting: "Starting at ₹10K",
                    image: "./assets/images/wysiwyg/mobileMenu/gifting/Anniversary.jpg",
                    url: "/jewellery/anniversary-gifts.html",
                    identifier: "Anniversary Gifts"
                },
                {
                    title: "Birthday gifts",
                    starting: "Starting at ₹5K",
                    image: "./assets/images/wysiwyg/mobileMenu/gifting/Birthday-gifts.jpg",
                    url: "/jewellery/birthday-gifts.html",
                    identifier: "Birthday Gifts"
                },
                {
                    title: "Gifts for him",
                    starting: "Starting at ₹9K",
                    image: "./assets/images/wysiwyg/mobileMenu/gifting/Gift-for-him.jpg",
                    url: "/jewellery/gifts-for-him.html",
                    identifier: "Gifts For Him"
                },
                {
                    title: "Gifts for her",
                    starting: "Starting at ₹6K",
                    image: "./assets/images/wysiwyg/mobileMenu/gifting/Gift-for-her.jpg",
                    url: "/jewellery/gifts-for-her.html",
                    identifier: "Gifts For Her"
                },
                {
                    title: "Gifts for kids",
                    starting: "Starting at ₹5K",
                    image: "./assets/images/wysiwyg/mobileMenu/collection/Kids.jpg",
                    url: "/jewellery/gifts-for-kids.html",
                    identifier: "Gifts For Kids"
                },
                {
                    title: "Gold coins",
                    starting: "Starting at ₹8K",
                    image: "./assets/images/wysiwyg/mobileMenu/gifting/Gold-coins.jpg",
                    url: "/gifts/investment-coins.html",
                    identifier: "Gold Coins"
                }
                ]
            }
        },
        {
            filter_category: "collections",
            type: "grid",
            children_cat: {
                mainTitle: {
                title: "Collections",
                viewAll_url: "/candere-collections.html",
                identifier: "Collections ViewAll"
                },
                recommended: {
                recommend: "Recommended for you",
                recommend_img: "./assets/images/wysiwyg/mobileMenu/recommend/arunaCollection.jpg",
                url: "/collections/aruna.html",
                identifier: "Collections Recommended Banner"
                },
                collList: [
                {
                    title: "Peacock",
                    starting: "Starting at ₹9.5K",
                    image: "./assets/images/wysiwyg/mobileMenu/collection/Peacock.jpg",
                    url: "/collections/peacock.html",
                    identifier: "Peacock Collection"
                },
                {
                    title: "Ziva",
                    starting: "Starting at ₹12K",
                    image: "./assets/images/wysiwyg/mobileMenu/collection/Ziva.jpg",
                    url: "/collections/ziva-collection.html",
                    identifier: "Ziva Collection"
                },
                {
                    title: "Aadya",
                    starting: "Starting ₹13K",
                    image: "./assets/images/wysiwyg/mobileMenu/collection/Aadya.jpg",
                    url: "/collections/aadya.html",
                    identifier: "Aadya Collections"
                },
                {
                    title: "Allura",
                    starting: "Starting at ₹11K",
                    image: "./assets/images/wysiwyg/mobileMenu/collection/Allura.jpg",
                    url: "/collections/allura-collection.html",
                    identifier: "Allura Collections"
                },
                {
                    title: "Butterfly",
                    starting: "Starting at ₹11K",
                    image: "./assets/images/wysiwyg/mobileMenu/collection/Butterfly.jpg",
                    url: "/collections/butterfly-collection.html",
                    identifier: "Butterfly Collections"
                },
                {
                    title: "Kids",
                    starting: "Starting at ₹5K",
                    image: "./assets/images/wysiwyg/mobileMenu/collection/Kids.jpg",
                    url: "/jewellery/kids.html",
                    identifier: "Kids Collections"
                },
                {
                    title: "Miracle",
                    starting: "Starting at ₹10K",
                    image: "./assets/images/wysiwyg/mobileMenu/collection/Miracle.jpg",
                    url: "/collections/miracle-plate-collection.html",
                    identifier: "Miracle Collections"
                },
                {
                    title: "Mens",
                    starting: "Starting at ₹8K",
                    image: "./assets/images/wysiwyg/mobileMenu/collection/Mens.jpg",
                    url: "/mens-collection.html",
                    identifier: "Mens Collections"
                }
                ]
            }
        },
        {
            filter_category: "wedding_collections",
            type: "grid",
            children_cat: {
                mainTitle: {
                title: "Wedding Collections",
                viewAll_url: "/wedding-collection.html",
                identifier: "Wedding Collections ViewAll"
                },
                recommended: {
                recommend: "Recommended for you",
                recommend_img: "./assets/images/wysiwyg/mobileMenu/recommend/wedding-Banner.jpg",
                url: "/wedding.html",
                identifier: "Wedding Collections Recommended Banner"
                },
                collList: [
                {
                    title: "Kyra",
                    starting: "Starting ₹7K",
                    image: "./assets/images/wysiwyg/mobileMenu/wedding/Kyra.jpg",
                    url: "/wedding-collection/kyra-collection.html",
                    identifier: "Kyra Wedding Collections"
                }
                ]
            }
        }
]

export default innerMain_cat;