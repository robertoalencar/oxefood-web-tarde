import axios from "axios";
import React, { useState } from "react";
import InputMask from 'react-input-mask';
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

const ufList = [
	{ 
		key: 'o', 
		text: 'Alagoas', 
		value: 'AL' 
	},
	{ 
		key: 'f', 
		text: 'Paraíba', 
		value: 'PB' 
	},
	{ 
		key: 'm', 
		text: 'Pernambuco', 
		value: 'PE' 
	},
]

export default function FormEntregador () {

	const { state } = useLocation();

	const [idEntregador, setIdEntregador] = useState();
	const [nome, setNome] = useState();
	const [cpf, setCpf] = useState();
	const [rg, setRg] = useState();
	const [dataNascimento, setDataNascimento] = useState();
	const [foneCelular, setFoneCelular] = useState();
	const [foneFixo, setFoneFixo] = useState();
	const [qtdEntregasRealizadas, setQtdEntregasRealizadas] = useState();
	const [valorFrete, setValorFrete] = useState();
	const [enderecoRua, setEnderecoRua] = useState();
	const [enderecoNumero, setEnderecoNumero] = useState();
	const [enderecoBairro, setEnderecoBairro] = useState();
	const [enderecoCep, setEnderecoCep] = useState();
	const [enderecoCidade, setEnderecoCidade] = useState();
	const [enderecoEstado, setEnderecoEstado] = useState();
	const [enderecoComplemento, setEnderecoComplemento] = useState();
	const [ativo, setAtivo] = useState(true);

	function formatarData(dataParam) {

        if (dataParam === null || dataParam === '') {
            return ''
        }
        
        let dia = dataParam.substr(8,2);
        let mes = dataParam.substr(5,2);
        let ano = dataParam.substr(0,4);
        let dataFormatada = dia + '/' + mes + '/' + ano;

        return dataFormatada
    }

	function salvar() {

		let entregadorRequest = {

			nome: nome,
			cpf: cpf,
			rg: rg,
			dataNascimento: dataNascimento,
			foneCelular: foneCelular,
			foneFixo: foneFixo,
			qtdEntregasRealizadas: parseInt(qtdEntregasRealizadas),
			valorFrete: parseFloat(valorFrete),
			enderecoRua: enderecoRua,
			enderecoNumero: enderecoNumero,
			enderecoBairro: enderecoBairro,
			enderecoCep: enderecoCep,
			enderecoCidade: enderecoCidade,
			enderecoUf: enderecoEstado,
			enderecoComplemento: enderecoComplemento,
			ativo: ativo
		}

		if (idEntregador != null) { //Alteração:

			axios.put("http://localhost:8080/api/entregador/" + idEntregador, entregadorRequest)
			.then((response) => { console.log('Entregador alterado com sucesso.') })
			.catch((error) => { console.log('Erro ao alter um Entregador.') })

		} else { //Cadastro:
			
			axios.post("http://localhost:8080/api/entregador", entregadorRequest)
			.then((response) => { console.log('Entregador cadastrado com sucesso.') })
			.catch((error) => { console.log('Erro ao incluir o Entregador.') })
		}
	}

	return(
		<div>

			<MenuSistema tela={'entregador'} />

			<div style={{marginTop: '3%'}}>

				<Container textAlign='justified' >

					{ idEntregador === undefined &&
						<h2> <span style={{color: 'darkgray'}}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
					}
					{ idEntregador !== undefined &&
						<h2> <span style={{color: 'darkgray'}}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
					}

					<Divider />

					<div style={{marginTop: '4%'}}>

						<Form>

							<Form.Group>

								<Form.Input
									fluid
									label='Nome'
									width={8}
									required
									value={nome}
									onChange={e => setNome(e.target.value)}
								/>

								<Form.Input
									fluid
									label='CPF'
									required
									width={4}>
										<InputMask 
											mask="999.999.999-99"
											value={cpf}
											onChange={e => setCpf(e.target.value)}
										/>
									</Form.Input>

								<Form.Input
									fluid
									label='RG'
									width={4}
									value={rg}
									onChange={e => setRg(e.target.value)}
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
											value={dataNascimento}
											onChange={e => setDataNascimento(e.target.value)}
										/>
								</Form.Input>
								

								<Form.Input
									fluid
									label='Fone Celular'
									required
									width={4}>
										<InputMask 
											mask="(99) 99999.9999"
											value={foneCelular}
											onChange={e => setFoneCelular(e.target.value)}
										/>
								</Form.Input>
								

								<Form.Input
									fluid
									label='Fone Fixo'
									width={4}>
										<InputMask 
											mask="(99) 9999.9999"
											value={foneFixo}
											onChange={e => setFoneFixo(e.target.value)}
										/>
									</Form.Input>
								

								<Form.Input
									fluid
									label='QTD Entregas Realizadas'
									width={3}
									value={qtdEntregasRealizadas}
									onChange={e => setQtdEntregasRealizadas(e.target.value)}
								/>

								<Form.Input
									fluid
									label='Valor Por Frete'
									width={3}
									value={valorFrete}
									onChange={e => setValorFrete(e.target.value)}
								/>
								
							</Form.Group>

							<Form.Group>

								<Form.Input
									fluid
									label='Rua'
									width={13}
									value={enderecoRua}
									onChange={e => setEnderecoRua(e.target.value)}
								/>

								<Form.Input
									fluid
									label='Número'
									width={3}
									value={enderecoNumero}
									onChange={e => setEnderecoNumero(e.target.value)}
								/>

							</Form.Group>

								<Form.Group>

								<Form.Input
									fluid
									label='Bairro'
									width={7}
									value={enderecoBairro}
									onChange={e => setEnderecoBairro(e.target.value)}
								/>

								<Form.Input
									fluid
									label='Cidade'
									width={7}
									value={enderecoCidade}
									onChange={e => setEnderecoCidade(e.target.value)}
								/>

								<Form.Input
									fluid
									label='CEP'
									width={2}>
										<InputMask 
											mask="99.999-999"
											value={enderecoCep}
											onChange={e => setEnderecoCep(e.target.value)}
										/>
									</Form.Input>
								

							</Form.Group>
							
							<Form.Select
								fluid
								label='UF'
								options={ufList}
								placeholder='Selecione'
								value={enderecoEstado}
								onChange={(e,{value}) => {
									setEnderecoEstado(value)
								}}
							/>

							<Form.Input
								fluid
								label='Complemento'
								value={enderecoComplemento}
								onChange={e => setEnderecoComplemento(e.target.value)}
							/>

							<Form.Group inline>

								<label>Ativo: </label>

								<Form.Radio
									label='Sim'
									checked={ativo}
									onChange={e => setAtivo(true)}
								/>
								
								<Form.Radio
									label='Não'
									checked={!ativo}
									onChange={e => setAtivo(false)}
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
								>
									<Icon name='reply' />
									<Link to={'/list-entregador'}>Voltar</Link>
								</Button>

								<Container textAlign='right'>
									
									<Button
										inverted
										circular
										icon
										labelPosition='left'
										color='blue'
										floated='right'
										onClick={() => salvar()}
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