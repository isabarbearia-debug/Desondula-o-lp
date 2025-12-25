import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, DollarSign, Shield, BookOpen, TrendingUp } from 'lucide-react';

const benefits = [
    {
        icon: BookOpen,
        title: "Clareza total no processo",
        description: "Entenda cada etapa da desondulação, do diagnóstico ao resultado final, sem complicação."
    },
    {
        icon: Shield,
        title: "Segurança na aplicação",
        description: "Aprenda os cuidados essenciais para evitar erros e entregar um resultado impecável."
    },
    {
        icon: DollarSign,
        title: "Lucro real e mensurável",
        description: "Agregue um serviço premium ao seu menu sem investir em equipamentos caros."
    },
    {
        icon: TrendingUp,
        title: "Aplicação prática imediata",
        description: "Saia do tutorial pronto para aplicar já no próximo cliente que sentar na sua cadeira."
    }
];

export default function BenefitsSection() {
    return (
        <section className="py-24 bg-white relative">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white" />
            
            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-[#22C55E] font-semibold text-sm uppercase tracking-wider">
                        Benefícios
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#5B2D8B] mt-3">
                        O que você ganha com esse tutorial
                    </h2>
                </motion.div>
                
                <div className="grid md:grid-cols-2 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="flex gap-5 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-purple-100 transition-all duration-300">
                                <div className="flex-shrink-0">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <benefit.icon className="w-7 h-7 text-[#5B2D8B]" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                
                {/* Additional bullet points */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-purple-50 to-white border border-purple-100"
                >
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            "Técnica validada na prática",
                            "Sem necessidade de curso presencial",
                            "Assista quando e onde quiser",
                            "Linguagem simples e direta",
                            "Dúvidas respondidas",
                            "Atualizações incluídas"
                        ].map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#22C55E] flex-shrink-0" />
                                <span className="text-gray-700">{item}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}