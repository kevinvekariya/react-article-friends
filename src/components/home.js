import React, {useState} from 'react';
import './home.css';
import {Card, Grid, Image} from 'semantic-ui-react'
import Articles from './../helper/articles';
import Button from '../common/button';

const Home = () => {
    let [showMoreBtn, setShowMoreBtn] = useState(false);
    let [buttonId, setButtonId] = useState(0);

    const handleShowMore = (id) => {
        setShowMoreBtn(true);
        setButtonId(id)
    };

    const handleClose = () => {
        setShowMoreBtn(false);
        setButtonId(0)
    };

    return (
            <Grid divided className={'mainGrid'}>
                <Grid.Row>
                    {
                        Articles.map((item, index) => {
                            return(
                                <div key={index+item.id} className='cardStyle'>
                                    <Card>
                                        <Card.Content>
                                            <div className="articlesImg">
                                            <Image
                                                className='imageSize'
                                                src={item.image}
                                            />
                                            </div>
                                            <Card.Header>{item.name}</Card.Header>
                                            <Card.Meta>{item.title}</Card.Meta>
                                            {
                                                (showMoreBtn && buttonId === item.id) ?  <Card.Description>
                                                    {item.description}
                                                </Card.Description> : null
                                            }
                                        </Card.Content>
                                        <Card.Content extra>
                                            <Button title={(buttonId === item.id && showMoreBtn) ? 'Hide' : 'Show'}
                                                    onClick={() => (buttonId === item.id && showMoreBtn) ? handleClose() : handleShowMore(item.id)}
                                                    show={showMoreBtn}/>
                                        </Card.Content>
                                    </Card>
                                </div>
                            )
                        })
                    }
                </Grid.Row>
            </Grid>
    )
};

export default Home;
