import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle2 } from 'lucide-react';

export default function GuaranteeSection() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    <div className="p-8 md:p-12 rounded-3xl bg-white border-2 border-[#22C55E]/20 shadow-lg shadow-green-500/5">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            {/* Shield icon */}
                            <div className="flex-shrink-0">
                                <div className="relative">
                                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center">
                                        <Shield className="w-16 h-16 text-[#22C55E]" />
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-[#22C55E] flex items-center justify-center text-white font-bold shadow-lg">
                                        7
                                    </div>
                                </div>
                            </div>
                            
                            {/* Text content */}
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-[#5B2D8B] mb-4">
                                    Garantia Incondicional de 7 Dias
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    Se o conteúdo não te der clareza para executar a técnica e oferecer a desondulação como serviço extra, 
                                    <strong className="text-gray-800"> o reembolso é simples e sem burocracia.</strong>
                                </p>
                                
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#22C55E] flex-shrink-0" />
                                        <span className="text-gray-700">Sem perguntas, sem enrolação</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#22C55E] flex-shrink-0" />
                                        <span className="text-gray-700">Reembolso processado em até 7 dias úteis</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#22C55E] flex-shrink-0" />
                                        <span className="text-gray-700">Seu risco é zero</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}