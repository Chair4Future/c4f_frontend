import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import { inject, observer } from "mobx-react";

import "./OrganizationProfile.css";
import Container from "../../../components/Container/Container";
import { client, configs } from "../../../configs/axios";

@inject("user")
@observer
export default class OrganizationProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: undefined,
      id: this.props.user.organization
    };
  }

  async componentDidMount() {
    try {
      const response = await client.get("/company/" + this.state.id);
      console.log(response);

      if (response.status === 200) {
        this.setState({ data: response.data.company });
      }
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <Banner
          style={
            data &&
            data.banner && {
              backgroundImage:
                "url('" + configs.baseURL + "file/" + data.banner + "')"
            }
          }
        />
        <div className="pure-g" style={{ marginBottom: "5%" }}>
          <OrganizationSidebar organization={this.state.data} />
          <OrganizationContainer
            data={data && data.Websections && data.Websections}
          />
        </div>
      </div>
    );
  }
}

const OrganizationContainer = props => {
  return (
    <div
      className="organization-profile-container pure-u-md-17-24 pure-u-lg-18-24"
      style={{ paddingRight: "10%", paddingLeft: "3%" }}
    >
      {props.data &&
        props.data.map(item => (
          <Container
            title={item.title}
            key={item.id}
            color="blue"
            noPadding={true}
          >
            <div>{item.text}</div>
          </Container>
        ))}
    </div>
  );
};

const OrganizationSidebar = ({ organization, ...props }) => {
  console.log(organization);
  return (
    <div
      className="pure-u-md-7-24 pure-u-lg-6-24"
      style={{ position: "relative" }}
    >
      <div className="organization-profile-sidebar">
        <div className="profile-sidebar-wrapper">
          <div className="profile-sidebar-main">
            <div className="organization-img">
              <img
                src={
                  organization &&
                  organization.logo &&
                  configs.baseURL + "file/" + organization.logo
                }
                alt=""
              />
            </div>
            <div className="profile-sidebar-main-info">
              <div className="profile-name">
                {organization && organization.name}
              </div>
              <div className="profile-role">1,230 followers</div>
              <hr style={{ marginBottom: "10px" }} />

              <div className="profile-local" style={{ marginBottom: "10px" }}>
                Tomar, Portugal
              </div>
              <div
                className="profile-button-connect"
                style={{ marginBottom: "20px" }}
              >
                <button className="cf-button blue">
                  <FontAwesome
                    name="link"
                    className="cf-icon"
                    style={{ color: "#fff", paddingRight: 5 + "px" }}
                  />
                  <span>Follow</span>
                </button>
              </div>

              <InfoField
                title="Bussiness Areas"
                text="Social Network, Internet, Software"
              />
              <InfoField
                title="Employees"
                text={organization && organization.collaborators}
              />
              <InfoField
                title="Website"
                text={organization && organization.website}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const InfoField = props => {
  return (
    <div className="cf-info-field">
      <div className="cf-info-field-title">{props.title}</div>
      <div className="cf-info-field-text">{props.text}</div>
    </div>
  );
};

const Banner = props => {
  return <div className="profile-banner" {...props} />;
};
