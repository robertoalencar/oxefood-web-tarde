import React from "react";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';

class FormProduto extends React.Component{

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
									/>

									<Form.Input
										required
										fluid
										label='Código do Produto'
										placeholder='Informe o código do produto'
										width={5}
										tabIndex='2'
										maxLength='10'
									/>
								</Form.Group>

								<Form.TextArea
									label='Descrição'
									placeholder='Informe a descrição do produto'
									tabIndex='3'
									maxLength="100000"
								/>

								<Form.Group>

									<Form.Input
										required
										fluid
										label='Valor Unitário'
										tabIndex='5'
										name='valorUnitario'
										width={6}
									/>
                                    
									<Form.Input
										fluid
										placeholder='30'
										label='Tempo de Entrega Mínimo em Minutos'
										width={5}
										maxLength="3"
									/>
                                    
									<Form.Input
										fluid
										placeholder='40'
										label='Tempo de Entrega Máximo em Minutos'
										width={5}
										maxLength="3"
									/>
								</Form.Group>

								<Form.Group widths='equal' style={{marginTop: '4%', justifyContent:'space-between'}}>

                                    <Button
                                        inverted
                                        circular
                                        icon
                                        labelPosition='left'
                                        color='orange'
                                        onClick={this.listar}
                                        tabIndex='7'>
                                        <Icon name='reply' />
                                        Listar
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