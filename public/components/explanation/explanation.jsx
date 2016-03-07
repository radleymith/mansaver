import React from 'react';

const Explanation = React.createClass({
        render: function () {
            return (
                <div id="explanation-text" className="front-page-text">
                    We know that you are busy.  We also know that you are human, and humans forget things.  
                    We at GiftMinder are here to help make sure you at least do not forget to have a gift,
                    when you need one.  Simply <link href="#">subscribe</link> to our service, and we will provide 
                    you with a gift a week ahead of when you think you will need one.
                </div>
            );
        }
    });

export default Explanation;