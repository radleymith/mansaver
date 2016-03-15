import React from 'react';
import DocumentTitle from 'react-document-title';
import { UserComponent } from 'react-stormpath';

class ProfilePage extends UserComponent {
  render() {
    let givenName, surname, account;

    if (this.state.user.account) {
      account = this.state.user.account;
      givenName = account.givenName;
      surname = account.surname;
    }

    return (
      <DocumentTitle title={`My Profile`}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h3>My Profile</h3>
              <hr />
            </div>
          </div>
          <div className="row">
            <ul className="list-group">
              <li className="list-group-item">
                <strong>First Name</strong>
                <span className="pull-right">{ givenName }</span>
              </li>
              <li className="list-group-item">
                <strong>Last Name</strong>
                <span className="pull-right">{ surname }</span>
              </li>
            </ul>
          </div>
        </div>
      </DocumentTitle>
    );
  }
};

export default ProfilePage;