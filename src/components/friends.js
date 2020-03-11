import React, {useState} from 'react';
import {Card, Image} from 'semantic-ui-react';
import UserDetails from '../helper/userDetails';
import Modal from '../common/modal';
import { Grid, GridRow} from 'semantic-ui-react';
import '../components/home.css';

const Friends = () => {
    let [modalVisible, setModalVisible] = useState(false);
    let [selectedItem, setSelectedItem] = useState({
        id: "",
        name: "",
        age: "",
        image: ""
    });

    const handleCardClick = (item) => {
        setModalVisible(true);
        setSelectedItem(item);
    };

    return (
        <Grid style={{display: 'flex', flexWrap: 'wrap', margin: 20, padding: 20}}>
            <Modal selectedItem={selectedItem} modalVisible={modalVisible} onClose={() => setModalVisible(false)}/>
            <GridRow horizontal>{
                UserDetails.map((item, index) => {
                    return(
                        <div key={index+item.id} style={{margin: '10px'}}>
                            <Card  onClick={() => handleCardClick(item)} className={'cardImg'}>
                                <Image src={item.image} wrapped/>
                                <div className='imageLayout'>{item.name}</div>
                            </Card>
                        </div>
                    )
                })
            }
            </GridRow>
        </Grid>
    );
};

export default Friends;
