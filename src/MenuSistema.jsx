import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, Menu } from "semantic-ui-react";
import { logout } from './views/util/AuthenticationService';

class MenuSistema extends React.Component{

    state = {
        activeItem: 'home'
    }

   handleItemClick = (e, { name }) => this.setState({ activeItem: name })

   logout = () => {
        logout()
    }


    render(){
        return(
            <>
                <Menu inverted>
                  
                    <Menu.Item
                        name='home'
                        active={this.state.activeItem === 'home'}
                        onClick={this.handleItemClick}
                        as={Link}
                        to='/home'
                    />
                   
                    <Menu.Item
                        name='cliente'
                        active={this.state.activeItem === 'cliente'}
                        onClick={this.handleItemClick}
                        as={Link}
                        to='/list-cliente'
                    />

                    <Menu.Menu className='navbar__item--pc'>
                        <Dropdown item text='Produto'>
                            <Dropdown.Menu>
                                <Dropdown.Item 
                                    name='categoria'
                                    active={this.state.activeItem === 'categoria'}
                                    onClick={this.handleItemClick}
                                    text='Categoria de Produto' 
                                    as={Link} 
                                    to='/list-categoria-produto'
                                />
                                <Dropdown.Item
                                    name='produto'
                                    active={this.state.activeItem === 'produto'}
                                    onClick={this.handleItemClick}
                                    text='Produto' 
                                    as={Link} 
                                    to='/list-produto'
                                />
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Menu>

                    <Menu.Item
                        name='entregador'
                        active={this.state.activeItem === 'entregador'}
                        onClick={this.handleItemClick}
                        as={Link}
                        to='/list-entregador'
                    />

                    <Menu.Item
                        name='comprador'
                        active={this.state.activeItem === 'comprador'}
                        onClick={this.handleItemClick}
                        as={Link}
                        to='/form-comprador'
                    />

                    <Menu.Item
                        name='Cupom Desconto'
                        active={this.state.activeItem === 'Cupom Desconto'}
                        onClick={this.handleItemClick}
                        as={Link}
                        to='/form-cupom-desconto'
                    />

                    <Menu.Item
                        className='navbar__item--mobile'
                        onClick={this.logout}
                        content='Sair'
                        as={Link}
                        to='/'
                    />


                </Menu>
            </>
        )
    }
}

export default MenuSistema;
