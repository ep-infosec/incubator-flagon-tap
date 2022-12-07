// Licensed to the Apache Software Foundation (ASF) under one or more
// contributor license agreements.  See the NOTICE file distributed with
// this work for additional information regarding copyright ownership.
// The ASF licenses this file to You under the Apache License, Version 2.0
// (the "License"); you may not use this file except in compliance with
// the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import Profile from './Profile';

class UserProfile extends Component {
  render () {
    const { email, orgs, apps } = this.props;

    return (
      <div className='ui text container'>
        <div className='ui vertical basic page segment'>
          <div className='ui large header'>
            {`${email}'s Profile`}
          </div>
        </div>

        <Profile feed={['a', 1, 'c']} firstSide={orgs} firstType={'org'} secondSide={apps} secondType={'app'} />
      </div>
    );
  }
}

UserProfile.propTypes = {
  email : PropTypes.string,
  orgs : PropTypes.array,
  apps : PropTypes.array,
};

export default UserProfile;
