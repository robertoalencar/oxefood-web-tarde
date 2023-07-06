import axios from 'axios';
import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Form, Icon, Menu, Segment, Table } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';
import { ENDERECO_API } from '../../views/util/Constantes';

class ListProduto extends React.Component{

    state = {

       listaProdutos: [],
       menuFiltro: false,
       codigo: '',
       titulo: '',
       idCategoria: '',
       listaCategoriaProduto: []
    }

    componentDidMount = () => {
      
        this.carregarLista();
      
    }

    carregarLista = () => {

        axios.get(ENDERECO_API + "api/produto")
        .then((response) => {
          
            this.setState({
                listaProdutos: response.data
            })
        })

        axios.get(ENDERECO_API + "api/categoriaproduto")
       .then((response) => {

           const dropDownCategorias = [];
           dropDownCategorias.push({ text: '', value: '' });
           response.data.map(c => (
               dropDownCategorias.push({ text: c.descricao, value: c.id })
           ))
        
           this.setState({
               listaCategoriaProduto: dropDownCategorias
           })
       })

    };

    handleMenuFiltro = () => {
        this.state.menuFiltro === true ? this.setState({menuFiltro: false}) : this.setState({menuFiltro: true})
    }
 
    handleChangeCodigo = (e, {value}) => {
        this.setState({
            codigo: value
        }, () => this.filtrarProdutos())
    }
 
    handleChangeTitulo = (e, {value}) => {
        this.setState({
            titulo: value
        }, () => this.filtrarProdutos())
    }
 
    handleChangeCategoriaProduto = (e, { value }) => {
        this.setState({
            idCategoria: value,
        }, () => this.filtrarProdutos())
    }

    filtrarProdutos = () => {

        let formData = new FormData();
 
        formData.append('codigo', this.state.codigo);
        formData.append('titulo', this.state.titulo);
        formData.append('idCategoria', this.state.idCategoria);
 
        axios.post(ENDERECO_API + "api/produto/filtrar", formData)
        .then((response) => {
            this.setState({
                listaProdutos: response.data
            })
        })
    }

    render(){
        return(
            <div>

                <MenuSistema />

                <div style={{marginTop: '3%'}}>

                    <Container textAlign='justified' >

                        <h2> Produto </h2>

                        <Divider />

                        <div style={{marginTop: '4%'}}>

                            <Menu compact>
                               <Menu.Item
                                   name='menuFiltro'
                                   active={this.state.menuFiltro === true}
                                   onClick={this.handleMenuFiltro}
                               >
                                   <Icon name='filter' />
                                   Filtrar
                               </Menu.Item>
                            </Menu>


                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                                floated='right'
                            >
                                <Icon name='clipboard outline' />
                                <Link to={'/form-produto'}>Novo</Link>
                            </Button>

                            { this.state.menuFiltro ?
                                <Segment>
                                    <Form className="form-filtros">
                                        <Form.Input
                                            icon="search"
                                            value={this.state.codigo}
                                            onChange={this.handleChangeCodigo}
                                            label='Código do Produto'
                                            placeholder='Filtrar por Código do Produto'
                                            labelPosition='left'
                                            width={4}
                                        />
                                        <Form.Group widths='equal'>
                                            <Form.Input
                                                icon="search"
                                                value={this.state.titulo}
                                                onChange={this.handleChangeTitulo}
                                                label='Título'
                                                placeholder='Filtrar por título'
                                                labelPosition='left'
                                            />                              
                                            <Form.Select
                                                placeholder='Filtrar por Categoria'
                                                label='Categoria'
                                                options={this.state.listaCategoriaProduto}
                                                value={this.state.idCategoria}
                                                onChange={this.handleChangeCategoriaProduto}
                                            /> 
                                        </Form.Group>
                                    </Form>
                                </Segment>:""
                            }


                            <br/><br/><br/>
                      
                            <Table color='orange' sortable celled>

                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>Código</Table.HeaderCell>
                                        <Table.HeaderCell>Categoria</Table.HeaderCell>
                                        <Table.HeaderCell>Título</Table.HeaderCell>
                                        <Table.HeaderCell>Descrição</Table.HeaderCell>
                                        <Table.HeaderCell>Valor Unitário</Table.HeaderCell>
                                        <Table.HeaderCell>Tempo de Mínimo de Entrega</Table.HeaderCell>
                                        <Table.HeaderCell>Tempo de Máximo de Entrega</Table.HeaderCell>
                                        <Table.HeaderCell textAlign='center' width={2}>Ações</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                          
                                <Table.Body>

                                    { this.state.listaProdutos.map(p => (

                                        <Table.Row key={p.id}>
                                            <Table.Cell>{p.codigo}</Table.Cell>
                                            <Table.Cell>{p.categoria.descricao}</Table.Cell>
                                            <Table.Cell>{p.titulo}</Table.Cell>
                                            <Table.Cell>{p.descricao}</Table.Cell>
                                            <Table.Cell>{p.valorUnitario}</Table.Cell>
                                            <Table.Cell>{p.tempoEntregaMinimo}</Table.Cell>
                                            <Table.Cell>{p.tempoEntregaMaximo}</Table.Cell>
                                            <Table.Cell textAlign='center'>
                                              
                                                <Button
                                                    inverted
                                                    circular
                                                    color='green'
                                                    title='Clique aqui para editar os dados deste cliente'
                                                    icon>
                                                        <Link to="/form-produto" state={{id: p.id}} style={{color: 'green'}}> <Icon name='edit' /> </Link>
                                                </Button>
                                                
                                                &nbsp;
                                                   
                                                <Button
                                                   inverted
                                                   circular
                                                   icon='trash'
                                                   color='red'
                                                   title='Clique aqui para remover este cliente' />

                                            </Table.Cell>
                                        </Table.Row>
                                    ))}

                               </Table.Body>
                           </Table>
                       </div>
                   </Container>
               </div>
           </div>
       )
   }
}

export default ListProduto;
