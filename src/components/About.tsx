
import React from 'react'
import { motion } from 'framer-motion'
import { Award, Users, Clock, CheckCircle } from 'lucide-react'

const About: React.FC = () => {
  const stats = [
    { icon: Users, number: '5000+', label: 'Clientes Atendidos' },
    { icon: Award, number: '15+', label: 'Anos de Experiência' },
    { icon: Clock, number: '24/7', label: 'Suporte Disponível' },
    { icon: CheckCircle, number: '98%', label: 'Taxa de Sucesso' }
  ]

  const benefits = [
    'Metodologia cientificamente comprovada',
    'Acompanhamento personalizado e contínuo',
    'Tecnologia de ponta com chatbot inteligente',
    'Equipe de nutricionistas certificados',
    'Planos flexíveis para todos os perfis',
    'Resultados mensuráveis e duradouros'
  ]

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Por que escolher a{' '}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                NutriVida?
              </span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              Somos pioneiros em combinar expertise nutricional tradicional com tecnologia 
              de inteligência artificial, oferecendo uma experiência única e resultados 
              excepcionais para nossos clientes.
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Conheça Nossa Metodologia
            </motion.button>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Main Image */}
            <div className="relative mb-8">
              <img
                src="https://images.pexels.com/photos/6975474/pexels-photo-6975474.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Equipe de nutricionistas"
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
              />
              
              {/* Floating Stats */}
              <motion.div
                className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg border border-gray-100"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">98%</div>
                  <div className="text-sm text-gray-600">Satisfação</div>
                </div>
              </motion.div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-gray-50 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <stat.icon className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
