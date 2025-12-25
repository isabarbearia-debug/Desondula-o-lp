import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function HeroSection() {
    const scrollToOffer = () => {
        document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
            {/* Subtle gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50/30 to-white" />
            
            {/* Decorative elements */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-purple-100/40 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-green-100/30 rounded-full blur-3xl" />
            
            <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-8">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-sm font-medium text-[#5B2D8B]">
                            Tutorial Completo + Bônus Exclusivos
                        </span>
                    </div>
                    
                    {/* Headline */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#5B2D8B] leading-tight mb-6 tracking-tight">
                        Aprenda a fazer desondulação e fature de{' '}
                        <span className="relative inline-block">
                            <span className="relative z-10">R$ 500 a R$ 3.000+</span>
                            <span className="absolute bottom-2 left-0 w-full h-3 bg-green-200/60 -z-0" />
                        </span>{' '}
                        a mais por mês com um único serviço extra.
                    </h1>
                    
                    {/* Subheadline */}
                    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Técnica segura, passo a passo prático e como vender o serviço no atendimento{' '}
                        <span className="font-medium text-gray-700">sem parecer vendedor.</span>
                    </p>
                    
                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <Button 
                            onClick={() => window.open('https://pay.kiwify.com.br/128nX2S', '_blank')}
                            className="bg-[#22C55E] hover:bg-[#16A34A] text-white text-lg px-10 py-7 rounded-full font-semibold shadow-lg shadow-green-500/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/30"
                        >
                            Quero o tutorial agora
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </motion.div>
                    
                    {/* Trust indicators */}
                    <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Acesso imediato</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Garantia de 7 dias</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Suporte incluído</span>
                        </div>
                    </div>
                </motion.div>
            </div>
            
            {/* Scroll indicator */}
            <motion.div 
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2">
                    <div className="w-1.5 h-3 bg-gray-400 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}