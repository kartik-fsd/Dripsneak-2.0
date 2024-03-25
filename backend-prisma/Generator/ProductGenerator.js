const router = require("express").Router();

const categories = ["men", "women", "kids", "unisex"];
// Enums
const Size = [
  "US_5",
  "US_6",
  "US_7",
  "US_8",
  "US_9",
  "US_10",
  "US_11",
  "US_12",
  "US_13",
];
const Style = ["CASUAL", "SPORTS", "ETHNIC", "FORMAL", "PARTY", "RIDING"];

const img_urls = [
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1710584638/jjwsgz8t9fa87mguc0jr.webp",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393457/image-kids-1_yviesq.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393494/image-kids-5_gbcypt.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393494/image-kids-3_lzzbon.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393494/image-kids-4_mgbp1v.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393494/image-kids-2_z5xiyu.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393538/image-kids-8_g0wzn3.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393456/image-kids-6_c0kfdw.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393538/image-kids-9_ebgquz.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393527/image-kids-7_ckccbg.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393496/image-kids-14_ltitck.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393495/image-kids-10_f6kbfx.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393534/image-kids-15_hc2qk3.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393533/image-kids-11_youzox.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393496/image-kids-13_apyl3r.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393495/image-kids-12_h0wpby.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393538/image-men-21_kykjgu.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393535/image-kids-16_syyor1.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393496/image-kids-18_zuiqa5.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393535/image-kids-17_gdjydw.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393460/image-kids-19_gtdfdz.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393538/image-men-20_tzzf01.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393529/image-men-4_e3hrwy.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393459/image-men-6_vsp03o.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393460/image-men-1_yngrkj.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393530/image-men-7_sxqeeb.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393529/image-men-5_lj58xj.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393535/image-men-9_cclciw.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393535/image-men-8_scpoae.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393527/image-men-12_jtuhxn.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393527/image-men-13_qkof6z.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393527/image-men-11_samgvs.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393455/image-men-10_biwtds.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393467/image-men-19_n9sseo.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393456/image-men-17_ajiahs.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393528/image-men-14_hm5zrm.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393499/image-men-18_tffjvx.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393528/image-men-15_ibobk7.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393528/image-men-16_plunul.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393499/image-men-20_gelxtj.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393537/image-men-23_mseede.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393537/image-men-22_ohmduh.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393537/image-men-24_md8dfo.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393536/image-men-25_wfofst.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393538/image-men-21_kykjgu.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393537/image-men-27_zooy8v.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393537/image-men-32_uxwawq.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393537/image-men-26_gav9nw.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393529/image-men-28_swsell.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393528/image-men-29_prja4e.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393537/image-men-30_ounfbw.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393502/image-men-31_vxocye.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393538/image-men-34_kb7mic.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393503/image-women-5_neh8eb.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393533/image-women-6_qefx7c.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393462/image-women-1_vjjhgv.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393535/image-women-2_afilsl.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393533/image-women-4_wgqgoe.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393504/image-women-7_dwadx9.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393532/image-women-9_iqohlw.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393532/image-women-12_reeqww.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393531/image-women-13_zvtmdz.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393530/image-women-16_iqb0ph.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393503/image-women-10_zkbo8y.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393504/image-women-11_tbjyng.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393530/image-women-14_kyhdka.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393529/image-women-15_afrpri.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393466/image-women-24_p6u0hf.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393536/image-women-18_ahsgzh.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393505/image-women-25_yl6irj.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393505/image-women-19_aancj2.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393462/image-women-22_a1j6ij.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393505/image-women-23_u3hbuf.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393534/image-women-26_nuegk2.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393534/image-women-27_rebam6.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393506/image-women-29_xjefdl.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393506/image-women-30_k5uoco.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393458/image-women-28_cy4edd.png",
  ],
  [
    "https://res.cloudinary.com/drinpsneak/image/upload/v1688393507/image-women-31_qq9ojq.png",
  ],
];
const descriptions = [
  "It’s an easy mistake. Even professional copywriters make it sometimes: writing product descriptions that simply describe your products. Why is it wrong? Because product descriptions need to sell your products, not just list bare bones product information. Let’s have a look at nine simple ways to persuade your web visitors with product descriptions that sell.",
  "These premium leather sneakers embody urban sophistication with their sleek design, high-quality craftsmanship, and attention to detail.",
  "These urban boots are crafted from luxurious suede and boast a modern silhouette, making them a versatile and stylish choice for any occasion.",
  "Combining cutting-edge technology with urban style, these running shoes feature advanced cushioning, breathable mesh, and a sleek, streamlined design.",
  "Made from supple, premium leather, these loafers exude elegance with their minimalist urban aesthetic and effortless slip-on design.",
  "These urban high-top sneakers feature a contemporary silhouette, luxurious materials, and impeccable stitching, making them a stylish choice for fashion-forward individuals.",
  "These urban slip-on sneakers combine fashion-forward design with premium materials, allowing for effortless style and comfort.",
  "Designed for the fashion-conscious urbanite, these sneakers feature bold colors, unique patterns, and premium materials, adding an eye-catching element to any outfit.",
  "Urban Desert Boots: Made from high-quality materials, these desert boots feature a rugged yet refined urban look, making them an ideal choice for the modern adventurer.",
  "These premium leather Chelsea boots offer a perfect blend of urban style and timeless elegance, with their sleek silhouette and comfortable fit.",
  "These sneakers pUSh the boundaries of urban footwear with their innovative materials, geometric patterns, and avant-garde design elements.",
  "These urban leather sandals embody simplicity and sophistication, with their clean lines, premium materials, and understated elegance.",
  "These ankle boots feature a sleek urban silhouette, premium leather, and a statement zipper detail, adding a modern edge to any outfit.",
  "These premium Oxford shoes feature a modern twist on a classic design, with urban-inspired details and impeccable craftsmanship.",
  "These urban leather loafers offer a refined and polished look, with their premium construction, sleek silhouette, and exquisite detailing.",
  "Combining urban aesthetics with a touch of edginess, these platform sneakers boast premium materials, unique textures, and a comfortable lift.",
  "These urban joggers combine sporty design elements with luxurious materials, creating a unique and stylish footwear option for urban explorers.",
  "These urban sneakers combine breathable knit fabric with premium accents, offering a modern and comfortable footwear option.",
  "Combining athletic functionality with urban aesthetics, these sneakers offer exceptional comfort, premium materials, and stylish design elements.",
  "These brogues feature a blend of classic charm and urban style, with their intricate perforations, luxurious leather, and urban-inspired finishes.",
  "These premium leather sneakers embody urban sophistication with their sleek design, high-quality craftsmanship, and attention to detail.",
  "These derbies embody urban sophistication with their clean lines, premium leather, and a modern twist on a timeless silhouette.",
  "Crafted from plush suede, these sneakers exude urban luxury with their refined silhouette, attention to detail, and superior comfort.",
  "These monk strap shoes redefine urban sophistication with their premium leather, sleek buckle closure, and contemporary silhouette.",
  "These ballet flats feature soft, premium leather, a refined urban silhouette, and a comfortable fit, offering a chic and versatile choice for urban dwellers.",
  "These sandals combine urban style with warm-weather comfort, featuring a cushioned footbed, premium materials, and a trendy streetwear-inspired design.",
  "Designed for urban explorers, these hiking boots feature a durable construction, rugged tread, and urban-inspired accents, ensuring both style and functionality.",
  "Blurring the lines between sneakers and boots, these hybrid shoes feature a sleek urban design, premium materials, and a comfortable fit.",
  "Perfect for summer, these slip-on espadrilles showcase an urban twist with their premium materials, jute-wrapped sole, and effortless style.",
  "Combining sporty functionality with urban aesthetics, these sandals feature adjustable straps, cushioned footbeds, and a sleek design, perfect for on-the-go comfort.",
  "These low-top sneakers showcase a minimalist urban aesthetic with their clean lines, premium materials, and versatile color options.",
  "These wingtip shoes exude urban elegance with their detailed broguing, premium leather, and a modern interpretation of a classic design.",
  "These Chelsea sneakers offer a unique blend of urban style and sporty appeal, featuring a slip-on design, premium materials, and a contemporary silhouette.",
  "Blending the elegance of oxford shoes with the comfort of sneakers, these urban sneakers offer a sleek design, premium materials, and versatile styling options.",
  "These sneaker wedges combine urban chic with added height, featuring a concealed wedge heel, premium materials, and a fashion-forward design.",
  "These derby boots offer a contemporary twist on a classic silhouette, combining premium leather, urban-inspired details, and a comfortable fit.",
  "Inspired by desert footwear, these sandals feature a blend of urban style and comfort, with premium materials, adjustable straps, and a cushioned footbed.",
  "These lightweight slip-on shoes feature a breathable knit upper, flexible sole, and a modern urban design, providing comfort and style for everyday wear.",
  "These penny loafers exude urban sophistication with their polished leather, refined silhouette, and timeless style, suitable for both casual and formal occasions.",
  "These boat shoes boast an urban twist with their slip-on design, premium leather, and a non-slip sole, offering both style and functionality.",
  "These sock-style sneakers redefine urban footwear with their sleek silhouette, stretch-knit fabric, and contemporary design elements.",
  "These wingtip boots combine urban edge with classic details, featuring premium leather, brogue accents, and a sturdy construction for all-day comfort.",
  "These platform sneakers make a bold urban statement with their chunky sole, premium materials, and a fashion-forward design that stands out from the crowd.",
  "These slingback flats offer a modern urban twist with their sleek silhouette, premium materials, and a comfortable yet chic design that pairs well with any outfit.",
  "These slip-on mules offer an effortless urban style with their premium materials, backless design, and a comfortable yet sophisticated look.",
  "These slip-on sandals combine urban flair with warm-weather comfort, featuring premium materials, a cushioned footbed, and a minimalist yet stylish design.",
  "These platform sandals exude urban chic with their elevated sole, premium materials, and a trendy design that adds a fashionable touch to your summer wardrobe.",
  "These chukka boots feature urban-inspired details, such as premium leather, contrasting stitching, and a versatile design suitable for both casual and dressier occasions.",
  "These wedge ankle boots elevate your urban style with their sleek silhouette, premium materials, and a comfortable wedge heel that adds height and sophistication.",
  "These sneaker booties fuse urban edge with a sporty vibe, featuring a high-top silhouette, premium materials, and bold design elements for a standout look.",
  "These driving moccasins offer a refined urban style with their premium leather, comfortable fit, and a versatile design suitable for both casual and dressier occasions.",
  "These slip-on loafers embody simplicity and urban sophistication, featuring clean lines, premium materials, and a sleek design that effortlessly elevates any outfit.",
  "These Chelsea sneakers blend urban style with athletic elements, featuring premium leather, elastic side panels, and a sporty yet sophisticated design.",
  "These slip-on oxfords combine urban sophistication with ease of wear, featuring premium leather, a sleek silhouette, and a convenient slip-on design for a polished yet effortless look.",
  "These platform oxford shoes elevate your urban style with their chunky sole, premium materials, and a contemporary design that adds height and fashion-forward appeal.",
  "These suede driving shoes combine urban sophistication with a touch of casual style, featuring premium suede, comfortable fit, and a versatile design.",
  "These high-top sneakers showcase a modern urban aesthetic with their breathable knit fabric, premium materials, and a streetwear-inspired design that stands out.",
  "These gladiator sandals offer a bold urban look with their premium leather construction, multiple straps, and a stylish lace-up design that adds a trendy edge to your outfit.",
  "These suede sneaker boots blend the versatility of sneakers with the warmth and style of boots, featuring premium suede, a mid-top silhouette, and a trendy urban design.",
  "These moccasin sneakers combine the comfort of moccasins with the urban style of sneakers, featuring premium leather, a sporty silhouette, and a versatile design suitable for various occasions.",
  "These slip-on sneaker mules offer a chic and effortless urban style with their premium materials, backless design, and a modern twist on a classic sneaker look.",
  "These slingback pumps elevate your urban elegance with their premium leather, sleek silhouette, and a comfortable heel height that adds sophistication to your outfits.",
  "These wedge sneakers add a touch of urban glamour with their metallic accents, premium materials, and a comfortable wedge heel that adds height and style.",
  " These T-strap sandals showcase a modern urban aesthetic with their premium materials, adjustable straps, and a stylish design that adds a touch of sophistication to your warm-weather looks.",
  "These Chelsea boots exude urban coolness with their premium leather, studded accents, and a sleek silhouette that effortlessly blends style and attitude.",
  "These sneaker boots combine the ruggedness of hiking boots with the urban appeal of sneakers, featuring durable materials, a grippy outsole, and a sporty design perfect for urban adventures.",
  "These slide sandals embody minimalist urban style with their premium leather, clean lines, and a simple yet refined design that effortlessly complements any outfit.",
  "These tassel loafers exude urban charm with their premium leather, classic silhouette, and stylish tassel detailing, making them a versatile choice for both casual and formal occasions.",
  "These moto boots exude urban edge with their rugged leather construction, buckle accents, and a sturdy design that combines style with durability.",
  "These platform sandals elevate your urban style with their chunky sole, premium materials, and a trendy design that adds height and fashion-forward flair to your summer wardrobe.",
  "These cutout booties offer a trendy urban look with their unique design, premium materials, and a modern silhouette that adds a fashionable touch to your footwear collection.",
  "These Oxford flats offer a stylish urban twist with their premium materials, lace-up closure, and a sleek silhouette that adds a touch of sophistication to any outfit.",
  "These sock booties showcase a modern urban aesthetic with their stretchy knit fabric, snug fit, and a sleek design that hugs your ankles for a trendy and comfortable look.",
  "These studded sneakers offer an edgy urban vibe with their premium materials, metallic stud accents, and a unique design that adds a rebellious touch to your footwear collection.",
  "These lace-up booties combine urban chic with a touch of ruggedness, featuring premium leather, a stacked heel, and a versatile design that pairs well with various outfits.",
  "These chunky heel mules offer an urban flair with their premium materials, comfortable block heel, and a contemporary design that adds a trendy touch to your footwear collection.",
  "These ballet flats exude urban sophistication with their premium leather, refined silhouette, and a timeless design that complements both casual and dressier looks.",
  "These suede espadrilles showcase a modern urban aesthetic with their premium materials, jute-wrapped sole, and a stylish design that effortlessly blends comfort and style.",
  "These slip-on sneaker boots combine the ease of slip-on shoes with the style of boots, featuring premium materials, a mid-top silhouette, and a fashion-forward design that effortlessly elevates your urban outfits.",
];
const names = [
  "Air max ",
  "Vanguard Elite",
  "Equinox Maxima",
  "Ascend TechFit",
  "Velocity Prime",
  "Nova Pro X",
  "Quantum Impact",
  "Precision Optima",
  "Elevation Ultra",
  "Apex Fusion X",
  "Synthesis Xcel",
  "Radiant Elite",
  "Momentum Prime",
  "Ignite Pro X",
  "Velocity Boost",
  "Luminary Evo",
  "Triumph Elite",
  "Optimum Stride",
  "Elite Reactor",
  "Empower Pro X",
  "Catalyst Hyper",
  "Fusion Element",
  "Innovate Optima",
  "Turbo Impact",
  "Evolve Pro X",
  "Aether Ultra",
  "Phoenix Fusion",
  "Luminous Elite",
  "Precision Glide",
  "Momentum Boost",
  "Harmony Xcel",
  "Quantum Evo",
  "Surge Pro X",
  "Fusion Prodigy",
  "Zenith Reactor",
  "Propel Prime",
  "Catalyst Hyperion",
  "Dynamo Stride",
  "Enigma Pro X",
  "Vanguard Accelerate",
  "Velocity Quantum",
  "Ascend Velocity",
  "Equinox Dynamo",
  "Precision Apex",
  "Nova Ignition",
  "Quantum Velocity",
  "Velocity Momentum X",
  "Apex Quantum X",
  "Elevation Dynamo X",
  "Radiant Momentum",
  "Ignite Precision",
  "Luminary Synthesis",
  "Synthesis Optimum",
  "Fusion Quantum",
  "Triumph Ignite",
  "Optimum Elite",
  "Empower Catalyst",
  "Catalyst Apex X",
  "Evolve Luminary",
  "Accelerate Equinox",
  "Turbo Quantum X",
  "Aether Elevation",
  "Surge Optimum",
  "Innovate Precision X",
  "Phoenix Apex",
  "Precision Surge",
  "Luminous Momentum X",
  "Catalyst Velocity X",
  "Momentum Elite",
  "Fusion Equinox",
  "Harmony Catalyst",
  "Enigma Nova X",
  "Zenith Ascend",
  "Vanguard Precision",
  "Nova Apex X",
  "Velocity Triumph",
  "Equinox Evolve",
  "Ascend Quantum",
  "Precision Stellar X",
];

