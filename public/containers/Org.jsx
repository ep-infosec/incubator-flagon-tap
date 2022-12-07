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
import { connect } from 'react-redux';

class Org extends Component {
  render() {
    const { children, id, name, description, users, apps, settings } = this.props;

    return (
      <div>
        {React.cloneElement(children, {
          id,
          name,
          description,
          users,
          apps,
          settings,
        })}
      </div>
    );
  }
}

Org.propTypes = {
  id : PropTypes.number,
  name : PropTypes.string,
  description : PropTypes.string,
  users : PropTypes.array,
  apps : PropTypes.array,
  settings : PropTypes.object,
};

function mapStateToProps(state, ownProps) {
  return {
    id : state.org.id,
    name : state.org.name,
    description : state.org.description,
    users : state.org.users,
    apps : state.org.apps,
    settings : state.org.settings,
  };
}

export default connect(mapStateToProps)(Org);
