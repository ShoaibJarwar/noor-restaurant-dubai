export const nav = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Our Story", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Private Dining", href: "/private-dining" },
  { label: "Contact", href: "/contact" },
];

export type Dish = {
  name: string;
  description: string;
  price: string;
  image?: string;
};

export const signatureDishes: Dish[] = [
  {
    name: "Charcoal-Grilled Lamb",
    description: "Slow-cooked lamb, smoked aubergine, date glaze",
    price: "AED 145",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Saffron Prawns",
    description: "Gulf prawns, saffron butter, preserved lemon",
    price: "AED 120",
    image:
      "https://images.unsplash.com/photo-1519690889869-e705e59f72e1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Rose & Pistachio",
    description: "Rose cream, pistachio, cardamom, seasonal fruit",
    price: "AED 58",
    image:
      "https://images.unsplash.com/photo-1541542684-4a9c3c3aa9a5?auto=format&fit=crop&w=1200&q=80",
  },
];

export type MenuCategory = {
  id: string;
  label: string;
  items: Dish[];
};

export const menu: MenuCategory[] = [
  {
    id: "mezze",
    label: "Mezze",
    items: [
      {
        name: "Hummus Bil Lahm",
        description: "Silky hummus, spiced lamb, pine nuts, olive oil",
        price: "AED 48",
      },
      {
        name: "Burrata & Za'atar",
        description: "Creamy burrata, heirloom tomato, za'atar oil",
        price: "AED 62",
      },
      {
        name: "Smoked Baba Ghanoush",
        description: "Charred aubergine, tahini, pomegranate molasses",
        price: "AED 42",
      },
      {
        name: "Halloumi & Date",
        description: "Grilled halloumi, medjool date, aged balsamic",
        price: "AED 46",
      },
    ],
  },
  {
    id: "from-the-fire",
    label: "From the Fire",
    items: [
      {
        name: "Charcoal Lamb Rack",
        description: "Australian lamb, smoked aubergine, date jus",
        price: "AED 165",
      },
      {
        name: "Grilled Octopus",
        description: "Charred octopus, chermoula, crushed potato",
        price: "AED 130",
      },
      {
        name: "Spiced Chicken Shish",
        description: "Free-range chicken, sumac onion, garlic toum",
        price: "AED 88",
      },
    ],
  },
  {
    id: "sea",
    label: "Sea",
    items: [
      {
        name: "Gulf Prawns",
        description: "Saffron butter, preserved lemon, herbs",
        price: "AED 120",
      },
      {
        name: "Hammour Sayadieh",
        description: "Local hammour, spiced rice, caramelised onion",
        price: "AED 155",
      },
      {
        name: "Grilled Sea Bass",
        description: "Whole sea bass, citrus, charred herb oil",
        price: "AED 175",
      },
    ],
  },
  {
    id: "mains",
    label: "Mains",
    items: [
      {
        name: "Machboos Risotto",
        description: "Saffron rice, slow-cooked chicken, crispy shallots",
        price: "AED 95",
      },
      {
        name: "Slow-Braised Short Rib",
        description: "48-hour short rib, black lime jus, root vegetables",
        price: "AED 175",
      },
      {
        name: "Freekeh & Wild Mushroom",
        description: "Smoked freekeh, wild mushroom, preserved lemon",
        price: "AED 78",
      },
    ],
  },
  {
    id: "sides",
    label: "Sides",
    items: [
      {
        name: "Saffron Rice",
        description: "Basmati, saffron, toasted almond",
        price: "AED 32",
      },
      {
        name: "Charred Broccolini",
        description: "Preserved lemon, chilli, garlic",
        price: "AED 36",
      },
      {
        name: "Sumac Fries",
        description: "Hand-cut fries, sumac, garlic toum",
        price: "AED 30",
      },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    items: [
      {
        name: "Rose & Pistachio",
        description: "Rose cream, pistachio, cardamom",
        price: "AED 58",
      },
      {
        name: "Umm Ali Reimagined",
        description: "Warm milk custard, filo, toasted nuts",
        price: "AED 52",
      },
      {
        name: "Date & Tahini Tart",
        description: "Medjool date, tahini caramel, sea salt",
        price: "AED 50",
      },
    ],
  },
  {
    id: "drinks",
    label: "Drinks",
    items: [
      {
        name: "Saffron Cardamom Fizz",
        description: "Non-alcoholic, saffron, cardamom, soda",
        price: "AED 42",
      },
      {
        name: "Mint & Rose Lemonade",
        description: "Fresh mint, rose water, citrus",
        price: "AED 38",
      },
      {
        name: "Arabic Coffee",
        description: "Cardamom-spiced, served with dates",
        price: "AED 28",
      },
    ],
  },
];

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    alt: "Dark, moody dining room at NOOR Dubai",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&w=1200&q=80",
    alt: "Chef working over an open flame",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    alt: "Charcoal-grilled lamb, plated",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1200&q=80",
    alt: "Dubai skyline at dusk",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80",
    alt: "Elegant tablescape with candlelight",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=80",
    alt: "Saffron and spices",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80",
    alt: "Chef plating a dish with precision",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1519690889869-e705e59f72e1?auto=format&fit=crop&w=1200&q=80",
    alt: "Close-up of a plated seafood dish",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&w=1200&q=80",
    alt: "Private dining room interior",
    tall: false,
  },
];

export const openingHours = [
  { days: "Monday – Thursday", hours: "12:00 PM – 12:00 AM" },
  { days: "Friday – Sunday", hours: "12:00 PM – 1:00 AM" },
];
