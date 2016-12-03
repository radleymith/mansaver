import React from 'react';
import FlatButton from 'material-ui/FlatButton';

const styles = {
    button: {
        color: 'white'
    }
}
const HeaderLayout = () => {
    return (
        <div>
            <FlatButton label="About" style={styles.button} />
            <FlatButton label="What to Expect" style={styles.button} />
            <FlatButton label="Register" style={styles.button} />
            <FlatButton label="Login" style={styles.button} />
        </div>
    );
}

export default HeaderLayout;