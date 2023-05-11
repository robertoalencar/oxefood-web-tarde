import axios from "axios";
import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import { ENDERECO_API } from '../../views/util/Constantes';

const ufList = [
	{ key: 'o', text: 'Alagoas', value: 'AL' },
	{ key: 'f', text: 'Paraíba', value: 'PB' },
	{ key: 'm', text: 'Pernambuco', value: 'PE' },
  ]

class FormEntregador extends React.Component{

	state = {
		nome: null,
		cpf: null,
		rg: null,
		dataNascimento: null,
		foneCelular: null,
		foneFixo: null,
		qtdEntregasRealizadas: null,
		valorFrete: null,
		enderecoRua: null,
		enderecoNumero: null,
		enderecoBairro: null,
		enderecoCep: null,
		enderecoCidade: null,
		enderecoEstado: null,
		enderecoComplemento: null,
		ativo: true
	}

	salvar = () => {

		let entregadorRequest = {

			nome: this.state.nome,
			cpf: this.state.cpf,
			rg: this.state.rg,
			dataNascimento: this.state.dataNascimento,
			foneCelular: this.state.foneCelular,
			foneFixo: this.state.foneFixo,
			qtdEntregasRealizadas: parseInt(this.state.qtdEntregasRealizadas),
			valorFrete: parseFloat(this.state.valorFrete),
			enderecoRua: this.state.enderecoRua,
			enderecoNumero: this.state.enderecoNumero,
			enderecoBairro: this.state.enderecoBairro,
			enderecoCep: this.state.enderecoCep,
			enderecoCidade: this.state.enderecoCidade,
			enderecoUf: this.state.enderecoEstado,
			enderecoComplemento: this.state.enderecoComplemento,
			ativo: this.state.ativo
		}

		// console.log(entregadorRequest)

		axios.post(ENDERECO_API + "api/entregador", entregadorRequest)
		.then((response) => {
			console.log('Entregador cadastrado com sucesso.')
		})
		.catch((error) => {
			console.log('Erro ao incluir o um entregador.')
		})
	}

    render(){
        return(
            <div>

                <div style={{marginTop: '3%'}}>

                    <Container textAlign='justified' >

                        <h2> <span style={{color: 'darkgray'}}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                        <Divider />

						<div style={{marginTop: '4%'}}>

							<Form>

								<Form.Group>

									<Form.Input
										fluid
										label='Nome'
										width={8}
										required
										value={this.state.nome}
										onChange={e => this.setState({nome: e.target.value})}
									/>

									<Form.Input
										fluid
										label='CPF'
										required
										width={4}>
											<InputMask 
												mask="999.999.999-99"
												value={this.state.cpf}
												onChange={e => this.setState({cpf: e.target.value})}
											/>
										</Form.Input>

									<Form.Input
										fluid
										label='RG'
										width={4}
										value={this.state.rg}
										onChange={e => this.setState({rg: e.target.value})}
									/>

								</Form.Group>

								<Form.Group>

									<Form.Input
										fluid
										label='DT Nascimento'
										width={3}>
											<InputMask 
												mask="99/99/9999" 
												placeholder="Ex: 20/03/1985"
												value={this.state.dataNascimento}
												onChange={e => this.setState({dataNascimento: e.target.value})}
											/>
									</Form.Input>
									

									<Form.Input
										fluid
										label='Fone Celular'
										required
										width={4}>
											<InputMask 
												mask="(99) 99999.9999"
												value={this.state.foneCelular}
												onChange={e => this.setState({foneCelular: e.target.value})}
											/>
									</Form.Input>
									

									<Form.Input
										fluid
										label='Fone Fixo'
										width={4}>
											<InputMask 
												mask="(99) 9999.9999"
												value={this.state.foneFixo}
												onChange={e => this.setState({foneFixo: e.target.value})}
											/>
										</Form.Input>
									

									<Form.Input
										fluid
										label='QTD Entregas Realizadas'
										width={3}
										value={this.state.qtdEntregasRealizadas}
										onChange={e => this.setState({qtdEntregasRealizadas: e.target.value})}
									/>

									<Form.Input
										fluid
										label='Valor Por Frete'
										width={3}
										value={this.state.valorFrete}
										onChange={e => this.setState({valorFrete: e.target.value})}
									/>
									
								</Form.Group>

								<Form.Group>

									<Form.Input
										fluid
										label='Rua'
										width={13}
										value={this.state.enderecoRua}
										onChange={e => this.setState({enderecoRua: e.target.value})}
									/>

									<Form.Input
										fluid
										label='Número'
										width={3}
										value={this.state.enderecoNumero}
										onChange={e => this.setState({enderecoNumero: e.target.value})}
									/>

								</Form.Group>

									<Form.Group>

									<Form.Input
										fluid
										label='Bairro'
										width={7}
										value={this.state.enderecoBairro}
										onChange={e => this.setState({enderecoBairro: e.target.value})}
									/>

									<Form.Input
										fluid
										label='Cidade'
										width={7}
										value={this.state.enderecoCidade}
										onChange={e => this.setState({enderecoCidade: e.target.value})}
									/>

									<Form.Input
										fluid
										label='CEP'
										width={2}>
											<InputMask 
												mask="99.999-999"
												value={this.state.enderecoCep}
												onChange={e => this.setState({enderecoCep: e.target.value})}
											/>
										</Form.Input>
									

								</Form.Group>
								
								<Form.Select
									fluid
									label='UF'
									options={ufList}
									placeholder='Selecione'
									value={this.state.enderecoEstado}
									onChange={(e,{value}) => {
										this.setState({enderecoEstado: value})
									}}
								/>

								<Form.Input
									fluid
									label='Complemento'
									value={this.state.enderecoComplemento}
									onChange={e => this.setState({enderecoComplemento: e.target.value})}
								/>

								<Form.Group inline>

									<label>Ativo: </label>

									<Form.Radio
										label='Sim'
										checked={this.state.ativo}
										onChange={e => this.setState({
											ativo: true
										})}
									/>
									
									<Form.Radio
										label='Não'
										checked={!this.state.ativo}
										onChange={e => this.setState({
											ativo: false
										})}
									/>

								</Form.Group>
								
								<Form.Group widths='equal' style={{marginTop: '4%'}}  className='form--empresa-salvar'>

									<Button
										type="button"
										inverted
										circular
										icon
										labelPosition='left'
										color='orange'
										onClick={this.listar}
										>
										<Icon name='reply' />
										Voltar
									</Button>

									<Container textAlign='right'>
										
										<Button
											inverted
											circular
											icon
											labelPosition='left'
											color='blue'
											floated='right'
											onClick={this.salvar}
										>
											<Icon name='save' />
											Salvar
										</Button>
										
									</Container>

								</Form.Group>

							</Form>
						</div>
                    </Container>
                </div>
			</div>
		)
	}
}

	export default FormEntregador;