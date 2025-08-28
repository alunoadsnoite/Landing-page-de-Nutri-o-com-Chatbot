
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import toast from 'react-hot-toast'
import { lumi } from '../lib/lumi'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    clientName: '',
    email: '',
    phone: '',
    age: '',
    goal: '',
    currentWeight: '',
    targetWeight: '',
    height: '',
    activityLevel: '',
    restrictions: [],
    notes: ''
  })
  const [loading, setLoading] = useState(false)

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      info: '(81) 98835-3131',
      subtitle: 'Seg - Sex: 8h às 18h'
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'contato@nutribot.com.br',
      subtitle: 'Resposta em até 24h'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      info: 'Recife - PE',
      subtitle: 'Consultas online disponíveis'
    },
    {
      icon: Clock,
      title: 'Horário',
      info: 'Segunda a Sexta',
      subtitle: '8h às 18h'
    }
  ]

  const goals = [
    { value: 'perda_peso', label: 'Perda de Peso' },
    { value: 'ganho_massa', label: 'Ganho de Massa Muscular' },
    { value: 'manutencao', label: 'Manutenção do Peso' },
    { value: 'saude_geral', label: 'Saúde Geral' },
    { value: 'performance', label: 'Performance Esportiva' }
  ]

  const activityLevels = [
    { value: 'sedentario', label: 'Sedentário' },
    { value: 'leve', label: 'Atividade Leve' },
    { value: 'moderado', label: 'Atividade Moderada' },
    { value: 'intenso', label: 'Atividade Intensa' },
    { value: 'muito_intenso', label: 'Muito Intenso' }
  ]

  const commonRestrictions = [
    'lactose', 'gluten', 'diabetes', 'hipertensao', 'vegetariano', 'vegano'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleRestrictionChange = (restriction: string) => {
    setFormData(prev => ({
      ...prev,
      restrictions: prev.restrictions.includes(restriction)
        ? prev.restrictions.filter(r => r !== restriction)
        : [...prev.restrictions, restriction]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const consultationData = {
        ...formData,
        age: parseInt(formData.age),
        currentWeight: parseFloat(formData.currentWeight),
        targetWeight: parseFloat(formData.targetWeight),
        height: parseFloat(formData.height),
        status: 'pendente',
        creator: 'website',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }

      await lumi.entities.nutrition_consultations.create(consultationData)
      
      toast.success('Consulta agendada com sucesso! Entraremos em contato em breve.')
      
      // Reset form
      setFormData({
        clientName: '',
        email: '',
        phone: '',
        age: '',
        goal: '',
        currentWeight: '',
        targetWeight: '',
        height: '',
        activityLevel: '',
        restrictions: [],
        notes: ''
      })
    } catch (error) {
      console.error('Erro ao agendar consulta:', error)
      toast.error('Erro ao agendar consulta. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contato" className="py-20 bg-white">
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
            Agende sua{' '}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Consulta Gratuita
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Preencha o formulário abaixo e nossa equipe entrará em contato para 
            agendar sua primeira consulta nutricional gratuita.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Info */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="clientName"
                    value={formData.clientName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Idade *
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    required
                    min="1"
                    max="120"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="Sua idade"
                  />
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>

              {/* Physical Info */}
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Peso Atual (kg)
                  </label>
                  <input
                    type="number"
                    name="currentWeight"
                    value={formData.currentWeight}
                    onChange={handleInputChange}
                    step="0.1"
                    min="1"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="70.5"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Peso Objetivo (kg)
                  </label>
                  <input
                    type="number"
                    name="targetWeight"
                    value={formData.targetWeight}
                    onChange={handleInputChange}
                    step="0.1"
                    min="1"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="65.0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Altura (m)
                  </label>
                  <input
                    type="number"
                    name="height"
                    value={formData.height}
                    onChange={handleInputChange}
                    step="0.01"
                    min="0.5"
                    max="3.0"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="1.70"
                  />
                </div>
              </div>

              {/* Goal and Activity */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Objetivo Principal *
                  </label>
                  <select
                    name="goal"
                    value={formData.goal}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Selecione um objetivo</option>
                    {goals.map(goal => (
                      <option key={goal.value} value={goal.value}>
                        {goal.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nível de Atividade
                  </label>
                  <select
                    name="activityLevel"
                    value={formData.activityLevel}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Selecione o nível</option>
                    {activityLevels.map(level => (
                      <option key={level.value} value={level.value}>
                        {level.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Restrictions */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Restrições Alimentares
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {commonRestrictions.map(restriction => (
                    <label key={restriction} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.restrictions.includes(restriction)}
                        onChange={() => handleRestrictionChange(restriction)}
                        className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                      />
                      <span className="text-sm text-gray-700 capitalize">{restriction}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Observações Adicionais
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Conte-nos mais sobre seus objetivos, histórico médico ou qualquer informação relevante..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
              >
                <span className="flex items-center justify-center space-x-2">
                  <Send className="w-5 h-5" />
                  <span>{loading ? 'Agendando...' : 'Agendar Consulta Gratuita'}</span>
                </span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Contact Cards */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 p-6 bg-gray-50 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{info.title}</h3>
                    <p className="text-green-600 font-medium">{info.info}</p>
                    <p className="text-gray-600 text-sm">{info.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Primeira Consulta Gratuita!</h3>
              <p className="mb-6">
                Agende sua primeira consulta sem custo e descubra como podemos 
                ajudar você a alcançar seus objetivos de saúde e bem-estar.
              </p>
              <ul className="space-y-2 text-green-100">
                <li>✓ Avaliação nutricional completa</li>
                <li>✓ Plano alimentar personalizado</li>
                <li>✓ Acesso ao chatbot inteligente</li>
                <li>✓ Acompanhamento por 30 dias</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
