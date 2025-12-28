const products=[
  {
    "id": 1,
    "name": "Levi's Slim Fit Jeans",
    "price": 2499,
    "originalPrice": 3199,
    "discount": "22% OFF",
    "image": ["https://m.media-amazon.com/images/I/7171MiNF7hL._SX679_.jpg","https://m.media-amazon.com/images/I/51urghd4n0L._SX679_.jpg"],
    "rating": 4.2,
    "reviews": 128,
    "delivery": "Free Delivery",
    "inStock": true,
    "category": "Men",
    "brand": "Levi's",
    "subCategory": "Pants"
  },
  {
    "id": 2,
    "name": "Nike Sports T-Shirt",
    "price": 1799,
    "originalPrice": 2199,
    "discount": "18% OFF",
    "image": ["https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/526600/01/mod01/fnd/IND/fmt/png/VELOCITY-Men's-Running-Tee","https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/526600/01/mod02/fnd/IND/fmt/png/VELOCITY-Men's-Running-Tee"],
    "rating": 4.5,
    "reviews": 215,
    "delivery": "Chargeable",
    "inStock": true,
    "category": "Men",
    "brand": "Nike",
    "subCategory": "T-Shirt"
  },
  {
    "id": 3,
    "name": "Adidas Polo T-Shirt",
    "price": 1999,
    "originalPrice": 2599,
    "discount": "23% OFF",
    "image": ["https://m.media-amazon.com/images/I/91f1OqUalrL._SX569_.jpg","https://m.media-amazon.com/images/I/714emthUQuL._SY879_.jpg"],
    "rating": 4.1,
    "reviews": 174,
    "delivery": "Free Delivery",
    "inStock": true,
    "category": "Men",
    "brand": "Adidas",
    "subCategory": "T-Shirt"
  },
  {
    "id": 4,
    "name": "Allen Solly Formal Shirt",
    "price": 1899,
    "originalPrice": 2499,
    "discount": "24% OFF",
    "image": ["https://m.media-amazon.com/images/I/71AN3SM7r0L._SY741_.jpg","https://m.media-amazon.com/images/I/61LklWRsiPL._SY879_.jpg"],
    "rating": 4.3,
    "reviews": 98,
    "delivery": "Chargeable",
    "inStock": true,
    "category": "Men",
    "brand": "Allen Solly",
    "subCategory": "Shirt"
  },
  {
    "id": 5,
    "name": "U.S. Polo Assn. Casual Shirt",
    "price": 2199,
    "originalPrice": 2899,
    "discount": "24% OFF",
    "image": ["https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/528859/47/mod02/fnd/IND/fmt/png/CLOUDSPUN-Men%E2%80%99s-Ultra-Soft-Training-Polo","https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/528859/47/mod01/fnd/IND/fmt/png/CLOUDSPUN-Men%E2%80%99s-Ultra-Soft-Training-Polo"],
    "rating": 4.0,
    "reviews": 75,
    "delivery": "Free Delivery",
    "inStock": true,
    "category": "Men",
    "brand": "U.S. Polo Assn.",
    "subCategory": "Shirt"
  },
  {
    "id": 6,
    "name": "Wrangler Stretch Jeans",
    "price": 2799,
    "originalPrice": 3499,
    "discount": "20% OFF",
    "image": ["https://m.media-amazon.com/images/I/71QR7mvidgL._SX569_.jpg","https://m.media-amazon.com/images/I/71cnke-89AL._SX569_.jpg"],
    "rating": 4.4,
    "reviews": 189,
    "delivery": "Free Delivery",
    "inStock": true,
    "category": "Men",
    "brand": "Wrangler",
    "subCategory": "Pants"
  },
  {
    "id": 7,
    "name": "Zara Slim Fit Shirt",
    "price": 2499,
    "originalPrice": 3299,
    "discount": "24% OFF",
    "image": ["https://m.media-amazon.com/images/I/51CXF8-IpQL._SY741_.jpg","https://m.media-amazon.com/images/I/61GxCwr+YML._SY879_.jpg"],
    "rating": 4.6,
    "reviews": 145,
    "delivery": "Chargeable",
    "inStock": true,
    "category": "Men",
    "brand": "Zara",
    "subCategory": "Shirt"
  },
  {
    "id": 8,
    "name": "Tommy Hilfiger Casual T-Shirt",
    "price": 2699,
    "originalPrice": 3399,
    "discount": "21% OFF",
    "image": ["https://m.media-amazon.com/images/I/51Yy61H+PuL._SX679_.jpg","https://m.media-amazon.com/images/I/61NDkKTF1jL._SX679_.jpg"],
    "rating": 4.7,
    "reviews": 201,
    "delivery": "Free Delivery",
    "inStock": true,
    "category": "Men",
    "brand": "Tommy Hilfiger",
    "subCategory": "T-Shirt"
  },
  {
    "id": 9,
    "name": "Pepe Jeans Straight Fit",
    "price": 2399,
    "originalPrice": 2999,
    "discount": "20% OFF",
    "image": ["https://m.media-amazon.com/images/I/51dvr4kh5KL._SX679_.jpg","https://m.media-amazon.com/images/I/51mym20sFbL._SX679_.jpg"],
    "rating": 4.2,
    "reviews": 134,
    "delivery": "Chargeable",
    "inStock": true,
    "category": "Men",
    "brand": "Pepe Jeans",
    "subCategory": "Pants"
  },
  {
    "id": 10,
    "name": "Calvin Klein White Shirt",
    "price": 3499,
    "originalPrice": 4299,
    "discount": "19% OFF",
    "image": ["https://image.hm.com/assets/hm/47/e7/47e79233def23d027cb085039e9cffb2256e3ca3.jpg?imwidth=1260","https://m.media-amazon.com/images/I/51FJtFfjInL._SY741_.jpg","https://m.media-amazon.com/images/I/51zchMT6IvL._SY741_.jpg"],
    "rating": 4.8,
    "reviews": 167,
    "delivery": "Free Delivery",
    "inStock": true,
    "category": "Men",
    "brand": "Calvin Klein",
    "subCategory": "Shirt"
  },
  {
    "id": 11,
    "name": "Zara Floral Print Dress",
    "price": 4299,
    "originalPrice": 5499,
    "discount": "22% OFF",
    "image": [
      "https://m.media-amazon.com/images/I/71t7MD34dBL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/715pEa6r4ZL._SY879_.jpg"
    ],
    "rating": 4.6,
    "reviews": 192,
    "delivery": "Free Delivery",
    "inStock": true,
    "category": "Women",
    "brand": "Zara",
    "subCategory": "Dress"
  },
  {
    "id": 12,
    "name": "H&M Oversized Cotton Shirt",
    "price": 1999,
    "originalPrice": 2599,
    "discount": "23% OFF",
    "image": [
      "https://m.media-amazon.com/images/I/61Pdi0NYx1L._SY741_.jpg",
      "https://m.media-amazon.com/images/I/61E5VIGgY8L._SY741_.jpg"
    ],
    "rating": 4.7,
    "reviews": 250,
    "delivery": "Free Delivery",
    "inStock": true,
    "category": "Women",
    "brand": "H&M",
    "subCategory": "Shirt"
  },
  {
    "id": 13,
    "name": "Mango High-Waist Trousers",
    "price": 3499,
    "originalPrice": 4299,
    "discount": "19% OFF",
    "image": [
      "https://m.media-amazon.com/images/I/51nNATlsyGL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/41pEET3dtGL._SX679_.jpg"
    ],
    "rating": 4.5,
    "reviews": 143,
    "delivery": "Free Delivery",
    "inStock": true,
    "category": "Women",
    "brand": "Mango",
    "subCategory": "Pant"
  },
  {
    "id": 14,
    "name": "Levi's Slim Fit Jeans",
    "price": 3799,
    "originalPrice": 4599,
    "discount": "18% OFF",
    "image": [
      "https://m.media-amazon.com/images/I/71BLs7gxevL._SY879_.jpg",
      "https://m.media-amazon.com/images/I/91QJeFKlZzL._SX569_.jpg"
    ],
    "rating": 4.8,
    "reviews": 210,
    "delivery": "Free Delivery",
    "inStock": true,
    "category": "Women",
    "brand": "Levi's",
    "subCategory": "Jeans"
  },
  {
    "id": 15,
    "name": "Forever 21 Crop Top",
    "price": 1299,
    "originalPrice": 1799,
    "discount": "28% OFF",
    "image": [
      "https://m.media-amazon.com/images/I/71-DdbnszlL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/71k5SUkiLUL._SY879_.jpg"
    ],
    "rating": 4.4,
    "reviews": 96,
    "delivery": "Free Delivery",
    "inStock": true,
    "category": "Women",
    "brand": "Forever 21",
    "subCategory": "Top"
  },
  {
    "id": 16,
    "name": "Gucci Silk Blouse",
    "price": 69999,
    "originalPrice": 84999,
    "discount": "18% OFF",
    "image": [
      "https://m.media-amazon.com/images/I/71hwqKtpzxL._SY879_.jpg",
      "https://m.media-amazon.com/images/I/71cZ06bxJtL._SY741_.jpg"
    ],
    "rating": 4.9,
    "reviews": 78,
    "delivery": "Premium Delivery",
    "inStock": true,
    "category": "Women",
    "brand": "Gucci",
    "subCategory": "Blouse"
  },
  {
    "id": 17,
    "name": "Nike Women’s Sports Jacket",
    "price": 5499,
    "originalPrice": 6299,
    "discount": "13% OFF",
    "image": [
      "https://m.media-amazon.com/images/I/71ujS1kDI3L._SY879_.jpg",
      "https://m.media-amazon.com/images/I/710Y6WciKdL._SX569_.jpg"
    ],
    "rating": 4.6,
    "reviews": 135,
    "delivery": "Free Delivery",
    "inStock": true,
    "category": "Women",
    "brand": "Nike",
    "subCategory": "Jacket"
  },
  {
    "id": 18,
    "name": "Adidas Originals Hoodie",
    "price": 3799,
    "originalPrice": 4499,
    "discount": "16% OFF",
    "image": [
      "https://m.media-amazon.com/images/I/81jj+WM9qmL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/81RA05YPf6L._SX679_.jpg"
    ],
    "rating": 4.7,
    "reviews": 180,
    "delivery": "Free Delivery",
    "inStock": true,
    "category": "Women",
    "brand": "Adidas",
    "subCategory": "Hoodie"
  },
  {
    "id": 19,
    "name": "H&M Kids Cotton T-shirt",
    "price": 799,
    "originalPrice": 999,
    "discount": "20% OFF",
    "image": [
      "https://m.media-amazon.com/images/I/71Ct5YyoRAL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61qi+hZFiIL._SX569_.jpg"
    ],
    "rating": 4.5,
    "reviews": 90,
    "delivery": "Free Delivery",
    "inStock": true,
    "category": "Kids",
    "brand": "H&M",
    "subCategory": "T-shirt"
  },
  {
    "id": 20,
    "name": "Carter's Baby Girl Dress",
    "price": 1499,
    "originalPrice": 1999,
    "discount": "25% OFF",
    "image": [
      "https://m.media-amazon.com/images/I/51Rp6KpqS5L._SY879_.jpg",
      "https://m.media-amazon.com/images/I/61TTTTpF7vL._SX679_.jpg"
    ],
    "rating": 4.7,
    "reviews": 120,
    "delivery": "Free Delivery",
    "inStock": true,
    "category": "Kids",
    "brand": "Carter's",
    "subCategory": "Dress"
  },
  {
    "id": 21,
    "name": "Nike Kids Sports Shoes",
    "price": 2999,
    "originalPrice": 3799,
    "discount": "21% OFF",
    "image": [
      "https://m.media-amazon.com/images/I/71nSUruxgJL._SY625_.jpg",
      "https://m.media-amazon.com/images/I/61qu02LHoUL._SY625_.jpg"
    ],
    "rating": 4.8,
    "reviews": 210,
    "delivery": "Free Delivery",
    "inStock": true,
    "category": "Kids",
    "brand": "Nike",
    "subCategory": "Shoes"
  },
  {
    "id": 22,
    "name": "Adidas Kids Hoodie",
    "price": 1999,
    "originalPrice": 2499,
    "discount": "20% OFF",
    "image": [
      "https://m.media-amazon.com/images/I/516NzXKsdxL._SY879_.jpg",
      "https://m.media-amazon.com/images/I/612PmQJ6DWL._SY741_.jpg"
    ],
    "rating": 4.6,
    "reviews": 150,
    "delivery": "Free Delivery",
    "inStock": true,
    "category": "Kids",
    "brand": "Adidas",
    "subCategory": "Hoodie"
  },
  {
    "id": 23,
    "name": "Gap Kids Denim Jacket",
    "price": 2499,
    "originalPrice": 3299,
    "discount": "24% OFF",
    "image": [
      "https://m.media-amazon.com/images/I/71Zr5jAJ9JL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71gIvZyCWmL._SX569_.jpg"
    ],
    "rating": 4.7,
    "reviews": 130,
    "delivery": "Free Delivery",
    "inStock": true,
    "category": "Kids",
    "brand": "GAP",
    "subCategory": "Jacket"
  },
  {
    "id": 24,
    "name": "Nike Sports Backpack",
    "price": 2999,
    "originalPrice": 3999,
    "discount": "25% OFF",
    "image": [
      "https://m.media-amazon.com/images/I/61yuZgcmgbL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/31QyD9jZrnL._SY300_SX300_QL70_FMwebp_.jpg"
    ],
    "rating": 4.6,
    "reviews": 210,
    "delivery": "Free Delivery",
    "inStock": true,
    "category": "Bags",
    "brand": "Nike",
    "subCategory": "Backpack"
  },
  {
    "id": 25,
    "name": "Adidas Classic Duffel Bag",
    "price": 3499,
    "originalPrice": 4499,
    "discount": "22% OFF",
    "image": [
      "https://m.media-amazon.com/images/I/71UkmLSj1HL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/31mm-1EmE4L._SY300_SX300_QL70_FMwebp_.jpg"
    ],
    "rating": 4.5,
    "reviews": 175,
    "delivery": "Free Delivery",
    "inStock": true,
    "category": "Bags",
    "brand": "Adidas",
    "subCategory": "Duffel Bag"
  },
  {
    "id": 26,
    "name": "Tommy Hilfiger Laptop Bag",
    "price": 5599,
    "originalPrice": 6999,
    "discount": "20% OFF",
    "image": [
      "https://m.media-amazon.com/images/I/610tqjEpDUL._SY695_.jpg",
      "https://m.media-amazon.com/images/I/61Fa-NLfwYL._SY695_.jpg"
    ],
    "rating": 4.7,
    "reviews": 120,
    "delivery": "Free Delivery",
    "inStock": true,
    "category": "Bags",
    "brand": "Tommy Hilfiger",
    "subCategory": "Laptop Bag"
  },
  {
    "id": 27,
    "name": "Fossil Women’s Leather Tote",
    "price": 7999,
    "originalPrice": 9999,
    "discount": "20% OFF",
    "image": [
      "https://m.media-amazon.com/images/I/31R0W11vYpL._SY695_.jpg",
      "https://m.media-amazon.com/images/I/41oXaZmuq1L._SY625_.jpg"
    ],
    "rating": 4.8,
    "reviews": 250,
    "delivery": "Free Delivery",
    "inStock": true,
    "category": "Bags",
    "brand": "Fossil",
    "subCategory": "Tote Bag"
  },
  {
    "id": 28,
    "name": "Michael Kors Jet Set Crossbody",
    "price": 9999,
    "originalPrice": 12999,
    "discount": "23% OFF",
    "image": [
      "https://m.media-amazon.com/images/I/71IXpqm8oUL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/41KzDm7ITOL._SY300_SX300_QL70_FMwebp_.jpg"
    ],
    "rating": 4.9,
    "reviews": 340,
    "delivery": "Free Delivery",
    "inStock": true,
    "category": "Bags",
    "brand": "Michael Kors",
    "subCategory": "Crossbody"
  },
  {
    "id": 29,
    "name": "Apple iPhone 15 Pro",
    "price": 129900,
    "originalPrice": 139900,
    "discount": "7% OFF",
    "image": [
      "https://m.media-amazon.com/images/I/51brdXeugJL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/31KxpX7Xk7L._SY300_SX300_QL70_FMwebp_.jpg",
    ],
    "rating": 4.9,
    "reviews": 520,
    "delivery": "Free Delivery",
    "inStock": true,
    "category": "Electronics",
    "brand": "Apple",
    "subCategory": "Smartphone"
  },
  {
    "id": 30,
    "name": "Samsung Galaxy S24 Ultra",
    "price": 119999,
    "originalPrice": 129999,
    "discount": "8% OFF",
    "image": [
      "https://m.media-amazon.com/images/I/71Nwtop9jtL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81dmStBfSvL._SX679_.jpg"
    ],
    "rating": 4.8,
    "reviews": 450,
    "delivery": "Free Delivery",
    "inStock": true,
    "category": "Electronics",
    "brand": "Samsung",
    "subCategory": "Smartphone"
  },
  {
    "id": 31,
    "name": "Sony WH-1000XM5 Wireless Headphones",
    "price": 29990,
    "originalPrice": 34990,
    "discount": "14% OFF",
    "image": [
      "https://m.media-amazon.com/images/I/5173YF8RlaL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/717LQ01YYwL._SX522_.jpg"
    ],
    "rating": 4.7,
    "reviews": 390,
    "delivery": "Free Delivery",
    "inStock": true,
    "category": "Electronics",
    "brand": "Sony",
    "subCategory": "Headphones"
  },
  {
    "id": 32,
    "name": "Dell XPS 13 Laptop",
    "price": 134990,
    "originalPrice": 149990,
    "discount": "10% OFF",
    "image": [
      "https://m.media-amazon.com/images/I/71H9R4OoBOL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/811OUsyMFBL._SX679_.jpg"
    ],
    "rating": 4.6,
    "reviews": 220,
    "delivery": "Free Delivery",
    "inStock": true,
    "category": "Electronics",
    "brand": "Dell",
    "subCategory": "Laptop"
  },
  {
    "id": 33,
    "name": "Wilson Pro Staff Tennis Racket",
    "price": 14999,
    "originalPrice": 16999,
    "discount": "12% OFF",
    "image": [
      "https://m.media-amazon.com/images/I/71lTPMw3bhL._SX679_.jpg","https://m.media-amazon.com/images/I/31b9WWp7yNL._SY300_SX300_QL70_FMwebp_.jpg"
    ],
    "rating": 4.8,
    "reviews": 85,
    "delivery": "Free Delivery",
    "inStock": true,
    "category": "Sports",
    "brand": "Wilson",
    "subCategory": "Tennis Racket"
  },
  {
    "id": 34,
    "name": "SG RSD Cricket Bat",
    "price": 7499,
    "originalPrice": 8999,
    "discount": "17% OFF",
    "image": [
      "https://m.media-amazon.com/images/I/41jnYJNsCNL._SX679_.jpg","https://m.media-amazon.com/images/I/31qfAzQjCXL._SY300_SX300_QL70_FMwebp_.jpg"
    ],
    "rating": 4.5,
    "reviews": 120,
    "delivery": "Free Delivery",
    "inStock": true,
    "category": "Sports",
    "brand": "SG",
    "subCategory": "Cricket Bat"
  },
  {
    "id": 35,
    "name": "L'Oreal Paris Revitalift Face Cream",
    "price": 799,
    "originalPrice": 999,
    "discount": "20% OFF",
    "image": [
      "https://m.media-amazon.com/images/I/51MS4k2nCQL._SX522_.jpg","https://m.media-amazon.com/images/I/51MS4k2nCQL._SX522_.jpg"
    ],
    "rating": 4.6,
    "reviews": 520,
    "delivery": "Free Delivery",
    "inStock": true,
    "category": "Beauty",
    "brand": "L'Oreal Paris",
    "subCategory": "Face Cream"
  },
  {
    "id": 36,
    "name": "Maybelline New York Fit Me Foundation",
    "price": 499,
    "originalPrice": 599,
    "discount": "17% OFF",
    "image": [
      "https://m.media-amazon.com/images/I/319cGbkUHNL._SY300_SX300_QL70_FMwebp_.jpg","https://m.media-amazon.com/images/I/81eC1rjWKrL._SX522_.jpg"
    ],
    "rating": 4.5,
    "reviews": 430,
    "delivery": "Free Delivery",
    "inStock": true,
    "category": "Beauty",
    "brand": "Maybelline",
    "subCategory": "Foundation"
  },
  {
    "id": 37,
    "name": "Lakme Absolute Lipstick",
    "price": 599,
    "originalPrice": 699,
    "discount": "14% OFF",
    "image": ["https://m.media-amazon.com/images/I/31Uy5S8lTOL._SY300_SX300_QL70_FMwebp_.jpg",
      "https://m.media-amazon.com/images/I/611WTt887cL._SX522_.jpg"
    ],
    "rating": 4.4,
    "reviews": 320,
    "delivery": "Free Delivery",
    "inStock": true,
    "category": "Beauty",
    "brand": "Lakme",
    "subCategory": "Lipstick"
  },
   {
    "id": 38,
    "name": "Fossil Men's Leather Wallet",
    "price": 1299,
    "originalPrice": 1599,
    "discount": "19% OFF",
    "image": [
      "https://m.media-amazon.com/images/I/81X6R8LQ+sL._SX679_.jpg","https://m.media-amazon.com/images/I/41Z2EwHtwGL._SY300_SX300_QL70_FMwebp_.jpg"
    ],
    "rating": 4.7,
    "reviews": 210,
    "delivery": "Free Delivery",
    "inStock": true,
    "category": "Accessories",
    "brand": "Fossil",
    "subCategory": "Wallet"
  },
  {
    "id": 39,
    "name": "Ray-Ban Wayfarer Sunglasses",
    "price": 5999,
    "originalPrice": 6999,
    "discount": "14% OFF",
    "image": [
      "https://m.media-amazon.com/images/I/513wNlDUOEL._SX679_.jpg","https://m.media-amazon.com/images/I/51hx+HRfQHL._SX679_.jpg"
    ],
    "rating": 4.8,
    "reviews": 450,
    "delivery": "Free Delivery",
    "inStock": true,
    "category": "Accessories",
    "brand": "Ray-Ban",
    "subCategory": "Sunglasses"
  },
  {
    "id": 40,
    "name": "Swarovski Crystal Necklace",
    "price": 8999,
    "originalPrice": 10999,
    "discount": "18% OFF",
    "image": [
      "https://m.media-amazon.com/images/I/51ih2sra7cL._SY695_.jpg"
    ],
    "rating": 4.9,
    "reviews": 312,
    "delivery": "Free Delivery",
    "inStock": true,
    "category": "Jewellery",
    "brand": "Swarovski",
    "subCategory": "Necklace"
  },
  {
    "id": 41,
    "name": "Pandora Charm Bracelet",
    "price": 4999,
    "originalPrice": 5999,
    "discount": "17% OFF",
    "image": [
      "https://m.media-amazon.com/images/I/616CiYWcTKL._SY695_.jpg","https://m.media-amazon.com/images/I/61uUtOk1eNL._SY695_.jpg"
    ],
    "rating": 4.8,
    "reviews": 258,
    "delivery": "Free Delivery",
    "inStock": true,
    "category": "Jewellery",
    "brand": "Pandora",
    "subCategory": "Bracelet"
  },
  {
    "id": 42,
    "name": "Tanishq Gold Earrings",
    "price": 12999,
    "originalPrice": 14999,
    "discount": "13% OFF",
    "image": [
      "https://m.media-amazon.com/images/I/61iWS2NQEcL._SY625_.jpg","https://m.media-amazon.com/images/I/41uL4KOAsGL._SY625_.jpg"
    ],
    "rating": 4.7,
    "reviews": 198,
    "delivery": "Free Delivery",
    "inStock": true,
    "category": "Jewellery",
    "brand": "Tanishq",
    "subCategory": "Earrings"
  },
  {
    "id": 43,
    "name": "CaratLane Diamond Ring",
    "price": 24999,
    "originalPrice": 29999,
    "discount": "17% OFF",
    "image": [
      "https://m.media-amazon.com/images/I/715WBSo5UXL._SY625_.jpg","https://m.media-amazon.com/images/I/51xUhi4KUVL._SY695_.jpg"
    ],
    "rating": 4.9,
    "reviews": 145,
    "delivery": "Free Delivery",
    "inStock": true,
    "category": "Jewellery",
    "brand": "CaratLane",
    "subCategory": "Ring"
  },
  {
    "id": 44,
    "name": "Voylla Pendant Necklace",
    "price": 2999,
    "originalPrice": 3999,
    "discount": "25% OFF",
    "image": [
      "https://m.media-amazon.com/images/I/41e3rUdVKIL._SY695_.jpg","https://m.media-amazon.com/images/I/51z2LdEuWJL._SY625_.jpg"
    ],
    "rating": 4.6,
    "reviews": 312,
    "delivery": "Free Delivery",
    "inStock": true,
    "category": "Jewellery",
    "brand": "Voylla",
    "subCategory": "Pendant"
  },
  {
    "id": 45,
    "name": "Organic India Tulsi Green Tea",
    "price": 499,
    "originalPrice": 599,
    "discount": "17% OFF",
    "image": [
      "https://m.media-amazon.com/images/I/41FX+-X7PYL._SY300_SX300_QL70_FMwebp_.jpg","https://m.media-amazon.com/images/I/614cdV5y0cL._SX679_.jpg"
    ],
    "rating": 4.7,
    "reviews": 421,
    "delivery": "Free Delivery",
    "inStock": true,
    "category": "Grocery",
    "brand": "Organic India",
    "subCategory": "Tea"
  },
  {
    "id": 46,
    "name": "Amul Pure Ghee",
    "price": 699,
    "originalPrice": 799,
    "discount": "13% OFF",
    "image": [
      "https://m.media-amazon.com/images/I/31q3Vwvu5fL._SY300_SX300_QL70_FMwebp_.jpg"
    ],
    "rating": 4.8,
    "reviews": 312,
    "delivery": "Free Delivery",
    "inStock": true,
    "category": "Grocery",
    "brand": "Amul",
    "subCategory": "Ghee"
  },
  {
    "id": 47,
    "name": "Kellogg's Corn Flakes",
    "price": 249,
    "originalPrice": 299,
    "discount": "17% OFF",
    "image": [
      "https://m.media-amazon.com/images/I/51UnTmEHeYL._SY300_SX300_QL70_FMwebp_.jpg","https://m.media-amazon.com/images/I/914moYBqokL._SX679_.jpg"
    ],
    "rating": 4.6,
    "reviews": 284,
    "delivery": "Free Delivery",
    "inStock": true,
    "category": "Grocery",
    "brand": "Kellogg's",
    "subCategory": "Cereal"
  },
  {
    "id": 48,
    "name": "LEGO Classic Creative Brick Box",
    "price": 3499,
    "originalPrice": 3999,
    "discount": "13% OFF",
    "image": [
      "https://m.media-amazon.com/images/I/71wseC2RPlL._SX522_.jpg","https://m.media-amazon.com/images/I/51ooqeyUaeL._SY300_SX300_QL70_FMwebp_.jpg"
    ],
    "rating": 4.9,
    "reviews": 512,
    "delivery": "Free Delivery",
    "inStock": true,
    "category": "Toys",
    "brand": "LEGO",
    "subCategory": "Building Blocks"
  },
  {
    "id": 49,
    "name": "Hot Wheels Super Loop Track Set",
    "price": 1499,
    "originalPrice": 1799,
    "discount": "17% OFF",
    "image": [
      "https://m.media-amazon.com/images/I/41SLZ0Y3OaL._SY300_SX300_QL70_FMwebp_.jpg","https://m.media-amazon.com/images/I/71nHlp2oKmL._SX522_.jpg"
    ],
    "rating": 4.8,
    "reviews": 392,
    "delivery": "Free Delivery",
    "inStock": true,
    "category": "Toys",
    "brand": "Mattel",
    "subCategory": "Car Track"
  },
    {
    "id": 50,
    "name": "Atomic Habits by James Clear",
    "price": 499,
    "originalPrice": 699,
    "discount": "29% OFF",
    "image": [
      "https://m.media-amazon.com/images/I/81F90H7hnML._SY466_.jpg"
    ],
    "rating": 4.9,
    "reviews": 1582,
    "delivery": "Free Delivery",
    "inStock": true,
    "category": "Books",
    "brand": "Penguin Random House",
    "subCategory": "Self-Help"
  },
  {
    "id": 51,
    "name": "The Alchemist by Paulo Coelho",
    "price": 399,
    "originalPrice": 499,
    "discount": "20% OFF",
    "image": [
      "https://m.media-amazon.com/images/I/41vZStUZ-cL._SX342_SY445_FMwebp_.jpg"
    ],
    "rating": 4.8,
    "reviews": 1345,
    "delivery": "Free Delivery",
    "inStock": true,
    "category": "Books",
    "brand": "HarperOne",
    "subCategory": "Fiction"
  },
  {
    "id": 52,
    "name": "Harry Potter and the Sorcerer's Stone",
    "price": 599,
    "originalPrice": 699,
    "discount": "14% OFF",
    "image": [
      "https://m.media-amazon.com/images/I/81q77Q39nEL._SY466_.jpg"
    ],
    "rating": 4.9,
    "reviews": 2021,
    "delivery": "Free Delivery",
    "inStock": true,
    "category": "Books",
    "brand": "Bloomsbury",
    "subCategory": "Fantasy"
  },
  {
    "id": 53,
    "name": "Nike Air Force 1 '07 Men's Shoes",
    "price": 8499,
    "originalPrice": 9995,
    "discount": "15% OFF",
    "image": [
      "https://m.media-amazon.com/images/I/61E4lTWr9tL._SX695_.jpg","https://m.media-amazon.com/images/I/61Mu2n8dnFL._SX625_.jpg"
    ],
    "rating": 4.8,
    "reviews": 1892,
    "delivery": "Free Delivery",
    "inStock": true,
    "category": "Men",
    "brand": "Nike",
    "subCategory": "Shoes"
  },
  {
    "id": 54,
    "name": "Adidas Originals Stan Smith Women's Shoes",
    "price": 6999,
    "originalPrice": 8999,
    "discount": "22% OFF",
    "image": [
      "https://m.media-amazon.com/images/I/71OD-o3R55L._SY695_.jpg","https://m.media-amazon.com/images/I/814iTV6Qb1L._SY625_.jpg"
    ],
    "rating": 4.7,
    "reviews": 1423,
    "delivery": "Free Delivery",
    "inStock": true,
    "category": "Women",
    "brand": "Adidas",
    "subCategory": "Shoes"
  },
  {
    "id": 55,
    "name": "Dior Sauvage Eau de Toilette for Men",
    "price": 8999,
    "originalPrice": 10500,
    "discount": "14% OFF",
    "image": [
      "https://m.media-amazon.com/images/I/61udnrQ5WuL._SY879_.jpg","https://m.media-amazon.com/images/I/61rnEFU8VWL._SX522_.jpg"
    ],
    "rating": 4.9,
    "reviews": 3210,
    "delivery": "Free Delivery",
    "inStock": true,
    "category": "Men",
    "brand": "Dior",
    "subCategory": "Perfume"
  },
  {
    "id": 56,
    "name": "Fossil Grant Chronograph Men's Watch",
    "price": 10499,
    "originalPrice": 12995,
    "discount": "19% OFF",
    "image": [
      "https://m.media-amazon.com/images/I/61flh2SVHqL._SX522_.jpg","https://m.media-amazon.com/images/I/517r6LYiw0L._SX522_.jpg"
    ],
    "rating": 4.6,
    "reviews": 874,
    "delivery": "Free Delivery",
    "inStock": true,
    "category": "Men",
    "brand": "Fossil",
    "subCategory": "Watch"
  },
  {
    "id": 57,
    "name": "Michael Kors Parker Rose Gold Women's Watch",
    "price": 12499,
    "originalPrice": 14995,
    "discount": "17% OFF",
    "image": [
     "https://m.media-amazon.com/images/I/41ZCSDNueML._SY300_SX300_QL70_FMwebp_.jpg","https://m.media-amazon.com/images/I/51rFZdMUx9L._SX522_.jpg"
    ],
    "rating": 4.8,
    "reviews": 1320,
    "delivery": "Free Delivery",
    "inStock": true,
    "category": "Women",
    "brand": "Michael Kors",
    "subCategory": "Watch"
  }
]

export default products