import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

   catalogos = [
    { nome: 'ACCESORIOS - ACCESSORIES', preco: 'Acessorios', atacado: 'Liso',
     link: 'https://drive.google.com/file/d/1xV9Kt9UJZhMhcdOR06YyDT3ERlKb2Ps5/view?usp=sharing' , imagem:  'TAMPAS E ACESSORIOS.png'},

    { nome: 'BOTELLA ACQUA - ACQUA BOTTLE', preco: 'Garrafa/Tampa', atacado: 'Liso',
     link: 'https://drive.google.com/file/d/10bnoBmGJov7KH3UHRcNY7YLxFf2tFIPe/view?usp=sharing', imagem: 'acqua bio.png' },

    { nome: 'BRASILEIRINHO E BRASILEIRÃO', preco: 'Copo', atacado: 'Liso',
     link: 'https://drive.google.com/file/d/1XKB9x9PHR1FF5acN89QqzTYDaPOrwERb/view?usp=drive_link', imagem: 'BRASILEIRO.png' },

    { nome: 'BALDE POPCORN - POPCORN BUCKET', preco: 'Balde Pipoca', atacado: 'Liso',
     link: 'https://drive.google.com/file/d/1MeMHMOKayFm_w5I9QEAyl6WVT-1Cshlc/view?usp=drive_link', imagem: 'BALDE PIPOCA.png' },

    { nome: 'BALDE PREMIUM - PREMIUM BUCKET', preco: 'Balde Premium', atacado: 'Liso',
     link: 'https://drive.google.com/file/d/1XPmXmBuzoVi17CQBp9BDZJiXS2cV0YFH/view?usp=drive_link', imagem: 'BALDE PREMIUM.png' },

    { nome: 'BALDE 5 LITROS - 5 LITER BUCKET', preco: 'Balde 5 L', atacado: 'Liso',
     link: 'https://drive.google.com/file/d/1XFq7qCjRvChcNN4hcngPzx2EPP_kWGyr/view?usp=drive_link', imagem: 'BALDE 5L.png' },

    { nome: 'CALDERETA - CALDERETA 500 - DOUBLE WALL', preco: 'Copo', atacado: 'Liso',
     link: 'https://drive.google.com/file/d/1zZWUQZh2eYG-56RYMjuOjg-oYTuuzehp/view?usp=sharing', imagem: 'CALDERETAS.png' },

    { nome: 'TAZA - MUG', preco: 'Canecas', atacado: 'Liso',
     link: 'https://drive.google.com/file/d/1AEjk3FEl3PyZDc4bzRrrPG5R9iqSqjfC/view?usp=drive_link', imagem: 'CANECA 300 E 500.png' },

    { nome: 'TAZA SLIM - SLIM MUG', preco: 'Caneca', atacado: 'Liso',
     link: 'https://drive.google.com/file/d/1X_ugjkpRrZ2lXukIDGHihI0GAhteJxoT/view?usp=drive_link', imagem: 'CANECA SLIM.png' },

    { nome: 'ROCKET BLENDER', preco: 'Garrafa Rockert', atacado: 'Liso',
     link: 'https://drive.google.com/file/d/1yCGQBRFOBvp-CFa5mIdkJIsZ8m6s6UMW/view?usp=drive_link', imagem: 'ROCKET BLENDER.png' },

    { nome: 'DRAFT', preco: 'Copo', atacado: 'Liso',
     link: 'https://drive.google.com/file/d/1XejIg4NiLDukZ0vCNSm6VAlQvai6O2WR/view?usp=sharing', imagem: 'DRAFT.png' },

    { nome: 'VASO DE GINEBRA - GIN CUP', preco: 'Taça', atacado: 'Liso',
     link: 'https://drive.google.com/file/d/10lA0xvT-lOiTO_d3yA_RE3JzBmE3K7oT/view?usp=sharing', imagem: 'HAPPY GIN.png' },
     
    { nome: 'LÍNEA ECO - ECO LINE', preco: 'Copos ECO', atacado: 'Liso',
     link: 'https://drive.google.com/file/d/16dKCZ327-S0qRqqpd39VqyFjfzFqrMPi/view?usp=sharing', imagem: 'linha eco.png' },

    { nome: 'COPA LIGHT - LIGHT CUP - CHAMPAGNE', preco: 'Copos Long Drinks', atacado: 'Liso',
     link: 'https://drive.google.com/file/d/1sc3nbwssdH8wP1YrmzbVENsm9002iRsW/view?usp=drive_link', imagem: 'LONG DRINK.png' },

    { nome: 'TWISTERS', preco: 'Copos Twister', atacado: 'Liso',
     link: 'https://drive.google.com/file/d/14QCgY-QV76SSRx2DgJjeJPS9dfD_NqZu/view?usp=drive_link', imagem: 'TWISTER.png' },

    { nome: 'MOSCOW MULE', preco: 'Caneca', atacado: 'Liso',
     link: 'https://drive.google.com/file/d/1zj7x8MTzfPW6e4ThjpyqAEGoc-4byC4u/view?usp=sharing', imagem: 'MOSCOW MULE.png' },

    { nome: 'PIXEL', preco: 'Copo', atacado: 'Liso',
     link: 'https://drive.google.com/file/d/1Xfg9tOdpV4Qxiy6X1UzXAtqplCbVAGBn/view?usp=drive_link', imagem: 'PIXEL.png' },

    { nome: 'SHOT', preco: 'Copo de doze', atacado: 'Liso',
     link: 'https://drive.google.com/file/d/1XgqZ4UsQsjmwo9Vs9-4-2YUgDrqQOLQB/view?usp=drive_link', imagem: 'SHOT.png' },

    { nome: 'SPACE', preco: 'Copo', atacado: 'Liso',
     link: 'https://drive.google.com/file/d/1Xi_c1ozN0-yRkUnviaf--K3GanLsqboM/view?usp=drive_link', imagem: 'SPACE.png' },

    { nome: 'TACA CHANDON', preco: 'Taça', atacado: 'Liso',
     link: 'https://drive.google.com/file/d/113Htf7AmbpPxLKsUTBgwTAXVF1uLfONg/view?usp=sharing', imagem: 'TAÇA CHANDON.png' },

    { nome: 'TACA LIGHT', preco: 'Taça', atacado: 'Liso',
     link: 'https://drive.google.com/file/d/115jvSe7vOdGp7DrrKAeBESv6W-pahMUN/view?usp=sharing', imagem: 'TAÇA LIGHT.png' },

    { nome: 'COPA DE VINO - GLASS OF WINE', preco: 'Taça', atacado: 'Liso',
     link: 'https://drive.google.com/file/d/1udzo26vKT5qRDI3t78tlP3DR3rI0IlTR/view?usp=sharing', imagem: 'TAÇA VINHO.png' },

    { nome: 'TULIPA', preco: 'Copo', atacado: 'Liso',
     link: 'https://drive.google.com/file/d/1XxhEM43XxW3HrvAd9XqNzx7zG5l9nJZS/view?usp=drive_link', imagem: 'TULIPA.png' },

    { nome: 'WHISKY', preco: 'Copo', atacado: 'Liso',
     link: 'https://drive.google.com/file/d/1YGMuPv8dkR-36xvB_lOJ4BajOiZP3Dja/view?usp=drive_link', imagem: 'WHISKY.png' },

    { nome: 'PINTURAS ESPECIAIS', preco: 'Variedades de Copos', atacado: 'Liso',
     link: 'https://drive.google.com/file/d/1kKV6UGsSKs0RHPUq9f0ka5INs-PNO5yH/view?usp=sharing', imagem: 'PINTURAS ESPECIAIS.png' },

    { nome: 'INSUMOS', preco: 'Produtos', atacado: 'Liso',
     link: 'https://drive.google.com/file/d/1BVYp1bBIvqvmd6o5mQmm4awS5td7e9wP/view?usp=share_link', imagem: 'INSUMOS.png' },

    // Adicione mais catálogos conforme necessário
  ];

  imagem = [
    'TAMPAS E ACESSORIOS.png',
    'acqua bio.png'
  ]

  
  isExternalLink(link: string): boolean {
    return link.startsWith('http') || link.startsWith('www');
  }

  constructor(
    private title: Title
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Catalogo Atacado')
  }

}

