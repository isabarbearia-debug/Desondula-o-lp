import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: "Preciso ter experiência prévia com desondulação?",
        answer: "Não. O tutorial foi criado para barbeiros de todos os níveis. Se você nunca fez desondulação, vai aprender do zero. Se já tem alguma experiência, vai refinar sua técnica e aprender a vender o serviço."
    },
    {
        question: "Quanto tempo leva para aplicar o que aprendi?",
        answer: "O tutorial é direto ao ponto. Você pode assistir em algumas horas e já aplicar no próximo cliente. A técnica em si é simples quando você entende o processo corretamente."
    },
    {
        question: "E se eu não gostar do conteúdo?",
        answer: "Você tem 7 dias de garantia incondicional. Se por qualquer motivo o tutorial não atender suas expectativas, basta solicitar o reembolso. Sem perguntas, sem burocracia."
    },
    {
        question: "Preciso comprar produtos específicos?",
        answer: "O tutorial ensina a técnica e indica os tipos de produtos necessários, mas você pode usar marcas disponíveis na sua região. Não é necessário comprar nenhum produto específico de uma marca."
    },
    {
        question: "Os resultados são garantidos?",
        answer: "O tutorial garante o método e a técnica. Os resultados financeiros variam de acordo com sua aplicação, rotina de atendimento e perfil de clientes. O que garantimos é que você terá total clareza para executar e oferecer o serviço."
    }
];

function FAQItem({ faq, isOpen, onClick }) {
    return (
        <div className="border-b border-gray-200 last:border-0">
            <button
                onClick={onClick}
                className="w-full py-6 flex items-center justify-between text-left hover:text-[#5B2D8B] transition-colors"
            >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                </span>
                <ChevronDown 
                    className={`w-5 h-5 text-[#5B2D8B] flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-gray-600 leading-relaxed">
                            {faq.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(0);
    
    return (
        <section className="py-24 bg-white">
            <div className="max-w-3xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="text-[#22C55E] font-semibold text-sm uppercase tracking-wider">
                        Dúvidas
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#5B2D8B] mt-3">
                        Perguntas Frequentes
                    </h2>
                </motion.div>
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="bg-white rounded-2xl border border-gray-100 shadow-sm p-2"
                >
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            faq={faq}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}