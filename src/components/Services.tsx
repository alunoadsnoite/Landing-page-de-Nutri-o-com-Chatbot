
import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Heart, Zap, Target, Users, Calendar } from 'lucide-react'

const Services: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'Consultoria Inteligente',
      description: 'Chatbot avançado com IA para orientações nutricionais personalizadas 24/7.',
      features: ['Respostas instantâneas', 'Análise de sintomas', 'Recomendações personalizadas']
    },
    {
      icon: Heart,
      title: 'Planos Personalizados',
      description: 'Dietas sob medida baseadas em seus objetivos, restrições e preferências.',
      features: ['Análise completa', 'Cardápios semanais', 'Ajustes contínuos']
    },
    {
      icon: Zap,
      title: 'Acompanhamento Ativo',
      description: 'Monitoramento constante do seu progresso com feedback em tempo real.',
      features: ['Métricas detalhadas', 'Relatórios mensais', 'Suporte contínuo']
    },
    {
      icon: Target,
      title: 'Objetivos Específicos',
      description: 'Programas focados em perda de peso, ganho de massa ou saúde geral.',
      features: ['Metas claras', 'Estratégias eficazes', 'Resultados mensuráveis']
    },
    {
      icon: Users,
      title: 'Comunidade Ativa',
      description: 'Conecte-se com outros usuários e compartilhe experiências de sucesso.',
      features: ['Grupos de apoio', 'Desafios mensais', 'Motivação constante']
    },
    {
      icon: Calendar,
      title: 'Consultas Online',
      description: 'Sessões individuais com nutricionistas certificados via videochamada.',
      features: ['Agendamento flexível', 'Especialistas qualificados', 'Planos de ação']
    }
  ]

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossos{' '}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Serviços
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas para transformar sua relação com a alimentação 
            e alcançar seus objetivos de saúde e bem-estar.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <motion.button
                className="mt-6 w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Saiba Mais
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
