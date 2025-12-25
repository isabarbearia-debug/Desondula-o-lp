import React from 'react';
import { motion } from 'framer-motion';
import { Play, CheckCircle2 } from 'lucide-react';

const modules = [
    {
        number: "01",
        title: "Fundamentos da Desondulação",
        items: [
            "O que é desondulação e como funciona",
            "Diferença entre desondulação, relaxamento e progressiva",
            "Tipos de cabelo e indicações corretas"
        ]
    },
    {
        number: "02",
        title: "Diagnóstico do Cliente",
        items: [
            "Como avaliar o cabelo antes do procedimento",
            "Perguntas essenciais para fazer ao cliente",
            "Identificando contraindicações"
        ]
    },
    {
        number: "03",
        title: "Técnica Passo a Passo",
        items: [
            "Preparação do cabelo e produtos necessários",
            "Aplicação correta e tempo de pausa",
            "Finalização e cuidados pós-procedimento"
        ]
    },
    {
        number: "04",
        title: "Vendendo o Serviço",
        items: [
            "Como identificar clientes ideais",
            "Abordagem natural durante o atendimento",
            "Respondendo objeções com confiança"
        ]
    }
];

export default function WhatYouLearnSection() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-[#22C55E] font-semibold text-sm uppercase tracking-wider">
                        Conteúdo Completo
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#5B2D8B] mt-3 mb-4">
                        O que você vai aprender
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Um tutorial direto ao ponto, sem enrolação. Tudo que você precisa para dominar a técnica e começar a lucrar.
                    </p>
                </motion.div>
                
                <div className="grid md:grid-cols-2 gap-6">
                    {modules.map((module, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="h-full p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-purple-100 transition-all duration-300">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#5B2D8B] to-purple-700 flex items-center justify-center">
                                        <span className="text-white font-bold text-sm">{module.number}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">
                                            {module.title}
                                        </h3>
                                    </div>
                                </div>
                                
                                <div className="space-y-3 pl-16">
                                    {module.items.map((item, itemIndex) => (
                                        <div key={itemIndex} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-600">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                
                {/* Video preview suggestion */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-[#5B2D8B] to-purple-800 text-white text-center"
                >
                    <div className="flex items-center justify-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                            <Play className="w-6 h-6 text-white fill-white" />
                        </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                        Formato em vídeo, fácil de acompanhar
                    </h3>
                    <p className="text-purple-200 max-w-xl mx-auto">
                        Assista no celular, tablet ou computador. Pause, volte e reveja quantas vezes precisar.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}