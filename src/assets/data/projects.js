import audiophile from "../images/project/audiophile.png";
import superchat from "../images/project/superchat.png";
import trillowRealEstate from "../images/project/trillow.png";
import digitalDesign from "../images/project/digital-design.png";
import weatherApp from "../images/project/weather-app.png";

const projects = [
  {
    id: "1",
    image: audiophile,
    technologies: ["sass", "javascript", "react"],
    title: "Audiophile e-commerce",
    description: [
      "Being an e-commerce-type website, I had to think strategically so all the parts and components would work together firmly. This project allowed me to learn crucial skills regarding any shop or sales-related website, from custom components to order confirmation.",
      "This website contains a homepage, product list page (PLP), product page (PDP), a checkout with form validation, and a mini cart, users can see products, add single or multiple at once to the cart and go through the purchase process with an order confirmation message at the end.",
    ],
    accomplishments:
      "Handling Routes, Managing Item Categories, Complete Cart Functionality, Form Validation, Working with Products, Layout Principles",
    repo: "https://github.com/Edin2021/audiophile-ecommerce",
    demo: "https://audiophile-ecommerce.pages.dev/",
  },
  {
    id: "2",
    image: superchat,
    technologies: ["sass", "javascript", "react", "firebase"],
    title: "Superchat",
    description: [
      "This project taught me a lot about handling client and back-end interactions. Consisting of two pages, the signup form and the main chat window, superchat was custom designed and developed to accomplish the main criteria of users being able to go through a login process and interact with each other.",
      "Being a group chat, the user first needs to create an account, either with email and password, or with their google account. After signing in, the user can send messages to the group chat using the form below, see other user messages, with a logout button on the top right",
    ],
    accomplishments: "Connecting to a Back-End, Handle New and Existing Users, Private Routing, Basic Chat Functionality, Managing Back-End Data, Design Principles",
    repo: "https://github.com/Edin2021/superchat",
    demo: "https://superchat.pages.dev/chat",
  },
  {
    id: "3",
    image: trillowRealEstate,
    technologies: ["sass", "javascript", "react", "api"],
    title: "Trillow real estate",
    description: [
      "Trillow introduced me to a unique set of challenges and problems facing an unreliable API. To overcome its obstacles, I had to make many assumptions as well as double and triple-checking when it comes to the properties provided to make sure the user receives adequate data.",
      "Trillow is a US-based real estate website, where users can search for homes, rentals and properties, with a variety of different filters, and sort functionality. Availability depended, the user will get 50 results per page with pagination. Listings can be viewed individually where users can see pictures and details about the listing.",
    ],
    accomplishments: "Robust API Integration, Data Assurance Mechanism, Enhanced User Experience, Pagination and Results Handling, Detailed Listing Presentation",
    repo: "https://github.com/Edin2021/trillow-real-estate",
    demo: "https://trillow-real-estate.pages.dev/",
  },
  {
    id: "4",
    image: digitalDesign,
    technologies: ["sass", "javascript", "react"],
    title: "Digital design",
    description: [
      "Digital Design is a heavy style and animation-sided website where critical styling and animating skills have been established. A massive contributor to where the learning accomplishments came from is that the code for styles and animations is custom written and developed.",
      "Digital design - agency is meant to display my ability to take a design, in this case, the website design of Jumor Digital Agency, and make it into a website. There is a slight variation comparing it to the original because I didn't actually have any mockup or design file, it's strictly made based on what I could observe on their website.",
    ],
    accomplishments: "Cubic Bezier Transitions, Feature Dark Mode, Complex Element Configuration, Dynamic Elements, Unique Mouse Interactions",
    repo: "https://github.com/Edin2021/digital-design-agency",
    demo: "https://digital-design.pages.dev/",
  },
  {
    id: "5",
    image: weatherApp,
    technologies: ["sass", "javascript", "react", "api"],
    title: "Weather app",
    description: [
      "The main criteria were to use the proper API to accurately show the weather forecast, either based on the current location or a user-selected location, with also the aspect of two different layouts and a plethora of different looks depending on the weather cast at hand.",
      "Custom backgrounds for both day and night based on the current condition. The first location selected will be user based. A search is available with autosuggestions. The user can see the current temperature, a 3-day forecast, and a 9-hour forecast, change the units and choose between layouts.",
    ],
    accomplishments: "Dynamic Weather Display, Varied Layouts and Styling, Personalized User Experience, Comprehensive Weather Data, Unit Flexibility and Layout Choice",
    repo: "https://github.com/Edin2021/weather-app",
    demo: "https://weather-app-web.pages.dev/",
  },
];

export { projects };
