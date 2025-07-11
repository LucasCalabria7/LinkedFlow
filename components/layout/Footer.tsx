'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and company info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image 
                src="/assets/logo-simbolo-azul.png" 
                alt="LinkedFlow" 
                width={50} 
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-slate-600 text-sm">
              Transforme sua presença no LinkedIn com conteúdo inteligente e estratégico.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <img 
                src="/assets/selo-prime.png" 
                alt="Selo Prime" 
                className="h-12 w-auto object-contain"
              />
              <img 
                src="/assets/selo-verificada-fundo-claro.png" 
                alt="Verificada" 
                className="h-12 w-auto object-contain"
              />
            </div>
          </div>
          
          {/* Links column 1 */}
          <div>
            <h3 className="font-urbanist font-semibold text-slate-800 mb-4">Produto</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-slate-600 hover:text-linkedin transition-colors text-sm">
                  Recursos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-600 hover:text-linkedin transition-colors text-sm">
                  Preços
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-600 hover:text-linkedin transition-colors text-sm">
                  Cases de sucesso
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-600 hover:text-linkedin transition-colors text-sm">
                  Integrações
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Links column 2 */}
          <div>
            <h3 className="font-urbanist font-semibold text-slate-800 mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-slate-600 hover:text-linkedin transition-colors text-sm">
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-600 hover:text-linkedin transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-600 hover:text-linkedin transition-colors text-sm">
                  Carreiras
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-600 hover:text-linkedin transition-colors text-sm">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Links column 3 */}
          <div>
            <h3 className="font-urbanist font-semibold text-slate-800 mb-4">Suporte</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-slate-600 hover:text-linkedin transition-colors text-sm">
                  Central de ajuda
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-600 hover:text-linkedin transition-colors text-sm">
                  Política de privacidade
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-600 hover:text-linkedin transition-colors text-sm">
                  Termos de uso
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-600 hover:text-linkedin transition-colors text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom section with copyright */}
        <div className="border-t border-slate-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} LinkedFlow. Todos os direitos reservados.
          </p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" aria-label="LinkedIn" className="text-slate-400 hover:text-linkedin">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </Link>
            <Link href="#" aria-label="Twitter" className="text-slate-400 hover:text-linkedin">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </Link>
            <Link href="#" aria-label="Instagram" className="text-slate-400 hover:text-linkedin">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
