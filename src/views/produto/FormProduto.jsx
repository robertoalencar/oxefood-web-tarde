import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function FormProduto () {

	const { state } = useLocation();

	const [idProduto, setIdProduto] = useState();
	const [codigo, setCodigo] = useState();
	const [titulo, setTitulo] = useState();
	const [descricao, setDescricao] = useState();
	const [valorUnitario, setValorUnitario] = useState();
	const [tempoEntregaMinimo, setTempoEntregaMinimo] = useState();
	const [tempoEntregaMaximo, setTempoEntregaMaximo] = useState();
	const [listaCategoria, setListaCategoria] = useState([]);
	const [idCategoria, setIdCategoria] = useState();

	function salvar() {

		let produtoRequest = {

			idCategoria: idCategoria,
			codigo: codigo,
			titulo: titulo,
			descricao: descricao,
			valorUnitario: valorUnitario,
			tempoEntregaMinimo: tempoEntregaMinimo,
			tempoEntregaMaximo: tempoEntregaMaximo
		}

		if (idProduto != null) { //Alteração:

			axios.put("http://localhost:8080/api/produto/" + idProduto, produtoRequest)
			.then((response) => { console.log('Produto alterado com sucesso.') })
			.catch((error) => { console.log('Erro ao alterar um produto.') })

		} else { //Cadastro:

			axios.post("http://localhost:8080/api/produto", produtoRequest)
			.then((response) => { console.log('Produto cadastrado com sucesso.') })
			.catch((error) => { console.log('Erro ao incluir o produto.') })
		}
	}

	useEffect(() => {

		if (state != null && state.id != null) {
			axios.get("http://localhost:8080/api/produto/" + state.id)
			.then((response) => {
				setIdProduto(response.data.id)
				setCodigo(response.data.codigo)
				setTitulo(response.data.titulo)
				setDescricao(response.data.descricao)
				setValorUnitario(response.data.valorUnitario)
				setTempoEntregaMinimo(response.data.tempoEntregaMinimo)
				setTempoEntregaMaximo(response.data.tempoEntregaMaximo)
				setIdCategoria(response.data.categoria.id)
			})
		}
 
		axios.get("http://localhost:8080/api/categoriaproduto")
		.then((response) => {
			const dropDownCategorias = response.data.map(c => ({ text: c.descricao, value: c.id }));
			setListaCategoria(dropDownCategorias);
		})
 
	}, [state])
 

	return(
		<div>

			<MenuSistema tela={'produto'} />

			<div style={{marginTop: '3%'}}>

				<Container textAlign='justified' >

					{ idProduto === undefined &&
						<h2> <span style={{color: 'darkgray'}}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
					}
					{ idProduto !== undefined &&
						<h2> <span style={{color: 'darkgray'}}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
					}

					<Divider />

					<div style={{marginTop: '4%'}}>

						<Form>

							<Form.Group>

								<Form.Input
									required
									label='Título'
									placeholder='Informe o título do produto'
									width={12}
									tabIndex='1'
									maxLength="300"
									value={titulo}
									onChange={e => setTitulo(e.target.value)}
								/>

								<Form.Input
									required
									fluid
									label='Código do Produto'
									placeholder='Informe o código do produto'
									width={5}
									tabIndex='2'
									maxLength='10'
									value={codigo}
									onChange={e => setCodigo(e.target.value)}
								/>

							</Form.Group>

							<Form.Select
								required
								fluid
								tabIndex='3'
								placeholder='Selecione'
								label='Categoria'
								options={listaCategoria}
								value={idCategoria}
								onChange={(e,{value}) => {
									setIdCategoria(value)
								}}
							/>

							<Form.TextArea
								label='Descrição'
								placeholder='Informe a descrição do produto'
								tabIndex='4'
								maxLength="100000"
								value={descricao}
								onChange={e => setDescricao(e.target.value)}
							/>

							<Form.Group>

								<Form.Input
									required
									fluid
									label='Valor Unitário'
									tabIndex='5'
									name='valorUnitario'
									width={6}
									value={valorUnitario}
									onChange={e => setValorUnitario(e.target.value)}
								/>
								
								<Form.Input
									fluid
									placeholder='30'
									label='Tempo de Entrega Mínimo em Minutos'
									width={5}
									tabIndex='6'
									maxLength="3"
									value={tempoEntregaMinimo}
									onChange={e => setTempoEntregaMinimo(e.target.value)}
								/>
								
								<Form.Input
									fluid
									placeholder='40'
									label='Tempo de Entrega Máximo em Minutos'
									width={5}
									tabIndex='7'
									maxLength="3"
									value={tempoEntregaMaximo}
									onChange={e => setTempoEntregaMaximo(e.target.value)}
								/>
							</Form.Group>

							<Form.Group widths='equal' style={{marginTop: '4%', justifyContent:'space-between'}}>

								<Button
									tabIndex='8'
									label='Voltar'
									circular
									color='orange'
									icon='reply'
									as={Link} 
									to='/list-produto'
								/>

								<Button
									tabIndex='9'
									label='Salvar'
									circular
									color='blue'
									icon='save'
									floated='right'
									onClick={() => salvar()}
								/>

							</Form.Group>

						</Form>
					</div>
				</Container>
			</div>
		</div>
	)
}