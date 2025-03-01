const clothingDB = {
    products: [
      {
        id: 1,
        name: "Ankara Peplum Top",
        category: "tops",
        price: 15000,
        sizes: ["S", "M", "L", "XL"],
        color: ["orange", "blue", "green"],
        stitchPattern: "princess cut",
        image: "/image1.png",
        inStock: true
      },
      {
        id: 2,
        name: "High-Waist Pencil Skirt",
        category: "skirts",
        price: 12000,
        sizes: ["S", "M", "L"],
        color: ["black", "navy"],
        stitchPattern: "dart fitted",
        image: "/image1.png",
        inStock: true
      },
      {
        id: 3,
        name: "Lace Evening Gloves",
        category: "accessories",
        price: 5000,
        sizes: ["S", "M"],
        color: ["white", "black", "beige"],
        stitchPattern: "floral lace",
        image: "/image1.png",
        inStock: true
      },
      {
        id: 4,
        name: "Adire Maxi Dress",
        category: "dresses",
        price: 25000,
        sizes: ["S", "M", "L", "XL"],
        color: ["indigo", "brown"],
        stitchPattern: "empire waist",
        image: "/image1.png",
        inStock: true
    },{
        id: 5,
        name: "Palazzo Pants",
        category: "bottoms",
        price: 13000,
        sizes: ["S", "M", "L"],
        color: ["white", "black", "navy"],
        stitchPattern: "wide leg",
        image: "/image1.png",
        inStock: false
      },
      {
        id: 6,
        name: "Embroidered Headwrap",
        category: "accessories",
        price: 8000,
        sizes: ["one size"],
        color: ["gold", "silver", "bronze"],
        stitchPattern: "beaded embroidery",
        image: "/image1.png",
        inStock: true
      },
      {
        id: 7,
        name: "Cropped Blazer",
        category: "tops",
        price: 20000,
        sizes: ["S", "M", "L"],
        color: ["burgundy", "forest green"],
        stitchPattern: "tailored",
        image: "/image1.png",
        inStock: true
      },
      {
        id: 8,
        name: "A-Line Midi Skirt",
        category: "skirts",
        price: 15000,
        sizes: ["S", "M", "L", "XL"],
        color: ["floral print", "polka dot"],
        stitchPattern: "pleated",
        image: "/image1.png",
        inStock: true
      },
      {
        id: 9,
        name: "Sequin Evening Top",
        category: "tops",
        price: 18000,
        sizes: ["S", "M", "L"],
        color: ["silver", "gold", "rose gold"],
        stitchPattern: "fitted",
        image: "/image1.png",
        inStock: true
      },
      {
        id: 10,
        name: "Leather Fingerless Gloves",
        category: "accessories",
        price: 7000,
        sizes: ["S", "M", "L"],
        color: ["black", "brown"],
        stitchPattern: "quilted",
        image: "/image1.png",
        inStock: true
      },
      {
        id: 11,
        name: "Wrap Dress",
        category: "dresses",
        price: 22000,
        sizes: ["S", "M", "L", "XL"],
        color: ["red", "navy", "green"],
        stitchPattern: "wrap style",
        image: "/image1.png",
        inStock: true
      },
      {
        id: 12,
        name: "Cargo Pants",
        category: "bottoms",
        price: 16000,
        sizes: ["S", "M", "L"],
        color: ["khaki", "olive", "black"],
        stitchPattern: "utility",
        image: "/image1.png",
        inStock: true
      },
      {
        id: 13,
        name: "Lace Trimmed Camisole",
        category: "tops",
        price: 9000,
        sizes: ["S", "M", "L"],
        color: ["white", "black", "pink"],
        stitchPattern: "lace trim",
        image: "/image1.png",
        inStock: true
      },
      {
        id: 14,
        name: "Pleated Mini Skirt",
        category: "skirts",
        price: 11000,
        sizes: ["S", "M", "L"],
        color: ["plaid", "solid black", "navy"],
        stitchPattern: "knife pleats",
        image: "/image1.png",
        inStock: true
      },
      {
        id: 15,
        name: "Knit Mittens",
        category: "accessories",
        price: 4000,
        sizes: ["S", "M"],
        color: ["cream", "gray", "burgundy"],
        stitchPattern: "cable knit",
        image: "/image1.png",
        inStock: true
      }
    ],
    
    featuredItems: [
      {
        id: 1,
        name: "Ankara Peplum Top",
        category: "tops",
        price: 15000,
        sizes: ["S", "M", "L", "XL"],
        color: ["orange", "blue", "green"],
        stitchPattern: "princess cut",
        image: "/image1.png",
        inStock: true,
        featured: true
      },
      {
        id: 4,
        name: "Adire Maxi Dress",
        category: "dresses",
        price: 25000,
        sizes: ["S", "M", "L", "XL"],
        color: ["indigo", "brown"],
        stitchPattern: "empire waist",
        image: "/image1.png",
        inStock: true,
        featured: true
      },
      {
        id: 7,
        name: "Cropped Blazer",
        category: "tops",
        price: 20000,
        sizes: ["S", "M", "L"],
        color: ["burgundy", "forest green"],
        stitchPattern: "tailored",
        image: "/image1.png",
        inStock: true,
        featured: true
      },
      {
        id: 9,
        name: "Sequin Evening Top",
        category: "tops",
        price: 18000,
        sizes: ["S", "M", "L"],
        color: ["silver", "gold", "rose gold"],
        stitchPattern: "fitted",
        image: "/image1.png",
        inStock: true,
        featured: true
      },
      {
        id: 11,
        name: "Wrap Dress",
        category: "dresses",
        price: 22000,
        sizes: ["S", "M", "L", "XL"],
        color: ["red", "navy", "green"],
        stitchPattern: "wrap style",
        image: "/image1.png",
        inStock: true,
        featured: true
      },
      {
        id: 8,
        name: "A-Line Midi Skirt",
        category: "skirts",
        price: 15000,
        sizes: ["S", "M", "L", "XL"],
        color: ["floral print", "polka dot"],
        stitchPattern: "pleated",
        image: "/image1.png",
        inStock: true,
        featured: true
      },
      {
        id: 6,
        name: "Embroidered Headwrap",
        category: "accessories",
        price: 8000,
        sizes: ["one size"],
        color: ["gold", "silver", "bronze"],
        stitchPattern: "beaded embroidery",
        image: "/image1.png",
        inStock: true,
        featured: true
      }
    ]
  };
  
  export default clothingDB;