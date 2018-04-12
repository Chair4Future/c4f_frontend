import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import './ContactUs.css';
import FontAwesome from 'react-fontawesome'

class ContactUs extends Component {
  render() {
    const MyMapComponent = withScriptjs(withGoogleMap((props) =>
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 39.6003075, lng: -8.3928514 }}
      >
        {props.isMarkerShown && <Marker position={{ lat: 39.6003075, lng: -8.3928514 }} />}
      </GoogleMap>
    ))

    return (
      <section id="contacts">
        <div className="contacts-background">
          <div className="contacts-wrapper">
              <div className="title-h1">Contact Us</div>
              <div className="contacts-container">
                <div className="contacts-map">
                  <MyMapComponent
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAF2mT0wy3zICKhNKgJdKbOQz5BRvMrfbY&callback=initMap"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                  />
                </div>
                <div className="contacts-information">
                  <div className="contacts-information-fields">
                  <FontAwesome name='map-pin' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', fontSize:"20px", marginRight:12+"px" }} />
                   <label> Quinta do Contador-Estrada da Serra</label><br /><label style={{marginLeft:"8%"}}>2300-313 Tomar - Portugal</label>
                  </div>
                  <div className="contacts-information-fields">
                  <FontAwesome name='phone' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', fontSize:"20px", marginRight:12+"px" }} />
                    Telefone: +351 249 328 100
                  </div>
                  <div className="contacts-information-fields">
                  <FontAwesome name='print' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', fontSize:"20px", marginRight:12+"px"  }} />
                    Fax: +351 249 328 186
                  </div>
                  <div className="contacts-information-fields">
                  <FontAwesome name='at' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', fontSize:"20px", marginRight:12+"px"  }} />
                    Email: <a><u>blalvalsd</u></a>
                  </div>

                  {/*<div className="contacts-form-information-inputs">
                    <b>Or send a ticket to us:</b>
                    <div className="contacts-form-information-inputs-information">
                      <label for="fname">First Name</label>
                      <input id="fname" type="text" disabled/>
                      <label for="fname">Last Name</label>
                      <input id="fname" type="text" disabled/>
                      <label for="fname">Email</label>
                      <input id="fname" type="text" disabled/>
                    </div>
    </div>*/}
                </div>
              </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactUs;
