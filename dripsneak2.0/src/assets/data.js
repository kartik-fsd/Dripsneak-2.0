export const sortOptions = [
  {
    name: "Most Popular",
    value: "popular-sneakers",
    text: "Trending Now",
  }, // Added value property
  {
    name: "Best Rating",
    value: "best-rating",
    text: "Top Rated",
  }, // Added value property
  {
    name: "Newest",
    value: "all-products",
    text: "New Arrivals",
  }, // Added value property
  {
    name: "Price: Low to High",
    value: "price-low-high",
    text: "Price (Low to High)",
  }, // Added value property
  {
    name: "Price: High to Low",
    value: "price-high-low",
    text: "Price (High to Low)",
  },
];

export const filters = [
  {
    id: "category",
    name: "Category",
    options: [
      { value: "men", label: "Men", checked: false },
      { value: "women", label: "Women", checked: false },
      { value: "kid", label: "Kid's", checked: false },
      { value: "unisex", label: "Unisex", checked: true },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "US_5", label: "US 5", checked: false },
      { value: "US_6", label: "US 6", checked: false },
      { value: "US_7", label: "US 7", checked: false },
      { value: "US_8", label: "US 8", checked: false },
      { value: "US_9", label: "US 9", checked: false },
      { value: "US_10", label: "US 10", checked: false },
      { value: "US_11", label: "US 11", checked: false },
      { value: "US_12", label: "US 12", checked: false },
      { value: "US_13", label: "US 13", checked: false },
    ],
  },
];

export const user = {
  name: "Tom Cook",
  email: "tom@Dashboard.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
export const navigation = [{ name: "Dripsneak", href: "/", current: true }];
export const userNavigation = [
  { name: "Your Profile", href: "profile" },
  { name: "Settings", href: "/settings" },
  { name: "Sign out", href: "#" },
];
