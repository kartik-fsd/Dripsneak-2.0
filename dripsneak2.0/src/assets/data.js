export const sortOptions = [
  {
    name: "Most Popular",
    text: "Trending Now",
  }, // Added text property
  {
    name: "Best Rating",
    text: "Top Rated",
  }, // Added text property
  {
    name: "Newest",
    text: "New Arrivals",
  }, // Added text property
  {
    name: "Price: Low to High",
    text: "Price (Low to High)",
  }, // Added text property
  {
    name: "Price: High to Low",
    text: "Price (High to Low)",
  },
];

export const filters = [
  {
    id: "category",
    name: "Category",
    options: [
      { value: "male", label: "Men", checked: false },
      { value: "female", label: "Women", checked: false },
      { value: "Kids", label: "Kid's", checked: false },
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