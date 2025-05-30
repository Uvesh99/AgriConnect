import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircleIcon } from "lucide-react";
import { useState } from "react";
import { FaLeaf, FaDatabase,FaTruck, FaMicrochip } from 'react-icons/fa';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';


const features = [
  {
    title: 'AI-Verified Certification',
    description: 'Our advanced AI system verifies natural farming practices through simple photo uploads, ensuring transparency and trust.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5c6GexCoIeOIwrF6Rtr5lF3Bozp-PP5hLZA&s',
  },
  {
    title: 'Real-Time Updates',
    description: 'Stay informed with instant notifications about crop growth, availability, and market prices.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&q=80',
  },
  {
    title: 'Data-Driven Insights',
    description: 'Access comprehensive analytics and predictive models to optimize resource usage and maximize yields.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJhXBrzHy-tPFQtGQgWRGy6LIapvb7jJpTwg&s',
  },
  {
    title: 'Multi-Agent Collaboration',
    description: 'Connect with farmers, experts, and markets through a unified platform for seamless communication and collaboration.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfiIpP7_x3MD41pkeFZ0yydX8RgsjHYuuyRQ&s',
  },
];


const stats = [
  { id: 1, name: 'Farmers Empowered', value: '10,000+' },
  { id: 2, name: 'Organic Hectares', value: '25,000+' },
  { id: 3, name: 'Cunsumers', value: '50,000+' },
  { id: 4, name: 'Community Members', value: '100,000+' },
];

const feedbacks = [
  {
    content: "The AI certification process has completely transformed how we verify our organic practices. It's simple, fast, and gives our customers complete confidence in our products.",
    author: "Rajesh Kumar",
    role: "Organic Farmer, Karnataka",
    image: "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
  },
  {
    content: "As a conscious consumer, I love being able to scan a QR code and see the entire journey of my produce. The transparency this platform provides is invaluable.",
    author: "Sarah Chen",
    role: "Community Supported Agriculture Member",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
  },
  {
    content: "The multi-language support and voice navigation have made technology accessible to all our farming community members. It's truly inclusive.",
    author: "Maria Rodriguez",
    role: "Agricultural Cooperative Leader",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
  },
];

const partners = [
  { name: 'Smart Farming Initiative', icon: <FaLeaf />,  description: 'AI-powered farming solutions' },
  { name: 'Oracle Agri Cloud',icon: <FaDatabase />,  description: 'Blockchain tracking solutions' },
  { name: 'Amazon Sustainability',icon: <FaTruck />,  description: 'Supply chain optimization' },
  { name: 'Intel AgriTech',icon: <FaMicrochip />,  description: 'IoT solutions for agriculture' },
];


const faqs = [
  {
    question: "How does your AI-powered certification process work?",
    answer: "Our AI system uses advanced computer vision to analyze photos of farming practices, soil health, and crop conditions. Farmers simply upload photos through our mobile app, and our AI verifies compliance with organic standards in real-time. This is backed by periodic physical verification for complete assurance."
  },
  {
    question: "What kind of market insights do farmers receive?",
    answer: "Farmers get daily updates on market prices, demand forecasts, and direct purchase requests from buyers. Our AI also predicts optimal harvest times based on weather data and market conditions, helping farmers maximize their returns."
  },
  {
    question: "How do you ensure fair pricing for both farmers and consumers?",
    answer: "Our transparent pricing model shows the complete breakdown - from farmer earnings to transportation costs. We've eliminated multiple middlemen, ensuring farmers receive up to 70% of the final price. Bulk purchasing and efficient logistics help keep consumer prices competitive."
  }
];


