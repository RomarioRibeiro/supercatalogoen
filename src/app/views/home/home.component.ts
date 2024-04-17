import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  catalogos = [
    { nome: 'Catálogo 1', preco: 'Copo', atacado: 'Liso', link: 'https://drive.google.com/file/d/1kKV6UGsSKs0RHPUq9f0ka5INs-PNO5yH/view?usp=sharing' },
    { nome: 'Catálogo 2', preco: 'Copo', atacado: 'Liso', link: 'https://drive.google.com/file/d/1BVYp1bBIvqvmd6o5mQmm4awS5td7e9wP/view?usp=share_link' },
    { nome: 'Catálogo 3', preco: 'Copo', atacado: 'Liso', link: '/catalogo3' },
    // Adicione mais catálogos conforme necessário
  ];


  isExternalLink(link: string): boolean {
    return link.startsWith('http') || link.startsWith('www');
  }
  


  images =
  [
    '_0000_MARROM.png',
    '_0000_PRETO.png',
    '_0000_VERMELHO-LEITOSO.png',
    '_0002_CEREJA.png',
    '_0004_VERMELHO.png',
    '_0005_AZUL-NEON.png',
    '_0007_VERDE-NEON.png',
    '_0009_CRISTAL.png',
    '_0011_PRETO.png',
    '_0011_VERMELHO-LEITOSO.png',



  ];

  responsiveOptions: any[] | undefined;

  constructor(
    private title: Title
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Super Catalogo')

    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }


}