// Function to generate random data
function generateMockupData() {
  const mockupData = [];
  let nameIndex = 0;
  let descIndex = 0;
  let imgIndex = 0;

  for (let i = 0; i < 79; i++) {
    const data = {
      category_name: getRandomCategory(),
      description: descriptions[descIndex],
      discounted_price: Math.floor(Math.random() * 10000) + 5000,
      img: img_urls[imgIndex],
      is_stock: Math.random() < 0.5,
      liked: Math.random() < 0.5,
      name: names[nameIndex],
      original_price: Math.floor(Math.random() * 10000) + 6000,
      trending: Math.random() < 0.5,
      style: Style[Math.floor(Math.random() * Style.length)],
      size: generateRandomSizes(),
      brand_name: names[nameIndex].split(" ")[0],
    };

    mockupData.push(data);

    // Update indices for next iteration
    nameIndex = (nameIndex + 1) % names.length;
    descIndex = (descIndex + 1) % descriptions.length;
    imgIndex = (imgIndex + 1) % img_urls.length;
  }

  return mockupData;
}

function getRandomCategory() {
  // Use Math.floor and Math.random to get a random index within the categories array length
  const randomIndex = Math.floor(Math.random() * categories.length);
  // Return the category at the random index
  return categories[randomIndex];
}

// Function to generate random sizes
function generateRandomSizes() {
  const sizes = [];
  const randomSizeCount = Math.floor(Math.random() * 13) + 1; // Random size count between 1 and 13

  for (let i = 0; i < randomSizeCount; i++) {
    sizes.push(Size[Math.floor(Math.random() * Size.length)]);
  }

  return sizes;
}

// Generate mockup data
const mockupData = generateMockupData();

// Convert to JSON
const jsonData = JSON.stringify(mockupData, null, 2);

// Logging JSON data
console.log(jsonData);
router.get("/mockdata", (req, res) => {
  // Generate mockup data
  const mockupData = generateMockupData();

  // Convert to JSON
  const jsonData = JSON.stringify(mockupData, null, 2);

  // Send JSON response
  res.json(mockupData);
});

module.exports = router;
