import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificacaoService } from 'src/app/notificao.service';
import { ProdutosService } from 'src/app/produtos.service';
import { IProduto } from '../produtos';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {
  produto: IProduto | undefined;
  quantidade = 1;

  constructor(
    private produtoService: ProdutosService,
    private route: ActivatedRoute,
    private notificacaoService: NotificacaoService
  
  ) { }

  ngOnInit(): void {
    const routeParans = this.route.snapshot.paramMap;
    const produtoId = Number(routeParans.get("id"));
    this.produto = this.produtoService.getOne(produtoId)
  }

  adicionarAoCarrinho() {
    this.notificacaoService.notificar("O produto foi adicionado ao carrinho")
  }


}
