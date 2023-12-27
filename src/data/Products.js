const products = [
  {
       
    brandName: "Uber",
    category: ["All", "Business", "Transport", "Logistics", "Sky diving"],
    platform: "Mobile",
    productLogo: {
      url: "/images/uber-logo.png",
      originalname: "uber-logo.png",
      filename: "uber-logo.png"
    },
    screensFlow: ["/images/swiggy.jpg", "/images/revolut.jpg", "/images/revolut.jpg", "/images/revolut.jpg", "/images/swiggy.jpg", "/images/swiggy.jpg"],
    videosFlow: ["/videos/video1.avif", "/videos/video2.avif", "/videos/video3.avif"],
    description: {
      about: "Monzo is a digital-only bank platform and marketplace that allows customers to access a range of products and services.",
      website: "www.brand.com",
      location: "London",
      employees: "1001 - 5000 Employees",
      funding: "Series H Funding",
      foundedDate: "Feb 2015",
      founders: ["Gary Dolman", "Jason Bates", "Jonas Huckestein", "Paul Rippon"],
      mail: "Hello@monzo.com",
      usability: 4.4,
      functionality: 2,
      visualDesign: 4.8
    },
  },
  {    
    brandName: "patreon",
    category: ["All", "Business", "Eatery"],
    platform: "Mobile",
    productLogo: {
      url: "/images/uber-logo.png",
      originalname: "uber-logo.png",
      filename: "uber-logo.png"
    },
    screensFlow: ["/images/patreon.jpg", "/images/swiggy.jpg", "/images/swiggy.jpg"],
    videosFlow: ["/videos/video3.avif", "/videos/video2.avif", "/videos/video1.avif"],
    description: {
      about: "Monzo is a digital-only bank platform and marketplace that allows customers to access a range of products and services.",
      website: "www.patreon.com",
      location: "London",
      employees: "1001 - 5000 Employees",
      funding: "Series H Funding",
      foundedDate: "Feb 2015",
      founders: ["Gary Dolman", "Jason Bates", "Jonas Huckestein", "Paul Rippon"],
      mail: "Hello@monzo.com",
      usability: 4,
      functionality: 4,
      visualDesign: 3
    },
  },
  {    
    brandName: "revolut",
    category: ["All", "Business", "Logistics", "Tourism"],
    platform: "Mobile",
    productLogo: {
      url: "/images/uber-logo.png",
      originalname: "uber-logo.png",
      filename: "uber-logo.png"
    },
    screensFlow: ["/images/revolut.jpg", "/images/swiggy.jpg", "/images/swiggy.jpg"],
    videosFlow: ["/videos/video2.avif", "/videos/video1.avif", "/videos/video3.avif"],
    description: {
      about: "Monzo is a digital-only bank platform and marketplace that allows customers to access a range of products and services.",
      website: "www.revolut.com",
      location: "London",
      employees: "1001 - 5000 Employees",
      funding: "Series H Funding",
      foundedDate: "Feb 2015",
      founders: ["Gary Dolman", "Jason Bates", "Jonas Huckestein", "Paul Rippon"],
      mail: "Hello@monzo.com",
      usability: 4,
      functionality: 4,
      visualDesign: 4
    },
  },
  {    
    brandName: "swiggy",
    category: ["All", "Business", "Transport", "Car Racing"],
    platform: "Mobile",
    productLogo: {
      url: "/images/uber-logo.png",
      originalname: "uber-logo.png",
      filename: "uber-logo.png"
    },
    screensFlow: ["/images/swiggy.jpg", "/images/revolut.jpg", "/images/revolut.jpg", "/images/revolut.jpg", "/images/swiggy.jpg", "/images/swiggy.jpg"],
    videosFlow: ["/videos/video1.avif", "/videos/video2.avif", "/videos/video3.avif"],
    description: {
      about: "Monzo is a digital-only bank platform and marketplace that allows customers to access a range of products and services.",
      website: "www.swiggy.com",
      location: "London",
      employees: "1001 - 5000 Employees",
      funding: "Series H Funding",
      foundedDate: "Feb 2015",
      founders: ["Gary Dolman", "Jason Bates", "Jonas Huckestein", "Paul Rippon"],
      mail: "Hello@monzo.com",
      usability: 4,
      functionality: 3,
      visualDesign: 5
    },
  },
  {
       
    brandName: "Uber1",
    category: ["All", "Business", "Gaming"],
    platform: "Mobile",
    productLogo: {
      url: "/images/uber-logo.png",
      originalname: "uber-logo.png",
      filename: "uber-logo.png"
    },
    screensFlow: ["/images/swiggy.jpg", "/images/revolut.jpg", "/images/revolut.jpg", "/images/revolut.jpg", "/images/swiggy.jpg", "/images/swiggy.jpg"],
    videosFlow: ["/videos/video1.avif", "/videos/video2.avif", "/videos/video3.avif"],
    description: {
      about: "Monzo is a digital-only bank platform and marketplace that allows customers to access a range of products and services.",
      website: "www.brand.com",
      location: "London",
      employees: "1001 - 5000 Employees",
      funding: "Series H Funding",
      foundedDate: "Feb 2015",
      founders: ["Gary Dolman", "Jason Bates", "Jonas Huckestein", "Paul Rippon"],
      mail: "Hello@monzo.com",
      usability: 4,
      functionality: 4,
      visualDesign: 4
    },
  },
  {    
    brandName: "patreon1",
    category: ["All", "Business", "Entertainment"],
    platform: "Mobile",
    productLogo: {
      url: "/images/uber-logo.png",
      originalname: "uber-logo.png",
      filename: "uber-logo.png"
    },
    screensFlow: ["/images/patreon.jpg", "/images/swiggy.jpg", "/images/swiggy.jpg"],
    videosFlow: ["/videos/video3.avif", "/videos/video2.avif", "/videos/video1.avif"],
    description: {
      about: "Monzo is a digital-only bank platform and marketplace that allows customers to access a range of products and services.",
      website: "www.patreon.com",
      location: "London",
      employees: "1001 - 5000 Employees",
      funding: "Series H Funding",
      foundedDate: "Feb 2015",
      founders: ["Gary Dolman", "Jason Bates", "Jonas Huckestein", "Paul Rippon"],
      mail: "Hello@monzo.com",
      usability: 4,
      functionality: 4,
      visualDesign: 4
    },
  },
  {    
    brandName: "revolut1",
    category: ["All", "Business"],
    platform: "Mobile",
    productLogo: {
      url: "/images/uber-logo.png",
      originalname: "uber-logo.png",
      filename: "uber-logo.png"
    },
    screensFlow: ["/images/revolut.jpg", "/images/swiggy.jpg", "/images/swiggy.jpg"],
    videosFlow: ["/videos/video2.avif", "/videos/video1.avif", "/videos/video3.avif"],
    description: {
      about: "Monzo is a digital-only bank platform and marketplace that allows customers to access a range of products and services.",
      website: "www.revolut.com",
      location: "London",
      employees: "1001 - 5000 Employees",
      funding: "Series H Funding",
      foundedDate: "Feb 2015",
      founders: ["Gary Dolman", "Jason Bates", "Jonas Huckestein", "Paul Rippon"],
      mail: "Hello@monzo.com",
      usability: 4,
      functionality: 4,
      visualDesign: 4
    },
  },
  {    
    brandName: "swiggy1",
    category: ["All", "Business", "Transport"],
    platform: "Mobile",
    productLogo: {
      url: "/images/uber-logo.png",
      originalname: "uber-logo.png",
      filename: "uber-logo.png"
    },
    screensFlow: ["/images/swiggy.jpg", "/images/revolut.jpg", "/images/revolut.jpg"],
    videosFlow: ["/videos/video2.avif", "/videos/video2.avif", "/videos/video3.avif"],
    description: {
      about: "Monzo is a digital-only bank platform and marketplace that allows customers to access a range of products and services.",
      website: "www.swiggy.com",
      location: "London",
      employees: "1001 - 5000 Employees",
      funding: "Series H Funding",
      foundedDate: "Feb 2015",
      founders: ["Gary Dolman", "Jason Bates", "Jonas Huckestein", "Paul Rippon"],
      mail: "Hello@monzo.com",
      usability: 4,
      functionality: 4,
      visualDesign: 4
    },
  },
  {
       
    brandName: "Uber2",
    category: ["All", "Logistics"],
    platform: "Mobile",
    productLogo: {
      url: "/images/uber-logo.png",
      originalname: "uber-logo.png",
      filename: "uber-logo.png"
    },
    screensFlow: ["/images/swiggy.jpg", "/images/revolut.jpg", "/images/revolut.jpg", "/images/revolut.jpg", "/images/swiggy.jpg", "/images/swiggy.jpg"],
    videosFlow: ["/videos/video1.avif", "/videos/video2.avif", "/videos/video3.avif"],
    description: {
      about: "Monzo is a digital-only bank platform and marketplace that allows customers to access a range of products and services.",
      website: "www.brand.com",
      location: "London",
      employees: "1001 - 5000 Employees",
      funding: "Series H Funding",
      foundedDate: "Feb 2015",
      founders: ["Gary Dolman", "Jason Bates", "Jonas Huckestein", "Paul Rippon"],
      mail: "Hello@monzo.com",
      usability: 4,
      functionality: 2,
      visualDesign: 4
    },
  },
  {     
    brandName: "patreon2",
    category: ["All"],
    platform: "Mobile",
    productLogo: {
      url: "/images/uber-logo.png",
      originalname: "uber-logo.png",
      filename: "uber-logo.png"
    },
    screensFlow: ["/images/revolut.jpg", "/images/patreon.jpg", "/images/revolut.jpg", "/images/swiggy.jpg", "/images/swiggy.jpg"],
    videosFlow: ["/videos/video3.avif", "/videos/video2.avif", "/videos/video2.avif"],
    description: {
      about: "Monzo is a digital-only bank platform and marketplace that allows customers to access a range of products and services.",
      website: "www.patreon.com",
      location: "London",
      employees: "1001 - 5000 Employees",
      funding: "Series H Funding",
      foundedDate: "Feb 2015",
      founders: ["Gary Dolman", "Jason Bates", "Jonas Huckestein", "Paul Rippon"],
      mail: "Hello@monzo.com",
      usability: 4.5,
      functionality: 4,
      visualDesign: 3
    },
  },
  {     
    brandName: "patreon3",
    category: ["All"],
    platform: "Mobile",
    productLogo: {
      url: "/images/uber-logo.png",
      originalname: "uber-logo.png",
      filename: "uber-logo.png"
    },
    screensFlow: ["/images/patreon.jpg", "/images/swiggy.jpg", "/images/swiggy.jpg"],
    videosFlow: ["/videos/video3.avif", "/videos/video2.avif", "/videos/video2.avif"],
    description: {
      about: "Monzo is a digital-only bank platform and marketplace that allows customers to access a range of products and services.",
      website: "www.patreon.com",
      location: "London",
      employees: "1001 - 5000 Employees",
      funding: "Series H Funding",
      foundedDate: "Feb 2015",
      founders: ["Gary Dolman", "Jason Bates", "Jonas Huckestein", "Paul Rippon"],
      mail: "Hello@monzo.com",
      usability: 4.5,
      functionality: 4,
      visualDesign: 3
    },
  },
  {     
    brandName: "patreon4",
    category: ["All", "Food & Beverages"],
    platform: "Mobile",
    productLogo: {
      url: "/images/uber-logo.png",
      originalname: "uber-logo.png",
      filename: "uber-logo.png"
    },
    screensFlow: ["/images/patreon.jpg", "/images/swiggy.jpg", "/images/swiggy.jpg"],
    videosFlow: ["/videos/video3.avif", "/videos/video2.avif", "/videos/video2.avif"],
    description: {
      about: "Monzo is a digital-only bank platform and marketplace that allows customers to access a range of products and services.",
      website: "www.patreon.com",
      location: "London",
      employees: "1001 - 5000 Employees",
      funding: "Series H Funding",
      foundedDate: "Feb 2015",
      founders: ["Gary Dolman", "Jason Bates", "Jonas Huckestein", "Paul Rippon"],
      mail: "Hello@monzo.com",
      usability: 4.5,
      functionality: 4,
      visualDesign: 3
    },
  },
  {     
    brandName: "patreon5",
    category: ["All"],
    platform: "Mobile",
    productLogo: {
      url: "/images/uber-logo.png",
      originalname: "uber-logo.png",
      filename: "uber-logo.png"
    },
    screensFlow: ["/images/revolut.jpg", "/images/patreon.jpg", "/images/revolut.jpg", "/images/swiggy.jpg", "/images/swiggy.jpg"],
    videosFlow: ["/videos/video3.avif", "/videos/video2.avif", "/videos/video2.avif"],
    description: {
      about: "Monzo is a digital-only bank platform and marketplace that allows customers to access a range of products and services.",
      website: "www.patreon.com",
      location: "London",
      employees: "1001 - 5000 Employees",
      funding: "Series H Funding",
      foundedDate: "Feb 2015",
      founders: ["Gary Dolman", "Jason Bates", "Jonas Huckestein", "Paul Rippon"],
      mail: "Hello@monzo.com",
      usability: 4.5,
      functionality: 4,
      visualDesign: 3
    },
  },
  {     
    brandName: "patreon6",
    category: ["All"],
    platform: "Mobile",
    productLogo: {
      url: "/images/uber-logo.png",
      originalname: "uber-logo.png",
      filename: "uber-logo.png"
    },
    screensFlow: ["/images/patreon.jpg", "/images/swiggy.jpg", "/images/swiggy.jpg"],
    videosFlow: ["/videos/video3.avif", "/videos/video2.avif", "/videos/video2.avif"],
    description: {
      about: "Monzo is a digital-only bank platform and marketplace that allows customers to access a range of products and services.",
      website: "www.patreon.com",
      location: "London",
      employees: "1001 - 5000 Employees",
      funding: "Series H Funding",
      foundedDate: "Feb 2015",
      founders: ["Gary Dolman", "Jason Bates", "Jonas Huckestein", "Paul Rippon"],
      mail: "Hello@monzo.com",
      usability: 4.5,
      functionality: 4,
      visualDesign: 3
    },
  },
  {     
    brandName: "patreon7",
    category: ["All"],
    platform: "Mobile",
    productLogo: {
      url: "/images/uber-logo.png",
      originalname: "uber-logo.png",
      filename: "uber-logo.png"
    },
    screensFlow: ["/images/revolut.jpg", "/images/patreon.jpg", "/images/revolut.jpg", "/images/swiggy.jpg"],
    videosFlow: ["/videos/video3.avif", "/videos/video2.avif", "/videos/video2.avif"],
    description: {
      about: "Monzo is a digital-only bank platform and marketplace that allows customers to access a range of products and services.",
      website: "www.patreon.com",
      location: "London",
      employees: "1001 - 5000 Employees",
      funding: "Series H Funding",
      foundedDate: "Feb 2015",
      founders: ["Gary Dolman", "Jason Bates", "Jonas Huckestein", "Paul Rippon"],
      mail: "Hello@monzo.com",
      usability: 4.5,
      functionality: 4,
      visualDesign: 3
    },
  },
  {     
    brandName: "patreon8",
    category: ["All", "Coding Challenge"],
    platform: "Mobile",
    productLogo: {
      url: "/images/uber-logo.png",
      originalname: "uber-logo.png",
      filename: "uber-logo.png"
    },
    screensFlow: ["/images/swiggy.jpg", "/images/revolut.jpg", "/images/revolut.jpg", "/images/revolut.jpg", "/images/swiggy.jpg", "/images/swiggy.jpg"],
    videosFlow: ["/videos/video3.avif", "/videos/video2.avif", "/videos/video2.avif"],
    description: {
      about: "Monzo is a digital-only bank platform and marketplace that allows customers to access a range of products and services.",
      website: "www.patreon.com",
      location: "London",
      employees: "1001 - 5000 Employees",
      funding: "Series H Funding",
      foundedDate: "Feb 2015",
      founders: ["Gary Dolman", "Jason Bates", "Jonas Huckestein", "Paul Rippon"],
      mail: "Hello@monzo.com",
      usability: 4.5,
      functionality: 4,
      visualDesign: 3
    },
  },
  {     
    brandName: "patreon9",
    category: ["All"],
    platform: "Mobile",
    productLogo: {
      url: "/images/uber-logo.png",
      originalname: "uber-logo.png",
      filename: "uber-logo.png"
    },
    screensFlow: ["/images/patreon.jpg", "/images/swiggy.jpg", "/images/swiggy.jpg"],
    videosFlow: ["/videos/video3.avif", "/videos/video2.avif", "/videos/video1.avif"],
    description: {
      about: "Monzo is a digital-only bank platform and marketplace that allows customers to access a range of products and services.",
      website: "www.patreon.com",
      location: "London",
      employees: "1001 - 5000 Employees",
      funding: "Series H Funding",
      foundedDate: "Feb 2015",
      founders: ["Gary Dolman", "Jason Bates", "Jonas Huckestein", "Paul Rippon"],
      mail: "Hello@monzo.com",
      usability: 4.5,
      functionality: 4,
      visualDesign: 3
    },
  },
  {     
    brandName: "patreon10",
    category: ["All", "Food & Beverages", "Building"],
    platform: "Mobile",
    productLogo: {
      url: "/images/uber-logo.png",
      originalname: "uber-logo.png",
      filename: "uber-logo.png"
    },
    screensFlow: ["/images/swiggy.jpg", "/images/revolut.jpg", "/images/revolut.jpg", "/images/revolut.jpg", "/images/swiggy.jpg", "/images/swiggy.jpg"],
    videosFlow: ["/videos/video3.avif", "/videos/video1.avif", "/videos/video2.avif"],
    description: {
      about: "Monzo is a digital-only bank platform and marketplace that allows customers to access a range of products and services.",
      website: "www.patreon.com",
      location: "London",
      employees: "1001 - 5000 Employees",
      funding: "Series H Funding",
      foundedDate: "Feb 2015",
      founders: ["Gary Dolman", "Jason Bates", "Jonas Huckestein", "Paul Rippon"],
      mail: "Hello@monzo.com",
      usability: 4.5,
      functionality: 4,
      visualDesign: 3
    },
  },
  {     
    brandName: "patreon11",
    category: ["All", "Food & Beverages", "Travel & Guide"],
    platform: "Mobile",
    productLogo: {
      url: "/images/uber-logo.png",
      originalname: "uber-logo.png",
      filename: "uber-logo.png"
    },
    screensFlow: ["/images/patreon.jpg", "/images/swiggy.jpg", "/images/swiggy.jpg"],
    videosFlow: ["/videos/video3.avif", "/videos/video3.avif", "/videos/video1.avif"],
    description: {
      about: "Monzo is a digital-only bank platform and marketplace that allows customers to access a range of products and services.",
      website: "www.patreon.com",
      location: "London",
      employees: "1001 - 5000 Employees",
      funding: "Series H Funding",
      foundedDate: "Feb 2015",
      founders: ["Gary Dolman", "Jason Bates", "Jonas Huckestein", "Paul Rippon"],
      mail: "Hello@monzo.com",
      usability: 4.5,
      functionality: 4,
      visualDesign: 3
    },
  },
  {     
    brandName: "patreon12",
    category: ["All", "Food & Beverages"],
    platform: "Mobile",
    productLogo: {
      url: "/images/uber-logo.png",
      originalname: "uber-logo.png",
      filename: "uber-logo.png"
    },
    screensFlow: ["/images/patreon.jpg", "/images/swiggy.jpg", "/images/swiggy.jpg"],
    videosFlow: ["/videos/video3.avif", "/videos/video1.avif", "/videos/video1.avif"],
    description: {
      about: "Monzo is a digital-only bank platform and marketplace that allows customers to access a range of products and services.",
      website: "www.patreon.com",
      location: "London",
      employees: "1001 - 5000 Employees",
      funding: "Series H Funding",
      foundedDate: "Feb 2015",
      founders: ["Gary Dolman", "Jason Bates", "Jonas Huckestein", "Paul Rippon"],
      mail: "Hello@monzo.com",
      usability: 4.5,
      functionality: 4,
      visualDesign: 3
    },
  },
  {
        
    brandName: "Uber6",
    category: ["All", "Business", "Gaming"],
    platform: "Web",
    productLogo: {
      url: "/images/uber-logo.png",
      originalname: "uber-logo.png",
      filename: "uber-logo.png"
    },
    screensFlow: ["/images/web-screen1.jpg", "/images/web-screen2.jpg", "/images/web-screen3.jpg"],
    videosFlow: ["/videos/web-video1.mp4", "/videos/web-video2.mp4", "/videos/web-video3.mp4"],
    description: {
      about: "Monzo is a digital-only bank platform and marketplace that allows customers to access a range of products and services.",
      website: "www.brand.com",
      location: "London",
      employees: "1001 - 5000 Employees",
      funding: "Series H Funding",
      foundedDate: "Feb 2015",
      founders: ["Gary Dolman", "Jason Bates", "Jonas Huckestein", "Paul Rippon"],
      mail: "Hello@monzo.com",
      usability: 4,
      functionality: 4,
      visualDesign: 4
    },
  },
  {     
    brandName: "patreon13",
    category: ["All", "Business", "Entertainment"],
    platform: "Web",
    productLogo: {
      url: "/images/uber-logo.png",
      originalname: "uber-logo.png",
      filename: "uber-logo.png"
    },
    screensFlow: ["/images/web-screen3.jpg", "/images/web-screen2.jpg", "/images/web-screen3.jpg"],
    videosFlow: ["/videos/web-video3.mp4", "/videos/web-video4.mp4", "/videos/web-video5.mp4"],
    description: {
      about: "Monzo is a digital-only bank platform and marketplace that allows customers to access a range of products and services.",
      website: "www.patreon.com",
      location: "London",
      employees: "1001 - 5000 Employees",
      funding: "Series H Funding",
      foundedDate: "Feb 2015",
      founders: ["Gary Dolman", "Jason Bates", "Jonas Huckestein", "Paul Rippon"],
      mail: "Hello@monzo.com",
      usability: 4,
      functionality: 4,
      visualDesign: 4
    },
  },
  {     
    brandName: "revolut14",
    category: ["All", "Business", "Logistics"],
    platform: "Web",
    productLogo: {
      url: "/images/uber-logo.png",
      originalname: "uber-logo.png",
      filename: "uber-logo.png"
    },
    screensFlow: ["/images/web-screen1.jpg", "/images/web-screen3.jpg", "/images/web-screen3.jpg"],
    videosFlow: ["/videos/web-video4.mp4", "/videos/web-video5.mp4", "/videos/web-video3.mp4"],
    description: {
      about: "Monzo is a digital-only bank platform and marketplace that allows customers to access a range of products and services.",
      website: "www.revolut.com",
      location: "London",
      employees: "1001 - 5000 Employees",
      funding: "Series H Funding",
      foundedDate: "Feb 2015",
      founders: ["Gary Dolman", "Jason Bates", "Jonas Huckestein", "Paul Rippon"],
      mail: "Hello@monzo.com",
      usability: 4,
      functionality: 4,
      visualDesign: 4
    },
  },
  {     
    brandName: "swiggy15",
    category: ["All", "Business", "Transport"],
    platform: "Web",
    productLogo: {
      url: "/images/uber-logo.png",
      originalname: "uber-logo.png",
      filename: "uber-logo.png"
    },
    screensFlow: ["/images/web-screen2.jpg", "/images/web-screen2.jpg", "/images/web-screen3.jpg"],
    videosFlow: ["/videos/web-video5.mp4", "/videos/web-video2.mp4", "/videos/web-video3.mp4"],
    description: {
      about: "Monzo is a digital-only bank platform and marketplace that allows customers to access a range of products and services.",
      website: "www.swiggy.com",
      location: "London",
      employees: "1001 - 5000 Employees",
      funding: "Series H Funding",
      foundedDate: "Feb 2015",
      founders: ["Gary Dolman", "Jason Bates", "Jonas Huckestein", "Paul Rippon"],
      mail: "Hello@monzo.com",
      usability: 4,
      functionality: 4,
      visualDesign: 4
    },
  },
  {
    brandName: "Uber16",
    category: ["All", "Business", "Transport", "Logistics"],
    platform: "Web",
    productLogo: {
      url: "/images/uber-logo.png",
      originalname: "uber-logo.png",
      filename: "uber-logo.png"
    },
    screensFlow: ["/images/web-screen1.jpg", "/images/web-screen2.jpg", "/images/web-screen3.jpg"],
    videosFlow: ["/videos/web-video1.mp4", "/videos/web-video2.mp4", "/videos/web-video3.mp4"],
    description: {
      about: "Monzo is a digital-only bank platform and marketplace that allows customers to access a range of products and services.",
      website: "www.brand.com",
      location: "London",
      employees: "1001 - 5000 Employees",
      funding: "Series H Funding",
      foundedDate: "Feb 2015",
      founders: ["Gary Dolman", "Jason Bates", "Jonas Huckestein", "Paul Rippon"],
      mail: "Hello@monzo.com",
      usability: 4,
      functionality: 2,
      visualDesign: 4
    },
  },
  {     
    brandName: "patreon17",
    category: ["All"],
    platform: "Web",
    productLogo: {
      url: "/images/uber-logo.png",
      originalname: "uber-logo.png",
      filename: "uber-logo.png"
    },
    screensFlow: ["/images/web-screen3.jpg", "/images/web-screen2.jpg", "/images/web-screen1.jpg"],
    videosFlow: ["/videos/web-video3.mp4", "/videos/web-video4.mp4", "/videos/web-video5.mp4"],
    description: {
      about: "Monzo is a digital-only bank platform and marketplace that allows customers to access a range of products and services.",
      website: "www.patreon.com",
      location: "London",
      employees: "1001 - 5000 Employees",
      funding: "Series H Funding",
      foundedDate: "Feb 2015",
      founders: ["Gary Dolman", "Jason Bates", "Jonas Huckestein", "Paul Rippon"],
      mail: "Hello@monzo.com",
      usability: 4.5,
      functionality: 4,
      visualDesign: 3
    },
  },
  { 
    brandName: "patreon18",
    category: ["All"],
    platform: "Web",
    productLogo: {
      url: "/images/uber-logo.png",
      originalname: "uber-logo.png",
      filename: "uber-logo.png"
    },
    screensFlow: ["/images/web-screen1.jpg", "/images/web-screen2.jpg", "/images/web-screen3.jpg"],
    videosFlow: ["/videos/web-video3.mp4", "/videos/web-video4.mp4", "/videos/web-video5.mp4"],
    description: {
      about: "Monzo is a digital-only bank platform and marketplace that allows customers to access a range of products and services.",
      website: "www.patreon.com",
      location: "London",
      employees: "1001 - 5000 Employees",
      funding: "Series H Funding",
      foundedDate: "Feb 2015",
      founders: ["Gary Dolman", "Jason Bates", "Jonas Huckestein", "Paul Rippon"],
      mail: "Hello@monzo.com",
      usability: 4.5,
      functionality: 4,
      visualDesign: 3
    },
  }
];

export default products;
