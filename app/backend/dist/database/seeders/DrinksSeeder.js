"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: (queryInterface) => __awaiter(void 0, void 0, void 0, function* () {
        yield queryInterface.bulkInsert('drinks', [
            {
                drink_name: "GG",
                drink_category: "Ordinary Drink",
                drink_glass: "Collins Glass",
                alcoholic: "Optional alcohol",
                drink_instructions: "Pour the Galliano liqueur over ice. Fill the remainder of the glass with ginger ale and thats all there is to it. You now have a your very own GG.",
                drink_image: "https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg",
                drink_tag: null,
                drink_video: null,
                drink_ingredients: [
                    {
                        "name": "Galliano",
                        "quantity": "2 1/2 shots"
                    },
                    {
                        "name": "Ginger ale",
                        "quantity": null
                    },
                    {
                        "name": "Ice",
                        "quantity": null
                    }
                ]
            },
            {
                drink_name: "A1",
                drink_category: "Cocktail",
                drink_glass: "Cocktail glass",
                alcoholic: "Alcoholic",
                drink_instructions: "Pour all ingredients into a cocktail shaker, mix and serve over ice into a chilled glass.",
                drink_image: "https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg",
                drink_tag: null,
                drink_video: null,
                drink_ingredients: [
                    {
                        "name": "Gin",
                        "quantity": "1 3/4 shot"
                    },
                    {
                        "name": "Grand Marnier",
                        "quantity": "1 Shot"
                    },
                    {
                        "name": "Lemon Juice",
                        "quantity": "1/4 Shot"
                    },
                    {
                        "name": "Grenadine",
                        "quantity": "1/8 Shot"
                    }
                ]
            },
            {
                drink_name: "Ace",
                drink_category: "Cocktail",
                drink_glass: "Martini Glass",
                alcoholic: "Alcoholic",
                drink_instructions: "Shake all the ingredients in a cocktail shaker and ice then strain in a cold glass.",
                drink_image: "https://www.thecocktaildb.com/images/media/drink/l3cd7f1504818306.jpg",
                drink_tag: null,
                drink_video: null,
                drink_ingredients: [
                    {
                        "name": "Gin",
                        "quantity": "2 shots"
                    },
                    {
                        "name": "Grenadine",
                        "quantity": "1/2 shot"
                    },
                    {
                        "name": "Heavy cream",
                        "quantity": "1/2 shot"
                    },
                    {
                        "name": "Milk",
                        "quantity": "1/2 shot"
                    },
                    {
                        "name": "Egg White",
                        "quantity": "1/2 Fresh"
                    }
                ]
            },
            {
                drink_name: "747",
                drink_category: "Shot",
                drink_glass: "Shot glass",
                alcoholic: "Alcoholic",
                drink_instructions: "Pour Kahlua, then Baileys, then Frangelico not chilled and not layered -- SERVE!!!",
                drink_image: "https://www.thecocktaildb.com/images/media/drink/xxsxqy1472668106.jpg",
                drink_tag: null,
                drink_video: null,
                drink_ingredients: [
                    {
                        "name": "Kahlua",
                        "quantity": "1/3 part"
                    },
                    {
                        "name": "Baileys irish cream",
                        "quantity": "1/3 part"
                    },
                    {
                        "name": "Frangelico",
                        "quantity": "1/3 part"
                    }
                ]
            },
            {
                drink_name: "Kir",
                drink_category: "Ordinary Drink",
                drink_glass: "Wine Glass",
                alcoholic: "Alcoholic",
                drink_instructions: "Add the crème de cassis to the bottom of the glass, then top up with wine.",
                drink_image: "https://www.thecocktaildb.com/images/media/drink/apneom1504370294.jpg",
                drink_tag: "IBA,ContemporaryClassic",
                drink_video: null,
                drink_ingredients: [
                    {
                        "name": "Creme de Cassis",
                        "quantity": "1 part"
                    },
                    {
                        "name": "Champagne",
                        "quantity": "5 parts"
                    }
                ]
            },
            {
                drink_name: "ABC",
                drink_category: "Shot",
                drink_glass: "Shot glass",
                alcoholic: "Alcoholic",
                drink_instructions: "Layered in a shot glass.",
                drink_image: "https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg",
                drink_tag: null,
                drink_video: null,
                drink_ingredients: [
                    {
                        "name": "Amaretto",
                        "quantity": "1/3"
                    },
                    {
                        "name": "Baileys irish cream",
                        "quantity": "1/3"
                    },
                    {
                        "name": "Cognac",
                        "quantity": "1/3"
                    }
                ]
            },
            {
                drink_name: "252",
                drink_category: "Shot",
                drink_glass: "Shot glass",
                alcoholic: "Alcoholic",
                drink_instructions: "Add both ingredients to shot glass, shoot, and get drunk quick",
                drink_image: "https://www.thecocktaildb.com/images/media/drink/rtpxqw1468877562.jpg",
                drink_tag: null,
                drink_video: null,
                drink_ingredients: [
                    {
                        "name": "151 proof rum",
                        "quantity": "1/2 shot Bacardi"
                    },
                    {
                        "name": "Wild Turkey",
                        "quantity": "1/2 shot"
                    }
                ]
            },
            {
                drink_name: "AT&T",
                drink_category: "Ordinary Drink",
                drink_glass: "Highball Glass",
                alcoholic: "Alcoholic",
                drink_instructions: "Pour Vodka and Gin over ice, add Tonic and Stir",
                drink_image: "https://www.thecocktaildb.com/images/media/drink/rhhwmp1493067619.jpg",
                drink_tag: null,
                drink_video: null,
                drink_ingredients: [
                    {
                        "name": "Absolut Vodka",
                        "quantity": "1 oz"
                    },
                    {
                        "name": "Gin",
                        "quantity": "1 oz"
                    },
                    {
                        "name": "Tonic water",
                        "quantity": "4 oz"
                    }
                ]
            },
            {
                drink_name: "Smut",
                drink_category: "Punch / Party Drink",
                drink_glass: "Beer mug",
                alcoholic: "Alcoholic",
                drink_instructions: "Throw it all together and serve real cold.",
                drink_image: "https://www.thecocktaildb.com/images/media/drink/rx8k8e1504365812.jpg",
                drink_tag: null,
                drink_video: null,
                drink_ingredients: [
                    {
                        "name": "Red wine",
                        "quantity": "1/3 part"
                    },
                    {
                        "name": "Peach schnapps",
                        "quantity": "1 shot"
                    },
                    {
                        "name": "Pepsi Cola",
                        "quantity": "1/3 part"
                    },
                    {
                        "name": "Orange juice",
                        "quantity": "1/3 part"
                    }
                ]
            },
            {
                drink_name: "B-53",
                drink_category: "Shot",
                drink_glass: "Collins Glass",
                alcoholic: "Alcoholic",
                drink_instructions: "Layer the Kahlua, Sambucca and Grand Marnier into a shot glass in that order. Better than B-52",
                drink_image: "https://www.thecocktaildb.com/images/media/drink/rwqxrv1461866023.jpg",
                drink_tag: null,
                drink_video: null,
                drink_ingredients: [
                    {
                        "name": "Kahlua",
                        "quantity": "1/3 shot"
                    },
                    {
                        "name": "Sambuca",
                        "quantity": "1/3 shot"
                    },
                    {
                        "name": "Grand Marnier",
                        "quantity": "1/3 shot"
                    }
                ]
            },
            {
                drink_name: "Adam",
                drink_category: "Ordinary Drink",
                drink_glass: "Cocktail glass",
                alcoholic: "Alcoholic",
                drink_instructions: "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
                drink_image: "https://www.thecocktaildb.com/images/media/drink/v0at4i1582478473.jpg",
                drink_tag: "Alcoholic,Holiday",
                drink_video: null,
                drink_ingredients: [
                    {
                        "name": "Dark rum",
                        "quantity": "2 oz"
                    },
                    {
                        "name": "Lemon juice",
                        "quantity": "1 oz"
                    },
                    {
                        "name": "Grenadine",
                        "quantity": "1 tsp"
                    }
                ]
            },
            {
                drink_name: "ACID",
                drink_category: "Shot",
                drink_glass: "Shot glass",
                alcoholic: "Alcoholic",
                drink_instructions: "Poor in the 151 first followed by the 101 served with a Coke or Dr Pepper chaser.",
                drink_image: "https://www.thecocktaildb.com/images/media/drink/xuxpxt1479209317.jpg",
                drink_tag: null,
                drink_video: null,
                drink_ingredients: [
                    {
                        "name": "151 proof rum",
                        "quantity": "1 oz Bacardi"
                    },
                    {
                        "name": "Wild Turkey",
                        "quantity": "1 oz"
                    }
                ]
            },
            {
                drink_name: "H.D.",
                drink_category: "Coffee / Tea",
                drink_glass: "Beer mug",
                alcoholic: "Alcoholic",
                drink_instructions: "Mix the whisky and Baileys Cream in a beer-glass (at least 50 cl). Fill the rest of the glass with coffee.",
                drink_image: "https://www.thecocktaildb.com/images/media/drink/upusyu1472667977.jpg",
                drink_tag: null,
                drink_video: null,
                drink_ingredients: [
                    {
                        "name": "Whisky",
                        "quantity": "4 cl"
                    },
                    {
                        "name": "Baileys irish cream",
                        "quantity": "8 cl"
                    },
                    {
                        "name": "Coffee",
                        "quantity": "Fill rest of glass"
                    }
                ]
            },
            {
                drink_name: "B-52",
                drink_category: "Shot",
                drink_glass: "Shot glass",
                alcoholic: "Alcoholic",
                drink_instructions: "Layer ingredients into a shot glass. Serve with a stirrer.",
                drink_image: "https://www.thecocktaildb.com/images/media/drink/5a3vg61504372070.jpg",
                drink_tag: "IBA,NewEra",
                drink_video: null,
                drink_ingredients: [
                    {
                        "name": "Baileys irish cream",
                        "quantity": "1/3"
                    },
                    {
                        "name": "Grand Marnier",
                        "quantity": "1/3"
                    },
                    {
                        "name": "Kahlua",
                        "quantity": "1/4"
                    }
                ]
            },
            {
                drink_name: "Rose",
                drink_category: "Ordinary Drink",
                drink_glass: "Cocktail glass",
                alcoholic: "Alcoholic",
                drink_instructions: "Shake together in a cocktail shaker, then strain into chilled glass. Garnish and serve.",
                drink_image: "https://www.thecocktaildb.com/images/media/drink/8kxbvq1504371462.jpg",
                drink_tag: "IBA,ContemporaryClassic",
                drink_video: null,
                drink_ingredients: [
                    {
                        "name": "Dry Vermouth",
                        "quantity": "1/2 oz"
                    },
                    {
                        "name": "Gin",
                        "quantity": "1 oz"
                    },
                    {
                        "name": "Apricot brandy",
                        "quantity": "1/2 oz"
                    },
                    {
                        "name": "Lemon juice",
                        "quantity": "1/2 tsp"
                    },
                    {
                        "name": "Grenadine",
                        "quantity": "1 tsp"
                    }
                ]
            },
            {
                drink_name: "Derby",
                drink_category: "Ordinary Drink",
                drink_glass: "Cocktail glass",
                alcoholic: "Alcoholic",
                drink_instructions: "Pour all ingredients into a mixing glass with ice. Stir. Strain into a cocktail glass. Garnish with a sprig of fresh mint in the drink.",
                drink_image: "https://www.thecocktaildb.com/images/media/drink/52weey1606772672.jpg",
                drink_tag: "Classic,IBA",
                drink_video: "https://www.youtube.com/watch?v=bYQTTokGkFI",
                drink_ingredients: [
                    {
                        "name": "gin",
                        "quantity": "6 cl"
                    },
                    {
                        "name": "Peach Bitters",
                        "quantity": "2 dashes"
                    },
                    {
                        "name": "Mint",
                        "quantity": "2 Fresh leaves"
                    }
                ],
            },
            {
                drink_name: "A. J.",
                drink_category: "Ordinary Drink",
                drink_glass: "Cocktail glass",
                alcoholic: "Alcoholic",
                drink_instructions: "Shake ingredients with ice, strain into a cocktail glass, and serve.",
                drink_image: "https://www.thecocktaildb.com/images/media/drink/l74qo91582480316.jpg",
                drink_tag: null,
                drink_video: null,
                drink_ingredients: [
                    {
                        "name": "Applejack",
                        "quantity": "1 1/2 oz"
                    },
                    {
                        "name": "Grapefruit juice",
                        "quantity": "1 oz"
                    }
                ]
            },
            {
                drink_name: "Bijou",
                drink_category: "Cocktail",
                drink_glass: "Cocktail glass",
                alcoholic: "Alcoholic",
                drink_instructions: "Stir in mixing glass with ice and strain",
                drink_image: "https://www.thecocktaildb.com/images/media/drink/rysb3r1513706985.jpg",
                drink_tag: null,
                drink_video: null,
                drink_ingredients: [
                    {
                        "name": "Orange Bitters",
                        "quantity": "1 dash"
                    },
                    {
                        "name": "Green Chartreuse",
                        "quantity": "1 oz"
                    },
                    {
                        "name": "Gin",
                        "quantity": "1 oz"
                    },
                    {
                        "name": "Sweet Vermouth",
                        "quantity": "1 oz"
                    }
                ]
            },
            {
                drink_name: "50/50",
                drink_category: "Ordinary Drink",
                drink_glass: "Collins Glass",
                alcoholic: "Alcoholic",
                drink_instructions: "Fill glass with crushed ice. Add vanilla vodka. Add a splash of Grand Marnier. Fill with orange juice.",
                drink_image: "https://www.thecocktaildb.com/images/media/drink/wwpyvr1461919316.jpg",
                drink_tag: null,
                drink_video: null,
                drink_ingredients: [
                    {
                        "name": "Vanilla vodka",
                        "quantity": "2 1/2 oz"
                    },
                    {
                        "name": "Grand Marnier",
                        "quantity": "1 splash"
                    },
                    {
                        "name": "Orange juice",
                        "quantity": "Fill with"
                    }
                ]
            },
            {
                drink_name: "Karsk",
                drink_category: "Ordinary Drink",
                drink_glass: "Highball glass",
                alcoholic: "Alcoholic",
                drink_instructions: "Put a copper coin in a coffee cup and fill up with coffee until you no longer see the coin, then add grain alcohol until you see the coin. Norwegian specialty.",
                drink_image: "https://www.thecocktaildb.com/images/media/drink/808mxk1487602471.jpg",
                drink_tag: null,
                drink_video: null,
                drink_ingredients: [
                    {
                        "name": "Coffee",
                        "quantity": "1 part"
                    },
                    {
                        "name": "Grain alcohol",
                        "quantity": "2 parts"
                    }
                ]
            },
            {
                drink_name: "Melya",
                drink_category: "Coffee / Tea",
                drink_glass: "Coffee mug",
                alcoholic: "Non alcoholic",
                drink_instructions: "Brew espresso. In a coffee mug, place 1 teaspoon of unsweetened powdered cocoa, then cover a teaspoon with honey and drizzle it into the cup. Stir while the coffee brews, this is the fun part. The cocoa seems to coat the honey without mixing, so you get a dusty, sticky mass that looks as though it will never mix. Then all at once, presto! It looks like dark chocolate sauce. Pour hot espresso over the honey, stirring to dissolve. Serve with cream.",
                drink_image: "https://www.thecocktaildb.com/images/media/drink/xwtptq1441247579.jpg",
                drink_tag: null,
                drink_video: null,
                drink_ingredients: [
                    {
                        "name": "Espresso",
                        "quantity": "Brewed"
                    },
                    {
                        "name": "Honey",
                        "quantity": "1 teaspoon"
                    },
                    {
                        "name": "Unsweetened cocoa powder",
                        "quantity": "1 teaspoon"
                    }
                ]
            },
            {
                drink_name: "Zorro",
                drink_category: "Coffee / Tea",
                drink_glass: "Coffee Mug",
                alcoholic: "Alcoholic",
                drink_instructions: "Add all ingredients and pour black coffee. Add whipped cream on top.",
                drink_image: "https://www.thecocktaildb.com/images/media/drink/kvvd4z1485621283.jpg",
                drink_tag: null,
                drink_video: null,
                drink_ingredients: [
                    {
                        "name": "Sambuca",
                        "quantity": "2 cl"
                    },
                    {
                        "name": "Baileys Irish Cream",
                        "quantity": "2 cl"
                    },
                    {
                        "name": "White Creme de Menthe",
                        "quantity": "2 cl"
                    }
                ]
            },
            {
                drink_name: "Zombie",
                drink_category: "Cocktail",
                drink_glass: "Hurricane glass",
                alcoholic: "Alcoholic",
                drink_instructions: "Blend at high speed for no more than 5 seconds. Pour into a glass, add ice cubes to fill, then add the garnish. *Donn’s mix: Bring 3 crushed cinnamon sticks, 1 cup of sugar and 1 cup of water to a boil, stirring until the sugar is dissolved. Simmer for 2 minutes, then remove from the heat and let sit for at least 2 hours before straining into a clean glass bottle. Then add 1 part of the syrup and 2 parts of fresh grapefruit juice together.",
                drink_image: "https://www.thecocktaildb.com/images/media/drink/2en3jk1509557725.jpg",
                drink_tag: null,
                drink_video: null,
                drink_ingredients: [
                    {
                        "name": "Rum",
                        "quantity": "1 1/2 oz"
                    },
                    {
                        "name": "Gold Rum",
                        "quantity": "1 1/2 oz"
                    },
                    {
                        "name": "151 Proof Rum",
                        "quantity": "1 oz"
                    },
                    {
                        "name": "Pernod",
                        "quantity": "1 tsp"
                    },
                    {
                        "name": "Grenadine",
                        "quantity": "1 tsp"
                    },
                    {
                        "name": "Lime Juice",
                        "quantity": "1 tsp"
                    },
                    {
                        "name": "Angostura Bitters",
                        "quantity": "1 drop"
                    }
                ]
            },
            {
                drink_name: "Orgasm",
                drink_category: "Ordinary Drink",
                drink_glass: "Cocktail glass",
                alcoholic: "Alcoholic",
                drink_instructions: "Shake all ingredients with ice, strain into a chilled cocktail glass, and serve.",
                drink_image: "https://www.thecocktaildb.com/images/media/drink/vr6kle1504886114.jpg",
                drink_tag: null,
                drink_video: null,
                drink_ingredients: [
                    {
                        "name": "Creme de Cacao",
                        "quantity": "1/2 oz white"
                    },
                    {
                        "name": "Amaretto",
                        "quantity": "1/2 oz"
                    },
                    {
                        "name": "Triple Sec",
                        "quantity": "1/2 oz"
                    },
                    {
                        "name": "Vodka",
                        "quantity": "1/2 oz"
                    },
                    {
                        "name": "Light Cream",
                        "quantity": "1 oz"
                    }
                ]
            },
            {
                drink_name: "Affair",
                drink_category: "Ordinary Drink",
                drink_glass: "Highball glass",
                alcoholic: "Alcoholic",
                drink_instructions: "Pour strawberry schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.",
                drink_image: "https://www.thecocktaildb.com/images/media/drink/h5za6y1582477994.jpg",
                drink_tag: null,
                drink_video: null,
                drink_ingredients: [
                    {
                        "name": "Strawberry Schnapps",
                        "quantity": "2 oz"
                    },
                    {
                        "name": "Orange Juice",
                        "quantity": "2 oz"
                    },
                    {
                        "name": "Cranberry Juice",
                        "quantity": "2 oz"
                    },
                    {
                        "name": "Club Soda",
                        "quantity": "Top with"
                    }
                ]
            },
        ], {});
    }),
    down: (queryInterface) => __awaiter(void 0, void 0, void 0, function* () {
        yield queryInterface.bulkDelete('drinks', {});
    }),
};
//# sourceMappingURL=DrinksSeeder.js.map