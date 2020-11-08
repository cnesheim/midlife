import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './DirectoryComponent';
import MemberInfo from './InfoComponent';
import { MEMBERS } from '../shared/members';
import { COMMENTS } from '../shared/comments';
import { PARTNERS } from '../shared/partners';
import { PROMOTIONS } from '../shared/promotions';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            members: MEMBERS,
            comments: COMMENTS,
            partners: PARTNERS,
            promotions: PROMOTIONS
        };
    }

    render() {

        const HomePage = ({match}) => {
            const member = this.state.members.filter(member => member.featured)[0];
            return (
                <Home 
                    member={member}
                    promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
                    partner={this.state.partners.filter(partner => partner.featured)[0]}
                    comments={this.state.comments.filter(comment => comment.memberId === member.id)}

                />
            );
        }

        const MemberWithId = ({match}) => {
            return (
                <MemberInfo 
                    member={this.state.members.filter(member => member.id === +match.params.memberId)[0]}
                    comments={this.state.comments.filter(comment => comment.memberId === +match.params.memberId)}
                />
            );
        };

        return (
            <div className='main'>
                <Header partners={this.state.partners}/>
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/directory' render={() => <Directory members={this.state.members} />} />
                    <Route path='/directory/:memberId' component={MemberWithId} />
                    <Route exact path='/contactus' component={Contact} />
                    <Route exact path='/aboutus' render={() => <About partners={this.state.partners} />} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    };
}

export default Main;