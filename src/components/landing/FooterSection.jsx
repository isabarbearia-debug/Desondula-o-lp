import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function FooterSection() {
    const scrollToOffer = () => {
        document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="bg-gray-900 text-white">
            {/* Final CTA */}
            <div className="py-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        Pronto para aumentar seu faturamento?
                    </h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                        Aprenda a técnica, domine a venda e comece a lucrar com desondulação ainda esta semana.
                    </p>
                    <Button 
                        onClick={() => window.open('https://pay.kiwify.com.br/128nX2S', '_blank')}
                        className="bg-[#22C55E] hover:bg-[#16A34A] text-white text-lg px-10 py-6 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                    >
                        Quero o tutorial agora
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            </div>
            
            {/* Disclaimer */}
            <div className="border-t border-gray-800">
                <div className="max-w-4xl mx-auto px-6 py-8">
                    <p className="text-sm text-gray-500 text-center leading-relaxed">
                        <strong>Aviso Legal:</strong> Os resultados variam de acordo com aplicação, rotina e perfil de clientes. 
                        O tutorial garante o método e a técnica. Este produto não substitui cursos presenciais profissionalizantes 
                        quando exigidos por regulamentação local. Consulte as normas da sua região.
                    </p>
                </div>
            </div>
            
            {/* Copyright */}
            <div className="border-t border-gray-800">
                <div className="max-w-4xl mx-auto px-6 py-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
                        <p>© {new Date().getFullYear()} Todos os direitos reservados.</p>
                        <div className="flex items-center gap-6">
                            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
                            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}