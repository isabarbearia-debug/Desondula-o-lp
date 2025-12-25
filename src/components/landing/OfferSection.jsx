import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Shield, Clock, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function OfferSection() {
    return (
        <section id="oferta" className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    {/* Main offer card */}
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#5B2D8B] via-purple-800 to-purple-900 p-8 md:p-12 text-white">
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                        
                        <div className="relative z-10">
                            <div className="text-center mb-10">
                                <span className="inline-block px-4 py-1 bg-white/10 rounded-full text-sm font-medium mb-4">
                                    Oferta Especial
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                    Comece a lucrar com desondulação hoje
                                </h2>
                                <p className="text-purple-200 text-lg max-w-xl mx-auto">
                                    Tudo que você precisa para dominar a técnica e agregar um serviço premium no seu atendimento.
                                </p>
                            </div>
                            
                            {/* What's included */}
                            <div className="grid sm:grid-cols-2 gap-4 mb-10">
                                {[
                                    "Tutorial completo em vídeo",
                                    "Técnica passo a passo",
                                    "Scripts de venda",
                                    "Checklist de aplicação",
                                    "Guia de precificação",
                                    "Acesso vitalício"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#22C55E] flex-shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                            
                            {/* Price */}
                            <div className="text-center mb-8">
                                <div className="mb-2">
                                    <span className="text-purple-300 text-sm">De </span>
                                    <span className="text-purple-300 line-through text-xl">R$ 97</span>
                                    <span className="text-purple-300 text-sm"> por apenas</span>
                                </div>
                                <div className="text-5xl md:text-6xl font-bold mb-2">
                                    12x de <span className="text-[#22C55E]">R$ 2,25</span>
                                </div>
                                <div className="text-purple-200 text-lg">
                                    ou R$ 27 à vista
                                </div>
                            </div>
                            
                            {/* CTA Button */}
                            <div className="text-center">
                                <Button 
                                    className="w-full sm:w-auto bg-[#22C55E] hover:bg-[#16A34A] text-white text-lg px-12 py-7 rounded-full font-semibold shadow-lg shadow-green-500/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/30"
                                    onClick={() => window.open('https://pay.kiwify.com.br/128nX2S', '_blank')}
                                >
                                    Quero o tutorial agora
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                                
                                <div className="mt-6 flex flex-wrap justify-center items-center gap-4 text-sm text-purple-200">
                                    <div className="flex items-center gap-2">
                                        <Shield className="w-4 h-4" />
                                        <span>Compra segura</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Zap className="w-4 h-4" />
                                        <span>Acesso imediato</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4" />
                                        <span>7 dias de garantia</span>
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