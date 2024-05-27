import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

   catalogos = [
    { nome: 'ACCESORIOS - ACCESSORIES', preco: 'ACCESORIOS/ACCESSORIES', atacado: 'Liso',
     link: 'https://drive.google.com/file/d/1xV9Kt9UJZhMhcdOR06YyDT3ERlKb2Ps5/view?usp=sharing' , imagem:  'acessorios.png'},

    { nome: 'BOTELLA ACQUA - ACQUA BOTTLE', preco: 'BOTELLA ACQUA/ACQUA BOTTLE', atacado: 'Liso',
     link: 'https://drive.google.com/file/d/1FPCBHz59u85Tr1IntEYGQmiz0KRT_5jd/view?usp=sharing', imagem: 'acqua.png' },

    { nome: 'BRASILEIRINHO E BRASILEIRÃO', preco: 'BRASILEIRINHO/BRASILEIRÃO', atacado: 'Liso',
     link: 'https://drive.google.com/file/d/1XKB9x9PHR1FF5acN89QqzTYDaPOrwERb/view?usp=drive_link', imagem: 'brasileirinh.png' },

    { nome: 'BALDE POPCORN - POPCORN BUCKET', preco: 'BALDE POPCORN/POPCORN BUCKET', atacado: 'Liso',
     link: 'https://drive.google.com/file/d/1MeMHMOKayFm_w5I9QEAyl6WVT-1Cshlc/view?usp=drive_link', imagem: 'pipoca.png' },

    { nome: 'BALDE PREMIUM - PREMIUM BUCKET', preco: 'BALDE PREMIUM/PREMIUM BUCKET', atacado: 'Liso',
     link: 'https://drive.google.com/file/d/1XPmXmBuzoVi17CQBp9BDZJiXS2cV0YFH/view?usp=drive_link', imagem: 'balde premium.png' },

    { nome: 'BALDE 5 LITROS - 5 LITER BUCKET', preco: 'BALDE 5 LITROS /5 LITER BUCKET', atacado: 'Liso',
     link: 'https://drive.google.com/file/d/1XFq7qCjRvChcNN4hcngPzx2EPP_kWGyr/view?usp=drive_link', imagem: 'balde 5 litros.png' },

    { nome: 'CALDERETA - CALDERETA 500 - DOUBLE WALL', preco: 'CALDERETA/CALDERETA 500 DOUBLE WALL', atacado: 'Liso',
     link: 'https://drive.google.com/file/d/1zZWUQZh2eYG-56RYMjuOjg-oYTuuzehp/view?usp=sharing', imagem: 'caldereta.png' },

    { nome: 'TAZA - MUG', preco: 'TAZA/MUG', atacado: 'Liso',
     link: 'https://drive.google.com/file/d/1AEjk3FEl3PyZDc4bzRrrPG5R9iqSqjfC/view?usp=drive_link', imagem: 'caneca 500.png' },

    { nome: 'TAZA SLIM - SLIM MUG', preco: 'TAZA SLIM/SLIM MUG', atacado: 'Liso',
     link: 'https://drive.google.com/file/d/1X_ugjkpRrZ2lXukIDGHihI0GAhteJxoT/view?usp=drive_link', imagem: 'slim.png' },

    { nome: 'ROCKET BLENDER', preco: 'ROCKET BLENDER', atacado: 'Liso',
     link: 'https://drive.google.com/file/d/1yCGQBRFOBvp-CFa5mIdkJIsZ8m6s6UMW/view?usp=drive_link', imagem: 'rocket.png' },

    { nome: 'DRAFT', preco: 'DRAFT', atacado: 'Liso',
     link: 'https://drive.google.com/file/d/1XejIg4NiLDukZ0vCNSm6VAlQvai6O2WR/view?usp=sharing', imagem: 'draft.png' },

    { nome: 'VASO DE GINEBRA - GIN GLASS', preco: 'VASO DE GINEBRA/GIN GLASS', atacado: 'Liso',
     link: 'https://drive.google.com/file/d/1FQI4WOHRrhTs1uXLKLaeASZnMsb2b1QU/view?usp=sharing', imagem: 'gin.png' },

    { nome: 'LÍNEA ECO - ECO LINE', preco: 'LÍNEA ECO/ECO LINE', atacado: 'Liso',
     link: 'https://drive.google.com/file/d/16dKCZ327-S0qRqqpd39VqyFjfzFqrMPi/view?usp=sharing', imagem: 'linha eco.png' },

    { nome: 'COPA LIGHT - LIGHT GLASS - CHAMPAGNE GLASS', preco: 'COPA LIGHT/LIGHT GLASS/CHAMPAGNE GLASS', atacado: 'Liso',
     link: 'https://drive.google.com/file/d/1sc3nbwssdH8wP1YrmzbVENsm9002iRsW/view?usp=drive_link', imagem: 'taça light.png' },

    { nome: 'LONG DRINK', preco: 'LONG DRINK', atacado: 'Liso',
     link: 'https://drive.google.com/file/d/1FS58JZl_Qy5pgewwDHsrqaOnQD7fxHTt/view?usp=sharing', imagem: 'long.png' },

    { nome: 'TWISTERS', preco: 'TWISTERS', atacado: 'Liso',
     link: 'https://drive.google.com/file/d/14QCgY-QV76SSRx2DgJjeJPS9dfD_NqZu/view?usp=drive_link', imagem: 'twister.png' },

    { nome: 'MOSCOW MULE', preco: 'MOSCOW MULE', atacado: 'Liso',
     link: 'https://drive.google.com/file/d/1zj7x8MTzfPW6e4ThjpyqAEGoc-4byC4u/view?usp=sharing', imagem: 'moscow.png' },

    { nome: 'PIXEL', preco: 'PIXEL', atacado: 'Liso',
     link: 'https://drive.google.com/file/d/1Xfg9tOdpV4Qxiy6X1UzXAtqplCbVAGBn/view?usp=drive_link', imagem: 'pixel.png' },

    { nome: 'SHOT', preco: 'SHOT', atacado: 'Liso',
     link: 'https://drive.google.com/file/d/1XgqZ4UsQsjmwo9Vs9-4-2YUgDrqQOLQB/view?usp=drive_link', imagem: 'shot.png' },

    { nome: 'SPACE', preco: 'SPACE', atacado: 'Liso',
     link: 'https://drive.google.com/file/d/1Xi_c1ozN0-yRkUnviaf--K3GanLsqboM/view?usp=drive_link', imagem: 'space.png' },

    { nome: 'COPA CHANDON - CHANDON GLASS', preco: 'COPA CHANDON/CHANDON GLASS', atacado: 'Liso',
     link: 'https://drive.google.com/file/d/14JV6jVlAMsIrVLL8xLxBnIfiMI-jR4WP/view?usp=drive_link', imagem: 'chandon.png' },

    { nome: 'COPA DE VINO - WINE GLASS', preco: 'COPA DE VINO/WINE GLASS', atacado: 'Liso',
     link: 'https://drive.google.com/file/d/1udzo26vKT5qRDI3t78tlP3DR3rI0IlTR/view?usp=sharing', imagem: 'taça vinho.png' },

    { nome: 'TULIPA', preco: 'TULIPA', atacado: 'Liso',
     link: 'https://drive.google.com/file/d/1XxhEM43XxW3HrvAd9XqNzx7zG5l9nJZS/view?usp=drive_link', imagem: 'tulipa.png' },

    { nome: 'WHISKY', preco: 'WHISKY', atacado: 'Liso',
     link: 'https://drive.google.com/file/d/1YGMuPv8dkR-36xvB_lOJ4BajOiZP3Dja/view?usp=drive_link', imagem: 'whisky.png' },


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
    this.title.setTitle('Super Copo Export')
  }

}

