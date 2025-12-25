import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Carlos Eduardo",
        location: "São Paulo, SP",
        text: "Comecei a oferecer desondulação depois do tutorial e já faturei mais de R$ 2.500 só no primeiro mês. Os scripts de venda fazem toda a diferença na hora de abordar o cliente.",
        rating: 5,
        service: "3 anos de experiência"
    },
    {
        name: "Rafael Santos",
        location: "Rio de Janeiro, RJ",
        text: "Eu tinha medo de estragar o cabelo do cliente, mas o tutorial mostra exatamente os cuidados que você precisa ter. Agora faço com segurança e meus clientes sempre voltam.",
        rating: 5,
        service: "5 anos de experiência"
    },
    {
        name: "Thiago Oliveira",
        location: "Belo Horizonte, MG",
        text: "Conteúdo direto ao ponto, sem enrolação. Assisti num sábado à noite e na segunda já apliquei no primeiro cliente. Valeu cada centavo.",
        rating: 5,
        service: "2 anos de experiência"
    },
    {
        name: "Lucas Ferreira",
        location: "Curitiba, PR",
        text: "O diferencial mesmo é saber como vender o serviço sem parecer insistente. Aprendi a identificar o cliente certo e a oferecer na hora certa. Resultado: mais de 80% aceitam.",
        rating: 5,
        service: "4 anos de experiência"
    },
    {
        name: "Bruno Almeida",
        location: "Fortaleza, CE",
        text: "Sou barbeiro há 6 anos e nunca tinha feito desondulação. Com o tutorial aprendi tudo do zero. Agora é um dos meus serviços mais pedidos e mais lucrativos.",
        rating: 5,
        service: "6 anos de experiência"
    },
    {
        name: "Marcelo Costa",
        location: "Porto Alegre, RS",
        text: "Investimento que se paga sozinho. Fiz 4 desondulações na primeira semana e já recuperei o valor do tutorial. Agora é só lucro.",
        rating: 5,
        service: "1 ano de experiência"
    }
];

function TestimonialCard({ testimonial, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
        >
            <div className="h-full p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-purple-100 transition-all duration-300 relative">
                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Quote className="w-12 h-12 text-[#5B2D8B]" />
                </div>
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                </div>
                
                {/* Testimonial text */}
                <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                    "{testimonial.text}"
                </p>
                
                {/* Author info */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#5B2D8B] to-purple-700 flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">
                            {testimonial.name.charAt(0)}
                        </span>
                    </div>
                    <div>
                        <div className="font-semibold text-gray-900">
                            {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-500">
                            {testimonial.location} • {testimonial.service}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function TestimonialsSection() {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-[#22C55E] font-semibold text-sm uppercase tracking-wider">
                        Depoimentos
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#5B2D8B] mt-3 mb-4">
                        Barbeiros que já estão faturando mais
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Veja o que profissionais como você estão dizendo sobre o tutorial e os resultados que conseguiram.
                    </p>
                </motion.div>
                
                {/* Stats bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
                >
                    <div className="p-4 rounded-xl bg-white border border-purple-100 text-center">
                        <div className="text-3xl font-bold text-[#5B2D8B] mb-1">4.9/5</div>
                        <div className="text-sm text-gray-600">Avaliação média</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white border border-purple-100 text-center">
                        <div className="text-3xl font-bold text-[#5B2D8B] mb-1">50+</div>
                        <div className="text-sm text-gray-600">Barbeiros formados</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white border border-purple-100 text-center">
                        <div className="text-3xl font-bold text-[#5B2D8B] mb-1">98%</div>
                        <div className="text-sm text-gray-600">Recomendariam</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white border border-purple-100 text-center">
                        <div className="text-3xl font-bold text-[#5B2D8B] mb-1">R$ 1.2k</div>
                        <div className="text-sm text-gray-600">Ganho médio/mês</div>
                    </div>
                </motion.div>
                
                {/* Testimonials grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard 
                            key={index} 
                            testimonial={testimonial} 
                            index={index}
                        />
                    ))}
                </div>
                
                {/* Trust badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-50 rounded-full border border-green-200">
                        <div className="flex -space-x-2">
                            {[...Array(5)].map((_, i) => (
                                <div 
                                    key={i}
                                    className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white flex items-center justify-center"
                                >
                                    <span className="text-white text-xs font-bold">
                                        {String.fromCharCode(65 + i)}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <span className="text-gray-700 font-medium">
                            +50 barbeiros já aumentaram seu faturamento
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}