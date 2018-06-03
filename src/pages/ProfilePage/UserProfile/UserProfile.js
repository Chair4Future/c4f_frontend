import React from "react";
import Container from "./../../../components/Container/Container";
import FontAwesome from "react-fontawesome";
import axios, { configs } from "../../../configs/axios";
import "./UserProfile.css";
import { InfoField } from "../OrganizationProfile/OrganizationProfile";

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: undefined
    };
    this.updateSkills = this.updateSkills.bind(this);
  }

  async componentWillMount() {
    const response = await axios.get("/my/profile");
    console.log(response.data);
    if (response.status === 200)
      this.setState({
        userData: response.data.profile
      });
  }

  updateSkills(newSkill) {
    this.setState({
      userData: {
        ...this.state.userData,
        skills: [...this.state.userData.skills, newSkill]
      }
    });
  }

  render() {
    const { userData } = this.state;
    return (
      <div className="pure-g">
        <div className="profile-sidebar pure-u-1 pure-u-md-7-24 pure-u-lg-6-24">
          <ProfileSidebar userData={userData} />
        </div>
        <div className="profile-content pure-u-1 pure-u-md-17-24 pure-u-lg-18-24">
          <div className="profile-content-wrapper">
            <ProfileTextContainer
              title={"Summary"}
              icon="cog"
              className="pure-u-md-12-24"
              description={userData && userData.description}
            />

            <Container title={"Current position"} className="pure-u-md-12-24">
              <CompanyItem
                companyRole="Frontend Developer"
                company="Chair4Future"
                local="Tomar, Santarém, Portugal"
                timelapse="May 2018 - Present"
                image={
                  configs.baseURL +
                  "file/" +
                  "288f24a0-2b81-41c6-bbc0-8faece1d437f.png"
                }
              />
            </Container>

            <ProfileSkillsContainer
              title={"Skills"}
              icon="plus"
              className="pure-u-md-12-24"
              userskills={userData && userData.skills}
              UpdateSkills={this.updateSkills}
            />

            <Container
              title={"Experience"}
              icon="ellipsis-h"
              className="pure-u-md-12-24"
            >
              <ExperienceItem
                companyRole="Frontend Developer"
                company="Chair4Future"
                local="Tomar, Santarém, Portugal"
                timelapse="May 2018 - Present"
                image={
                  configs.baseURL +
                  "file/" +
                  "288f24a0-2b81-41c6-bbc0-8faece1d437f.png"
                }
              />
              <ExperienceItem
                companyRole="Student"
                company="Instituto Politécnico De Tomar"
                local="Tomar, Santarém, Portugal"
                timelapse="September 2017 - May 2018"
                image={
                  configs.baseURL +
                  "file/" +
                  "47a031fb-e8e6-4aed-93f4-0059b8444263.jpeg"
                }
              />
            </Container>
          </div>
          {/* <button onClick={() => history.push('/organization')}>Add Organization</button> */}
        </div>
      </div>
    );
  }
}
class ProfileSkillsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      name: "",
      level: 1
    };
  }

  _onChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    });
  };

  _closeEdit = () => {
    console.log("close");
    this.setState({ edit: false });
  };

  _saveEdit = async () => {
    //call à api com o texto
    const response = await axios.post("/my/skill", {
      name: this.state.name,
      level: this.state.level
    });
    console.log(response.data);
    if (response.status === 200)
      this.props.UpdateSkills({
        name: this.state.name,
        level: this.state.level
      });

    //reset
    this.setState({ name: "", level: 1 });
  };

  _changeToEdit = () => {
    this.setState((prevState, props) => {
      return { edit: !prevState.edit };
    });
  };

  render() {
    const { edit, name, level } = this.state;

    return (
      <Container {...this.props} icon={"cog"} onIconClick={this._changeToEdit}>
        <div className="profile-skills-container">
          {edit && (
            <ProfileSkillForm
              name={name}
              level={level}
              onChange={this._onChange}
              onSave={this._saveEdit}
              onClose={this._closeEdit}
            />
          )}

          <div className="profile-skills-list">
            {this.props.userskills &&
              this.props.userskills.map(item => (
                <SkillItem
                  name={item.name}
                  level={item.level}
                  key={item.name}
                />
              ))}
          </div>
        </div>
      </Container>
    );
  }
}
const ProfileSkillForm = props => {
  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <input
        style={{ marginRight: "1%" }}
        placeholder="Skill name"
        name="name"
        className="input-form"
        onChange={e => props.onChange(e)}
        value={props.name}
      />
      <select
        style={{ marginRight: "7%" }}
        className="input-form"
        name="level"
        onChange={e => props.onChange(e)}
        value={props.level}
      >
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
      <button className="cf-button-icon exit" onClick={() => props.onClose()}>
        <FontAwesome name="times" className="cf-icon" />
      </button>
      <button className="cf-button-icon save" onClick={() => props.onSave()}>
        <FontAwesome name="check" className="cf-icon" />
      </button>
    </div>
  );
};
const SkillItem = props => {
  return (
    <div className="cf-skill-label">
      <div className="cf-skill-label-level">{props.level}</div>
      <div className="cf-skill-label-name">{props.name}</div>
    </div>
  );
};

class ProfileTextContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      tempText: undefined,
      text: undefined
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps);
    if (nextProps.description != null && prevState.text == null) {
      return { text: nextProps.description, tempText: nextProps.description };
    }
    return null;
  }

  _editButtons = (
    <div>
      <button className="cf-button-icon exit" onClick={() => this._closeEdit()}>
        <FontAwesome name="times" className="cf-icon" />
      </button>
      <button className="cf-button-icon save" onClick={() => this._saveEdit()}>
        <FontAwesome name="check" className="cf-icon" />
      </button>
    </div>
  );

  _onChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    });
  };

  _closeEdit = () => {
    console.log("close");
    this.setState((prevState, props) => {
      return { edit: false, tempText: prevState.text };
    });
  };

  _saveEdit = () => {
    console.log("save");
    //call à api com o texto
    this.setState({ edit: false });
  };

  _changeToEdit = () => {
    console.log("ola");
    this.setState((prevState, props) => {
      return { edit: !prevState.edit };
    });
  };

  render() {
    const { edit, text, tempText } = this.state;
    return (
      <Container
        {...this.props}
        icons={edit ? this._editButtons : null}
        onIconClick={this._changeToEdit}
      >
        {edit ? (
          <textarea
            className="cf-profile-textarea"
            cols="30"
            rows="4"
            name="tempText"
            value={tempText}
            onChange={e => this._onChange(e)}
          />
        ) : (
          <div onClick={this._changeToEdit}>{text}</div>
        )}
      </Container>
    );
  }
}

const ProfileSidebar = props => {
  return (
    <div className="profile-sidebar-wrapper">
      <div className="profile-sidebar-main">
        <div className="profile-sidebar-img">
          <div
            style={
              props.userData &&
              props.userData.photo && {
                backgroundImage:
                  "url('" +
                  configs.baseURL +
                  "file/" +
                  props.userData.photo +
                  "')"
              }
            }
          />
        </div>
        <div className="profile-sidebar-main-info">
          <div className="profile-name">
            {props.userData && props.userData.name}
          </div>
          <div className="profile-role">Developer</div>
          <div className="profile-local">
            {props.userData &&
              props.userData.city + ", " + props.userData.country_code}
          </div>
        </div>
        <div className="profile-sidebar-contacts" />
      </div>
      <div className="profile-sidebar-following">
        <InfoField title="Email" text="chair4future@c4f.pt" />
        <InfoField title="Website" text="www.chair4future.com" />
      </div>
    </div>
  );
};

const ExperienceItem = props => {
  return (
    <div className="experience-item">
      <div className="experience-node-wrapper">
        <div className="experience-node">
          <div className="experience-node-line" />
          <i className="fas fa-genderless experience-node-icon" />
          {/* <FontAwesome className="experience-node-icon" name="genderless" /> */}
        </div>
      </div>
      <CompanyItem {...props} />
    </div>
  );
};

const CompanyItem = props => {
  return (
    <div className="company-item">
      <div className="company-content">
        <div className="company-header">
          <span>{props.companyRole} at </span>
          <span className="company">{props.company}</span>
        </div>
        <ItemWithIcon icon="map-marker" text={props.local} />
        <ItemWithIcon icon="calendar-alt" text={props.timelapse} />
      </div>
      <div className="company-image">
        <div style={{ backgroundImage: 'url("' + props.image + '")' }} />
      </div>
    </div>
  );
};

const ItemWithIcon = props => {
  return (
    <div className="cf-item-w-icon">
      <div className="cf-item-icon">
        <FontAwesome name={props.icon} className="cf-icon" />
      </div>
      <div className="cf-item-text">{props.text}</div>
    </div>
  );
};
