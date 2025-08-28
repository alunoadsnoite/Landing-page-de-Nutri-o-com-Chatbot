
import React from 'react'
import { motion } from 'framer-motion'
import {ArrowRight, Bot, Sparkles, Users, Award} from 'lucide-react'

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-700 text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Bot className="w-4 h-4 mr-2" />
              IA Avançada em Nutrição
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Transforme sua
              <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Alimentação com
              </span>
              <span className="relative">
                Nutribot
                <motion.div
                  className="absolute -top-2 -right-8"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <Sparkles className="w-8 h-8 text-yellow-500" />
                </motion.div>
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Consultoria em nutrição personalizada com chatbot inteligente. 
              Receba orientações precisas, planos alimentares sob medida e 
              acompanhamento 24/7 para uma vida mais saudável.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-8 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center">
                <Users className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-gray-700">
                  <strong className="text-green-600">5.000+</strong> clientes
                </span>
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-gray-700">
                  <strong className="text-green-600">98%</strong> satisfação
                </span>
              </div>
              <div className="flex items-center">
                <Bot className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-gray-700">
                  <strong className="text-green-600">24/7</strong> disponível
                </span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.button
                className="group bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Falar com Nutribot
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                className="px-8 py-4 border-2 border-green-500 text-green-600 rounded-full font-semibold text-lg hover:bg-green-50 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Como Funciona
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Alimentação saudável com tecnologia"
                  className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto"
                />
              </div>

              {/* Floating Cards */}
              <motion.div
                className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg border"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Nutribot IA</p>
                    <p className="text-xs text-gray-500">Online agora</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                <div className="text-center">
                  <p className="text-lg font-bold text-green-600">-12kg</p>
                  <p className="text-xs text-gray-500">em 3 meses</p>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-2xl -z-10 scale-110 blur-3xl"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
