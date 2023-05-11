import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import { ENDERECO_API } from '../../views/util/Constantes';

class FormProduto extends React.Component{

	state = {

		codigo: null,
		titulo: null,
		descricao: null,
		valorUnitario: null,
		tempoEntregaMinimo: null,
		tempoEntregaMaximo: null
	}

	salvar = () => {

		let produtoRequest = {

			codigo: this.state.codigo,
			titulo: this.state.titulo,
			descricao: this.state.descricao,
			valorUnitario: this.state.valorUnitario,
			tempoEntregaMinimo: this.state.tempoEntregaMinimo,
			tempoEntregaMaximo: this.state.tempoEntregaMaximo
		}

		axios.post(ENDERECO_API + "api/produto", produtoRequest)
		.then((response) => {
			console.log('Produto cadastrado com sucesso.')
		})
		.catch((error) => {
			console.log('Erro ao incluir o um produto.')
		})
	}

    render(){
        return(
            <div>

                <div style={{marginTop: '3%'}}>

                    <Container textAlign='justified' >

                        <h2> <span style={{color: 'darkgray'}}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                        <Divider />

                        <div style={{marginTop: '4%'}}>

							<Form>

								<Form.Group>
									<Form.Input
										required
										label='Título'
										placeholder='Informe o título do produto'
										tabIndex='1'
										width={11}
										maxLength="300"
										value={this.state.titulo}
										onChange={e => this.setState({titulo: e.target.value})}
									/>

									<Form.Input
										required
										fluid
										label='Código do Produto'
										placeholder='Informe o código do produto'
										width={5}
										tabIndex='2'
										maxLength='10'
										value={this.state.codigo}
										onChange={e => this.setState({codigo: e.target.value})}
									/>
								</Form.Group>

								<Form.TextArea
									label='Descrição'
									placeholder='Informe a descrição do produto'
									tabIndex='3'
									maxLength="100000"
									value={this.state.descricao}
									onChange={e => this.setState({descricao: e.target.value})}
								/>

								<Form.Group>

									<Form.Input
										required
										fluid
										label='Valor Unitário'
										tabIndex='5'
										name='valorUnitario'
										width={6}
										value={this.state.valorUnitario}
										onChange={e => this.setState({valorUnitario: e.target.value})}
									/>
                                    
									<Form.Input
										fluid
										placeholder='30'
										label='Tempo de Entrega Mínimo em Minutos'
										width={5}
										maxLength="3"
										value={this.state.tempoEntregaMinimo}
										onChange={e => this.setState({tempoEntregaMinimo: e.target.value})}
									/>
                                    
									<Form.Input
										fluid
										placeholder='40'
										label='Tempo de Entrega Máximo em Minutos'
										width={5}
										maxLength="3"
										value={this.state.tempoEntregaMaximo}
										onChange={e => this.setState({tempoEntregaMaximo: e.target.value})}
									/>
								</Form.Group>

								<Form.Group widths='equal' style={{marginTop: '4%', justifyContent:'space-between'}}>

									<Button
										type="button"
										inverted
										circular
										icon
										labelPosition='left'
										color='orange'
									>
										<Icon name='reply' />
										<Link to={'/list-produto'}>Voltar</Link>
									</Button>

                                    <Button
                                        inverted
                                        circular
                                        icon
                                        labelPosition='left'
                                        primary
                                        floated='right'
                                        onClick={this.salvar}
                                        tabIndex='8'>
                                        <Icon name='save' />
                                        Salvar
                                    </Button>

                                </Form.Group>

							</Form>
						</div>
                    </Container>
                </div>
			</div>
		)
	}
}

export default FormProduto;