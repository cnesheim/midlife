import React from 'react';
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderMember({member}) { 
    return ( 
        <div className="col-md-5 m-1">
            <Card>
                <CardImg top src={member.image} alt={member.name} />
                <CardBody >
                    <CardText>{member.description}</CardText>
                </CardBody>
            </Card>
        </div>
        );
}

function RenderComments({comments}) {
    if (comments) {
        return (
            <div className='col-md-5 m-1'>
            <h4 className="text-light">Bio</h4>
            {comments.map(comm => {
                return (<div className="text-light"> 
                    {comm.text}<br />
                    -- {comm.author}<br /> Hometown: {comm.hometown}
                        </div>
                    );
                })
            }
            </div>
        );
    }
    return <div />;
}

function MemberInfo(props) {
    if (props.member){
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.member.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.member.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderMember member={props.member} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        );
    }
    return <div />;
}
export default MemberInfo;