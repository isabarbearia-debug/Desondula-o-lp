import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';

const forWho = [
    "Barbeiros que querem aumentar o faturamento sem trabalhar mais horas",
    "Profissionais que desejam oferecer um serviço diferenciado",
    "Quem quer aprender uma técnica nova de forma prática e segura",
    "Barbeiros iniciantes ou experientes que nunca fizeram desondulação",
    "Profissionais que querem se destacar da concorrência"
];

const notForWho = [
    "Quem espera resultados mágicos sem aplicar o que aprendeu",
    "Profissionais que não têm interesse em agregar novos serviços",
    "Quem não está disposto a praticar a técnica"
];

export default function ForWhoSection() {
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
                        Perfil
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#5B2D8B] mt-3">
                        Este tutorial é para você?
                    </h2>
                </motion.div>
                
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* For Who */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="p-8 rounded-2xl bg-gradient-to-br from-green-50 to-white border-2 border-green-100"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-[#22C55E] flex items-center justify-center">
                                <CheckCircle2 className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">
                                É para você se...
                            </h3>
                        </div>
                        
                        <div className="space-y-4">
                            {forWho.map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    
                    {/* Not For Who */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="p-8 rounded-2xl bg-gradient-to-br from-red-50 to-white border-2 border-red-100"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center">
                                <XCircle className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">
                                Não é para você se...
                            </h3>
                        </div>
                        
                        <div className="space-y-4">
                            {notForWho.map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>
                        
                        <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200">
                            <p className="text-sm text-amber-800">
                                <strong>Importante:</strong> O tutorial entrega o método e a técnica. 
                                Os resultados dependem da sua aplicação, rotina e perfil de clientes.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}