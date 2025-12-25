import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, Users, Sparkles } from 'lucide-react';

export default function WhyItWorksSection() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-[#22C55E] font-semibold text-sm uppercase tracking-wider">
                        Oportunidade
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#5B2D8B] mt-3 mb-4">
                        Por que esse serviço funciona
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Descubra o potencial financeiro de adicionar a desondulação ao seu menu de serviços.
                    </p>
                </motion.div>
                
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left side - Numbers */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-white border border-purple-100">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-[#5B2D8B] flex items-center justify-center flex-shrink-0">
                                    <Calculator className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        Faça as contas
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Um serviço de desondulação custa entre <strong className="text-[#5B2D8B]">R$ 80 a R$ 200</strong> dependendo da sua região. 
                                        Se você fizer apenas <strong className="text-[#5B2D8B]">5 a 15 serviços por mês</strong>, já são de R$ 500 a R$ 3.000 a mais no seu faturamento.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-white border border-green-100">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-[#22C55E] flex items-center justify-center flex-shrink-0">
                                    <Users className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        Demanda existe
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Muitos clientes querem alisar ou controlar o volume do cabelo, mas não sabem que você pode oferecer isso. 
                                        <strong className="text-[#5B2D8B]"> O serviço se vende naturalmente</strong> quando você sabe apresentar.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-white border border-amber-100">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center flex-shrink-0">
                                    <Sparkles className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        Diferencial competitivo
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Poucos barbeiros dominam essa técnica. Ao aprender, você se destaca da concorrência e 
                                        <strong className="text-[#5B2D8B]"> atrai clientes que buscam esse serviço específico.</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    
                    {/* Right side - Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative p-8 rounded-3xl bg-gradient-to-br from-[#5B2D8B] to-purple-900 text-white overflow-hidden">
                            {/* Decorative circles */}
                            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
                            
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-6">
                                    Simulação de ganhos
                                </h3>
                                
                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between items-center py-3 border-b border-white/20">
                                        <span className="text-purple-200">Valor médio do serviço</span>
                                        <span className="font-bold text-xl">R$ 120</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b border-white/20">
                                        <span className="text-purple-200">Serviços por semana</span>
                                        <span className="font-bold text-xl">3x</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b border-white/20">
                                        <span className="text-purple-200">Semanas no mês</span>
                                        <span className="font-bold text-xl">4</span>
                                    </div>
                                </div>
                                
                                <div className="p-4 rounded-xl bg-white/10 backdrop-blur">
                                    <div className="text-purple-200 text-sm mb-1">Faturamento extra mensal</div>
                                    <div className="text-4xl font-bold text-[#22C55E]">
                                        + R$ 1.440
                                    </div>
                                </div>
                                
                                <p className="mt-6 text-sm text-purple-200">
                                    * Valores ilustrativos. Resultados variam de acordo com aplicação, rotina e perfil de clientes.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}