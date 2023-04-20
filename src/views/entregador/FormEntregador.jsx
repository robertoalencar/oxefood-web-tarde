import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';

const ufList = [
	{ key: 'o', text: 'Alagoas', value: 'AL' },
	{ key: 'f', text: 'Paraíba', value: 'PB' },
	{ key: 'm', text: 'Pernambuco', value: 'PE' },
  ]

class FormEntregador extends React.Component{

	state = {
		nome: '',
		cpf: '',
		rg: '',
		dataNascimento: '',
		foneCelular: '',
		foneFixo: '',
		qtdEntregasRealizadas: '',
		valorFrete: '',
		enderecoRua: '',
		enderecoNumero: '',
		enderecoBairro: '',
		enderecoCep: '',
		enderecoCidade: '',
		enderecoEstado: '',
		enderecoComplemento: ''
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
									/>

									<Form.Input
										fluid
										label='CPF'
										required
										width={4}>
											<InputMask 
												mask="999.999.999-99"/>
										</Form.Input>

									<Form.Input
										fluid
										label='RG'
										width={4}
									/>

								</Form.Group>

								<Form.Group>

									<Form.Input
										fluid
										label='DT Nascimento'
										width={3}>
											<InputMask mask="99/99/9999" placeholder="Ex: 20/03/1985"/>
									</Form.Input>
									

									<Form.Input
										fluid
										label='Fone Celular'
										required
										width={4}>
											<InputMask mask="(99) 99999.9999"/>
									</Form.Input>
									

									<Form.Input
										fluid
										label='Fone Fixo'
										width={4}>
											<InputMask mask="(99) 9999.9999"/>
										</Form.Input>
									

									<Form.Input
										fluid
										label='QTD Entregas Realizadas'
										width={3}
									/>

									<Form.Input
										fluid
										label='Valor Por Frete'
										width={3}
									/>
									
								</Form.Group>

								<Form.Group>

									<Form.Input
										fluid
										label='Rua'
										width={13}
									/>

									<Form.Input
										fluid
										label='Número'
										width={3}
									/>

								</Form.Group>

									<Form.Group>

									<Form.Input
										fluid
										label='Bairro'
										width={7}
									/>

									<Form.Input
										fluid
										label='Cidade'
										width={7}
									/>

									<Form.Input
										fluid
										label='CEP'
										width={2}>
											<InputMask mask="99.999-9999"/>
										</Form.Input>
									

								</Form.Group>
								
								<Form.Select
									fluid
									label='UF'
									options={ufList}
									placeholder='Selecione'
								/>

								<Form.Input
									fluid
									label='Complemento'
								/>

								<Form.Group inline>

									<label>Ativo: </label>

									<Form.Radio
										label='Sim'
										value='Sim'
										checked={true}
									/>
									
									<Form.Radio
										label='Não'
										value='Não'
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