export default function Home() {
  const [email, setEmail] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();
  setEmail("");
};

  return (
    <div className="bg-white overflow-hidden">
      {/* Main Section */}
      <div className="relative isolate">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 -z-10"
        >
          <img
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
            alt="Sustainable farming landscape"
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/70 to-white" />
        </motion.div>

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center"
          >
           <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
  Cultivating a 
  <span className="text-primary block mt-2">Greener Tomorrow</span>
</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Join us in harnessing the power of AI to transform agriculture into a sustainable and thriving industry. Our multi-agent system brings together farmers, weather stations, and agricultural experts to optimize farming practices, reduce environmental impact, and improve livelihoods.
            </p>
            <h4>meet</h4>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/marketplace"
                  className="rounded-md bg-black px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-primary/90 transition-colors"
                >
                  Explore Marketplace
                </Link>
              </motion.div>
              <Link
                to="/help"
                className="text-lg font-semibold leading-6 text-gray-900 hover:text-gray-700"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-base font-semibold leading-7 text-primary">
              Innovation in Agriculture
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Revolutionizing Farming with Technology
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Experience the perfect blend of traditional farming wisdom and cutting-edge technology,
              creating a sustainable future for agriculture.
            </p>
          </motion.div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  className="flex flex-col"
                >
                  <div className="mb-6 relative h-48 overflow-hidden rounded-2xl">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-gray-900">
                    <CheckCircleIcon className="h-5 w-5 flex-none text-primary" />
                    {feature.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl lg:max-w-none"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Impact in Numbers
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Together we're building a more sustainable future for agriculture
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="flex flex-col bg-gray-50 p-8"
              >
                <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-primary">
                  {stat.value}
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
      </div>
      
      <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Real Stories from Our Community
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Discover how our platform is making a difference in the lives of farmers and consumers
          </p>
        </motion.div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {feedbacks.map((feedback, index) => (
            <motion.div
              key={feedback.author}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="flex flex-col justify-between bg-white p-8 shadow-lg ring-1 ring-gray-200 rounded-2xl"
            >
              <div className="flex items-center gap-x-4 mb-6">
                <img
                  className="h-14 w-14 rounded-full object-cover border-2 border-primary/10"
                  src={feedback.image}
                  alt={feedback.author}
                />
                <div>
                  <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-900">
                    {feedback.author}
                  </h3>
                  <p className="text-sm leading-6 text-gray-600">{feedback.role}</p>
                </div>
              </div>
              <blockquote className="text-gray-700 text-lg leading-7 italic">
                "{feedback.content}"
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
      </div>
      
      <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Partnering with Industry Leaders
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Collaborating with technology pioneers to revolutionize sustainable farming
          </p>
        </motion.div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-4 lg:mx-0 lg:max-w-none">
        {partners.map((partner, index) => (
    <motion.div
      key={partner.name}
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      className="flex flex-col items-center text-center gap-3"
    >
      <span className="text-[3rem]">{partner.icon}</span>
      <div>
        <h3 className="text-sm font-semibold text-gray-900">{partner.name}</h3>
        <p className="text-xs text-gray-600 mt-1">{partner.description}</p>
      </div>
    </motion.div>
  ))}
        </div>
      </div>
      </div>
      
      <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative isolate bg-primary/5 px-6 py-12 sm:px-12 sm:py-16 rounded-3xl"
        >
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Stay Updated with Farming Insights
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Get the latest updates on sustainable farming practices, market trends, and community news
            </p>
            <form onSubmit={handleSubmit} className="mt-10 flex max-w-md mx-auto gap-x-4">
              <Input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="min-w-0 flex-auto"
              />
              <Button type="submit">
                Subscribe
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
      </div>
      
      <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Everything you need to know about our sustainable farming platform
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mx-auto mt-16 max-w-2xl"
        >
          {/* <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionSummary key={index} value={`item-${index}`} className="bg-gray-50 rounded-lg">
                <AccordionActions className="text-left px-6 py-4 hover:no-underline">
                  <span className="text-lg font-semibold">{faq.question}</span>
                </AccordionActions>
                <AccordionDetails className="text-gray-600 px-6 pb-4">
                  {faq.answer}
                </AccordionDetails>
              </AccordionSummary>
            ))}
          </Accordion> */}
          {faqs.map((faq, index) => (
        <Accordion key={index} defaultExpanded={index === 0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
          >
            <p>{faq.question}</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>{faq.answer}</p>
          </AccordionDetails>
        </Accordion>
      ))}
        </motion.div>
      </div>
    </div>
    </div>
  );
}
