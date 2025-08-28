
import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Ana Silva',
      role: 'Empresária',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      text: 'Perdi 15kg em 4 meses seguindo as orientações da NutriVida. O chatbot me ajudou muito no dia a dia, sempre disponível para tirar dúvidas sobre alimentação.',
      result: 'Perdeu 15kg em 4 meses'
    },
    {
      name: 'Carlos Mendes',
      role: 'Atleta',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      text: 'Como atleta, precisava de uma nutrição específica para performance. O acompanhamento personalizado fez toda a diferença nos meus resultados.',
      result: 'Ganhou 8kg de massa muscular'
    },
    {
      name: 'Maria Santos',
      role: 'Professora',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      text: 'Tinha diabetes e estava com dificuldades para controlar. Com o plano da NutriVida, consegui estabilizar minha glicemia e melhorar minha qualidade de vida.',
      result: 'Controlou diabetes tipo 2'
    },
    {
      name: 'João Oliveira',
      role: 'Executivo',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      text: 'A rotina corrida não me permitia cuidar da alimentação. O chatbot da NutriVida me deu praticidade e consegui manter uma dieta equilibrada mesmo trabalhando muito.',
      result: 'Melhorou energia e disposição'
    },
    {
      name: 'Fernanda Costa',
      role: 'Mãe e Nutricionista',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      text: 'Como nutricionista, fiquei impressionada com a qualidade das orientações do chatbot. Recomendo para todos os meus pacientes como ferramenta complementar.',
      result: 'Aprovou profissionalmente'
    },
    {
      name: 'Roberto Lima',
      role: 'Aposentado',
      image: 'https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      text: 'Aos 65 anos, consegui melhorar minha saúde significativamente. O acompanhamento cuidadoso e as orientações claras me deram confiança para mudar meus hábitos.',
      result: 'Melhorou saúde cardiovascular'
    }
  ]

  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
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
            O que nossos{' '}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              clientes dizem
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Histórias reais de transformação e sucesso. Veja como a NutriVida 
            mudou a vida de milhares de pessoas.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-green-500 mb-4" />

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>

              {/* Result Badge */}
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mb-6 inline-block">
                {testimonial.result}
              </div>

              {/* Client Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-600 mb-6">
            Junte-se a milhares de pessoas que já transformaram suas vidas
          </p>
          <motion.button
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Comece Sua Transformação
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
