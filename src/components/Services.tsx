import React from 'react';
import { Ship, Truck, FileText, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <Ship className="h-8 w-8" />,
      title: 'Sea Freight',
      description: 'International shipping solutions for all your cargo needs',
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: 'Logistics',
      description: 'End-to-end logistics and transportation services',
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: 'Documentation',
      description: 'Complete documentation and customs clearance assistance',
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Global Network',
      description: 'Worldwide network of trusted partners and agents',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive import and export solutions for your business
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="relative p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="text-emerald-600 transform transition-transform duration-300 hover:scale-110">
                {service.icon}
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}