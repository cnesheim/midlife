import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import ReactPlayer from 'react-player/youtube';


function RenderCard({item, comments}) {
    return (
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText className='homecard'>              
                    <RenderComments comments={comments} />
                </CardText>
            
            </CardBody>
        </Card>
    );
}

function RenderComments({comments}) { console.log(comments)
    if (comments) {
        return (
            <div className='col-md-12 m-1'>
            <h4 className="">Bio</h4>
            {comments.map(comm => {
                return (<div className=""> 
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

function RenderVideo({item}) {
    return (
        <Card className='player-wrapper'>
            <ReactPlayer className='react-player border border-white' url='https://youtu.be/UDQduVIXyKI?t=32' width='100%'
          height='100%' controls/>
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

function RenderGig({item}) {
    return (
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardText>Our Next Show</CardText>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

function Home(props) {
    return (
        <div className="container-fluid home">

            <div className="row">
                <div className="col-md m-1">
                    <RenderCard comments = {props.comments} item={props.member} />

                </div>
                <div className="col-md m-1">
                    <RenderGig item={props.partner} />
                </div>
                
            </div>
            <div className="row">
                <div className="col-md m-1">
                    <RenderVideo item={props.promotion} />
                </div>
            </div>
        </div>
    );
}

export default Home; 