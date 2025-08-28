
import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {MessageCircle, X, Send, Bot, User, Sparkles} from 'lucide-react'
import toast from 'react-hot-toast'
import { lumi } from '../lib/lumi'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Olá! Eu sou o Nutribot, seu assistente pessoal de nutrição. Como posso ajudar você hoje?',
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()
    
    // Respostas específicas sobre nutrição
    if (lowerMessage.includes('peso') || lowerMessage.includes('emagrecer')) {
      return 'Para um emagrecimento saudável, recomendo uma alimentação equilibrada com déficit calórico moderado. Que tal conversarmos sobre seus hábitos alimentares atuais?'
    }
    
    if (lowerMessage.includes('dieta') || lowerMessage.includes('alimentação')) {
      return 'Uma boa alimentação é fundamental! Posso criar um plano personalizado para você. Tem alguma restrição alimentar ou objetivo específico?'
    }
    
    if (lowerMessage.includes('exercício') || lowerMessage.includes('treino')) {
      return 'Exercícios são ótimos aliados da nutrição! A combinação de alimentação adequada e atividade física potencializa os resultados. Que tipo de exercício você pratica?'
    }
    
    if (lowerMessage.includes('água') || lowerMessage.includes('hidratação')) {
      return 'Hidratação é essencial! Recomendo pelo menos 2-3 litros de água por dia, variando conforme seu peso e atividade física. Você tem o hábito de beber água regularmente?'
    }
    
    if (lowerMessage.includes('vitamina') || lowerMessage.includes('suplemento')) {
      return 'Suplementos podem ser úteis, mas sempre prefira obter nutrientes dos alimentos. Que tal uma avaliação nutricional para identificar suas necessidades específicas?'
    }
    
    if (lowerMessage.includes('receita') || lowerMessage.includes('cozinhar')) {
      return 'Cozinhar em casa é uma excelente escolha! Posso sugerir receitas saudáveis e práticas. Que tipo de prato você gostaria de aprender?'
    }
    
    // Respostas gerais
    const responses = [
      'Interessante! Conte-me mais sobre seus hábitos alimentares para que eu possa ajudar melhor.',
      'Entendo sua preocupação. A nutrição personalizada é a chave para resultados duradouros.',
      'Ótima pergunta! Vamos trabalhar juntos para encontrar a melhor solução nutricional para você.',
      'Cada pessoa é única, e sua alimentação também deve ser. Que tal agendarmos uma consulta?'
    ]
    
    return responses[Math.floor(Math.random() * responses.length)]
  }

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)

    // Salvar mensagem no banco de dados
    try {
      await lumi.entities.chat_messages.create({
        user_message: inputMessage,
        bot_response: '',
        session_id: 'default',
        created_at: new Date().toISOString()
      })
    } catch (error) {
      console.error('Erro ao salvar mensagem:', error)
    }

    // Simular delay de digitação
    setTimeout(() => {
      const botResponseText = generateBotResponse(inputMessage)
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponseText,
        sender: 'bot',
        timestamp: new Date()
      }

      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)

      // Atualizar com resposta do bot
      lumi.entities.chat_messages.create({
        user_message: inputMessage,
        bot_response: botResponseText,
        session_id: 'default',
        created_at: new Date().toISOString()
      }).catch(error => {
        console.error('Erro ao salvar resposta do bot:', error)
      })

    }, 1000 + Math.random() * 2000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={isOpen ? { scale: 0 } : { scale: 1 }}
      >
        <MessageCircle className="w-8 h-8" />
        
        {/* Badge de IA */}
        <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
          IA
        </div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Nutribot</h3>
                  <div className="flex items-center space-x-1 text-sm opacity-90">
                    <Sparkles className="w-3 h-3" />
                    <span>Assistente IA</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`flex items-start space-x-2 max-w-[80%] ${
                    message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.sender === 'user' 
                        ? 'bg-blue-500' 
                        : 'bg-gradient-to-r from-green-500 to-emerald-600'
                    }`}>
                      {message.sender === 'user' ? (
                        <User className="w-4 h-4 text-white" />
                      ) : (
                        <Bot className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div className={`px-4 py-2 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      <p className="text-sm">{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-gray-100 px-4 py-2 rounded-2xl">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Digite sua pergunta sobre nutrição..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isTyping}
                  className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Chatbot
