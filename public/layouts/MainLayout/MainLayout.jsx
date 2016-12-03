import React from 'react';
import AppBar from 'material-ui/AppBar';
import HeaderLayout from '../HeaderLayout/HeaderLayout.jsx';


const MainLayout = (props) => {
    return (
        <div>
            <div className='header-container'>
                <AppBar
                    title="ForGiftfulsfgse"
                    showMenuIconButton={false}
                    iconElementRight={<HeaderLayout />} />
            </div>
            <div className='content-container'>
                {props.children}
            </div>
        </div>
    );
}

export default MainLayout;