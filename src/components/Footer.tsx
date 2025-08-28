
import React from 'react'
import { motion } from 'framer-motion'
import {Leaf, Instagram, Facebook, Youtube, Twitter, Mail, Phone} from 'lucide-react'

const Footer: React.FC = () => {
  const footerLinks = {
    servicos: [
      'Consultoria Nutricional',
      'Planos Personalizados',
      'Acompanhamento Online',
      'Chatbot Inteligente',
      'Grupos de Apoio'
    ],
    recursos: [
      'Blog de Nutrição',
      'Receitas Saudáveis',
      'Calculadora IMC',
      'Guias Nutricionais',
      'Webinars Gratuitos'
    ],
    empresa: [
      'Sobre Nós',
      'Nossa Equipe',
      'Depoimentos',
      'Parcerias',
      'Trabalhe Conosco'
    ],
    suporte: [
      'Central de Ajuda',
      'FAQ',
      'Contato',
      'Política de Privacidade',
      'Termos de Uso'
    ]
  }

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Logo */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Nutribot
              </span>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Transformamos vidas através da nutrição personalizada e tecnologia 
              inteligente. Junte-se a milhares de pessoas que já alcançaram seus 
              objetivos de saúde conosco.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">contato@nutribot.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">(81) 98835-3131</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-600 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4 capitalize text-green-400">
                {category === 'servicos' ? 'Serviços' : 
                 category === 'recursos' ? 'Recursos' :
                 category === 'empresa' ? 'Empresa' : 'Suporte'}
              </h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: linkIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href="#"
                      className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          className="border-t border-gray-800 pt-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-8 rounded-2xl border border-green-500/20">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Receba dicas de nutrição semanalmente
              </h3>
              <p className="text-gray-300 mb-6">
                Inscreva-se em nossa newsletter e receba conteúdo exclusivo sobre 
                nutrição, receitas saudáveis e dicas de bem-estar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Seu melhor email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <motion.button
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Inscrever-se
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Nutribot. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
              Termos de Uso
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
              Cookies
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
