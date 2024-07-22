// Cover photos
import accessiblity from "@/assets/17 - ArticleSlider/accessibility.webp";
import ai from "@/assets/17 - ArticleSlider/ai.webp";
import architecture from "@/assets/17 - ArticleSlider/architecture.webp";
import pwa from "@/assets/17 - ArticleSlider/pwa.webp";
import webassembly from "@/assets/17 - ArticleSlider/webassembly.webp";

// Authors
import jane from "@/assets/17 - ArticleSlider/authors/jane.webp";
import john from "@/assets/17 - ArticleSlider/authors/john.webp";
import emily from "@/assets/17 - ArticleSlider/authors/emily.webp";
import michael from "@/assets/17 - ArticleSlider/authors/michael.webp";
import sarah from "@/assets/17 - ArticleSlider/authors/sarah.webp";

export const AUTHORS = [
  {
    id: 0,
    name: "Jane Doe",
    image: jane,
  },
  {
    id: 1,
    name: "John Smith",
    image: john,
  },
  {
    id: 2,
    name: "Emily Johnson",
    image: emily,
  },
  {
    id: 3,
    name: "Michael Brown",
    image: michael,
  },
  {
    id: 4,
    name: "Sarah Green",
    image: sarah,
  },
];

export const ARTICLES = [
  {
    id: 0,
    name: "The Rise of Serverless Architecture",
    author: AUTHORS[0],
    content:
      "Serverless architecture has transformed the landscape of web development by allowing developers to focus on writing code without worrying about server management. This approach offers scalability, cost efficiency, and faster time to market. By leveraging services like AWS Lambda, Azure Functions, and Google Cloud Functions, developers can deploy applications in a fraction of the time it used to take. Serverless computing also supports microservices, enhancing modularity and maintainability of applications. However, there are challenges, including cold start latency and limited execution time, that need to be addressed to fully harness its potential.",
    date: 1729665600000,
    coverPhoto: architecture,
  },
  {
    id: 1,
    name: "The Importance of Accessibility in Modern Web Design",
    author: AUTHORS[1],
    content:
      "Accessibility in web design is no longer optional; it's a necessity. Ensuring that websites are accessible to people with disabilities not only broadens the audience but also complies with legal requirements like the Americans with Disabilities Act (ADA). Techniques such as using semantic HTML, ARIA roles, and ensuring keyboard navigability are essential. Tools like Lighthouse and Wave can help identify accessibility issues. Implementing accessibility best practices not only improves the user experience for everyone but also enhances SEO and overall site performance.",
    date: 1718428800000,
    coverPhoto: accessiblity,
  },
  {
    id: 2,
    name: "Exploring the Capabilities of WebAssembly",
    author: AUTHORS[2],
    content:
      "WebAssembly (Wasm) is revolutionizing web development by enabling high-performance applications on the web. Unlike JavaScript, WebAssembly is a binary instruction format that runs in the browser at near-native speed. This technology allows developers to compile code from languages like C, C++, and Rust, providing a significant performance boost for compute-intensive tasks. WebAssembly is particularly beneficial for applications in gaming, video editing, and scientific computing. The future of WebAssembly looks promising as it continues to evolve, offering more features and broader browser support.",
    date: 1710307200000,
    coverPhoto: webassembly,
  },
  {
    id: 3,
    name: "Progressive Web Apps: The Future of Mobile Web",
    author: AUTHORS[3],
    content:
      "Progressive Web Apps (PWAs) are redefining the mobile web experience by combining the best features of web and mobile apps. PWAs offer offline functionality, push notifications, and home screen installation, providing a native app-like experience. They are built using standard web technologies such as HTML, CSS, and JavaScript but leverage service workers and the app manifest to enhance performance and user engagement. Companies like Twitter and Starbucks have successfully adopted PWAs, resulting in improved load times and user retention. As mobile usage continues to rise, PWAs represent a compelling solution for businesses looking to enhance their mobile presence.",
    date: 1707264000000,
    coverPhoto: pwa,
  },
  {
    id: 4,
    name: "The Role of Artificial Intelligence in Web Development",
    author: AUTHORS[4],
    content:
      "Artificial Intelligence (AI) is playing an increasingly pivotal role in web development. From chatbots and virtual assistants to personalized content and predictive analytics, AI enhances user experience and streamlines development processes. Tools like TensorFlow.js enable developers to build and train machine learning models directly in the browser. AI-driven design tools can automate repetitive tasks and provide design suggestions, improving efficiency and creativity. Moreover, AI can enhance security by detecting anomalies and potential threats in real-time. As AI technology advances, its integration into web development will continue to grow, offering new opportunities and challenges for developers.",
    date: 1700083200000,
    coverPhoto: ai,
  },
];
