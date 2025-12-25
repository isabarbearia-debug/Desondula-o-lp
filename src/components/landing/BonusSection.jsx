import React from 'react';
import { motion } from 'framer-motion';
import { Gift, MessageSquare, ClipboardList, DollarSign } from 'lucide-react';

const bonuses = [
    {
        icon: MessageSquare,
        title: "Scripts de Venda",
        description: "Frases prontas para oferecer o serviço de forma natural durante o atendimento, sem parecer vendedor.",
        value: "R$ 47"
    },
    {
        icon: ClipboardList,
        title: "Checklist de Aplicação",
        description: "Lista passo a passo para não esquecer nenhuma etapa do procedimento. Imprima e tenha sempre à mão.",
        value: "R$ 27"
    },
    {
        icon: DollarSign,
        title: "Guia de Precificação",
        description: "Como calcular o preço ideal do serviço na sua região para maximizar lucro sem espantar clientes.",
        value: "R$ 37"
    }
];

export default function BonusSection() {
    return (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full mb-4">
                        <Gift className="w-4 h-4 text-amber-600" />
                        <span className="text-sm font-semibold text-amber-700">
                            Bônus Exclusivos
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#5B2D8B] mt-3 mb-4">
                        Você também vai receber
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Materiais extras para acelerar seus resultados e facilitar a aplicação no dia a dia.
                    </p>
                </motion.div>
                
                <div className="grid md:grid-cols-3 gap-6">
                    {bonuses.map((bonus, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="h-full p-6 rounded-2xl bg-white border-2 border-dashed border-amber-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300">
                                {/* Value badge */}
                                <div className="absolute -top-3 -right-3 px-3 py-1 bg-amber-500 text-white text-sm font-bold rounded-full shadow-lg">
                                    {bonus.value}
                                </div>
                                
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <bonus.icon className="w-7 h-7 text-amber-600" />
                                </div>
                                
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {bonus.title}
                                </h3>
                                <p className="text-gray-600">
                                    {bonus.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-12 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-100 to-amber-50 rounded-full border border-amber-200">
                        <span className="text-gray-600">Valor total dos bônus:</span>
                        <span className="text-amber-600 font-bold line-through">R$ 111</span>
                        <span className="text-[#22C55E] font-bold text-lg">GRÁTIS</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}