import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDirectoryItem({member}) {
    return (
        <Card>
            <Link to={`/directory/${member.id}`}>
                <CardImg width="100%" src={member.image} alt={member.name} />
                <CardImgOverlay>
                    <CardTitle>{member.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

function Directory(props) {

    const directory = props.members.map(member => {
        return (
            <div key={member.id} className="col-md-5 m-1 mb-5">
                <RenderDirectoryItem member={member} />
            </div>
        );
    });

    return (
        <div className="container-fluid home">
            <div className="row">
                <div className="col">
                    <Breadcrumb >
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Band Members</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Band Members</h2>
                    <hr />
                </div>
            </div>
            <div className="row justify-content-center">
                {directory}
            </div>
        </div>
    );
}

export default Directory;