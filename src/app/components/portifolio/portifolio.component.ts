import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.component.html',
  styleUrls: ['./portifolio.component.css']
})
export class PortifolioComponent implements OnInit {

    Objetivo = 'Adquirir conhecimento para desenvolver habilidades nas diversas áreas de TI, me capacitando ao mercado de trabalho.';
    ConhecimentosTecnicos = 'Conhecimentos Técnicos sendo adquiridos no Curso de TI do Senac (habilitação: Técnico) e diversos cursos assistidos em plataformas digitais';
    CursosEmAndamento = 'Curso Técnico em TI - Senac/RJ';
    CursosEmAndamento1 = 'Curso Angular for Beginners - Udemy';
    CursosEmAndamento2 = 'Curso Angular para Iniciantes - Matheus Battisti';
    ExperienciasProfissionais = 'Até o momento não tenho nenhuma experiência profissional';
    ExperienciasAcademicas = 'Projeto Integrador Mód II - Site Dinâmico';
    ExperienciasAcademicas1 = 'Projeto Integrador III - Sistema Corporativo';
    ExperienciasAcademica = 'Projeto Integrador IV - Redes';
    
  constructor() { }

  ngOnInit(): void {
  }

}
