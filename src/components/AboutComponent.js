import React from 'react';
import { Button, Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';




function About(props) {

    function RenderPartner({partner}) {
        if (partner) {
            return (
                <React.Fragment>
                    <Media object src={partner.image} alt={partner.name} width="150" />
                    <Media body className="ml-5 mb-4">
                        <Media heading>
                            {partner.name}
                        </Media>
                        {partner.description}
                    </Media>
                </React.Fragment>
            );
        }
        return <div></div>;
    }

    const partners = props.partners.map(partner => {
        return (
            <Media tag ="li" key={partner.id}>
            <RenderPartner partner={partner} />
        </Media>
        );
    });

    return (
        <div className="container-fluid home">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>About Us</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>About Us</h2>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-sm-6">
                    <h3 className="text-white">Band Style</h3>
                    <p className = "text-light">Somewhere between the edge of rock, the artistry of jam bands and the groove of funk lies MIDLIFE, a four piece instrumental band from Minneapolis, Minnesota. MIDLIFE is not new to the scene. Each of the band's’ members have been working musicians in Minnesota for years. In fact we have over 100 years of accumulated experience in the local music scene!</p>
                </div>
                <div className="col-sm-6">
                    <Card>
                        <CardHeader className="bg-secondary text-white"><h3>Band Facts At a Glance</h3></CardHeader>
                        <CardBody className='text-dark'>
                            <dl className="row">
                                <dt className="col-6">Founded</dt>
                                <dd className="col-6">February 3, 2017</dd>
                                <dt className="col-6">Number of Gigs</dt>
                                <dd className="col-6">46</dd>
                                <dt className="col-6">Previous Band Members</dt>
                                <dd className="col-6">Stu Nankin - Bass<br />Dean St. Germain - Bass</dd>

                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col">
                    <Card className="bg-light mt-3">
                        <CardBody>
                            <blockquote className="blockquote">
                                <p className="mb-0 text-dark">Funkers are people who dig the funk; Little funkers, Big funkers, Old funkers, Young funkers, Foxy funkers, Mother funkers, Papa funkers.</p>
                                <footer className="blockquote-footer">Rick James,{' '}
                                    <cite title="Source Title">FaceBook post by Rick James from Jul 15, 2013</cite>
                                </footer>
                                <p className="mb-0 text-dark">Funk is the absence of any and everything you can think of, but the very essence of all that is. And saying that, I'm saying funk is anything that we create in our minds that we want to do, what we want to be, but we don't have the resources..</p>
                                <footer className="blockquote-footer">Bootsy Collins,{' '}
                                    <cite title="Source Title">"Bootsy Collins Brings Back The Funk". "Tell Me More" with Michel Martin, www.npr.org. May 19, 2011</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>

        </div>
    );
}

export default About;