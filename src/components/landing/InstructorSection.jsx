import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function InstructorSection() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-30" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-30" />
            
            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="text-[#22C55E] font-semibold text-sm uppercase tracking-wider">
                        Sobre o Instrutor
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#5B2D8B] mt-3">
                        Quem vai te ensinar
                    </h2>
                </motion.div>
                
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left side - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative">
                            {/* Decorative border */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-[#5B2D8B] to-purple-600 rounded-3xl opacity-10" />
                            
                            {/* Image container */}
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img 
                                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694d2053c7ca953369ae32a5/55e205049_image.png"
                                    alt="Instrutor"
                                    className="w-full h-auto"
                                />
                            </div>
                            
                            {/* Floating badge */}
                            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border-2 border-[#22C55E]">
                                <div className="flex items-center gap-2">
                                    <Award className="w-6 h-6 text-[#22C55E]" />
                                    <div>
                                        <div className="text-xs text-gray-500">Especialista em</div>
                                        <div className="font-bold text-gray-900">Desondulação</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    
                    {/* Right side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div>
                            <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                Sou barbeira profissional há mais de <strong className="text-[#5B2D8B]">4 anos</strong> e especialista em técnicas de desondulação. 
                                Desenvolvi este método prático depois de anos aplicando e refinando o processo no dia a dia da barbearia.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Já treinei <strong className="text-[#5B2D8B]">mais de 50 barbeiros</strong> que hoje faturam 
                                significativamente mais oferecendo desondulação como serviço premium.
                            </p>
                        </div>
                        
                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 py-6">
                            <div className="text-center p-4 rounded-xl bg-purple-50">
                                <div className="text-3xl font-bold text-[#5B2D8B] mb-1">4+</div>
                                <div className="text-sm text-gray-600">Anos de experiência</div>
                            </div>
                            <div className="text-center p-4 rounded-xl bg-green-50">
                                <div className="text-3xl font-bold text-[#5B2D8B] mb-1">50+</div>
                                <div className="text-sm text-gray-600">Alunos treinados</div>
                            </div>
                            <div className="text-center p-4 rounded-xl bg-amber-50">
                                <div className="text-3xl font-bold text-[#5B2D8B] mb-1">100%</div>
                                <div className="text-sm text-gray-600">Método testado</div>
                            </div>
                        </div>
                        
                        {/* Key points */}
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-1" />
                                <p className="text-gray-700">
                                    <strong>Especialização:</strong> Foco em técnicas seguras e lucrativas de desondulação
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-1" />
                                <p className="text-gray-700">
                                    <strong>Experiência real:</strong> Aplico diariamente na minha barbearia com resultados comprovados
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-1" />
                                <p className="text-gray-700">
                                    <strong>Didática simples:</strong> Ensino de forma direta, sem complicação
                                </p>
                            </div>
                        </div>
                        
                        <div className="p-6 rounded-xl bg-gradient-to-r from-purple-50 to-white border border-purple-100">
                            <p className="text-gray-700 italic">
                                "Meu objetivo é te dar a mesma clareza e segurança que eu tenho ao fazer desondulação, 
                                para que você possa oferecer esse serviço com confiança e aumentar seu faturamento."
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}