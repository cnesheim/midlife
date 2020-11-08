import React, { Component }  from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, Media, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player';


class Header extends Component {

    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
          isNavOpen: false,
          isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    
    

    render() {

        const RenderPartner = ({partner}) => {
            if (partner) {
                console.log("partner", partner);
                return (
                    <React.Fragment>
                        <Media object src={partner.image} alt={partner.name} width="150" />
                        <Media body className="ml-5 mb-4">
                            <Media heading>
                                {partner.name}
                            </Media>
                            {partner.description}
                        </Media>
                        <Button className="btn btn-info"type="submit" href={partner.web} target='_blank'>
                                        Get Tickets
                        </Button>
                    </React.Fragment>
                );
            }
            return <div></div>;
        }
        const partners = this.props.partners.map(partner => {
            
            return (
                <Media tag ="li" key={partner.id}>
                <RenderPartner partner={partner}/>
            </Media>
            );
        });
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col text-right">
                                <h1>MIDLIFE</h1>
                                <h2>One nation under a groove.</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto text-bold"><p><strong></strong></p></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link text-white" to="/home">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link text-white" to="/directory">
                                        <i className="fa fa-list fa-lg" /> Band Members
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link text-white" to="/aboutus">
                                        <i className="fa fa-check fa-lg" /> About the Band
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link text-white" to="/contactus">
                                        <i className="fa fa-address-card fa-lg" /> Book Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <span className="navbar-text text-white">
                                <Button className = "bg-transparent" onClick={this.toggleModal}>
                                    <i className="fa fa-music fa-lg" /> Shows
                                </Button>
                            </span>
                            <span>
                                <a className="btn btn-social-icon btn-instagram" href="https://www.instagram.com/midlifemn/" target='_blank'><i className="fa fa-instagram" /></a>{' '}
                                <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/midlifeMN" target='_blank'><i className="fa fa-facebook-f" /></a>{' '}
                                <a className="btn btn-social-icon btn-twitter" href="https://twitter.com/midlifegroove" target='_blank'><i className="fa fa-twitter" /></a>{' '}
                                <a className="btn btn-social-icon btn-google" href="https://youtube.com/channel/UCCGtdGDVbtXuZzqjFRNHHaQ" target='_blank'><i className="fa fa-youtube" /></a> 
                            </span>
                            <div className=''>
                                <span>
                                    <ReactAudioPlayer className="audio"
                                    src="/assets/audio/26 Texts.wav"
                                    
                                    controls
                                    />
                                </span>
                            </div>
                        </Collapse>
                    </div>
                </Navbar>
                <Modal className="modal-xl" isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Shows</ModalHeader>
                    <ModalBody>
                    {partners}
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Header;