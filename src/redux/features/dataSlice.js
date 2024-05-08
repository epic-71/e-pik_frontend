import { createSlice } from "@reduxjs/toolkit";

const data = [
  {
    id: 123,
    sellerId: 456,
    name: "Redmi K20 pro",
    brand: "Xiomi",
    model: "SM-S907B",
    storageCapacity: 256,
    condition: "Excellent",
    description:
      "Excellent condition phone with all original accessories. Unlocked.",
    price: 3200.0,
    images: [
      "https://images.tokopedia.net/img/cache/700/product-1/2019/9/25/71897982/71897982_a6d79aaa-fc6e-477b-9ab4-3aea077a72b5_425_425",
      "https://example.com/image2.jpg",
    ],
  },
  {
    id: 124,
    sellerId: 456,
    name: "Samsung Galaxy S22 Ultra",
    brand: "Samsung",
    model: "SM-S908B",
    storageCapacity: 256,
    condition: "Excellent",
    description:
      "Excellent condition phone with all original accessories. Unlocked.",
    price: 750.0,
    images: [
      "https://www.triveniworld.com/cdn/shop/products/poco-f1-by-xiaomi-graphite-black-6-gb-ram-128gb-triveni-world-1.jpg?v=1706395662,https://example.com/image2.jpg",
    ],
  },
  {
    id: 125,
    sellerId: 456,
    name: "Google Pixel 3a",
    brand: "Google Pixel",
    model: "SM-S908x",
    storageCapacity: 256,
    condition: "Excellent",
    description:
      "Excellent condition phone with all original accessories. Unlocked.",
    price: 751.0,
    images: [
      "https://akm-img-a-in.tosshub.com/indiatoday/images/device/168329989260f4e86c28532-188x350_one_to_one.jpg?VersionId=UQ2_rlBPgGrgVWUVOBPWxnj6zTXhG1oK,e-sharpen",
      "https://example.com/image2.jpg",
    ],
  },
  {
    id: 126,
    sellerId: 456,
    name: "Samsung Galaxy S22 Ultra",
    brand: "Samsung",
    model: "SM-S908B",
    storageCapacity: 256,
    condition: "Excellent",
    description:
      "Excellent condition phone with all original accessories. Unlocked.",
    price: 751.0,
    images: [
      "https://www.91-cdn.com/hub/wp-content/uploads/2023/02/samsung-galaxy-s22-1.jpg?tr=w-360,c-at_max,q-100,dpr-2,e-sharpen",
      "https://example.com/image2.jpg",
    ],
  },
];

export const dataSlice = createSlice({
  name: "data",
  initialState: data,
  reducers: {},
});

export default dataSlice.reducer;
