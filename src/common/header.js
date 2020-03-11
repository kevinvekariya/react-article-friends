import React, {useState} from 'react'
import {Menu, Segment} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom';

function Header(props) {
    let [activeItem, setActiveItem] = useState(props.location.pathname.split("/")[1]);
    const handleItemClick = (e, {name}) => {
        setActiveItem(name);
        if (name === 'home') {
            props.history.push('/home')
        } else {
            props.history.push('/friends')
        }
    };

    return (
        <Segment inverted>
            <Menu inverted secondary>
                <Menu.Item header>Articles</Menu.Item>
                <div className='menuWrap'>
                <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='friends'
                    active={activeItem === 'friends'}
                    onClick={handleItemClick}
                />
                </div>
            </Menu>
        </Segment>
    )
}

export default withRouter(Header)
